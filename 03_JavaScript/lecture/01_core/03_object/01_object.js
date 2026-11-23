/**
 * Javscript -> 객체 기반(지향) 프로그래밍 언어
 * 원시타입 제외하고 전부 Object 타입
 *
 * 자바스크립트의 객체
 * - 프로퍼티로 구성된 집합 프로퍼티(property) -> Key Value의 쌍
 * - 프로퍼티 : 객체의 상태를 나타내는 값 (data) -> 자바의 필드
 * - 메서드 : 프로퍼티가 함수인 경우를 부르는 이름
 */

var student = {
  // 키값 쌍으로 구성된 프로퍼티 (객체의 상태)
  name: "유관순",
  age: 16,

  // 메서드 : 프로퍼티를 이용해 조작할 수 있는 동작
  getInfo: function () {
    return `${this.name}은 ${this.age}세 입니다.`;
  },
};

console.log(typeof student); // object
console.log(student);
console.log(student.getInfo); // 프로퍼티 값으로만꺼내면 함수 자체를 가리킴
console.log(student.getInfo()); // 호출의 결과가 나옴

// key - value : key에 해당하는 값은 문자열 -> 따옴표를써야한다.
// 식별자 네이밍규칙(변수의 이름으로 쓸수있는 형태)일경우 생략 가능
// 공백이나, - 섞여서 규칙을 따르지 않을경우는 따옴표를 써야함.
var keyExample = {
  normal: "normal value",
  "dash-key": "dash-value",
  normal: "new value",
};

console.log(keyExample);

console.log(keyExample.normal);

// 프로퍼티 동적 생성
// 키 이름이 실행중에 정해져 대괄호 표기법으로 추가가 가능하다.
var key = "test";
keyExample[key] = "test value";

console.log(keyExample);
