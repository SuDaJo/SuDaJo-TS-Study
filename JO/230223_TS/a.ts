export let 이름 = "kim";
export let 나이 = 20;

export type Name = string;

// type 변수 숨기는 문법
namespace 네임스페이스 {
  export type Name = string | number;
}
// let 변수 :네임스페이스.Name = 'kim';

namespace MyNamespace {
  export interface PersonInterface { age : number };
  export type NameType = number | string;
}

// 이 함수는 파라미터로 object자료 하나를 선택적으로 집어넣을 수 있고 아무것도 return 해주지 않아야합니다. 
export type 함수 = (a? :object) => void

// (숙제) 중복된 타입 에러를 없애려면?
// type Dog = string;
// interface Dog { name : string };

// let dog1 :Dog = 'bark';
// let dog2 :Dog = { name : 'paw' }

namespace GoodDog {
  export type Dog = string;
}
namespace BadDog {
  export interface Dog { name : string };
}

let dog1 :GoodDog.Dog = 'bark';
let dog2 :BadDog.Dog = { name : 'paw' }