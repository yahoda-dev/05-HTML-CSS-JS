/*
콜백 함수
- 다른 함수에 인자로 전달되어 그 함수가 대신 호출해주는 함수
*/


const sayHello = () => "안녕하세요";

console.log(typeof sayHello); // result : function
console.log(typeof sayHello()); // result : string


// 함수를 매개 변수로 받음
function runTwice(callback) {
    console.log(callback());
    console.log(callback());
}


// 우리가 만든 sayHello를 값 형태로 인자로 전달한 것

runTwice(sayHello); 


// 함수를 반환하는 고차 함수 샘플

function makeMultiplier(factor) {
    return function (n) {
        return n * factor;
    };
}

const double = makeMultiplier(2);

console.log(double(5));



const makeAdd = (x) => (y) => x+y;