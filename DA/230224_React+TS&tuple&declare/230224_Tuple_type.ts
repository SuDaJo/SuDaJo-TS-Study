// array에 타입 지정하는 법
let bark: (string | boolean)[] = ["dog", true];

/* tuple type */
// 더 엄격하게 타입 지정하기 : (순서, 위치까지 고려한 타입지정 가능)
// 첫 번째 자료는 무조건 string / 두 번째 자료는 무조건 boolean
let tupleBark: [string, boolean] = ["dog", true];

// tuple 안에 옵션표시 가능 : 옵션은 무조건 마지막에 와야함, 2개 이상도 가능
let tupleBark2: [string, boolean?] = ["dog"];

function tupleFunc(...x: [number, string]) {
  console.log(x)
}

tupleFunc(1, "2")


let combArr1 = [1, 2, 3];
let combArr2: [number, number, ...number[]] = [4, 5, ...combArr1];

console.log(combArr2) // [ 4, 5, 1, 2, 3 ]


/* QUIZ */
/*
(숙제1) 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.
오늘 배운 tuple 타입으로 타입지정합시다. 

(예시) [ '동서녹차', 4000, true ] 이런 자료 만들고 타입지정하라는 소리입니다.
 */
let currentFood: [string, number, boolean] = ['동서녹차', 4000, true];

/*
(숙제2) 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?
let arr = ['동서녹차', 4000, true, false, true, true, false, true]
몇개인지는 모르겠지만 true와 false가 셋째 자료부터 잔뜩 들어올 수 있다고 합니다. 
tuple 타입과 spread 연산자를 써보도록 합시다.
*/

let arr: [string, number, ...boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true];

/* 
(숙제3) 함수에 타입지정을 해보도록 합시다.
function 함수(){
  
}
1. 이 함수의 첫째 파라미터는 문자,
2. 둘째 파라미터는 boolean,
3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다. 
그럼 함수에 파라미터를 어떻게 만들고 타입지정은 또 어떻게 해야할까요? 
오늘 배운 tuple 타입과 rest parameter를 사용해봅시다. 
*/

function 함수(...x: [string, boolean, ...(number | string)[]]) {

}
함수('a', true, 6, 3, '1', 4)

/*
(숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.
문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다. 
함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다. 

(동작예시)
함수('b', 5, 6, 8, 'a') 이렇게 사용할 경우 이 자리에 [ ['b', 'a'], [5, 6, 8] ] 이 return 되어야합니다. 
*/
function separateFunc(...x : (string | number)[]){
  let result:[string[],number[]] = [[],[]];
  x.map((i) => {
    if(typeof i === "string"){
      result[0].push(i);
    } else {
      result[1].push(i);
    }
  })
  return result;
}

console.log(separateFunc('b', 5, 6, 8, 'a')) // [ [ 'b', 'a' ], [ 5, 6, 8 ] ]