# never type

함수의 return에 사용할 수 있는 never type
- 조건 1 : return 값이 없어야 한다.
- 조건 2 : endpoint가 없어야 한다. (함수 실행이 끝나지 않아야 한다.)
  - 사실 모든 함수는 `return undefined`를 가지고 있다.
  - 함수 실행이 끝나지 않으면 return이 없는 것이다.

<br>

- endpoint가 없는 함수 예시
  ```typescript
  function 함수() :never {
    throw new Error('에러')
  }
  ```
  에러를 발생시키면 코드 실행이 중단되지만 함수가 종료되지는 않는다.

  ```typescript
  function 함수() :never {
    while(true) {
      // 무한 실행
    }
  }
  ```
  while문 안에 조건이 true기 때문에 함수가 무한 실행된다.

<br>

### 대부분 `:void` 로 대체 가능하다.
return이 없는 함수를 만들고 싶으면 그냥 void를 쓰자.

<br>

### 🧐 `:never`가 무엇을 의미하는지 이해하기

<br>

#### - 파라미터가 never 타입이 되는 경우가 있음
  - 잘못된 Narrowing 사용
  - 코드 수정 필요~

  ```typescript
  function 함수(a :string) {
    if ( typeof a === "string"){
      parameter + 1;
    } else {
      parameter;
    }
  }
  ```
  위의 예시에서 매개변수 a는 string만 들어올 수 있는 함수이다. Narrowing으로 타입이 string일 때 실행할 조건식을 작성했는데 else(타입이 string이 아닐 경우)문 자체가 말이 안되기 때문에 파라미터의 타입이 never로 바뀐다.

<br>

#### - 자동으로 never 타입을 가지는 경우 
- `함수 선언문`이 아무것도 return 하지 않고 끝나지도 않을 경우 `void` 타입이 자동으로 return 타입으로 할당

- `함수 표현식`이 아무것도 return 하지 않고 끝나지도 않을 경우 `never` 타입이 자동으로 return 타입으로 할당됩니다.

```typescript
function 함수(){
  throw new Error()
}

let 함수2 = function (){
  throw new Error()
}
```