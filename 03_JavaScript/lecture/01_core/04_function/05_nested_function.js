// 중첩 함수
// 함수안의 함수

function outer() {
  var outerVal = "외부 함수";

  function inner() {
    var innnerVal = "내부 함수";

    console.log(outerVal, innnerVal);
  }

  inner();
}

outer();

// Scope가 다름 -> 외부에서는 내부함수도, 내부함수의 변수도 볼수가 없다.
// inner();

// 함수자체를 return

// 숫자를 새는 함수
function createCounter(start) {
  var count = start;

  return function () {
    count = count + 1;
    return count;
  };
}

var counter1 = createCounter(10);
console.log(counter1());
console.log(counter1());
console.log(counter1());

// 클로저(Closure)
// -> 내부함수가 자신이 선언된 외부 스코프의 변수를 기억하고
//    외부 함수의 실행이 끝난 뒤에도 변수에 접근할수있는것
var counter2 = createCounter(20);
console.log(counter2());
console.log(counter2());
console.log(counter2());
