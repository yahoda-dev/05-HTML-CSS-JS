import { useEffect, useRef, useState } from 'react'

function Compare() {
  const [stateCount, setStateCount] = useState(0)
  const refCount = useRef(0)
  let varCount = 0
  const [message, setMessage] = useState('')

  return (
    <div className="box stack">
      <h3>① 일반 변수 vs useRef vs useState</h3>
      <div className="row">
        <button
          className="btn"
          onClick={() => {
            varCount += 1
            setMessage(`일반 변수 = ${varCount}`)
          }}
        >
          변수 +1
        </button>
        <button
          className="btn"
          onClick={() => {
            refCount.current += 1
            setMessage(`ref.current = ${refCount.current} (화면은 그대로였지만 값은 기억하고 있다)`)
          }}
        >
          ref +1
        </button>
        <button className="btn primary" onClick={() => setStateCount(stateCount + 1)}>
          state +1 (리렌더링)
        </button>
      </div>
      <p>
        state: <b>{stateCount}</b>
      </p>
      <p className="hint">{message || '버튼을 눌러 보세요. 변수는 매번 1, ref는 계속 증가한다.'}</p>
    </div>
  )
}

function Stopwatch() {
  const [startTime, setStartTime] = useState(null)
  const [now, setNow] = useState(null)
  const intervalRef = useRef(null)

  function handleStart() {
    clearInterval(intervalRef.current)
    setStartTime(Date.now())
    setNow(Date.now())
    intervalRef.current = setInterval(() => setNow(Date.now()), 10)
  }

  function handleStop() {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  useEffect(() => () => clearInterval(intervalRef.current), [])

  const seconds = startTime && now ? (now - startTime) / 1000 : 0

  return (
    <div className="box stack">
      <h3>② 스톱워치 — setInterval id를 useRef에 보관</h3>
      <p className="big-number">{seconds.toFixed(2)}초</p>
      <div className="row">
        <button className="btn primary" onClick={handleStart}>
          시작
        </button>
        <button className="btn" onClick={handleStop}>
          정지
        </button>
      </div>
      <p className="hint">
        id를 state에 두면 쓸데없는 리렌더링이, 일반 변수에 두면 다음 렌더링 때 잃어버린다 → ref가 정답
      </p>
    </div>
  )
}

export default function UseRefValue() {
  return (
    <div className="stack">
      <Compare />
      <Stopwatch />
    </div>
  )
}
