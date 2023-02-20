# `Type Aliases`
### 타입을 변수에 담아서 쓰자!

```typescript
let 동물: { name: string, age: number } = { name: "kim", age: 20 };

// type 변수 사용
type Animal = { name: string, age: number };
let 동물 :Animal = { name: "kim", age: 20 };
```

- const 변수는 재할당이 불가능하지만 object 내부의 값에 접근하여 수정하는 것이 가능하다.
- TypeScript를 이용하면 object 값을 수정했을 때 에러를 띄울 수 있다. (❌실행을 막는 것은 아님!)

- `readonly` : object 속성을 수정하려고 하면 에러를 표시한다.
  ```typescript
  type FE = {
    readonly name :string
  }

  const 개발짱 :FE = {
    name : 'ming'
  }

  개발짱.name = 'lee' // error
  ```
- 각각의 type 변수를 합쳐서 union type 변수로 만드는 것도 가능하다.
  - OR `|` 연산자로 합치기
    ```typescript
    type Name = string;
    type Age = number;
    type Person = Name | Age;
    ```

  - `&` 연산자로 합쳐서 object type `extend` 하기
    ```typescript
    type PositionX = { x: number };
    type PositionY = { y: number };
    type NewPosition = PositionX & PositionY;
    // { x: number, y: number }
    ```
- 같은 이름의 type 변수를 재정의 하는 것은 불가능하다.
- type의 속성이 선택사항이라면 `?` 사용하기
  - ?는 `"undefined 라는 타입도 가질 수 있다"`는 뜻

<br>

## 함수의 Type Alias
- 화살표 함수의 형태 `() => {}` 로 타입 변수를 만들 수 있다.
- `함수 표현식에만 Type Alias를 사용`할 수 있다.

```typescript
// 함수의 Type Alias
type 함수타입 = (a :string) => number;
type 함수타입 = (a :string) => { return :number };

// 함수선언식에는 적용 불가 >> function 함수() { }

let 함수 :함수타입 = function(a) {
  return 10
}
```

콜백함수 만드는 숙제
```typescript
type 함수타입1 = (x :string) => string
type 함수타입2 = (x :string) => number
type funcType = (a :string, b :함수타입1, c :함수타입2) => void

let cutZero :함수타입1 = function(x) {
    let result = x.replace(/^0+/, "");
    return result
}

let removeDash :함수타입2 = function(x) {
    let result = x.replace(/-/g, "");
    return parseFloat(result)
}

let 콜백함수만들기 :funcType = function(a, b, c) {
  let result = b(a);
  let result2 = c(result)
  console.log(result2);
}

콜백함수만들기('010-1111-2222', cutZero, removeDash)
```