export { };

// :type 지정에는
// string, number, boolean, null, undefined, bigint, [], {}등 다 들어갈 수 있다

let myName: string = "dada";
let myNameArr: string[] = ["dada", "park"]; // array 타입지정
let members: { member1: string, member2: string } = { member1: "kim", member2: "park" }; // object 타입지정
let myNameObj: { name?: string } = { name: "park" }; // object 타입지정
// { name? : string } -> name 속성을 옵션임을 명시


// Union type 다양한 타입이 들어올 수 있게함
let 이름: string | number = "kim";
let 이름2: (string | number | boolean) = 123;
let 이름3: string[] | number = ["kim"];
let 회원: (number | string)[] = [1, "2", 3];
let Obj: { a: string | number } = { a: 123 }


// any type 모든 자료형 허용(But, TS 쓰는 의미가 사라짐) => 타입 실드 해제 문법이라고 봄
let 애니타입: any;
애니타입 = 123;
애니타입 = true;
애니타입 = null;


// unknown type 모든 자료형 허용 -> any type 보다 안전 => 에러를 뿜기 때문
let 언노운: unknown;
언노운 = 123;
언노운 = {};

let unknownMinus: unknown;
// unknownMinus - 1 에러! -> 간단한 수학 연산도 타입이 맞아야 함


// Type alias 타입을 변수에 담아서 사용 / 대문자로 보통작명
type MyType = string | number;
let 이름4: MyType = 123;


// array에 쓸 수 있는 tuple 타입
type Member = [number, boolean];
let dada: Member = [123, false];


// object에 타입 지정해야 할 속성이 많을 때
type MemberList = {
  [key: string]: string //모든 object 속성 / 글자로 된 모든 object속성의 타입 :string
}
let john: MemberList = { name: "kim", age: "123" };


// class 타입 지정 가능
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}


/* QUIZ */

/* Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다. 
물론 타입도 알아서 지정해보십시오. 이건 쉬우니 답은 없습니다. */

let name: string = "dada";
let age: number = 28;
let birthLoca: string = "daejeon";

/* Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
object 안엔 노래 제목과 가수이름이 들어가면 됩니다.
근데 제목과 가수는 문자만 들어올 수 있어야합니다.  */
type MusicList = {
  [key: string]: string
}
let mySinger: MusicList = {
  song: "one last time",
  artist: "Ariana Grande",
}

/* Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
let project = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}
project 변수 우측에 적으면 됩니다. 
member 안엔 문자로 가득한 array만 들어올 수 있고 
days는 숫자, started는 true/false만 들어올 수 있습니다.  */

type ProjectType = {
  member: string[],
  days: number,
  started: boolean,
}
let project: ProjectType = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
}

/* (숙제1) 다음 변수 4개에 타입을 지정해봅시다.

let user = 'kim';
let age = undefined;
let married = false; 
let 철수 = [user, age, married];
허전하니까 변수 4개에 타입빨리 집어넣어봅시다. 
(조건) age 변수엔 undefined 말고 숫자도 들어올 수 있습니다.  */

let user: string = 'kim';
let ages: (undefined | number) = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

/* (숙제2) 학교라는 변수에 타입지정해보십시오.

let 학교 = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]
타입지정을 안해줬더니 터미널에 에러가 나는군요.

에러안나게 학교라는 변수에 타입좀 지정해줍시다.  */
type School = {
  score : (number|boolean)[],
    teacher : string,
    friend : string | string[]
}
let 학교 : School = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];