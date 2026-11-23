

const origin1 = [10, 30, 20];

const sameONe  = origin1; //주소값만 복사된 상태

sameONe.push(50);

console.log(origin1); // sameOne을 바꿨는데 origin1도 바뀜

const sameTwo = [...origin1];
sameTwo.push(100);


console.log(sameTwo);
console.log(origin1);

console.log(origin1 == sameONe);
console.log(origin1 === sameONe);

console.log("---------------------");
const obj = {name:'홍길동', age:20};
const objCopy = {...obj};

console.log(obj);
console.log(objCopy);
console.log(obj === objCopy);


const origin = {
    name: '홍길동',
    address : {city: "서울", zip: "04524"}, // 객체 내부에 객체가 존재
};

const shallow = {...origin};

shallow.name = "유관순";
console.log(origin.name); // result : 홍길동
console.log(shallow.name); // result : 유관순
shallow.address.city = "부산";
console.log(origin.address.city); // result : 부산
console.log(shallow.address.city); // result : 부산

const nested = {
    ...origin,
    address : {...origin.address},
};

const deep = structuredClone(origin);