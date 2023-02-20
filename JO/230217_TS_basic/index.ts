let userName: string = "kim";
// userName = 123;
// userName 변수는 string 타입으로 지정되어 number 자료형이 할당될 수 없다.
let userName2: string | number = 123; // Union type 지정

let userNameArray: string[] = ["kim", "jo"];
let userNameArray2: [string, number] = ["kim", 1];

let userNameObject: {} = { name: "jo" };
let userNameObject2: { name: string } = { name: "jo" };
// name 속성이 있을지 없을지 불확실할 경우 "?" 추가하면 옵션으로 지정
let userNameObject3: { name?: string } = { name: "jo" };

// 함수에 타입지정
// parameter type -> number
// return type -> number
function 함수(x: number): number {
  return x * 2;
}
// 함수("123"); // type error

// Type alias
type MyType = string | number;

// Array에 사용할 수 있는 tuple type
type Member = [number, boolean];

// Object에 지정할 타입이 많을 경우
// type MemberObj = { name: string, age: string ... };
type MemberObj = { [key: string]: string };
let john: MemberObj = { name: "kim" };

// class 문법에 type 지정
class User {
  name: string; // 미리 변수 만들어서 타입 지정해야함
  constructor(name: string) {
    this.name = name;
  }
}

let 회원: (number | string)[] = [1, "2", 3];
let 오브젝트: { a: string | number } = { a: 123 };

// any와 unknown의 차이
// let 이름 :any;
// 이름 = 123;
// 이름 = {};

// let 변수1 :string = 이름;

// let 이름 :unknown;
// 이름 = 123;
// 이름 = {};

// let 변수1 :string = 이름;

let 학교: {
  score: (boolean | number)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

function 안녕(name?: string): void {
  if (name) {
    console.log(`안녕하세요 ${name}!`);
  } else {
    console.log("이름이 없습니다.");
  }
}
안녕("밍");
안녕();

function count(x: number | string): number {
  return x.toString().length;
}

function 결혼가능하니(
  money: number,
  house: boolean,
  charm: string
): string | void {
  let score: number = 0;
  score += money;
  if (house === true) {
    score += 500;
  }
  if (charm === "상") {
    score += 100;
  }
  if (score >= 600) {
    return "결혼 가능합니다.";
  }
}

console.log(결혼가능하니(100,true,'상'))
