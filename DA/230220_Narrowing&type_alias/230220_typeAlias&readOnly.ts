// Type alias -> type 변수 작명할 시, 첫글자는 대문자로 한다 : 일반 변수와 구분짓기 위함
// 같은 이름의 type 변수는 재정의 불가능
type AnimalType = string | number | undefined;
let animal: AnimalType = 123;
// let animal: Animal = "123"; 아무 문제 없음

type AnimalObjType = { name: string, age: number };
let animalObj: AnimalObjType = { name: "kim", age: 28 };

// const의 특징 : 재할당은 금지! but, const로 담은 Object 수정을 막는 것은 아님
const 출생지역 = { region: "daejeon" };
출생지역.region = "seoul";

// TS는 Object 자료 수정 막기도 가능하다 (.ts 파일에서만 작동)

type FriendType = {
  readonly name: string // 수정 시 에러 -> readonly속성: 읽기전용으로 잠근다
}
const friend: FriendType = {
  name: "dada"
}
// friend.name = "nyang"; -> Error! 
//TS에러는 에디터& 터미널에서만 존재하고 실제 변환된 js에서는 에러 없음

type GirlfriendType = {
  name?: string // Object속성 안에서도 ? 사용 가능
  // name: string | undefined
}


// type도 union으로 합치기 가능 
type Name = string;
type Age = number;
type Person = Name | Age;

// & 연산자로 object type 합치기
type PositionX = { x: number };
type PositionY = { y: number };
type PositionXY = PositionX & PositionY;

let position: PositionXY = {
  x: 10,
  y: 20
}


/* QUIZ */

/* (숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
그건 여러분들이 한번 테스트해보길 바랍니다.  */
type PosiX = { x: number };
type PosiY = { x: number };
type PosiXY = PosiX & PosiY;

// let posi: PosiXY = {
//   x: 20,
//   x: 40
// } 에러남 An object literal cannot have multiple properties with the same name.

/* (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다. 
1. 이 타입은 object 자료형이어야합니다.
2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
type alias로 만들어보셈  */

type MultiType = {
  color?: string,
  size: number,
  readonly position: number[]
}

let multiTest: MultiType = {
  size: 123,
  position: [1, 2, 3]
}

/* (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 

1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.  */

type UserType = {
  name: string,
  phone: number,
  email?: string
}
let joinInfo: UserType = {
  name: 'kim',
  phone: 123,
}

/* (숙제4). 다음을 만족하는 type alias를 만들어보십시오.
1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다. */

type IsAdultType = { isAdult: boolean };
type NewInfo = UserType & IsAdultType

let newJoinInfo :NewInfo = {
  name : 'kim',
  isAdult : false,
  phone : 1234
}