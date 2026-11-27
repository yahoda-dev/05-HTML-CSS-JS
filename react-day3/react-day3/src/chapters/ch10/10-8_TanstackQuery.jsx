import { useEffect, useState } from 'react'
import axios from 'axios'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

async function fetchUsers(signal) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await axios.get(`${BASE_URL}/users`, { signal })
  return response.data
}

function UsersWithEffect() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        const data = await fetchUsers(controller.signal)
        setUsers(data)
      } catch (err) {
        if (axios.isCancel(err)) return
        setError(err.message)
      } finally {
        if (!controller.signal.aborted) setIsLoading(false)
      }
    }
    load()

    return () => controller.abort()
  }, [])

  if (isLoading) return <p className="hint">⏳ 불러오는 중…</p>
  if (error) return <p className="bad">❌ {error}</p>
  return <UserList users={users} />
}

function UsersWithQuery() {
  const { data, isPending, error, isFetching } = useQuery({
    queryKey: ['users'],
    queryFn: ({ signal }) => fetchUsers(signal),
  })

  if (isPending) return <p className="hint">⏳ 불러오는 중…</p>
  if (error) return <p className="bad">❌ {error.message}</p>
  return (
    <>
      {isFetching && <p className="hint">🔄 캐시를 먼저 보여 주고, 뒤에서 새로 확인하는 중</p>}
      <UserList users={data} />
    </>
  )
}

function UserList({ users }) {
  return (
    <ol>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ol>
  )
}

const queryClient = new QueryClient()

export default function TanstackQuery() {
  const [show, setShow] = useState(true)

  return (
    <QueryClientProvider client={queryClient}>
      <div className="stack">
        <div className="row">
          <button className="btn primary" onClick={() => setShow(!show)}>
            {show ? '숨기기' : '보이기'}
          </button>
          <span className="hint">← 숨겼다가 다시 보이게 해 보세요</span>
        </div>

        <div className="row" style={{ alignItems: 'flex-start' }}>
          <div className="box" style={{ flex: 1, minWidth: 260 }}>
            <h3>① useEffect 버전</h3>
            <p className="hint">state 3개 + useEffect + AbortController</p>
            {show && <UsersWithEffect />}
          </div>
          <div className="box" style={{ flex: 1, minWidth: 260 }}>
            <h3>② useQuery 버전</h3>
            <p className="hint">useQuery 한 번</p>
            {show && <UsersWithQuery />}
          </div>
        </div>

        <div className="note">
          <h3>👉 확인해 보세요</h3>
          <ul>
            <li>다시 보이게 하면 ①은 또 1초 기다리지만, ②는 캐시에 있던 목록이 바로 나온다</li>
            <li>코드 보기 탭에서 두 컴포넌트의 길이를 비교해 보세요. 하는 일은 같다</li>
            <li>오후 react-blog은 useEffect + Custom Hook으로 만든다 → 도전 과제: AI에게 TanStack Query로 바꿔 달라고 하고 검증하기</li>
          </ul>
        </div>
      </div>
    </QueryClientProvider>
  )
}
