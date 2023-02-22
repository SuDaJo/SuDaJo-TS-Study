//rest parameter
function restParam(...a) {
    console.log(a); // (6) [ 1, 2, 3, 4, 5, 6 ]
}
restParam(1, 2, 3, 4, 5, 6);
// 구조분해 할당 destructuring
let [변수1, 변수2] = ["안녕", 100];
let { student2, age } = { student2: true, age: 20 };
console.log(student2);
let studentObj = { student: true, age: 20 };
function newFunc({ student2, age }) {
    console.log(student2, age);
}
newFunc({ student2: true, age: 20 });
/* QUIZ */
/*
(숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
(조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
(조건2) Math.max() 사용금지 반복문이나 쓰셈
*/
function maxNum(...a) {
    let result = a.sort((a, b) => b - a);
    return result[0];
}
console.log(maxNum(6, 3, 7, 2));
function objFunc({ user, comment, admin }) {
    console.log(user, comment, admin);
}
objFunc({ user: 'kim', comment: [3, 5, 4], admin: false });
function arrFunc([a, b, c]) {
    console.log(a, b, c);
}
arrFunc([40, 'wine', false]);
