// Type Narrowing -> Type이 아직 확정되지 않았을 경우
// union type 등 때문에 어떤 변수가 타입이 불확실 할 경우 if문 등으로 Narrowing 해줘야 조작 가능
function myFunc(x: number | string) {
  if (typeof x === "string") {
    return x + 1;
  } else {
    return;
  }
}

myFunc(123);

// Narrowing 시 if문을 썼을 떄 끝까지 써야 안전!
//else, else if 안 쓰면 에러가 날 수 있다.
function exNarrow(x: number | string) {
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  } else {
    return
  }

  // Narrowing으로 판정해주는 문법들
  /* 
  typeof 변수
  속성명 in 오브젝트 자료
  인스턴스 instanceof 부모
  */
}

exNarrow(123);


// Type Assertion -> 타입 덮어쓰기

function exAsser(x: number | string) {
  let array: number[] = [];

  array[0] = x as number; // 왼쪽에 있는 변수를 number로 덮어 써라
  // Assertion의 용도
  /* 
  1. Narrowing 할 때 사용 : type을 a에서 b로 변경X
  2. 무슨 타입일 들어올 지 100% 확실할 때 사용
  3. 비상용, 디버깅용...
  */
}
/* 
예전 as 문법
let exAs : string = "kim";
<number>exAs
*/

exAsser("123"); // assertion을 해 놓으면 이런 버그를 캐치하지 못함


/* QUIZ */

/* (숙제1) 숫자여러개를 array 자료에 저장해놨는데
가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
이걸 클리닝해주는 함수가 필요합니다. 
클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
[1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
 */

function cleaning(x: (number | string)[]) {
  let result: number[] = [];

  x.map((i) => {
    if (typeof i === "string") {
      result.push(parseInt(i))
    } else {
      result.push(i)
    }
  })
  return result
}

console.log(cleaning([123, '3']))

/* (숙제2) 다음과 같은 함수를 만들어보십시오.

let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }
지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다. 
과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다. 
철수쌤같은 선생님 object 자료를 집어넣으면 
그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
그리고 타입지정도 엄격하게 해보도록 합시다. 

만들함수( { subject : 'math' } )  //이 경우 'math'를 return
만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다 

*/

function filterSubject (x :{subject : string | string[]}) {
  if (typeof x.subject === "string") {
    return x.subject
  } else if (Array.isArray(x.subject) ){
    return x.subject[x.subject.length - 1]
  } else {
    return "nope"
  }
}

console.log(filterSubject({ subject : ["english", "art"] }))