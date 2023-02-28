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