import { useState } from 'react'

function LoginPanel({ isLoggedIn, onLogin, onLogout }) {
  if (!isLoggedIn) {
    return (
      <div className="row">
        <span>로그인이 필요합니다.</span>
        <button className="btn primary" onClick={onLogin}>
          로그인
        </button>
      </div>
    )
  }

  return (
    <div className="row">
      <span>👋 김리액트님 환영합니다!</span>
      <button className="btn" onClick={onLogout}>
        로그아웃
      </button>
    </div>
  )
}

function Grade({ score }) {
  let result
  if (score >= 90) result = <b className="good">A 🎉</b>
  else if (score >= 70) result = <b>B</b>
  else result = <b className="bad">C 😢</b>

  return <p>점수 {score}점 → 등급: {result}</p>
}

export default function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [score, setScore] = useState(80)

  return (
    <div className="stack">
      <div className="box">
        <h3>① if + early return</h3>
        <LoginPanel
          isLoggedIn={isLoggedIn}
          onLogin={() => setIsLoggedIn(true)}
          onLogout={() => setIsLoggedIn(false)}
        />
      </div>

      <div className="box">
        <h3>② 삼항 연산자 / ③ && 연산자</h3>
        <div className="row">
          <button className="btn" onClick={() => setCartCount(cartCount + 1)}>
            장바구니 담기
          </button>
          <button className="btn" onClick={() => setCartCount(0)}>
            비우기
          </button>
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </div>
        <p style={{ marginTop: 8 }}>
          {cartCount === 0 ? '장바구니가 비어 있습니다.' : `${cartCount}개 상품이 담겨 있습니다.`}
        </p>

        <p className="hint">
          ⚠️ <code>{'{cartCount && <span>…</span>}'}</code> 처럼 쓰면 cartCount가 0일 때
          화면에 <b>0</b>이 나온다 → <code>{'cartCount > 0 &&'}</code> 처럼 불리언으로 만들자.
          지금 값으로 실험: [{cartCount && <span>뱃지</span>}]
        </p>
      </div>

      <div className="box">
        <h3>④ 변수에 JSX 담기</h3>
        <input
          type="range"
          min={0}
          max={100}
          value={score}
          onChange={(e) => setScore(Number(e.target.value))}
        />
        <Grade score={score} />
      </div>
    </div>
  )
}
