//rest parameter

function restParam(...a: number[]) { // 다른 파라미터가 있으면 맨 뒤에만 사용 가능
  console.log(a); // (6) [ 1, 2, 3, 4, 5, 6 ]
}
restParam(1, 2, 3, 4, 5, 6);

// 구조분해 할당 destructuring
let [변수1, 변수2] = ["안녕", 100];
let { student2, age } = { student2: true, age: 20 };
console.log(student2)
let studentObj = { student: true, age: 20 };

function newFunc({ student2, age }: { student2: boolean, age: number }) {
  console.log(student2, age)
}
newFunc({ student2: true, age: 20 })



/* QUIZ */
/* 
(숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 
(조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
(조건2) Math.max() 사용금지 반복문이나 쓰셈
*/

function maxNum(...a: number[]) {
  let result = a.sort((a, b) => b - a);
  return result[0]
}
console.log(maxNum(6, 3, 7, 2));

/* 
(숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
함수( { user : 'kim', comment : [3,5,4], admin : false } )
어떻게 코드를 짜야할까요?
(조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
(조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.
 */
type ObjFuncType = {
  user: string,
  comment: number[],
  admin: boolean
}

function objFunc({ user, comment, admin }: ObjFuncType): void {
  console.log(user, comment, admin)
}
objFunc({ user: 'kim', comment: [3, 5, 4], admin: false })

/* 
(숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
함수( [40, 'wine', false] )
어떻게 코드를 짜야할까요?
(조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
(조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
*/
type ArrFuncType = (number | string | boolean)[]
function arrFunc([a, b, c]: ArrFuncType) {
  console.log(a, b, c);
}
arrFunc([40, 'wine', false])