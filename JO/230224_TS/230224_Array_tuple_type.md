# array 자료에 붙일 수 있는 tuple type

- 자료의 위치까지 엄격하게 지정할 수 있는 타입

```typescript
// 기존에 지정하던 방식
let 멍멍 :(string | boolean)[] = ["dog", true];

// tuple type으로 자료의 위치까지 엄격하게 지정
let 멍멍 :[string, boolean] = ["dog", true];

let 멍멍 :[string, boolean] = ["dog", true, 123]; // error
```

- tuple 안에 옵션 `?`표시 가능한데 옵션은 항상 맨 끝에만 넣을 수 있다.

  - 옵션이 들어오지 않을 경우 array의 순서가 바뀌기 때문!
    ```typescript
    let 멍멍 :[string, boolean, number?] = ["dog", true];
    ```
  - 옵션이 여러 개 있는 것은 가능
    ```typescript
    let 멍멍 :[string, boolean?, number?] = ["dog", true];
    ```

## `...` rest parameter에 tuple type 지정
나머지 매개변수는 array로 파라미터를 받기 때문에 array 형태로 타입을 지정하는데 더 엄격하게 tuple로 지정할 수 있다.

```typescript
function 함수(...x :[string, number] ){
  console.log(x)
}

함수('kim', 123)  // 가능
함수('kim', 123, 456)  // error
함수('kim', 'park')  // error
```

## spread 문법에서 tuple type 지정
spread 연산자 사용한 곳에 몇 개의 자료가 들어올지 모르는 상황에 tuple type 지정하려면 똑같이 `...` spread를 붙여서 array 타입지정 한다.

```typescript
let arr = [1, 2, 3];
let arr2 :[number, number, ...number[]] = [4, 5, ...arr];
```