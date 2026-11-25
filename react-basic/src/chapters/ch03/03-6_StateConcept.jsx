import { useState } from 'react'

function VariableCounter() {
  let count = 0

  function handleClick() {
    count = count + 1
    console.log('일반 변수 count:', count)
  }

  return (
    <div className="box" style={{ flex: 1 }}>
      <h3 className="bad">✕ 일반 변수</h3>
      <p className="big-number">{count}</p>
      <button className="btn" onClick={handleClick}>
        +1
      </button>
      <p className="hint">화면은 그대로 0. Console을 열어 보자.</p>
    </div>
  )
}

function StateCounter() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div className="box" style={{ flex: 1 }}>
      <h3 className="good">○ State</h3>
      <p className="big-number">{count}</p>
      <button className="btn primary" onClick={handleClick}>
        +1
      </button>
      <p className="hint">setCount를 호출하면 화면이 다시 그려진다.</p>
    </div>
  )
}

export default function StateConcept() {
  return (
    <div className="row" style={{ alignItems: 'stretch' }}>
      <VariableCounter />
      <StateCounter />
    </div>
  )
}
