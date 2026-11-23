

const friuts = ['사과', '딸기', '바나나'];

for (const friut of friuts) {
    console.log(friut);
}

for (const char of "Hello") { // 문자열도 배열이라 사용 가능함
    console.log(char);
}

for (const idx in friuts) {
    console.log(idx); // Index가 나옴
}

const user = {name : '홍길동', age:20, city:'서울'};

// ERROR: 객체는 이터러블이 아니기 때문
/*
for (const v of user) {

}
*/

