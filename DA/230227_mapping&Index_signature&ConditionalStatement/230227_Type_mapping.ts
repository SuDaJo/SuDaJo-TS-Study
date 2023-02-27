let keyofObj = { name: "dada", age: 20 }
console.log(Object.keys(keyofObj)) // [ 'name', 'age' ]

// keyof -> key 값을 전부 가져옴 // TS의 Object.keys임
interface Persons {
  age: number,
  name: string
}

type Personkeys = keyof Persons; // "age" | "name" union type으로 전부 가져온ㄷ나

let personkeys1: Personkeys = "age"
let personkeys2: Personkeys = "name"

// index signature에 keyof 사용할 때
interface PersonIndexSig {
  [key: string]: number
}

type PersonSig = keyof PersonIndexSig; // string | number
let personkeys3: PersonSig = "name"


// mapping -> 타입을 한꺼번에 바꿔치기

type MyCar = {
  color: boolean,
  model: boolean,
  price: boolean | number
} // 잘못 지정한 타입

type TypeChanger<MyType> = {
  [key in keyof MyType]: string
  // [ 자유작명 in keyof 타입파라미터 ] : 원하는 타입
  // price 속성은 string | number 이 되게 하기?
  // - 조건문으로 가능
}

type ChangedType = TypeChanger<MyCar>


/* QUIZ */
/* 
(숙제1) 다음 타입을 변환기를 돌려보십시오.
type Bus = {
  color : string,
  model : boolean,
  price : number
}
동료가 잘못 만든 타입입니다.
color, model, price 속성은 전부 string 또는 number 타입이어야합니다.
1. 변환기 하나 만드시고
2. 기존 Bus 타입을 변환기 돌려서 위 조건을 충족하는 새로운 타입을 하나 만들어보십시오.
*/

type Bus = {
  color: string,
  model: boolean,
  price: number
}
type ChangeBusType<MyType> = {
  [key in keyof MyType]: string | number
}
type ChangedBusType = ChangeBusType<Bus> 

/* 
(숙제2) 이런 변환기는 어떻게 만들어야할까요?
object안에 들어있는 모든 속성을
string, number 이렇게 고정된 타입으로 변환해주는게 아니라
내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보십시오.
*/

type BusTypeChanger<MyType, inpType> = {
  [key in keyof MyType] : inpType
}

type NewBus = BusTypeChanger<Bus, boolean>;
type NewBus2 = BusTypeChanger<Bus, string[]>;