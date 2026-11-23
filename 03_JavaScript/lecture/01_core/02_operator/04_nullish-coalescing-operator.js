// null 병합 연산자 ??

// 좌항이 null  또는 undefined면 우항을 반환
// 아니면 좌항을 그대로 반환

var someObject = null;

var test = someObject ?? "기본 값";
 
console.log(test);
