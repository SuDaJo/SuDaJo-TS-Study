// function return 값에 붙일 수 있는 never type
// -> 실제론 쓰이지 않음 :void 로 대체가 가능하기 때문에
// 조건 1) return값이 없어야 함
// 조건 2) endpoint가 없어야 함 (함수 실행이 끝나지 않아야 함) 
function neverFunc() :never {
  throw new Error() // 코드 실행 중단! 끝나진 않음
  while(true){
    // 무한반복함수
  }
}

/* never type이 등장하는 경우1 */
// 파라미터가 never 타입이 되는 경우
function exNever1(parameter :string) {
  if(typeof parameter === "string") {
    console.log(parameter)
  } else {
    console.log(parameter) // (parameter) parameter: never
    // 이런 경우는 있을 수 없기 때문에 never가 뜸
  }
}


/* never type이 등장하는 경우1 */
// 자동으로 never 타입을 가지는 경우(함수 표현식)
let exNever2 = function() { // let exNever2: () => never
  throw new Error();
}

/* 
함수 선언문이 아무것도 return 하지 않고 끝나지도 않을 경우 void 타입이 자동으로 return 타입으로 할당
함수 표현식이 아무것도 return 하지 않고 끝나지도 않을 경우 never 타입이 자동으로 return 타입으로 할당
*/