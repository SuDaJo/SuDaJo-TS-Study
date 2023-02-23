import { Car, Bike, ObjFunction } from "./export";


import { exportName, exportAge, NameType } from "./export";
///<reference path ="./export.ts"/>
// hiddenType.spaceName; 이런 식으로 가져와야 사용 가능

console.log(exportName, exportAge); // kim 20

let importVar: NameType = "DADA";

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
let pracImport: Car = {
  wheel: 4,
  model: "dada"
}
let pracImport2: Bike = {
  wheel: 2,
  model: "dada"
}

/* 
(숙제2) 너무 자주만들어 쓰는 함수가 하나 있습니다
이 함수는 파라미터로 object자료 하나를 선택적으로 집어넣을 수 있고 
아무것도 return 해주지 않아야합니다. 
함수 만들 때마다 여기에 타입 일일이 붙이기 귀찮아서 그런데
이 타입을 다른 파일에 저장해두고 import 해와서 함수 만들 때마다 쓰려면 어떻게 코드를 짜야할까요
*/
let objFunc: ObjFunction = function (a) {
  console.log(a)
}

objFunc({ a: "hi" })

/*
(숙제3) 타입 중복이 너무 많이 발생합니다.

type Dog = string;
interface Dog { name : string };

let dog1 :Dog = 'bark';
let dog2 :Dog = { name : 'paw' }
위 코드에서 에러를 없애야합니다. 어떻게 코드를 짜면 될까요? 
(조건) type Dog, interface Dog의 타입이름 변경 금지, 파일 분할 금지
*/

namespace newDog{
  export type Dog = string;
}
namespace newDog2{
  export interface Dog { name : string };
}

let dog1 : newDog.Dog = 'bark';
let dog2 : newDog2.Dog = { name : 'paw' }

