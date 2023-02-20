// 더 엄격한 타입 지정을 할 땐 Literal Types -> 미리 들어올 수 있는 자료를 정의해 놓는것
let myName;
// myName = 456; -> Error! Type '456' is not assignable to type '123'.
myName = 123;
let itsMe;
itsMe = "DADA"; // - 변수에 뭐가 들어올 지 더 엄격하게 관리 가능
function testLiteral(a) {
    // console.log(a)
    return 1;
}
testLiteral("hello");
/* QUIZ */
/* 1. 가위 or 바위 or 보 중 1개 입력가능
2. 가위 or 바위 or 보 만 들어올 수 있는 array를 return 해야함 */
function rsp(x) {
    return ["가위"];
}
console.log(rsp("가위"));
// Lteral type의 문제점
var data = {
    name: "kim"
}; // 이 object는 literal type 지정 자동으로 해주라는 뜻
// object value 값을 그대로 타입으로 지정해줌  (타입을 'kim'으로)
// object 속성들에 모두 readonly 적용 (변경하면 에러)
console.log(data.name);
function myFunction(a) {
    // "kim" 이라는 자료만 들어올 수 있다 X
    // "kim" 이라는 타입만 들어올 수 있다 O
}
myFunction(data.name); // -> Error!! -> Argument of type 'string' is not assignable to parameter of type '"kim"'.
