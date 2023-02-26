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

## d.ts 파일 이용하기
- 타입 정의된 내용(`type`, `interface`...)만 저장할 수 있는 파일형식이다. (definition의 약자인 d)
- 자바스크립트로 컴파일되지 않는다.
- d.ts 파일은 자동으로 글로벌 모듈이 되지 않는다. (ambient module❌)
- 정의해둔 타입은 `export` 해서 사용해야 한다.

  - 한 번에 많은 타입을 export 하고 싶은 경우
    - `namespace`에 사용
    - `import * as` 문법 사용
- 함수의 경우 함수에 { } 중괄호 불가능. 파라미터 & return 타입만 지정가능


```typescript
export type Age = number;
export type multiply = (x :number ,y :number) => number
export interface Person { name : string }
```

주로 어디다 씀?
1. 타입정의만 따로 저장해놓고 import 해서 사용
2. 프로젝트에서 사용하는 타입을 쭉 정리해놓을 레퍼런스용으로 사용
    - tsconfig.json에 `"declaration": true` 옵션 추가
    - 저장시 자동으로 ts파일마다 d.ts 파일 생성

### export 없이 d.ts 파일을 글로벌 모듈 만들기
d.ts 파일은 일반 ts 파일과 다르게 import export 없어도 로컬모듈이다.
- 프로젝트 내에 types/common 폴더 두개 생성
- tsconfig.json 파일에 `"typeRoots": ["./types"]` 옵션 추가
- ts 파일 작성할 때 타입이 없으면 자동으로 여기서 타입 찾아서 적용한다.
- 다만 이걸 쓸 경우 파일명.d.ts 자동생성 기능은 끄는게 좋음
- d.ts 파일명은 기존 ts 파일명과 안겹치게 작성하는게 좋음

### 유명한 JS 라이브러리들은 대부분 d.ts 파일을 제공 
npm으로 타입스크립트 타입정의된 버전의 라이브러리 설치 시
- node_modules/@types 이런 경로에 타입이 설치됨
- 컴파일러는 자동으로 여기 있는 타입 파일을 참고해서 타입을 가져옴
- `typeRoots` 옵션이 있을 경우 node_modules/@types 폴더를 추가해야 한다. 아니면 그냥 typeRoots 옵션을 제거