

// 1. 기본 값 설정하기

const shirts = {productname: '베이직 셔츠'};

const {
    productName='어떤 상품', 
    color = '어떤 색상', 
    price = '0'} = shirts;

console.log(productName);
console.log(color);
console.log(price);


const {color: shirtsColor = '어떤 색상'} = shirts;


// 기본값이 적용되는 기준
const fromServer = {nickname: null, points:0};

const {nickname = '닉네임', point = 10000} = fromServer;

console.log(nickname?? "NoName");
console.log(point);


const pants = {
    productName : "배기 팬츠",
    color : "검정색",
    price : 30000,
    stock : 12,
    createdAt : "2026-11-23",
};

const {productName : pantsName, ...rests} = pants;

console.log(pantsName);