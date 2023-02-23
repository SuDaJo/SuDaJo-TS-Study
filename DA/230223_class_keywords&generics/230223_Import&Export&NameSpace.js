"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const export_1 = require("./export");
///<reference path ="./export.ts"/>
// hiddenType.spaceName; 이런 식으로 가져와야 사용 가능
console.log(export_1.exportName, export_1.exportAge); // kim 20
let importVar = "DADA";
// TS 타입변수 숨기기 문법 -> namespace 옛날방식!!
// 숨기고 싶은 타입변수는 object 자료 안에 숨김
/* QUIZ */
/*
(숙제1) Car 그리고 Bike 타입을 만들었는데 너무 길어요
(index.ts)
type Car = {
  wheel : number,
  model : string
}
interface Bike {
  wheel : 2,
  model : string
}

index.ts에 만들어놨는데 더러워서 다른 파일로 옮겨서 사용하고 싶습니다.
빨리 위 코드를 다른 파일 아무데나 저장하신 후 index.ts에서 가져와서 변수만들 때 사용해보십시오.
*/
let pracImport = {
    wheel: 4,
    model: "dada"
};
let pracImport2 = {
    wheel: 2,
    model: "dada"
};
/*
(숙제2) 너무 자주만들어 쓰는 함수가 하나 있습니다
이 함수는 파라미터로 object자료 하나를 선택적으로 집어넣을 수 있고
아무것도 return 해주지 않아야합니다.
함수 만들 때마다 여기에 타입 일일이 붙이기 귀찮아서 그런데
이 타입을 다른 파일에 저장해두고 import 해와서 함수 만들 때마다 쓰려면 어떻게 코드를 짜야할까요
*/
let objFunc = function (a) {
    console.log(a);
};
objFunc({ a: "hi" });
var newDog2;
(function (newDog2) {
    ;
})(newDog2 || (newDog2 = {}));
let dog1 = 'bark';
let dog2 = { name: 'paw' };
