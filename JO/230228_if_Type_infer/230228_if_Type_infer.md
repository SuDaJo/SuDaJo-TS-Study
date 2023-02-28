# 조건문으로 타입만들기 & infer

### 삼항연산자

조건 `?` true일 때 실행문 `:` false일 때 실행문

타입도 삼항연산자로 지정 가능

## 타입 조건식은 주로 extends 키워드와 삼항연산자를 이용

extends는 왼쪽이 오른쪽의 성질을 가지고 있냐" 라는 뜻으로 사용하기 때문에 조건식으로 성립한다.

```typescript
type Age<T> = T extends string ? string : unknown;
let age : Age<string> //age는 string 타입
let age2 : Age<number> //age는 unknown 타입
```
타입이 확실하지 않은 <타입파라미터> 다룰 때 많이 사용

<br>

## infer 키워드
infer 키워드는 지금 입력한 타입을 변수로 만들어주는 키워드

```typescript
type Person<T> = T extends infer R ? R : unknown; 
type 새타입 = Person<string> // 새타입은 string 타입입니다 
```

1. infer 키워드는 조건문 안에서만 사용 가능

2. infer 우측에 자유롭게 작명해주면 타입을 T에서 유추해서 R이라는 변수에 집어넣어라~ 라는 뜻입니다.

    그래서 위의 예제에서 <string> 이렇게 타입파라미터자리에 string 집어넣으면 R은 string이 된다.

3. R을 조건식 안에서 맘대로 사용가능합니다.

타입파라미터에서 타입을 추출해서 쓰고싶을 때 쓸 수 있다.

  1. array 안에 있던 타입이 어떤 타입인지 뽑아서 변수로 만들 수 있다.

      ```typescript
      type 타입추출<T> = T extends (infer R)[] ? R : unknown; 
      type NewType = 타입추출< boolean[] > // NewType 은 boolean 타입입니다 
      ```
      `(infer R)[ ]`에서 array가 가지고 있던 타입 `boolean`부분만 쏙 뽑아서 `R` 변수에 할당

  2. 함수의 return 타입이 어떤 타입인지 뽑아서 변수로 만들 수 있다. (사실상 개념 설명을 위한 코드)

      ```typescript
      type 타입추출<T> = T extends ( ()=> infer R ) ? R : unknown; 
      type NewType = 타입추출< () => number > // NewType은 number 타입입니다 
      ```

      타입파라미터에 <함수>를 넣음
      
      타입파라미터에 있는 return 타입을 R이라는 변수에 담음

`ReturnType< >` 이라는 예약 타입이 있는데 여기에 함수타입 넣으면 return 타입만 뽑아서 알려줌 
