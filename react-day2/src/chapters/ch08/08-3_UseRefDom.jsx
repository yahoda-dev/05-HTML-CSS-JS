import { useRef, useState } from 'react'

export default function UseRefDom() {
  const inputRef = useRef(null)
  const listRef = useRef(null)
  const firstRef = useRef(null)

  const [keyword, setKeyword] = useState('')
  const [history, setHistory] = useState([])

  function handleSearch(e) {
    e.preventDefault()
    if (!keyword.trim()) {
      inputRef.current.focus()
      return
    }
    setHistory([keyword, ...history])
    setKeyword('')
    inputRef.current.focus()
  }

  return (
    <div className="stack">
      <form className="box stack" onSubmit={handleSearch}>
        <h3>① 포커스 제어</h3>
        <div className="row">
          <input
            ref={inputRef}
            className="input"
            placeholder="검색어"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button className="btn primary">검색</button>
          <button type="button" className="btn" onClick={() => inputRef.current.focus()}>
            입력창 포커스
          </button>
          <button type="button" className="btn" onClick={() => inputRef.current.select()}>
            전체 선택
          </button>
        </div>
        <p className="hint">최근 검색: {history.join(', ') || '-'}</p>
      </form>

      <div className="box stack">
        <h3>② 스크롤 이동</h3>
        <div className="row">
          <button className="btn" onClick={() => firstRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })}>
            맨 위로
          </button>
          <button
            className="btn"
            onClick={() => listRef.current.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })}
          >
            맨 아래로
          </button>
        </div>
        <ul
          ref={listRef}
          style={{ height: 160, overflowY: 'auto', margin: 0, border: '1px solid var(--line)', borderRadius: 8 }}
        >
          {Array.from({ length: 30 }, (_, i) => (
            <li key={i} ref={i === 0 ? firstRef : undefined} style={{ padding: '2px 0' }}>
              메시지 {i + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
