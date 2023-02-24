// TS 파일 -> TS파일 변수를 가져다 쓰고싶을 때 : import export 사용 but! 없어도 됨
// import { tsTots } from './declare_data';
export{} // => 다종으로 로컬모듈로 만들어줌

// 글로벌 변수를 만들고 싶을때!
declare global {
  type Doggy = string;
}

// .js에 있는 변수를 .ts에서 이용하고 싶을 때
// index.html에 script src 넣기


// 변수 재정의가 가능한 declare 문법
// 일반 js 파일등에 있던 변수를 사용할 때 에러나지 않도록 재정의
declare let declareA:number;


// declare로 정의한 내용은 js로 변환되지 않음
console.log(declareA  + 1);


// 특히 .js로 만든 라이브러리(ex.jQuary) 사용할 때 변수, 함수 같은것을 declare로 재정의 하기도 함
// $().append


// ts의 이상한 특징
// : 모든 ts 파일을 ambient module(글로벌 모듈)이다.
console.log(tsTots)