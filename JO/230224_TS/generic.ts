// function 함수(x :unknown[]) {
//   return x[0]
// }

// let a = 함수(([4, 2]));
// console.log(a); // 4 출력

// console.log(a + 1); // error

// a의 값은 4지만 type이 unknown이라서 연산이 불가능함
// 해결 방법
// 1. 함수에서 Narrowing 해주거나 as 사용하기
// 2. Generic 함수 만들기(파라미터로 타입을 입력하는 함수)

// Generic 함수 만들어서 해결해보기
function 함수<WhatType>(x :WhatType[]) :WhatType {
  return x[0]
}

// 함수를 실행할 때 넣는 자료형 타입을 함수의 <WhatType>에 넣어준다. (가변적)
let a = 함수<number>([4, 2]);
let b = 함수<string>(['4', '2']);

console.log(a + 1);

// Narrowing보다 확장성이 있다.

function 함수<MyType>(x :MyType) {
  // return x - 1; // error
  // 애매한 것을 싫어하는 TS는 현재 x에 어떤 자료형이 올지 모르기 때문에 에러를 표시한다.
  // 해결법 1: Narrowing 하기
  // 해결법 2: MyType의 타입을 미리 제한하기(extends)
}

// 타입 파라미터 제한하기
// 여기서 extends는 class나 interface에서의 복사하는 의미가 아니라 우측에 있는 타입을 가지고 있는지 체크하는 것(조건문 느낌)
// extends 우측에는 커스텀 타입도 체크할 수 있다.
function 함수<MyType extends number>(x :MyType) {
  return x - 1;
}
let c = 함수<number>(100);

// 문자로 파라미터를 넣으면 자릿수를 세어서 출력해주는 함수를 Generic으로 만들고 싶습니다.
interface lengthCheck {
  length : number
}

function 문자열길이체크<MyType extends lengthCheck>(x: MyType) {
  return x.length
}

let d = 문자열길이체크<string>('hello'); // 가능
// let e = 문자열길이체크<number>(1234); // error

// (참고) class도 class <MyType> {} 이런 식으로 만들면 new로 뽑을 때 타입파라미터를 집어넣을 수 있습니다. 
// type Age<MyType> = MyType 이런 식으로 타입변수에도 사용가능

// (숙제1) 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요? (Generic 사용)
type LengthType = string | string[];
function 길이출력함수<T extends LengthType>(x :T) {
  console.log(x.length)
}
길이출력함수<string>('hello');
길이출력함수<string[]>(['kim','park']);

// (숙제2)data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?
interface AnimalType {
  name : string;
  age : number 
}

let data = '{"name" : "dog", "age" : 1 }';

function 함수<Type>(x :string) :Type {
  return JSON.parse(x);
}
let result = 함수<AnimalType>(data)
console.log(result)

// (숙제3) 지금 만든 class는 new Person('어쩌구') 라고 분명 문자를 집어넣었는데 any 타입이 name 속성에 부여됩니다. 파라미터에 string을 집어넣으면 string 타입 number를 집어넣으면 number 타입 string[]을 집어넣으면 string[] 타입이 되게 하려면 위의 코드를 어떻게 수정해야할까요?

// class Person<T> {
//   name;
//   constructor(a){
//     this.name = a;
//   }
// }
// let a = new Person('어쩌구');
// a.name //any 타입이 되었넹 

// class Person <T> {
//   name;
//   constructor(a :T){
//     this.name = a;
//   }
// }
// let a = new Person<string>('어쩌구');
// a.name //string 타입이 되었넹 