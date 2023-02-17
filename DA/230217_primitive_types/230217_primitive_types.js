"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// :type 지정에는
// string, number, boolean, null, undefined, bigint, [], {}등 다 들어갈 수 있다
let myName = "dada";
let myNameArr = ["dada", "park"]; // array 타입지정
let members = { member1: "kim", member2: "park" }; // object 타입지정
let myNameObj = { name: "park" }; // object 타입지정
// { name? : string } -> name 속성을 옵션임을 명시
// Union type 다양한 타입이 들어올 수 있게함
let 이름 = "kim";
let 이름2 = 123;
let 이름3 = ["kim"];
let 회원 = [1, "2", 3];
let Obj = { a: 123 };
// any type 모든 자료형 허용(But, TS 쓰는 의미가 사라짐) => 타입 실드 해제 문법이라고 봄
let 애니타입;
애니타입 = 123;
애니타입 = true;
애니타입 = null;
// unknown type 모든 자료형 허용 -> any type 보다 안전 => 에러를 뿜기 때문
let 언노운;
언노운 = 123;
언노운 = {};
let unknownMinus;
let 이름4 = 123;
let dada = [123, false];
let john = { name: "kim", age: "123" };
// class 타입 지정 가능
class User {
    constructor(name) {
        this.name = name;
    }
}
/* QUIZ */
/* Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
물론 타입도 알아서 지정해보십시오. 이건 쉬우니 답은 없습니다. */
let name = "dada";
let age = 28;
let birthLoca = "daejeon";
let mySinger = {
    song: "one last time",
    artist: "Ariana Grande",
};
let project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
/* (숙제1) 다음 변수 4개에 타입을 지정해봅시다.

let user = 'kim';
let age = undefined;
let married = false;
let 철수 = [user, age, married];
허전하니까 변수 4개에 타입빨리 집어넣어봅시다.
(조건) age 변수엔 undefined 말고 숫자도 들어올 수 있습니다.  */
let user = 'kim';
let ages = undefined;
let married = false;
let 철수 = [user, age, married];
let 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
