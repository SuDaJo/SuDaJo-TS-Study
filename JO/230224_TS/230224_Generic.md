# 타입을 파라미터로 입력하는 Generic

```typescript
function 함수(x :unknown[]) {
  return x[0]
}

let a = 함수(([4, 2]));
console.log(a); // 4 출력

console.log(a + 1); // error
```

a의 값은 4 이지만 type이 `unknown`이라서 연산이 불가능함
### 해결 방법
1. 함수에서 Narrowing 해주거나 as 사용하기
2. Generic 함수 만들기(파라미터로 타입을 입력하는 함수)

<br>

## Generic 함수 만들어서 해결해보기
```typescript
function 함수<WhatType>(x :WhatType[]) :WhatType {
  return x[0]
}

// 함수를 실행할 때 넣는 자료형 타입을 함수의 <WhatType>에 넣어준다. (가변적)
let a = 함수<number>([4, 2]);
let b = 함수<string>(['4', '2']);

console.log(a + 1);
```
Generic은 Narrowing보다 확장성이 있다.

```typescript
function 함수<MyType>(x :MyType) {
  return x - 1; // error
}
```

애매한 것을 싫어하는 TS는 현재 x에 어떤 자료형이 올지 모르기 때문에 에러를 표시한다.

#### 해결법 1️⃣ : `Narrowing` 하기
#### 해결법 2️⃣ : MyType의 타입을 미리 제한하기 `extends`

<br>

## 타입 파라미터 제한하기
여기서 extends는 class나 interface에서의 복사하는 의미가 아니라 우측에 있는 타입을 가지고 있는지 체크하는 것 (조건문 느낌)

extends 우측에는 커스텀 타입도 체크할 수 있다.
```typescript
function 함수<MyType extends number>(x :MyType) {
  return x - 1;
}
let c = 함수<number>(100);
```

```typescript
// 문자로 파라미터를 넣으면 자릿수를 세어서 출력해주는 함수를 Generic으로 만들고 싶습니다.

interface lengthCheck {
  length : number
}

function 문자열길이체크<MyType extends lengthCheck>(x: MyType) {
  return x.length
}

let d = 문자열길이체크<string>('hello'); // 가능
let e = 문자열길이체크<number>(1234); // error
```
(참고)

class도 `class <MyType> {}` 이런 식으로 만들면 new로 뽑을 때 타입파라미터를 집어넣을 수 있다. 

`type Age<MyType> = MyType` 이런 식으로 타입변수에도 사용가능