// (숙제1) 다음 자료의 타입을 지정해보십시오.
export type Car = {
  [key :string] : number | string
}

let obj :Car = {
  model : 'k5',
  brand : 'kia',
  price : 6000,
  year : 2030,
  date : '6월',
  percent : '5%',
  dealer : '김차장',
}

// (숙제2) 다음 object 자료의 타입을 interface 써서 만들어보십시오. 
interface MyType {
  'font-size' :number,
  [key :string] : number | MyType
}

let obj2 :MyType = {
  'font-size' : 10,
  'secondary' : {
    'font-size' : 12,
    'third' : {
      'font-size' : 14
    }
  }
}

type FirstItem<T> = T extends any[] ? T[0] : any 

let age1 :FirstItem<string[]>;
let age2 :FirstItem<number>; 


//(숙제1) 타입 파라미터로 

//1. array 타입을 입력하면
//2. array의 첫 자료가 string이면 string 타입을 그대로 남겨주고 
//3. array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?

type Age<T> = T extends [string, ...any] ? T[0] : unknown;

let age3 :Age<[string, number]>;
let age4 :Age<[boolean, number]>; 