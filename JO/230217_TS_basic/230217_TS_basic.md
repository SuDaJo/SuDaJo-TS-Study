# 230217_TypeScript 기초 시작

### `TypeScript = JavaScript + Type 문법`
- TypeScript는 최종적으로 JavaScript로 변환된다.
- JavaScript는 Dynamic Typing이 가능한 언어이기 때문에 Type 지정이 필요할 때가 있다.
  - 예를 들어 숫자와 문자열의 연산이 가능한 것

  - 타입이 자유롭기 때문에 프로젝트의 규모가 커지면 오히려 독이 될 수 있다.

- TypeScript는 에러 메시지가 구체적이다. (오타도 잡아줌)
- TypeScript는 변수의 타입이 확실하지 않으면 연산이 불가능하다.
  - 항상 타입이 무엇인지 미리 체크하는 narrowing 또는 assertion 문법을 사용해야 한다.

<br>

# TypeScript 사용법
- 일반 node 환경에 타입스크립트 컴파일러 설치
  ```bash
  npm install -g typescript
  ```

- 이미 생성된 React 프로젝트에 설치
  ```bash
  npm install --save typescript @types/node @types/react @types/react-dom @types/jest
  ```

- 처음부터 React-TypeScript 프로젝트로 설치
  ```bash
  npx create-react-app my-app --template typescript
  ```

<br>

## 브라우저는 ts 파일을 읽지 못한다.
- 브라우저는 js 파일만 알아보기 때문에 변환해서 사용해야 한다.
  ```
  tsc -w
  ```
  터미널에 상단 명령어를 입력하면 js 파일로 변환해준다.

<br>

## tsconfig.json
- ts -> js 컴파일 시 옵션을 설정하는 것
- TypeScript 컴파일러는 tsconfig.json을 기준으로 컴파일 한다.
- tsconfig.json에 작성한 옵션에 따라 ts와 js 파일에 모두 영향을 주기 때문에 중요하다.
```json
{   
  "compilerOptions" : {     
    "target": "es5",     
    "module": "commonjs",  
  } 
}
```
<details>
<summary>tsconfig.json (예시)</summary>
<div>

```json
  {
  "compilerOptions": {

    "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
    "module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
    "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지 
    "checkJs": true, // 일반 js 파일에서도 에러체크 여부 
    "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
    "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
    "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
    "outDir": "./", //js파일 아웃풋 경로바꾸기
    "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
    "removeComments": true, //컴파일시 주석제거 

    "strict": true, //strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
    "noImplicitAny": true, //any타입 금지 여부
    "strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기 
    "strictFunctionTypes": true, //함수파라미터 타입체크 강하게 
    "strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
    "noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
    "alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기

    "noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
    "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
    "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기 
    "noFallthroughCasesInSwitch": true, //switch문 이상하면 에러내기 
  }
  }
  ```

</div>
</details>

<br>

# Type Alias
- 타입은 변수에 넣어서 사용할 수 있다.
- 타입명은 보통 대문자로 많이 작성한다.
```typescript
type MyType = string | number;

// Array에 사용할 수 있는 tuple type
type Member = [number, boolean];

// Object에 지정할 타입이 많을 경우
// type MemberObj = { name: string, age: string ... };
type MemberObj = { [key: string]: string };
let john: MemberObj = { name: "kim" };
```
- 추가 정리 필요한 내용

> `type` 키워드 / `interface` 키워드와의 차이점
> - `타입의 확장 가능 / 불가능` 여부에 차이가 있다.
> - interface는 extends 또는 implements 가능
> - Type Alias는 extends 또는 implements 불가능
>
  >   - 상속을 통해 확장이 필요하다면 Type Alias보다 interface가 유리하고 interface로 표현할 수 없거나 Union 또는 Tuple을 사용해야한다면 Type Alias를 사용하는 편이 유리하다.

<br>

# Type 지정하기

### `변수명 :타입명`
타입에는 string, number, boolean, bigint, null, undefined, [ ], { } 등이 가능하다.

- ## number / string
  ```typescript
  let userName: string = "kim";
  userName = 123; // type error
  ```

- ## Array
  ```typescript
  let userNameArray: string[] = ["kim", "jo"];
  ```
  - Array에 사용할 수 있는 tuple type

    Array 자료형 안에 순서를 포함해서 어떤 자료가 들어올지 정확히 지정하고 싶은 경우 사용 (Type Alias 참고)
    ```typescript
    let userNameArray2: [string, number] = ["kim", 1];
    ```

- ## Object
  ```typescript
  let userNameObject: {} = { name: "jo" };
  let userNameObject2: { name: string } = { name: "jo" };
  ```
  - 프로퍼티에 name 속성이 있을지 없을지 불확실할 경우 **`?`** 추가하면 옵션으로 지정
    ```typescript
    let userNameObject3: { name?: string } = { name: "jo" };
    ```

- ## Function

  - `매개변수`의 type 지정

    - ✅ 매개변수가 옵션일 경우 사용하는 **`물음표?`** 의 의미   
      -> undefined가 포함된 Union type을 만드는 것과 같다.
      > function 함수(x? :number) { }    
      > function 함수(x :number | undefined) { }

  - `return` 값의 type 지정
  - return이 없을 경우 `void` type 지정
    - 실수로 뭔가를 return 하는 것을 막을 수 있다.

    <br>
  - JavaScript와 다른 점
    - type 지정된 arguments 없이 함수 호출할 수 없다. (`함수()` -> 불가능)

    <br>

  ```typescript
  // parameter type -> number
  // return type -> number
  function 함수(x: number) :number {
    return x * 2
  }

  함수(); // error
  함수("123"); // type error
  ```
  ```typescript
  // void type
  function 함수(x: number) :void {
    return x * 2
    // error : void type은 return 할 수 없다.
  }
  ```
  ```typescript
  // Union type 일 때 narrowing 문법 사용
  function 함수(x: number | string) :void {
    
    // union type은 연산할 수 없으므로 error
    console.log(x + 3);
    
    // narrowing 스킬
    if (x의 타입의 숫자일 때) {
      console.log(x + 3);
    }
  }
  ```

- ## class
  - 미리 변수 만들어서 타입 지정해야함
  ```typescript
  class User {
    name: string; // 미리 변수 만들고 타입 지정
    constructor(name: string) {
      this.name = name;
    }
  }
  ```

<br>

## 타입을 미리 정하기 애매할 때

- ### Union type
  - 변수에 여러 type의 데이터가 들어올 경우 사용
  - Union type은 새로운 타입을 하나 만든 것이기 때문에 기본적으로 연산이 불가능 (ex. `이름 - 1` > 숫자가 아닌 것에 뺄셈을 할 수 없어!)
    - narrowing 또는 assertion 문법으로 가능
  ```typescript
  let 이름: string | number = 123;
  let 회원: (number | string)[] = [1, "2", 3];
  let 오브젝트: { a: string | number } = { a: 123 };
  ```

- ### any
  - 모든 자료형 허용. 타입실드를 해제
  - any를 사용하면 TypeScript를 쓰는 이유가 없으므로 사용 자제
  - 변수를 만들고 할당하지 않으면 자동으로 any type이 할당
  ```typescript
  let 이름 :any;
  이름 = 123;
  이름 = {};

  let 변수1 :string = 이름; // error 나지 않음!

  // 변수1의 type이 string임에도 { } 객체를 할당한다.
  ```

- ### unknown
  - 모든 자료형 허용하지만 any보다 안정성 있음
  - 어떤 자료형도 들어갈 수 있지만 type은 그대로 unknown 이기 때문에 연산이 불가능하다.
  ```typescript
  let 이름 :unknown;
  이름 = 123;
  이름 = {};

  let 변수1 :string = 이름; // error

  // 변수1은 string type 이기 때문에 'unknown' 형식은 'string' 형식에 할당할 수 없다.
  ```

<br>

<details>
<summary>Q. 간단한 퀴즈 풀기</summary>
<div>

```typescript
// Q1. 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보기
let myMusic: { artist: string, song: string } = { artist: "DAY6", song: "그렇더라고요" };
```
```typescript
// Q2. 다음과 같이 생긴 자료의 타입지정 해보기
let project = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}
```
```typescript
let project :{
  member : string[],
  days : number,
  started : boolean,
} = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}
```
</div>
</details>


