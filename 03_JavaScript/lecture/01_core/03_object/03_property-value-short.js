// 프로퍼티 값 단축 구문
// -> AI 코드생성 대부분 단축시킴

var id = "p-0001";
var price = 30000;

var product = {
  id: id,
  price: price,
};

console.log(product);

// 축약
// 프로퍼티 키랑 변수이름이 같을때는 생략이 가능
var product2 = {
  id,
  price,
};

console.log(product2);

var product = { id, price, description: "비싸요" };

// return {id, price}