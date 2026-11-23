// 순수 함수
// 같은 인자를 넣으면 언제나 같은 값을 반환한다.
// 함수 바깥의 어느 것도 바꾸지 않는다. (= 부수 효과가 없다)

// 부수 효과(side-effect) : 함수가 반환값을 만드는 것 이외에 다른 영향을 주는 흔적



const add = (a, b) => a + b;

// 비순수 함수 : 외부 변수에 의존한다. rate가 바뀌면 반환값도 달라진다.
let rate = 0.1;
const multipleRate = (price) => price + price * rate;



// 비순수 함수
const addItem = (list, item) => {
    list.push(item);
    return list;
}

// 위 비순수 함수를 순수 함수로 교체한 함수
const addItemPure = (list, item) => {
    // concat : 새로운 리스트를 만들어서 내용들을 합쳐주는 함수
    list.concat(item);
}