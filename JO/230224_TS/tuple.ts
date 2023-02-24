// 기존에 지정하던 방식
// let 멍멍 :(string | boolean)[] = ["dog", true];

// tuple type으로 자료의 위치까지 엄격하게 지정
let 멍멍 :[string, boolean] = ["dog", true];
// let 멍멍 :[string, boolean] = ["dog", true, 123]; // error


function 함수(...x :[string, number] ){
  console.log(x)
}

함수('kim', 123)  //가능
// 함수('kim', 123, 456)  // 에러
// 함수('kim', 'park')  // 에러

let arr = [1, 2, 3];
let arr2 :[number, number, ...number[]] = [4, 5, ...arr];


function 분류함수(...item :(string | number)[]) {
  let result :[string[], number[]] = [[], []];
  item.forEach((i) => {
    if (typeof i === 'string') {
      result[0].push(i)
    } else {
      result[1].push(i)
    }
  })
  return result;
}