// interface의 추가용도!!
// -> object 타입을 정의할 때도 사용하지만
// **class 타입을 확인**하고 싶을 때도 사용! 이때 implements 키워드도 필요하다!

class NewCar {
  model : string;
  price : number = 1000;
  constructor(a :string){
    this.model = a
  }
}
let 붕붕이 = new NewCar("morning");

/* 
class NewCar 로부터 생산되는 object들은 model과 price 속성을 가지게 된다
근데 class가 model, price 속성을 가지고 있는지 타입으로 확인하고 싶으면???
=> interface + implements 키워드로 확인하면 됨
*/

interface CarType {
  model : string,
  price : number
}

class NewCars implements CarType {
  model : string;
  price : number = 1000;
  constructor(a :string){
    this.model = a
  }
}
let 붕붕이2 = new NewCars("morning");

/* 
class 이름 우측에 implements를 쓰고 interface 이름을 쓰면
"이 class가 이 interface에 있는 속성을 다 들고있냐" 
라고 확인이 가능

혹여나 빠진 속성이 있으면 에러로 알려줌
*/

/* 
implements는 타입지정문법X

interface에 들어있는 속성을 가지고 있는지 확인만하라는 뜻!!
class에다가 타입을 할당하고 변형시키는 키워드X
*/

interface CarType2 {
  model : string,
  tax : (price :number) => number;
}

class Cars implements CarType2 {
  model;   ///any 타입됨
  tax (a){   ///a 파라미터는 any 타입됨 
    return a * 0.1
  }
}
/* 
CarType2에 있던 model : string 이런게 반영되는건 아님! class 안에서의 model은 any 타입.
class 함수도 마찬가지로 함수에 있던 number 타입이 전혀 반영X 
=> implements는 class의 타입을 체크하는 용도지 할당하는게 아니다!
*/