import { useState } from 'react'

export default function FunctionalUpdate() {
  const [wrong, setWrong] = useState(0)
  const [right, setRight] = useState(0)

  function handleWrong() {
    setWrong(wrong + 1)
    setWrong(wrong + 1)
    setWrong(wrong + 1)
  }

  function handleRight() {
    setRight((prev) => prev + 1)
    setRight((prev) => prev + 1)
    setRight((prev) => prev + 1)
  }

  return (
    <div className="stack">
      <div className="row" style={{ alignItems: 'stretch' }}>
        <div className="box" style={{ flex: 1 }}>
          <h3 className="bad">✕ setWrong(wrong + 1) × 3</h3>
          <p className="big-number">{wrong}</p>
          <button className="btn" onClick={handleWrong}>
            +3 하기
          </button>
        </div>

        <div className="box" style={{ flex: 1 }}>
          <h3 className="good">○ setRight(prev =&gt; prev + 1) × 3</h3>
          <p className="big-number">{right}</p>
          <button className="btn primary" onClick={handleRight}>
            +3 하기
          </button>
        </div>
      </div>

      <div className="box">
        <h3>토글에서도 함수형 업데이트</h3>
        <ToggleExample />
      </div>
    </div>
  )
}

function ToggleExample() {
  const [isOn, setIsOn] = useState(false)

  return (
    <div className="row">
      <button className="btn" onClick={() => setIsOn((prev) => !prev)}>
        {isOn ? '🔔 알림 켜짐' : '🔕 알림 꺼짐'}
      </button>
      <span className="hint">setIsOn(prev =&gt; !prev)</span>
    </div>
  )
}
