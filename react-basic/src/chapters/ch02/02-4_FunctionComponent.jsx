function Welcome() {
  return <h3>환영합니다! 🎉</h3>
}

const date = new Date().toLocaleDateString()

const Today = () => {
  return <p>오늘은 {date} 입니다.</p>
}

function StudyTime() {
  const hours = 8
  const days = 4
  const total = hours * days

  return (
    <p>
      하루 {hours}시간 × {days}일 = 총 <b>{total}시간</b>
    </p>
  )
}

function Nothing() {
  return null
}

export default function FunctionComponent() {
  return (
    <div className="box">
      <Welcome />
      <Today />
      <StudyTime />
      <Nothing />
      <p className="hint">⚠️ 컴포넌트 안에서 다른 컴포넌트를 "정의"하지 말고, 바깥(파일 최상단)에 정의하자.</p>
    </div>
  )
}
