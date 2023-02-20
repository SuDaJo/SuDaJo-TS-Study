{
  /* 
  JavaScript에서의 타입은 Primitive와 Object로 나뉨.

  - Primitive : numberm, string, boolean, bigint, symbol, null, undefined
  - Object : function, array ......

  - TypeScript에서도 동일하게 타입이 존재하는데 좀 더 엄격하게 관리가 됨. 
  */

  // 1. TypeScript의 기본 타입
  // 타입 스크립트는 타입을 지정하여 변수를 선언하며 지정한 타입외의 타입이면 에러를 출력

  // 1-1. number

  const num: number = 1;
  // const num2: number = "d";  XXXXX

  // 1-2. string

  const str: string = "hello";

  // 1-3. boolean

  const boalTrue: boolean = true;
  const boalFalse: boolean = false;

  // 1-4. undefined : 값이 아직 결정되지 않았음을 의미

  let name: undefined; // 직접 선언해주면 해당 변수에는 undefined만 들어갈 수 있음.

  let age: number | undefined; // 직접 선언해주지 않고 이런식으로 자주 사용합니다.

  age = undefined;
  age = 54;

  // 1-5. null : 값이 비어있음을 명시적으로 알림 undefined와 의미론적으로 다름

  let person: null; // 마찬가지로 이런식으로 쓰이지는 않습니다.
  let person2: string | null; // undefined와 비슷하게 사용이 됩니다.
}

/////////////////////////////////////////////////////////////////////////////

{
  // 1. TypeSciprt의 다양한 타입들

  // 1-1. unknown : 알수 없음을 의미하며 데이터 타입이 모호해지므로 가능한 쓰지않는 것이 좋습니다.
  let notSure: unknown = 0; // 어떤 데이터 타입이 담길지 알수 없음을 의미

  notSure = "he"; // notSure이 unknown이므로 어떤 데이터 타입이던 들어갈 수 있음

  // 1-2. any : unknown과 마찬가지로 데이터 타입이 모호해지므로 가능한 쓰지맙시다.
  let anything: any = 0;
  anything = "hello";

  // 1-3. void : 주로 아무것도 리턴하지 않는 함수에 사용이 되며 생략이 가능합니다. (컨벤션에 따라서)
  function print(): void {
    console.log("hello");
    return; // 리턴을 적어주지 않으면 아무것도 리턴하지 않는 함수이며 실제로는 return이 생략된 것
  }

  // 1-4. never : 함수에서 무언가 절대 리턴하지 않을 때 명시하기 위하여 사용이 됨.
  function throwError(message: string): never {
    // message => server (log)
    throw new Error(message);
  }

  // 1-5. objet : 원시 타입을 제외한 모든 타입을 담을 수 있으며 이또한 모호해지므로 쓰지 않는 것이 좋습니다.
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "SU" });
  acceptSomeObject({ animal: "dog" });
}
