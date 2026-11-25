const user = {
  name: '김리액트',
  age: 27,
  isAdmin: true,
}

const today = new Date().toLocaleDateString()

function formatPrice(price) {
  return price.toLocaleString() + '원'
}

export default function JsxExpression() {
  const price = 39000
  const quantity = 3

  return (
    <div className="stack">
      <div className="box">
        <h3>변수와 객체</h3>
        <p>
          이름: {user.name} / 나이: {user.age}세
        </p>
        <p>오늘 날짜: {today}</p>
      </div>

      <div className="box">
        <h3>계산식과 함수 호출</h3>
        <p>
          {formatPrice(price)} × {quantity}개 = <b>{formatPrice(price * quantity)}</b>
        </p>
        <p>내년 나이: {user.age + 1}세</p>
      </div>

      <div className="box">
        <h3>삼항 연산자와 템플릿 리터럴</h3>
        <p>권한: {user.isAdmin ? '관리자' : '일반 회원'}</p>
        <p className={`badge ${user.isAdmin ? '' : 'bad'}`}>
          {`${user.name}님 환영합니다`}
        </p>
      </div>

      <div className="box">
        <h3>화면에 안 보이는 값</h3>
        <p>
          [{true}][{false}][{null}][{undefined}] ← 네 개 모두 빈칸
        </p>
        <p className="hint">
          객체를 통째로 넣으면 에러가 난다. 확인용으로는 JSON.stringify를 쓴다:
        </p>
        <code>{JSON.stringify(user)}</code>
      </div>
    </div>
  )
}
