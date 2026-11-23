// in operator
// 프로퍼티가 객체에 존재하는지 확인하는 연산자

var stuent = {
  name: "유관순",
  age: 16,
  test: undefined,
};

console.log(stuent.name === undefined); // false

// 프로퍼티가 없는것과 키가 없는것을 구분 못함.
console.log(stuent.height === undefined); // true  // 키가 있는지 없는지 모름
console.log(stuent.test === undefined); // true  // 키가 있는지 없는지 모름

console.log("===========구분선=========");

console.log("name" in stuent); // true
console.log("height" in stuent); // false
console.log("test" in stuent); // true

// for-in 반복문
// 객체의 프로퍼티 키를 하나씩 꺼내서 순회하는 반복문
var stuent2 = {
  name: "유관순",
  age: 16,
  test: undefined,
  getInfo: function () {
    return `${this.name}은 ${this.age}세 입니다.`;
  },
};

for (var key in stuent) {
  console.log(`key : ${key}`);
  console.log(`student[key] : ${stuent[key]}`);
}

// 배열
var numbers = [10, 20, 30];
for (var value of numbers) {
  console.log(value);
}
