import { useState } from 'react'

const initialUser = {
  name: '김리액트',
  age: 27,
  address: {
    city: '서울',
    zip: '04524',
  },
}

export default function ObjectState() {
  const [user, setUser] = useState(initialUser)

  function handleBirthday() {
    setUser({ ...user, age: user.age + 1 })
  }

  function handleNameChange(e) {
    setUser({ ...user, name: e.target.value })
  }

  function handleMove() {
    setUser({
      ...user,
      address: { ...user.address, city: user.address?.city === '서울' ? '부산' : '서울' },
    })
  }

  function handleWrong() {
    setUser({ name: '이름만 남음' })
  }

  return (
    <div className="row" style={{ alignItems: 'flex-start' }}>
      <div className="box stack" style={{ flex: 1 }}>
        <h3>user 객체 바꾸기</h3>
        <label className="row">
          이름
          <input className="input" value={user.name} onChange={handleNameChange} />
        </label>
        <div className="row">
          <button className="btn" onClick={handleBirthday}>
            🎂 나이 +1
          </button>
          <button className="btn" onClick={handleMove}>
            🚚 이사 (중첩 객체)
          </button>
          <button className="btn" onClick={handleWrong}>
            ✕ 잘못된 업데이트
          </button>
          <button className="btn" onClick={() => setUser(initialUser)}>
            처음으로
          </button>
        </div>
        <p>
          {user.name} · {user.age ?? '?'}세 · {user.address?.city ?? '?'}
        </p>
      </div>

      <div className="box" style={{ flex: 1 }}>
        <h3>현재 state</h3>
        <div className="cmd">{JSON.stringify(user, null, 2)}</div>
      </div>
    </div>
  )
}
