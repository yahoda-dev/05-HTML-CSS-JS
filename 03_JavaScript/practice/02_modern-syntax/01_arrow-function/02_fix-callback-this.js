/* 문제 02. 콜백 안의 this 고치기
   유형 : 코드 수정 | 난이도 : ★★☆

   아래 team 객체는 오류 없이 실행되지만 결과가 기대와 다르다.
     [1] printMembers : 팀 이름이 undefined 로 나온다.
     [2] getLabels    : 팀 이름이 undefined 로 들어간 배열이 나온다.
     [3] getLeader    : 팀장 이름이 undefined 로 나온다.
   각 메서드의 원인을 주석으로 적고 고친다.
   기준 : 메서드는 메서드 축약 표현으로, 콜백은 화살표 함수로 쓴다.
*/

const team = {
  name: "프론트팀",
  leader: "유관순",
  members: ["홍길동", "장보고"],

  // [1]
  printMembers() {
    // this.members.forEach(function (member) {
    //  console.log(`${this.name} : ${member}`));
    // });

    this.members.forEach((member) => console.log(`${this.name} : ${member}`));
  },

  // [2]
  getLabels() {
    // return this.members.map(function (member) {
    //
    // });

    return this.members.map((member) => {
      return `[${this.name}] ${member}`;
    });
  },

  // [3]
  // getLeader: () => {
  //     return `팀장 : ${this.leader}`;
  // }
  getLeader () {
    return `팀장 : ${this.leader}`;
  },
};

team.printMembers();
// 기대 :
// 프론트팀 : 홍길동
// 프론트팀 : 장보고
// 원인 :

console.log(team.getLabels()); // 기대 : [ '[프론트팀] 홍길동', '[프론트팀] 장보고' ]
// 원인 :

console.log(team.getLeader()); // 기대 : 팀장 : 유관순
// 원인 :
