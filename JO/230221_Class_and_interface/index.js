var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    Person.prototype.함수 = function (a) {
        console.log("안녕" + a);
    };
    return Person;
}());
var 사람1 = new Person("Jo");
var 사람2 = new Person("kim");
// Person.prototype.함수 = function() { }
// (숙제1) Car 클래스를 만들고 싶습니다.
// 1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
// 2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다. 
// 3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요. 
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        // return this.price / 10;
        return this.price * 0.1;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300
// (숙제2) class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
// 1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면 
// 2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고 
// 3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
// 4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈 
var Word = /** @class */ (function () {
    function Word() {
        var word = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            word[_i] = arguments[_i];
        }
        var num = [];
        var str = [];
        word.forEach(function (item) {
            if (typeof item === "number") {
                num.push(item);
            }
            else {
                str.push(item);
            }
        });
        this.numArray = num;
        this.strArray = str;
    }
    return Word;
}());
var word = new Word('kim', 3, 5, 'park');
console.log(word.numArray); //[3,5]
console.log(word.strArray); //['kim', 'park'] 
var 학생 = { name: "kim" };
var 선생 = { name: "Jo", age: 20 };
var 장바구니1 = [
    { product: '청소기', price: 7000 },
    { product: '삼다수', price: 800 }
];
var 장바구니2 = [
    { product: '청소기', price: 7000, card: false },
    { product: '삼다수', price: 800 }
];
var operator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};
