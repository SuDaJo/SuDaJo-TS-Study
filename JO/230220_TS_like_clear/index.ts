// function 함수(x: number | string) {
//   return x + 1  // error : union type은 연산 못해!
// }

// Narrowing
// function 함수(x :number|string) {
//   if (x의 타입이 string이면) {
//     return x + '1'
//   } else { // x의 타입이 string이 아니면
//     return x + 1
//   }
// }

// typeof 이용한 Narrowing
function 함수1(x: number | string) {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}

함수1(123);

// function 함수(x: number | string) {
//   let array: number[] = [];
//   if (typeof x === "number") {
//     array[0] = x;
//   }
// }

// as 이용한 Narrowing
function 함수2(x: number | string) {
  let array: number[] = [];
  array[0] = x as number; // x의 type을 number로 덮어쓴다.
}
함수2("123"); // (주의) as 문법 사용하면 string 넣어도 error가 아니게 됨

// let 이름 :number = 123;
// (이름 as string) + 1;  //현재문법
// <string>이름 + 1;   //옛날문법

function cleanUp(x: (number | string)[]) {
  let cleanData: number[] = [];
  x.forEach((y) => {
    if (typeof y === "string") {
      cleanData.push(parseInt(y));
    } else {
      cleanData.push(y);
    }
  });
}

// 타입 변수 Type Alias

// type Animal = string | number | undefined;

// let 동물 :Animal = '123';
// let 동물 :Animal = 123;

// let 동물: { name: string, age: number } = { name: "kim", age: 20 };
type Animal = { name: string, age: number };
let 동물: Animal = { name: "kim", age: 20 };

// type FE = {
//   name :string
// }
// readonly : object 속성을 수정하려고 하면 에러를 표시한다.
type FE = {
  readonly name: string;
};

const 개발짱: FE = {
  name: "ming",
};
// ㄱㅂㅉ.name = 'lee'

type Name = string;
type Age = number;
// type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
type NewPosition = PositionX & PositionY;
// { x: number, y: number }

type 뭔타입 = {
  name : string,
  phone : number,
  email : string,
  adult : boolean
}

// literal type
// let ming :'개발짱';
let ming : '개발짱' | '개발자';
ming = '개발자';
ming = '개발짱';

// parameter, return 타입선언할 때 특정 글자나 숫자를 넣으면 해당 값만 파라미터에 넣거나 return 할 수 있다.
// 'hello' 라는 자료만 들어올 수 있습니다 ❌
// 'hello' 라는 타입만 들어올 수 있습니다 ⭕
function hello(x :'hello') : 1 | 0 | -1 {
  return 1
}

let 인사 = { korean: '안녕'};
let 인사2 :'안녕' = '안녕';
function sayHello(a :'안녕') {
  console.log(a);
}
// sayHello(인사.korean);
sayHello(인사2);

// 함수의 Type Alias
type 함수타입 = (a :string) => number;
// type 함수타입 = (a :string) => { return :number };

// function 함수3() { }

let 함수3 :함수타입 = function(a) {
  return 10
}

// object 안에 있는 함수에 타입 지정하는 법
type 회원 = {
  name : string,
  age : number,
  plusOne : ( x :number ) => number,
  sayHello : () => void
}

let 회원정보 :회원 = {
  name : 'kim',
  age : 30,
  plusOne(a) {
    return a + 1
  },
  sayHello : () => {
    console.log('hi')
  }
}


type 함수타입1 = (x :string) => string
type 함수타입2 = (x :string) => number
type funcType = (a :string, b :함수타입1, c :함수타입2) => void

let cutZero :함수타입1 = function(x) {
    let result = x.replace(/^0+/, "");
    return result
}
let removeDash :함수타입2 = function(x) {
    let result = x.replace(/-/g, "");
    return parseFloat(result)
}

let 콜백함수만들기 :funcType = function(a, b, c) {
  let result = b(a);
  let result2 = c(result)
  console.log(result2);
}
콜백함수만들기('010-1111-2222', cutZero, removeDash)