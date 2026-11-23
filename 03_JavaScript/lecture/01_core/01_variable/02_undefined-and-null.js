/**
 * - null : 값이 없다. -> 개발자가 의도적으로 값이 없다고 정의한 것.
 * - undefined : 값이 없다. -> 값이 담긴 적이 없음 (JavaScript Engine)
 */

var undef;
console.log(undef);

console.log(typeof null); // Javascript 만들어질때 구현실수
console.log(typeof undefined);

var maybe = null;
if (typeof maybe === "object") {
  console.log("Object입니다");
}

console.log(maybe === null);
