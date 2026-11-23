/* 문제 01. 배열 구조 분해 결과 예측
   유형 : 출력 예측 | 난이도 : ★★☆

   각 줄의 결과를 예상해서 적어 보자.
   배열 구조 분해는 이름이 아니라 순서로 담긴다.
*/

const [a, b] = ['사과', '배', '귤'];
console.log(a, b);                 // 예상 : 사과, 배

const [x, , z] = [1, 2, 3];
console.log(x, z);                 // 예상 : 1, 3

const [p, q, r] = [10, 20];
console.log(p, q, r);              // 예상 : 10, 20, undefiend

const [first, ...others] = ['월', '화', '수', '목'];
console.log(first, others);        // 예상 : 월 [화, 수, 목]

const [only, ...rest] = ['하나'];
console.log(rest);                 // 예상 : []

const [d1 = '기본', d2 = '기본', d3 = '기본'] = [undefined, null, 0];
console.log(d1, d2, d3);           // 예상 : [기본, null, 0]

const [c1, c2] = 'JS';
console.log(c1, c2);               // 예상 : [J, S]
