import './02-7_plain-a.css'
import './02-7_plain-b.css'
import stylesA from './02-7_CardA.module.css'
import stylesB from './02-7_CardB.module.css'

function PlainA() {
  return <p className="title">A: 파란색이어야 하는데…</p>
}

function PlainB() {
  return <p className="title">B: 빨간색</p>
}

function ModuleA() {
  return (
    <div className={stylesA.card}>
      <p className={stylesA.title}>A: 파란색 (CardA.module.css)</p>
    </div>
  )
}

function ModuleB() {
  return (
    <div className={`${stylesB.card} ${stylesB.isActive}`}>
      <p className={stylesB.title}>B: 빨간색 (CardB.module.css)</p>
    </div>
  )
}

function ProgressBar() {
  const percent = 65

  return (
    <div style={{ background: '#eceff3', borderRadius: 99, height: 14 }}>
      <div
        style={{
          width: `${percent}%`,
          height: '100%',
          borderRadius: 99,
          background: 'var(--accent)',
        }}
      />
    </div>
  )
}

export default function Styling() {
  return (
    <div className="stack">
      <div className="box">
        <h3>① 일반 CSS — 클래스 이름 충돌</h3>
        <PlainA />
        <PlainB />
        <p className="hint">
          두 파일 모두 <code>.title</code>을 정의해서 A까지 빨간색이 됐다.
        </p>
      </div>

      <div className="box">
        <h3>② CSS Modules — 충돌 없음</h3>
        <div className="stack">
          <ModuleA />
          <ModuleB />
        </div>
        <p className="hint" style={{ marginTop: 8 }}>
          F12로 보면 실제 클래스 이름: <code>{stylesA.title}</code>,{' '}
          <code>{stylesB.title}</code>
        </p>
      </div>

      <div className="box">
        <h3>③ 인라인 style — 동적인 값</h3>
        <ProgressBar />
      </div>
    </div>
  )
}
