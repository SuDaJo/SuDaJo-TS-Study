export let exportName = "kim";
export let exportAge = 20;

export type NameType = string;
export interface exInter { } //interface 이런 것들도 export 가능


// TS 타입변수 숨기기 문법 -> namespace
// 숨기고 싶은 타입변수는 object 자료 안에 숨김
namespace hiddenType {
  export type spaceName = string | number;
}
/* 더 예전은 module을 사용했다! namespace와 같으니 신경쓰지 않아도 됨
module hiddenType {
  export type spaceName = string | number;
} 
*/

let oldSpace: hiddenType.spaceName = "kim";

namespace hiddenType2 {
  export type spaceName = string | number; //  중복이 일어나도 namespace이름만 다르면 문제 없음
}

//----------------------------------------------------------------------------------------------//

/* QUIZ */

// 숙제 1
export type Car = {
  wheel: number,
  model: string
}
export interface Bike {
  wheel: 2,
  model: string
}

// 숙제 2

export type ObjFunction = (x?: object) => void
