/* 문제 02. 스프레드 결과 예측
   유형 : 출력 예측 | 난이도 : ★★☆

   각 줄의 결과를 예상해서 적어 보자.
   객체 스프레드에서는 같은 키가 있을 때 어느 값이 남는지에 주의한다.
*/

const nums = [3, 7, 1];
const more = [10, 20];
const user = { name: '홍길동', age: 20 };

console.log(Math.max(nums));              // 예상 : 7 / 틀림
console.log(Math.max(...nums));           // 예상 : 7 / 맞음
console.log([...nums, ...more]);          // 예상 : [3, 7, 1, 10, 20] / 맞음
console.log([0, ...nums, 99]);            // 예상 : [ 0, 3, 7, 1, 99] / 맞음
console.log([...'hi']);                   // 예상 : [h, i] / 맞음
console.log({ ...user, age: 30 });        // 예상 : {name:홍길동, age:30} / 맞음
console.log({ age: 30, ...user });        // 예상 : {name:홍길동, age:20} / 틀림 -> { age: 20, name: '홍길동' }
console.log({ ...user, city: '서울' });   // 예상 : {name:홍길동, age:20, city:서울} / 맞음
console.log(nums);                        // 예상 : [3 , 7, 1] / 문제 잘못봐서 틀림.
