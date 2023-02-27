// index signature을 사용 하면 Object 타입 한번에 지정 가능

/* 보통 이렇게 쓰지만
interface ObjUserType {
  name: string,
  age: string,
  location: string
} 
*/ // 모든 속성은 string이라고 타입지정도 가능!

interface ObjUserType {
  age: "28", // => 허용
  // age: number, => age가 모든 속성에 걸리게 되므로 index signature와 중복되는 속성이라고 인식 => 이는 불가능 하다
  [key: string]: string | number,
  // 모든 문자로 된 속성 : string 이라는 의미
}

let ObjUser: ObjUserType = {
  name: "kim",
  age: "28",
  location: "seoul",
}

interface ObjUserNumType {
  [key: number]: string
  // [key: string] : string => key가 문자화가 되기때문에 string이라고 해도 오류나지 않음
}

let ObjUserNum: ObjUserNumType = {
  // 속성이름이 숫자인 경우?
  0: "dada",
  1: "20",
}

/* 
interface MyCssType {
  "font-size": {
    "font-size": {
      "font-size": number
    }
  }
} 
*/

// recursive하게 타입 만드는 법
interface MyCssType {
  "font-size": MyCssType | number
}
// object자료가 4중첩 5중첩 X중첩되어도 대응가능 

let css: MyCssType = {
  "font-size": {
    "font-size": {
      "font-size": 14
    }
  }
}


/* QUIZ */
/* 
(숙제1) 다음 자료의 타입을 지정해보십시오.
귀찮으니까 한번에 지정하기 위해 index signature 이걸 써봅시다. 
*/
interface SigObjType {
  [key: string]: string | number
}

let obj: SigObjType = {
  model: 'k5',
  brand: 'kia',
  price: 6000,
  year: 2030,
  date: '6월',
  percent: '5%',
  dealer: '김차장',
}
// 유연한 타입지정이 가능하지만 엄격하지 않아서 버그를 잡아준다는 장점은 없어질 수 있음


/* 
(숙제2) 다음 object 자료의 타입을 interface 써서 만들어보십시오. 
object 안에 object 안에 object가 들어있습니다.
타입지정 해보도록 합시다. 물론 비슷한 object들이 더 중첩되어도 가능하게 recursive한 타입을 써보는건 어떨까요. 
*/

interface RecurObjType {
  'font-size': number,
  [key: string]: number | RecurObjType,
}
let obj2: RecurObjType = {
  'font-size': 10,
  'secondary': {
    'font-size': 12,
    'third': {
      'font-size': 14
    }
  }
}
