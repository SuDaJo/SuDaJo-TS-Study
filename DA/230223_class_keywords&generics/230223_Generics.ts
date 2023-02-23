// generic -> 함수에 타입도 파라미터로 입력 가능

function arrFunc<MyType>(x: MyType[]): MyType {
  // 해결 1) narrowing or as
  // 해결 2) Generic함수 만들기 -> 파라미터로 타입을 입력하는 함수 
  // : 확장성에서 장점이 있다 매번 다른 타입 출력 가능!!
  return x[0] // 숫자 나오면 숫자로 타입변환! 같은것을 해주지 않음
}

let result = arrFunc<number>([6, 4, 3])
let result2 = arrFunc<string>(["6", "4", "3"])

console.log(result); // 6
// console.log(result + 1); // result의 type이 unknown이라 불가능


// 타입 파라미터 제한 두기
// extends로 MyType2가 우측에 있는 속성을 가지고 있는 지 판별
function numFunc<MyType2 extends number>(x: MyType2) {
  return x - 1;
}

let numResult = numFunc<number>(100)
console.log(numResult); // 99


// 커스텀 타입으로도 타입파라미터 제한가능
interface LengthCheck {
  length : number
}

function numFunc2<MyType3 extends LengthCheck>(x: MyType3) {
  return x.length
}

let lenResult = numFunc2<string[]>(["100"])
console.log(lenResult); // 1

// 정리
/* 
1. 함수에 타입파라미터 넣을 수 있음
2. extends 키워드로 넣을 수 있는 타입 제한가능
3. class에도 타입 파라미터 넣을 수 있음
*/


/* QUIZ */
/* 
(숙제1) 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요? 
연습삼아 Generic 이런걸로 만들어봅시다. 굳이 Generic 이런게 필요는 없겠지만요 

(동작 예시)
함수<string>('hello') 이렇게 사용하면 콘솔창에 5가 나와야합니다. 
함수<string[]>( ['kim', 'park'] ) 이렇게 사용하면 콘솔창에 2가 나와야합니다.
*/


function lengthCheck<LengthType extends string | string[]>(x :LengthType) {
  return x.length
}
let lengthResult = lengthCheck<string>('hello') 
console.log(lengthResult) // 5
let lengthResult2 = lengthCheck<string[]>(['kim', 'park'])
console.log(lengthResult2) // 2
/* 
(숙제2) Animal 이라는 타입이 있습니다.

interface Animal {
  name : string;
  age : number 
}

let data = '{"name" : "dog", "age" : 1 }'
그리고 data라는 변수도 있습니다. object처럼 생겼지만 따옴표 쳐진 JSON 자료입니다. 
data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.
근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?
오늘 배운 Generic을 이용해서 구현해보도록 합시다.  

(동작 예시)
함수<Animal>(data) 이렇게 쓰면 이 자리에 { name : 'dog' , age : 1 } 이런 object 자료가 남아야합니다. 근데 타입은 Animal임 
*/
interface Animals {
  name : string;
  age : number 
}

let datas = '{"name" : "dog", "age" : 1 }'

function parseData(x :string){
  return JSON.parse(x)
}
let parsed = parseData(datas);
console.log(parsed) // { name: 'dog', age: 1 }

/* 
(숙제3) class 를 수정해봅시다.

class Person {
  name;
  constructor(a){
    this.name = a;
  }
}
let a = new Person('어쩌구');
a.name //any 타입이 되었넹 

지금 만든 class는 new Person('어쩌구') 라고 분명 문자를 집어넣었는데 any 타입이 name 속성에 부여됩니다.
이게 싫어서 파라미터에 string을 집어넣으면 string 타입
number를 집어넣으면 number 타입
string[]을 집어넣으면 string[] 타입이 되게 하려면 위의 코드를 어떻게 수정해야할까요? 
오늘 배운 Generic을 이용해봅시다. 
*/

class Personal<NewType> {
  name;
  constructor(a :NewType){
    this.name = a;
  }
}
let a = new Personal<string>('어쩌구');
a.name //any 타입이 string이 되었넹 