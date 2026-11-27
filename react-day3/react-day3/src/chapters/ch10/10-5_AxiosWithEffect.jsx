import { useEffect, useState } from 'react'
import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export default function AxiosWithEffect() {
  const [userId, setUserId] = useState(1)
  const [posts, setPosts] = useState([])
  const [logs, setLogs] = useState([])

  useEffect(() => {
    const controller = new AbortController()

    async function loadPosts() {
      setLogs((prev) => [...prev, `📤 요청 시작  userId=${userId}`])
      try {
        const response = await axios.get(`${BASE_URL}/posts`, {
          params: { userId },
          signal: controller.signal,
        })
        setPosts(response.data)
        setLogs((prev) => [...prev, `✅ 도착     userId=${userId} (${response.data.length}개)`])
      } catch (error) {
        if (axios.isCancel(error)) {
          setLogs((prev) => [...prev, `🚫 취소됨   userId=${userId} (cleanup)`])
          return
        }
        setLogs((prev) => [...prev, `❌ 실패     ${error.message}`])
      }
    }
    loadPosts()

    return () => controller.abort()
  }, [userId])

  return (
    <div className="stack">
      <div className="box stack">
        <div className="row">
          <b>사용자</b>
          {[1, 2, 3, 4, 5].map((id) => (
            <button key={id} className={id === userId ? 'btn primary' : 'btn'} onClick={() => setUserId(id)}>
              {id}
            </button>
          ))}
          <span className="hint">← 빠르게 여러 번 눌러 보세요</span>
        </div>
        <div className="cmd" style={{ maxHeight: 160 }}>
          {logs.join('\n')}
        </div>
      </div>

      <div className="box">
        <h3>
          📝 {userId}번 사용자의 글 ({posts.length}개)
        </h3>
        <ol>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ol>
      </div>

      <div className="note">
        <h3>👉 확인해 보세요</h3>
        <ul>
          <li>처음 열었을 때 로그: 요청 시작이 두 번 → 첫 번째는 취소됨 → 도착 1번 (StrictMode가 effect를 한 번 더 실행해 본 것)</li>
          <li>사용자 버튼을 빠르게 누르면 이전 요청들이 "취소됨"으로 바뀌고, 마지막 사용자 결과만 남는다</li>
          <li>아직 빠진 것: 기다리는 동안 "불러오는 중", 실패했을 때 안내 → 10-6</li>
        </ul>
      </div>
    </div>
  )
}
