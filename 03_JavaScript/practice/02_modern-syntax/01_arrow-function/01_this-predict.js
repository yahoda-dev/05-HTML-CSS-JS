/* 문제 01. 화살표 함수와 this 출력 예측
   유형 : 출력 예측 | 난이도 : ★★☆

   각 메서드를 호출했을 때의 출력 결과를 예상해서 적어 보자.
     - 일반 함수 : 호출될 때마다 자기만의 this 가 정해진다.
     - 화살표 함수 : 자기 this 를 만들지 않고 바깥의 this 를 그대로 쓴다.
*/

const cafe = {
    name: '별다방',
    menu: ['아메리카노', '라떼'],

    showArrow() {
        this.menu.forEach(item => console.log(`${this.name} - ${item}`));
    },

    showNormal() {
        this.menu.forEach(function (item) {
            console.log(`${this.name} - ${item}`);
        });
    },

    getNameArrow: () => this.name,

    getName() {
        return this.name;
    }
};

cafe.showArrow();
// 예상 : 별다방 - 아메리카노 / 정답
// 예상 : 별다방 - 라떼 / 정답

cafe.showNormal();
// 예상 : undefined - 아메리카노 / 정답
// 예상 : undefined - 라떼  / 정답

console.log(cafe.getNameArrow());   // 예상 : undefined / 정답 (CommonJS 기준)
console.log(cafe.getName());        // 예상 : 별다방 / 정답

// 질문. showNormal 에서 this.name 이 '별다방' 으로 나오지 않는 이유는?
// 답 : 콜백의 this는 cafe가 아니라 forEach가 전달한 값이다.
//      비엄격 모드에서는 전역 객체를 가리키므로, 전역 객체에 name이 없으면 undefined다.

// getNameArrow는 화살표 함수라 cafe.getNameArrow()로 호출해도 this가 cafe로 바뀌지 않는다.
// 바깥 스코프의 this를 사용하며, CommonJS에서는 모듈 최상위 this이므로 name은 undefined다.
// 반면 getName은 일반 메서드라 cafe.getName() 호출 시 this가 cafe이고, cafe.name을 반환한다.
