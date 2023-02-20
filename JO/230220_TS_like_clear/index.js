// function 함수(x: number | string) {
//   return x + 1  // error : union type은 연산 못해!
// }
// Narrowing
// function 함수(x :number|string) {
//   if (x의 타입이 string이면) {
//     return x + '1'
//   } else { // x의 타입이 string이 아니면
//     return x + 1
//   }
// }
// typeof 이용한 Narrowing
function 함수1(x) {
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
함수1(123);
// function 함수(x: number | string) {
//   let array: number[] = [];
//   if (typeof x === "number") {
//     array[0] = x;
//   }
// }
// as 이용한 Narrowing
function 함수2(x) {
    var array = [];
    array[0] = x; // x의 type을 number로 덮어쓴다.
}
함수2("123"); // (주의) as 문법 사용하면 string 넣어도 error가 아니게 됨
// let 이름 :number = 123;
// (이름 as string) + 1;  //현재문법
// <string>이름 + 1;   //옛날문법
function cleanUp(x) {
    var cleanData = [];
    x.forEach(function (y) {
        if (typeof y === "string") {
            cleanData.push(parseInt(y));
        }
        else {
            cleanData.push(y);
        }
    });
}
var 동물 = { name: "kim", age: 20 };
var 개발짱 = {
    name: "ming",
};
// literal type
// let ming :'개발짱';
var ming;
ming = '개발자';
ming = '개발짱';
// parameter, return 타입선언할 때 특정 글자나 숫자를 넣으면 해당 값만 파라미터에 넣거나 return 할 수 있다.
// 'hello' 라는 자료만 들어올 수 있습니다 ❌
// 'hello' 라는 타입만 들어올 수 있습니다 ⭕
function hello(x) {
    return 1;
}
var 인사 = { korean: '안녕' };
var 인사2 = '안녕';
function sayHello(a) {
    console.log(a);
}
// sayHello(인사.korean);
sayHello(인사2);
// type 함수타입 = (a :string) => { return :number };
// function 함수3() { }
var 함수3 = function (a) {
    return 10;
};
var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (a) {
        return a + 1;
    },
    sayHello: function () {
        console.log('hi');
    }
};
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    return result;
};
var removeDash = function (x) {
    var result = x.replace(/-/g, "");
    return parseFloat(result);
};
var 콜백함수만들기 = function (a, b, c) {
    var result = b(a);
    var result2 = c(result);
    console.log(result2);
};
콜백함수만들기('010-1111-2222', cutZero, removeDash);
