import { useState } from "react";
import "./App.css";

function App() {
  // 구조 분해 할당
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count - 1)}
        >
          Count is {count}
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  );
}

export default App;
