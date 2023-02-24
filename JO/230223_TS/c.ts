namespace 네임스페이스 {
  export type Name = string | number;
}

namespace MyNamespace {
  export interface PersonInterface { age : number };
  export type NameType = number | string;
}

// 아래의 함수와 namespace를 같이 export 하면 import 시 에러뜸!
// export type 함수 = (a? :object) => void

namespace GoodDog {
  export type Dog = string;
}
namespace BadDog {
  export interface Dog { name : string };
}

