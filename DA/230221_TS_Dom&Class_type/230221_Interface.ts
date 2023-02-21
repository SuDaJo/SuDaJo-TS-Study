// Object 타입 지정방법
/*
1. type 키워드로 타입변수 생성가능
2. interface 키워드로 타입변수 생성가능
*/

interface SquarInter {
  color: string; // , or ; 상관 없음
  width: number;
}
type SquarType = { color: string, width: number }

let square: SquarInter = { color: "red", width: 100 }

/* QUIZ */

interface StudentType {
  name: string
}
interface TeacherType extends StudentType {
  age: number;
}

let student: StudentType = { name: "kim" }
let teacher: TeacherType = { name: "kim", age: 20 }

// interface의 장점!! -> extends로 복사 가능

// 물론 type alias도 가능 &(intersection type 교차타입)
// -> extends와 완전 같지는 않음! 복사가 아니라 두 타입을 전부 만족하는 타입이라는 의미
// extends쓸 때 중복속성 발생 시 에러로 잡아준다
type Animal = { name: string }
type Cat = { age: number } & Animal

/* type VS interface */

// interface -> 중복선언 가능(합쳐짐)
// 이렇게 두개가 선언되면 두 개의 타입을 모두 가지고 있도록 자동 extends가 됨
/* interface StudentType {
  score : number
} */

// typed -> 중복선언 자체가 불가능

type NewAnimalType = { name: string }
type CatType = { name: number } & NewAnimalType // & 사용시 중복속성이 발생하면 미리 에러나지 않지만 추후 사용시 에러
// let nyang :CatType = {name : "dada"} // Type 'string' is not assignable to type 'never'.


/* QUIZ */

/*
(숙제1) interface 이용해서 간단하게 타입을 만들어봅시다
let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다. 어떻게 코드를 짜면 될까요?
무슨 타입일지는 알아서 기입합시다.
*/
interface Product {
  brand: string,
  serialNumber: number,
  model: string[]
}

let 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] }

/*
(숙제2) array 안에 object 여러개가 필요합니다.
쇼핑몰 장바구니를 구현하려고 하는데 
let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 
이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요? 
오늘 배운 interface 문법을 써봅시다.
*/
interface Shopping {
  product: string,
  price: number
}

let 장바구니: Shopping[] = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }]

/*
(숙제3) 위에서 만든 타입을 extends 해봅시다.
갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다. 
{ product : '청소기', price : 7000, card : false }
위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.
*/
interface MyCart extends Shopping {
  card: boolean
}

/*
(숙제4) object 안에 함수를 2개 넣고 싶은데요 
1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 
2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 
이 object 자료를 어떻게 만들면 될까요? 
interface를 이용해서 object에 타입지정도 해보십시오.
*/
interface MathObj {
  plus: (a: number, b: number) => number,
  minus: (a: number, b: number) => number
}

let myObj: MathObj = {
  plus(a, b) {
    return a + b
  },
  minus(a, b) {
    return a - b
  }
} 