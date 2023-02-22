# Narrowing 하는 방법 추가
1. null & undefined 타입일 경우 처리하는거 
2. 복잡한 object자료들 narrowing 하는거

<br>

## 1. `&&` 연산자로 null & undefined 체크하기

```typescript
function 함수(a :string | undefined) {
  if (a && typeof a === 'string') {
    // a가 string이면 if문 실행
    // a가 undefined (falsy)값이면 if문 실행 안됨
  }
}
```

> && 기호로 비교할 때 true와 false를 넣는게 아니라 자료형을 넣으면 && 사이에서 처음 등장하는 falsy 값을 찾아주고 그게 아니면 마지막 값을 남겨준다. falsy 값은 false와 유사한 기능을 하는 null, undefined, NaN 이런 값들을 의미한다.

> if (변수 != null) 이렇게 작성해도 null, undefined 거를 수 있다.

<br>

## 2. `in` 키워드로 object 자료형 Narrowing 하기
서로 가지고 있는 속성이 다를 때 유용하게 사용할 수 있다.

`속성명 in 오브젝트`

오브젝트가 어떤 속성을 가지고 있는지 판별 가능

```typescript
type Fish = {swim :string}
type Bird = {fly :string}

function 함수(animal :Fish | Bird) {
  if ('swim' in animal) {
    // type이 Fish인지 체크한 것
    animal.swim
  }
}
```

<br>

## 3. `instanceof` 연산자로 object 자료형 Narrowing 하기
비슷한 오브젝트 객체일 때 부모 Class가 무엇인지 체크할 수 있다.
`오브젝트 instanceof 부모Class`

```typescript
let 날짜 = new Date();

if (날짜 instanceof Date) {
  // 날짜 변수가 Date Class에서 생성된 객체인지 판별
  console.log('참이에요')
}
```

<br>

## 4. `literal type` 으로 object 자료형 Narrowing 하기

object 안에 각각 유니크한 자료를 달아두면 나중에 구분하기 편리하다. id 느낌~

```typescript
// 비슷하게 생긴 오브젝트 Narrowing
// 속성명 같음 -> in 키워드 불가능
// 부모Class 없음 -> instanceof 불가능

// 애초에 같은 type으로 만들면 될듯
// 하지만 굳이 구분을 해야한다면?
// literal type으로 구분

type Car = {
  wheel : '4개', // literal type
  color : string
}
type Bike = {
  wheel : '2개', // literal type
  color : string
}

function 함수(x : Car | Bike){
  if (x.wheel === '4개'){
    console.log('이 차는 ' + x.color)
  } else {
    console.log('이 바이크는 ' + x.color)
  }
}
```