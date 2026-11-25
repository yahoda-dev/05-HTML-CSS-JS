import { Fragment } from 'react'

function Columns({ name, role }) {
  return (
    <>
      <td>{name}</td>
      <td>{role}</td>
    </>
  )
}

const glossary = [
  { term: 'JSX', desc: 'JavaScript 안에서 쓰는 HTML 같은 문법' },
  { term: 'Fragment', desc: 'DOM에 흔적을 남기지 않는 그룹' },
  { term: 'Component', desc: '화면 조각을 반환하는 함수' },
]

export default function FragmentExample() {
  return (
    <div className="stack">
      <div className="box">
        <h3>표 안에서 Fragment 쓰기</h3>
        <table className="table">
          <tbody>
            <tr>
              <Columns name="김리액트" role="프론트엔드" />
            </tr>
            <tr>
              <Columns name="이노드" role="백엔드" />
            </tr>
          </tbody>
        </table>
        <p className="hint">F12 → Elements에서 tr 안에 td만 있는 것을 확인하자.</p>
      </div>

      <div className="box">
        <h3>key가 필요할 때는 &lt;Fragment key&gt;</h3>
        <dl style={{ margin: 0 }}>
          {glossary.map((item) => (
            <Fragment key={item.term}>
              <dt>
                <b>{item.term}</b>
              </dt>
              <dd style={{ marginBottom: 8 }}>{item.desc}</dd>
            </Fragment>
          ))}
        </dl>
      </div>
    </div>
  )
}
