/* 문제 03. setTimeout 콜백과 this
   유형 : 코드 작성 | 난이도 : ★★★

   setTimeout(콜백, 밀리초) 는 지정한 시간이 지난 뒤 콜백을 한 번 호출한다.

   [1] startNormal 을 실행하면 0.5초 뒤 'undefined : NaN회' 가 출력된다. 원인을 적는다.
   [2] start 를 완성한다. 0.5초 뒤에 count 를 1 늘리고 '알림 타이머 : 1회' 형태로 출력한다.
   [3] start 메서드 자체를 화살표 함수(start: () => { ... })로 만들면 어떻게 될지 적는다.
*/

const timer = {
  label: "알림 타이머",
  count: 0,

  // startNormal() {
  //     setTimeout(function () {
  //         this.count++;
  //         console.log(`${this.label} : ${this.count}회`);
  //     }, 500);

  startNormal() {
    setTimeout(() => {
      this.count++;
      console.log(`${this.label} : ${this.count}회`);
    }, 500);
  },

  start() {
    setTimeout(() => {
      this.count++;
      console.log(`${this.label} : ${this.count}회`);
    }, 500);
  },
};

// [1]
timer.startNormal(); // 0.5초 뒤 : undefined : NaN회
// 원인 :

// [2]
timer.start();
timer.start();
// 기대 (0.5초 뒤) :
// 알림 타이머 : 1회
// 알림 타이머 : 2회

// [3]
// 답 : 화살표 함수로 구현할 경우 자체 this를 생성하지 않아 window의 this를 호출하기 때문에 undefined와 NaN이 나올 것이다.
