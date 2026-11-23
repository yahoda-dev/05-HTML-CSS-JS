/**
 * 콜백함수 : 다른 함수의 매개변수로 전달되는 함수
 * 고차함수 : 함수를 인자로 받거나 함수를 반환하는 함수
 */

// 콜백함수 1
function increase(value) {
  return value + 1;
}

// 콜백함수 2
function decrease(value) {
  return value - 1;
}

// 고차 함수
// -> 콜백함수를 언제 호출할지 결정, 필요하면 인자도 넘겨줌.
function apply(func, value) {
  return func(value);
}

console.log(apply(increase, 5));
console.log(apply(decrease, 5));

console.log(apply((value) => value ** 2, 5));
console.log(
  apply(function (value) {
    return value ** 2;
  }, 5),
);
