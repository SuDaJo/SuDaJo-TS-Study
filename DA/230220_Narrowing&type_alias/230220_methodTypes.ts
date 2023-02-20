// 함수에 type alias 부착하려면 함수 표현식을 사용해야 함
type MethodType = (a: string) => number;

let exMethod: MethodType = function (a) {
  return 10;
}

// object 안에 함수 만들기
type Member = {
  name: string,
  age: number,
  plusOne: (x: number) => number,
  changeName: () => void
}

let User: Member = {
  name: "kim",
  age: 30,
  plusOne(a) {
    return a + 1
  },
  changeName: () => {
    console.log('hi');
  }
}
User.plusOne(1);
User.changeName();


/* (숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
- cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
- removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 
- 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 
물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다.  */

type CutZeroType = (a: string) => string;
let cutZero: CutZeroType = function (a) {
  let result = a.replace(/^0/, "");
  return result;
}

type RemoveDashType = (x: string) => number;
let removeDash:RemoveDashType = function(x) {
  let replaceDash = x.replace(/-/,"")
  return parseInt(replaceDash)
}

function makeFunc(a :string, func1 :CutZeroType, func2 :RemoveDashType){
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2)
}
makeFunc('010-1111-2222', cutZero, removeDash)