// interface의 추가용도!!
// -> object 타입을 정의할 때도 사용하지만
// **class 타입을 확인**하고 싶을 때도 사용! 이때 implements 키워드도 필요하다!
class NewCar {
    constructor(a) {
        this.price = 1000;
        this.model = a;
    }
}
let 붕붕이 = new NewCar("morning");
class NewCars {
    constructor(a) {
        this.price = 1000;
        this.model = a;
    }
}
let 붕붕이2 = new NewCars("morning");
class Cars {
    tax(a) {
        return a * 0.1;
    }
}
/*
CarType2에 있던 model : string 이런게 반영되는건 아님! class 안에서의 model은 any 타입.
class 함수도 마찬가지로 함수에 있던 number 타입이 전혀 반영X
=> implements는 class의 타입을 체크하는 용도지 할당하는게 아니다!
*/ 
