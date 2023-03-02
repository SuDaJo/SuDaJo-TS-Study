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

let personAlias:PersonAlias;