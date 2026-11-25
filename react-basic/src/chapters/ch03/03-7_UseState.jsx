import { useState } from 'react'

export default function UseState() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('React')
  const [isDark, setIsDark] = useState(false)

  return (
    <div className="stack">
      <div className="box">
        <h3>숫자 state</h3>
        <div className="row">
          <button className="btn" onClick={() => setCount(count - 1)}>
            -
          </button>
          <b style={{ minWidth: 40, textAlign: 'center' }}>{count}</b>
          <button className="btn" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>

      <div className="box">
        <h3>문자열 state</h3>
        <p>
          안녕하세요, <b>{name}</b>!
        </p>
        <div className="row">
          <button className="btn" onClick={() => setName('React')}>
            React
          </button>
          <button className="btn" onClick={() => setName('Vite')}>
            Vite
          </button>
          <button className="btn" onClick={() => setName('JavaScript')}>
            JavaScript
          </button>
        </div>
      </div>

      <div
        className="box"
        style={{
          background: isDark ? '#23272f' : '#fff',
          color: isDark ? '#fff' : 'inherit',
        }}
      >
        <h3>불리언 state — 토글</h3>
        <p>현재 모드: {isDark ? '🌙 다크' : '☀️ 라이트'}</p>
        <button className="btn" onClick={() => setIsDark(!isDark)}>
          모드 전환
        </button>
      </div>
    </div>
  )
}
