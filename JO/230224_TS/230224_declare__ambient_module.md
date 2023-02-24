# 외부 파일 이용시 declare & 이상한 특징인 ambient module

## `declare` 키워드로 재정의하기 
- 이미 정의된 변수나 함수를 재정의할 수 있다.
- declare 붙은 코드들은 js로 변환되지 않는다.
- 컴파일러에게 힌트를 주는 역할의 코드
  -  js파일 변수를 쓰는데 '타입에러' '변수가 없다는 에러'를 방지하고 싶을 때 사용할 수 있다.

```typescript
// (data.js)

var a = 10;
var b = {name :'kim'};

// (index.ts)

declare let a :number;
console.log(a + 1);
```

> tsconfig.json 안에 allowJs 옵션을 true로 켜두면 js파일도 타입지정이 알아서 implicit 하게 된다. 리액트 같은 프로젝트에서 유용

<br>

## TypeScript 특징 : Ambient Module
- Ambient Module : 전역에서 쓸 수 있는 파일
- import export 없이도 타입들을 다른 파일에서 쓸 수 있다.
- ts 파일의 변수와 타입들은 전부 global 변수 취급을 받는다.

  - 타입스크립트에서 let name 이라는 이름의 변수생성이 안되는 이유는 어디선가 기본으로 let name 이미 쓰고있어서!

- import / export 키워드가 하나라도 있으면 그 파일은 로컬 모듈이 된다.
  - 로컬 모듈안의 모든 변수는 export를 해줘야 다른 파일에서 사용 가능
  - 타입스크립트 파일이 다른 파일에 영향끼치는걸 막고싶으면 export 키워드를 강제로 추가

```typescript
// (data.ts)

type Age = number;
let 나이 :Age = 20;

// (index.ts)

console.log(나이 + 1) // 가능
let 철수 :Age = 30; // 가능
```

## declare global
> ts 파일 =  글로벌 모듈

>ts 파일에 import export 문법이 있으면 로컬 모듈 

### 로컬 모듈에서 전역으로 변수 만들기
declare global은 일종의 namespace 문법이다. global 이라는 이름의 namespace에 추가되는 느낌

```typescript
declare global {
  type Dog = string;
} 
```
