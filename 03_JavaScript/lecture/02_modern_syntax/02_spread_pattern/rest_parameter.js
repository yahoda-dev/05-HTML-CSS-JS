/*
나머지 매개 변수
- 매개 변수 앞에 점 3개(...)를 붙이면 전달된 인자들을 한 곳에 모아 배열로 만들어 줌.
*/


const merge = (msg1, msg2) => msg1 + msg2;



console.log(merge("안녕하세요"));
console.log(merge("안녕하세요", " 반갑습니다."));
console.log(merge("안녕하세요", "반갑습니다.", "오늘 밥은 뭐 먹나요?"));


function mergeAll(...args) {
    let message = "";
    for (const arg of args) message += arg;

    return message;
}

console.log(mergeAll("안녕하세요"));
console.log(mergeAll("안녕하세요", " 반갑습니다."));
console.log(mergeAll("안녕하세요", "반갑습니다.", "오늘 밥은 뭐 먹나요?"));


function introduce(name, ...hobbies) {
    return `${name}의 취미는 ${hobbies.join(',')}입니다.`
}

console.log(introduce("테스터", "자전거", "산책"));