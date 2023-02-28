const obj = {
  name: "ellie",
  age: 20,
};

const obj2 = {
  animal: "강아지",
};

console.log(getValue(obj, "name")); // ellie를 출력
console.log(getValue(obj, "age")); // 20을 출력
console.log(getValue(obj2, "animal")); // 강아지를 출력
// console.log(getValue(obj2, "score")); // score는 키의 벨류에 존재하지 않기때문에 에러를 출력합니다.
// 그렇기 때문에 두번째 인자에 전달되는 값은 반드시 obj에 존재하는 키로만 사용해야합니다.

// T라는 어떠한 오브젝트도 받을수 있으며
// 전달되는 K에는 T라는 오브젝트 안에 있는 key중에 하나여야 한다 라고 알려주고 있습니다
// keyof 어떤 타입은 그 오브젝트 안에 들어있는 key의 타입을 말합니다
// 또한 T[K]는 오브젝트 T에있는 키의 벨류가 리턴되는 것을 알려줍니다.
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
