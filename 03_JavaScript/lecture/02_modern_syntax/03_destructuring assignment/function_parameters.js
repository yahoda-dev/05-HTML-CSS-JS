function displayByPosition(
  producer = "아무개",
  width = 10,
  height = 20,
  items = [],
) {
  console.log(`${producer}  ${width}  ${height}`);
  console.log(items);
}

displayByPosition("신사임당", undefined, undefined, ["Coffee", "Donut"]);

// 구조 분해 할당을 한다면?
function displayProduct({
  // 객체로 인자를 받도록 중괄호 추가
  producer = "아무개",
  width = 10,
  height = 20,
  items = [],
}) {
  console.log(`${producer}  ${width}  ${height}`);
  console.log(items);
}

const exampleProduct = {
  items: ["Coffee", "Donut"],
  producer: "Bear",
};

displayProduct(exampleProduct);