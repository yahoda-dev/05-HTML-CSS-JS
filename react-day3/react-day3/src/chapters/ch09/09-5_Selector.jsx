import { create } from 'zustand'
import { useShallow } from 'zustand/react/shallow'
import RenderBadge from '../../components/RenderBadge'

const useDemoStore = create((set) => ({
  count: 0,
  memo: '',
  increase: () => set((state) => ({ count: state.count + 1 })),
  setMemo: (memo) => set({ memo }),
}))

function WholeStoreCounter() {
  const { count } = useDemoStore()

  return (
    <div className="box stack" style={{ flex: 1, minWidth: 220 }}>
      <b className="bad">❌ useDemoStore()</b>
      <p className="big-number">{count}</p>
      <RenderBadge />
    </div>
  )
}

function SelectedCounter() {
  const count = useDemoStore((state) => state.count)

  return (
    <div className="box stack" style={{ flex: 1, minWidth: 220 }}>
      <b className="good">✅ (state) =&gt; state.count</b>
      <p className="big-number">{count}</p>
      <RenderBadge />
    </div>
  )
}

function ShallowCounter() {
  const { count, increase } = useDemoStore(
    useShallow((state) => ({ count: state.count, increase: state.increase })),
  )

  return (
    <div className="box stack" style={{ flex: 1, minWidth: 220 }}>
      <b className="good">✅ useShallow(…)</b>
      <p className="big-number">{count}</p>
      <div className="row">
        <button className="btn primary" onClick={increase}>
          +1
        </button>
        <RenderBadge />
      </div>
    </div>
  )
}

function MemoInput() {
  const memo = useDemoStore((state) => state.memo)
  const setMemo = useDemoStore((state) => state.setMemo)

  return (
    <div className="box row">
      <b>memo</b>
      <input
        className="input"
        placeholder="여기에 글자를 쳐 보세요"
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
      />
      <span className="hint">← store의 memo만 바뀐다</span>
    </div>
  )
}

export default function Selector() {
  return (
    <div className="stack">
      <MemoInput />
      <div className="row" style={{ alignItems: 'stretch' }}>
        <WholeStoreCounter />
        <SelectedCounter />
        <ShallowCounter />
      </div>

      <div className="note">
        <h3>👉 확인해 보세요</h3>
        <ul>
          <li>memo에 글자를 치면 ❌ 쪽만 "렌더링 N회"가 계속 올라간다 — count는 그대로인데도!</li>
          <li>[+1]을 누르면 셋 다 올라간다 — 셋 다 count를 쓰니까 정상</li>
          <li>화면이 작을 때는 차이가 안 느껴지지만, 목록이 크거나 컴포넌트가 많으면 느려지는 원인이 된다</li>
        </ul>
      </div>

      <div className="note">
        <h3>🤖 AI 코드에서 이런 모양을 보면</h3>
        <div className="cmd">{`const { items, addItem } = useCartStore()          // ⚠️ 전체 구독 → selector로 바꾸게 하자
const items = useCartStore((state) => state.items)   // ✅
const addItem = useCartStore((state) => state.addItem)`}</div>
      </div>
    </div>
  )
}
