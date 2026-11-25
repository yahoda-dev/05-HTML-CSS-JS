import Avatar from './components/Avatar'
import { LikeButton, ShareButton } from './components/Buttons'

function PostHeader() {
  return (
    <div className="row" style={{ gap: 12 }}>
      <Avatar />
      <div>
        <b>김리액트</b>
        <p className="hint">3분 전</p>
      </div>
    </div>
  )
}

function Post() {
  return (
    <div className="box" style={{ maxWidth: 420 }}>
      <PostHeader />
      <p style={{ margin: '12px 0' }}>오늘 첫 React 컴포넌트를 만들었다! 🎉</p>
      <div className="row">
        <LikeButton />
        <ShareButton />
      </div>
    </div>
  )
}

export default function ComponentReuse() {
  return (
    <div className="stack">
      <Post />
      <Post />
      <Post />
      <Post />
      <p className="hint">
        문제: 두 게시물의 내용이 똑같다. → 컴포넌트마다 다른 데이터를 넣으려면{' '}
        <b>Props</b>가 필요하다 (03장).
      </p>
    </div>
  )
}
