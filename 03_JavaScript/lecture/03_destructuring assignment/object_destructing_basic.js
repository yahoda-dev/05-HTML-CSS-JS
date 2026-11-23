const pants = {
    productName : '배기 팬츠',
    color : '검정색',
    price : 30000
}

const { productName, color, price }
= pants;


console.log(productName);
console.log(color);
console.log(price);

// 신규 변수명을 지정하여 구조 분해 할당 받기
const {price : p1, productName: n1} = pants;

console.log(p1);
console.log(n1);

const id = 'p-00001';
const made = { id, price };

const {id: gotid} = made;

console.log(gotid);
console.log(made.price);