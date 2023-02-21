# interface

Object에 타입지정할 때 `type 키워드`와 `interface 문법`
### - type 키워드(Type Alias)
```typescript
type Square = {
  color :string,
  width :number
}

let 사각형 :Square = { color: "red", width: 100 }
```

### - interface 문법
  - `=` 할당 필요 없음
  - 프로퍼티간 구분 시 세미콜론으로도 가능

```typescript
interface Square {
  color :string, // 세미콜론으로 구분 가능;
  width :number
}

let 사각형 :Square = { color: "red", width: 100 }
```

<br>

## extends

```typescript
interface 학생타입 {
  name :string
}

interface 선생타입 {
  name :string, // 학생타입과 중복되는 속성
  age :number
}

let 학생 :학생타입 = { name: "kim" }
let 선생 :선생타입 = { name: "Jo", age: 20 }
```

extends 사용하여 중복되는 속성 상속받기
```typescript
interface 학생타입 {
  name :string
}

interface 선생타입 extends 학생타입 {
  age :number
}

let 학생 :학생타입 = { name: "kim" }
let 선생 :선생타입 = { name: "Jo", age: 20 }
```

<br>

##  intersection type `&`

교차 타입

두 타입을 모두 만족하게 하라는 뜻

```typescript
type Animal = { name : string }
type Cat = { age : number } & Animal
```
interface 문법도 `&` 가능함

interface 문법의 extends와 비슷하게 사용할 수 있지만 타입 내부의 속성이 중복되었을 경우 주의사항 참고할 것

>❗ 주의    
>`&` 기호로 오브젝트 type 만들 때 중복된 속성을 지정해도 에러가 나지 않음. 하지만 그 속성은 never type으로 지정되어 type을 사용할 수 없음    
>```typescript
>type Animal = { name : string }
>type Cat = { name : number } & Animal
>let 고양이 :Cat = { name : "kim" } // error
>```


<br>

## interface와 type 차이점
### interface
- 타입명 중복 선언 가능 ⭕
  - 자동으로 타입이 합쳐짐
- extends 가능 ⭕
  - 타입 내부에 중복된 속성 있으면 에러

### type
- 타입명 중복 선언 불가능 ❌
- extends 불가능 ❌

> 일반적인 상황에선 type 키워드 자주 활용하면 되는데 다른 사람이 내 코드를 이용하는 상황이 많으면 interface로 유연하게 만드는게 좋다. (type과 interface 문법을 잘 알고 있으면 기준은 정하기 나름이다.)

<details>
<summary>interface 숙제</summary>
<div>

(숙제1)

```typescript
interface Cart {
  product : string,
  price : number
}

interface NewCart extends Cart {
  card : boolean;
}

let 장바구니1 :Cart[] = [
  { product : '청소기', price : 7000 },
  { product : '삼다수', price : 800 }
]

let 장바구니2 :(NewCart | Cart)[] = [
  { product : '청소기', price : 7000, card : false },
  { product : '삼다수', price : 800 }
]
```
(숙제2)
```typescript
interface OperatorType {
  plus :(a :number, b :number) => number,
  minus :(a :number, b :number) => number
}

let operator :OperatorType = {
  plus(a, b) {
    return a + b
  },

  minus(a, b) {
    return a - b
  }
}
```

</div>
</details>
