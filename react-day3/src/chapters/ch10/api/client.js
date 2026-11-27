import axios from "axios";
import useApiLogStore from "./useApiLogStore";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
});

client.interceptors.request.use((config) => {
  const { token, addLog } = useApiLogStore.getState();

  if (token) config.headers.Authorization = `Bearer ${token}`;

  config.startedAt = Date.now();
  addLog(
    `📤 ${config.method.toUpperCase()} ${config.url}${token ? "  🔑 토큰 붙임" : ""}`,
  );

  return config;
});

client.interceptors.response.use(
  (response) => {
    const ms = Date.now() - response.config.startedAt;
    useApiLogStore
      .getState()
      .addLog(`✅ ${response.status} ${response.config.url} (${ms}ms)`);
    return response;
  },
  (error) => {
    const status = error.response?.status;
    if (status === 404) error.userMessage = "요청한 데이터가 없어요 (404)";
    else if (status === 401) error.userMessage = "로그인이 필요해요 (401)";
    else if (status) error.userMessage = `서버 오류가 났어요 (${status})`;
    else
      error.userMessage = "서버에 연결할 수 없어요. 인터넷 연결을 확인하세요";

    useApiLogStore
      .getState()
      .addLog(
        `❌ ${status ?? "응답 없음"} ${error.config?.url} → ${error.userMessage}`,
      );
    return Promise.reject(error);
  },
);

export default client;
