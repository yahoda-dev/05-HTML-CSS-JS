



// 배열이 아닌 숫자 목록을 인자로 받는다.
console.log(Math.max(10, 30, 20));


const arr = [10, 20, 30];

console.log(Math.max(arr));


// 객체 리터럴에서도 펼치기
// 일반 객체는 Iterable이 아니라 펼칠 수 없음
// 객체 리터럴 안에서 객체를 펼치는 것은 가능
const user = {name:"홍길동", age  : 20};

console.log({...user, age: 21});