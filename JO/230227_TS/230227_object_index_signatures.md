# object index signatures
- 유연한 타입 지정이 가능하다.
- 반대로 엄격하게 타입을 체크하지 않아 버그를 잡지 못할 수 있다.

```typescript
interface StringOnly {
  // string으로 들어오는 key 값의 value에 string 타입지정
  //  { 모든속성 : string }
  [key: string]: string
}

let obj :StringOnly = {
  name : 'kim',
  age : '20',
  location : 'seoul'
}
```

```typescript
interface StringOnly {
  age : number,   // error
  [key: string]: string,
}
// 에러 이유 > { 모든 속성 : string, age : number }

interface StringOnly {
  age : number,   // 가능
  [key: string]: string | number,
}
// { 모든속성 : string | number, age : number }
```

<br>

# object 타입 변환기 만들기
이미 작성된 타입을 다른 타입으로 변환하고 싶을 때

타입을 다시 정의하지 않고 mapping을 이용할 수 있다.

### keyof 연산자
- object 타입이 가지고 있는 모든 key값을 `union type`으로 합친다.
- object의 key를 뽑아서 새로운 타입을 만들고 싶을 때 사용하는 연산자

```typescript
interface Person {
  age: number;
  name: string;
}
type PersonKeys = keyof Person;   // "age" | "name" 타입이 된다. literal type
let a :PersonKeys = 'age'; // 가능
let b :PersonKeys = 'ageeee'; // 불가능
```

```typescript
interface Person {
  [key :string]: number; // object key값에 숫자 넣어도 문자로 치환됨
}
type PersonKeys = keyof Person;  // string | number 타입
let a :PersonKeys = 'age'; // 가능
let b :PersonKeys = 'ageeee'; // 가능
```

## Mapped Types
object에 들어올 속성을 한번에 지정하고 싶을 때

`[ 자유작명 in keyof 타입파라미터 ] : 원하는 타입`

object 타입을 입력했을 때 속성명은 그대로지만 다른 타입으로 변환해주는 변환기

```typescript
type Car = {
  color: boolean,
  model : boolean,
  price : boolean | number,
};

type TypeChanger <MyType> = {
  [key in keyof MyType]: string;  // Mapped Types
};

type NewType = TypeChanger<Car>;

let obj :NewType = {
  color: 'red',
  model : 'kia',
  price : '300',
}
// NewType은 color, model, price 속성을 가지고 있으며 전부 string 타입이 된다.
```
⬇ 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기
```typescript
type Bus = {
  color : string,
  model : boolean,
  price : number
}

type TypeChanger <MyType, T> = {
  [key in keyof MyType]: T;
};

type NewBus = TypeChanger<Bus, boolean>;
type NewBus2 = TypeChanger<Bus, string[]>
```