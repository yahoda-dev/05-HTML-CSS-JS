/*
const nameArr = ['Gildong', 'Hong'];

const [firstName, lastName] = nameArr;


console.log(firstName);
console.log(lastName);


const [char1, char2] = "JS";
console.log(char1);
console.log(char2);


// 2. 함수의 반환 값을 바로 분해하기
console.log("Saimdang Shin".split(" "));
const[firstName2, lastName2] = "Saimdang Shin".split(" ");
console.log(firstName2);
console.log(lastName2);

const [first , , last] = ['firstName', 'middleName', 'lastName'];
console.log(first);
console.log(last);

const [a, b, c] = ['A', 'B'];
console.log(a);
console.log(b);
console.log(c);
*/

const user = {};

[user.firstName, user.lastName] = "Gwansoon Yu".split(" ");
console.log(user);


let student = "유관순";
let teacher = "홍길동";

[student, teacher] = [teacher, student];

