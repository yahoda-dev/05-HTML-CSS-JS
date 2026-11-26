import { useEffect, useState } from "react";

export default function Playground() {
  // 1. 상태값 생성
  const [text, setText] = useState("불러오는 중");

  // 2. useEffect 구현 (useEffect는 콜백을 전달해야 한다.)
  useEffect(() => {
    // 2-1. fetch하여 josn 데이터를 받아오는 코드
    // promise 객체 생성
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setText(JSON.stringify(data, null, 2)));
      // 의존성이 `[]`이면 화면이 처음 나타날 때 한 번만 동작하고
      // 의존성이 `상태값`이면 해당 상태값이 그려질 때 동작한다.
  }, []);

  return (
    <div>
      <h3>JSON PlaceHolder 응답</h3>
      <pre>{text}</pre>
    </div>
  );
}
