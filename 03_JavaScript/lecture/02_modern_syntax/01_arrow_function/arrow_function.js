const theater = {
    store: 'CGV 가산점',
    title: ['치이카와', '최종면접'],

    showByArrow() {
        // .array 제거 -> 상위 스코프(theater)의 this를 참조
        this.title.forEach(
            title => console.log(this.store + ':' + title)
        );
    },

    showByNormal() {
        // 일반 콜백 함수 내부의 this는 전역 객체(window) 또는 undefined를 가리킴
        this.title.forEach(
            function(title) {
                console.log(this.store + ': ' + title);
            }
        );
    }
};

theater.showByArrow();
console.log('--------------------');
theater.showByNormal();
/*
result

CGV 가산점:치이카와
CGV 가산점:최종면접
--------------------
undefined: 치이카와
undefined: 최종면접
*/



const dog = {
    name : '구찌',
    eatArrow: (food) => console.log(`${this.name}은 ${food}를 먹습니다.`),
    eatMethod(food) {
        console.log(`${this.name}은 ${food}를 먹습니다.`);
    },
};

dog.eatArrow('고구마');
dog.eatMethod('단호박');