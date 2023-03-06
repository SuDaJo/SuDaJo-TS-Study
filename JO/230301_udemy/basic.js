"use strict";
// Primitives: number, string, boolean
// More complex types: array, object
// Function & types, parameters
Object.defineProperty(exports, "__esModule", { value: true });
exports.age = void 0;
exports.age = 12;
var userName;
userName = "Ming";
var isInstructor;
isInstructor = true;
// More complex types
var hobbies;
hobbies = ["Sports", "Cooking"];
var person1;
person1 = {
    name: "Ming",
    age: 20,
};
// 에러 (person에는 boolean 값이 지정되어 있지 않음)
// person1 = {
//   isEmployee: true
// }
var people1;
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
var course = "TypeScript 뿌시기";
course = 123;
course = "hi";
var person;
person = {
    name: "Lee",
    age: 20,
};
var people;
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
function add(a, b) {
    return a + b;
    // 타입추론으로 add 함수의 return type이 자동으로 number가 된다.
}
var result = add(2, 5);
console.log(result);
function print(value) {
    console.log(value);
}
// 제네릭 타입
