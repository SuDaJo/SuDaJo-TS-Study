// Primitives: number, string, boolean
// More complex types: array, object
// Function & types, parameters

// Primitives

export let age: number;
age = 12;

let userName: string;
userName = "Ming";

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

let person1: {
  name: string;
  age: number;
};

person1 = {
  name: "Ming",
  age: 20,
};

// 에러 (person에는 boolean 값이 지정되어 있지 않음)
// person1 = {
//   isEmployee: true
// }

let people1: {
  name: string;
  age: number;
}[];

people1 = [
  {
    name: "Ming",
    age: 20,
  },
  {
    name: "Kim",
    age: 32,
  },
];


// Type inference
/** 
 * 타입추론
 * 기본적으로 명시적으로 타입지정이 되지 않아도 타입스크립트가 타입을 추론한다. (할당된 자료형의 값을 추론)
 * 불필요한 타입 지정을 하지 않도록 해준다.
**/


// Union type

let course: string | number = "TypeScript 뿌시기"
course = 123;
course = "hi";


// Type Alias
// type 키워드를 이용하여 저장하여 타입 재활용하기

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Lee",
  age: 20,
};

let people: Person[];

people = [
  {
    name: "Ming",
    age: 20,
  },
  {
    name: "Kim",
    age: 32,
  },
];


// Function & types
// 타입을 가진 함수

function add(a: number, b: number) {
  return a + b;
  // 타입추론으로 add 함수의 return type이 자동으로 number가 된다.
}

const result = add(2, 5);
console.log(result);

// 함수와 결합해서 사용하는 void type
// return 값이 없는 함수에 지정

function print(value: any): void {
  console.log(value);
}


// 제네릭 타입
// 함수를 호출할 때 들어오는 argument의 타입에 따라 타입이 적용된다.

// 원본 배열을 유지하면서 배열의 요소를 추가하는 함수
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);  // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split("");
// number 자료형에는 split 메서드 사용 불가하므로 에러!