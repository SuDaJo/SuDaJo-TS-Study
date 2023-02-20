var userName = "kim";
// userName = 123;
// userName 변수는 string 타입으로 지정되어 number 자료형이 할당될 수 없다.
var userName2 = 123; // Union type 지정
var userNameArray = ["kim", "jo"];
var userNameArray2 = ["kim", 1];
var userNameObject = { name: "jo" };
var userNameObject2 = { name: "jo" };
// name 속성이 있을지 없을지 불확실할 경우 "?" 추가하면 옵션으로 지정
var userNameObject3 = { name: "jo" };
// 함수에 타입지정
// parameter type -> number
// return type -> number
function 함수(x) {
    return x * 2;
}
var john = { name: "kim" };
// class 문법에 type 지정
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var 회원 = [1, "2", 3];
var 오브젝트 = { a: 123 };
// any와 unknown의 차이
// let 이름 :any;
// 이름 = 123;
// 이름 = {};
// let 변수1 :string = 이름;
// let 이름 :unknown;
// 이름 = 123;
// 이름 = {};
// let 변수1 :string = 이름;
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
function 안녕(name) {
    if (name) {
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(name, "!"));
    }
    else {
        console.log("이름이 없습니다.");
    }
}
안녕("밍");
안녕();
function count(x) {
    return x.toString().length;
}
function 결혼가능하니(money, house, charm) {
    var score = 0;
    score += money;
    if (house === true) {
        score += 500;
    }
    if (charm === "상") {
        score += 100;
    }
    if (score >= 600) {
        return "결혼 가능합니다.";
    }
}
console.log(결혼가능하니(100, true, '상'));
