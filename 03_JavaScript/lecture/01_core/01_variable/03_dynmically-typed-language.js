/**
 *
 * 타입
 * - 정적(static) / 동적(dynamic) 타입 : 타입을 '언제' 검사하느냐?
 *  정적 : 컴파일시점에 타입을 검사 -> 실행하기전에 알려줌 Java, Kotilin, C, C++
 *  동적 : 실행 시점에 검사 -> 실행해야 알수있음 JavaScript, Python
 *
 * - 강한 / 약한 : 타입이 다를때 얼마나 엄격한가
 *  강타입 : 타입이 다르면 오류를 냄 (Java, Python)
 *  약타입 : 알아서 바꿔서 계산 (JavaScript)
 */

var name = "bear";
// 타입검사를 종종하자
console.log(typeof name);

console.log(1 + "1");
console.log("10" - 5); // 문자열 -> 숫자로 자동으로 바뀜
