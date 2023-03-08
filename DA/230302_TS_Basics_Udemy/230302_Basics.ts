// 기본형(Primitives) : number, string, boolean, (null, undefined)
// More complex types : arrays, objects
// Function types, parameters


// Primitives

let userAge: number;
userAge = 28;

let userName: string;
userName = "dada";

let isInstructor: boolean;
isInstructor = true;


// More complex types

let hobbies: string[];
hobbies = ["Sports, Cooking"];

let person: { name: string, age: number }; // any는 예비 타입이므로 사용 지양
person = {
  name: "dada",
  age: 28
}

let people: { name: string, age: number }[];
people = [{
  name: "DA",
  age: 28
}, {
  name: "SU",
  age: 28
}, {
  name: "JO",
  age: 28
}
]


// 타입 추론 (Type inference) + 유니온 타입(Union Types)
let course: string | number = "Like Lion - FE School";
/* 
변수를 만들고 바로 초기화를 하면
TS는 할당된 값의 자료형을 인식하게 되고
해당 변수의 타입으로 여기고 사용하게된다!
이후 다른 타입의 값을 달당하려고 하면 Error가 발생하게 된다.
*/

course = 314;


// 타입 별칭 (Type Alias)
type PersonAlias = {
  name: string,
  age: number
}

let personAlias: PersonAlias[];


// Function & types
// 함수를 사용할 때 타입을 지정하는 위치가 따로 있음
function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any): void { // void는 함수에 반환값이 없다는걸 의미
  console.log(value);
}


// Generics
// 함수에 타입 안정성과 유연성을 줌
// 어떤 타입이든 자유롭게 사용 가능하지만, 특정 타입을 사용해 함수를 실항하고 나면 해당 타입으로 고정되어 동작함
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

// updatedArray[0].split(""); 
// 제네릭을 사용하지 않았을때 문자열의 메소드인데 any 타입으로 지정했으므로 TS가 인식하지 못한다.
