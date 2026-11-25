import { useState } from 'react'

function FruitButton({ name, onSelect }) {
  return (
    <button className="btn" onClick={() => onSelect(name)}>
      {name}
    </button>
  )
}

export default function EventHandler() {
  const [selected, setSelected] = useState('')
  const [log, setLog] = useState('')

  function handleSelect(fruit) {
    setSelected(fruit)
  }

  function handleLinkClick(e) {
    e.preventDefault()
    setLog('링크 기본 동작(이동)을 막았다')
  }

  function handleParentClick() {
    setLog('부모 상자가 클릭됨 (버블링)')
  }

  function handleChildClick(e) {
    e.stopPropagation()
    setLog('자식 버튼만 클릭됨 (전파 중단)')
  }

  return (
    <div className="stack">
      <div className="box">
        <h3>인자 넘기기 + 핸들러를 props로 전달</h3>
        <div className="row">
          <FruitButton name="🍎 사과" onSelect={handleSelect} />
          <FruitButton name="🍌 바나나" onSelect={handleSelect} />
          <FruitButton name="🍇 포도" onSelect={handleSelect} />
        </div>
        <p style={{ marginTop: 8 }}>선택: {selected || '없음'}</p>
      </div>

      <div className="box">
        <h3>e.preventDefault()</h3>
        <a href="https://react.dev" onClick={handleLinkClick}>
          react.dev로 이동하는 링크 (클릭해도 이동하지 않음)
        </a>
      </div>

      <div className="box" onClick={handleParentClick} style={{ cursor: 'pointer' }}>
        <h3>e.stopPropagation() — 상자(부모)를 클릭해 보고, 버튼(자식)도 클릭해 보자</h3>
        <button className="btn primary" onClick={handleChildClick}>
          자식 버튼
        </button>
      </div>

      <p>📋 로그: {log || '-'}</p>
    </div>
  )
}
