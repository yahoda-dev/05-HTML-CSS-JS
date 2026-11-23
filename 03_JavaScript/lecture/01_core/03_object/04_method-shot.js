// 메서드 축약

// 원본
var dog = {
  name: "구찌",

  eat: function (food) {
    console.log(`${this.name}(은)는 ${food}를 먹습니다.`);
  },
};

// 축약 표현
var dog2 = {
  name: "구찌",

  eat(food) {
    console.log(`${this.name}(은)는 ${food}를 먹습니다.`);
  },
};

dog2.eat("과일");

// 화살표함수
// this가 객체를 가리키지 않음, 객체의 바깥 범위의 this를 사용
// 화살표함수를 쓸때는 this를 사용하지 않는다.
var dog3 = {
  name: "구찌",

  eat: (food) => {
    console.log(`${this.name}(은)는 ${food}를 먹습니다.`);
  },
};

dog3.eat("고기");
