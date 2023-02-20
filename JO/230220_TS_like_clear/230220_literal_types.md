# literal types
`특정 글자`나 `숫자`를 타입 그 자체로 만들 수 있다.

변수에 뭐가 들어올지 더 엄격하게 관리 가능

```typescript
// ming 변수의 타입은 '개발짱'
let ming :'개발짱';

let ming : '개발짱' | '개발자';
ming = '개발자';
ming = '개발짱';
```
parameter, return 타입 선언할 때 특정 글자나 숫자를 넣으면 해당 값만 파라미터에 넣거나 return 할 수 있다.
```typescript
function sayHello(x :'안녕') : 1 | 0 | -1 {
  return 1
}
// '안녕'이라는 자료만 들어올 수 있습니다 > ❌
// '안녕'이라는 타입만 들어올 수 있습니다 > ⭕
```

<br>

## literal type의 단점
```typescript
let 인사 = { korean: '안녕'}

function sayHello(a :'안녕') {
  console.log(a);
}

sayHello(인사.korean); // error
```
위의 코드블럭에서 sayHello 함수의 매개변수 type이 `'안녕'`으로 지정됨

따라서 '안녕' 이라는 type을 가진 매개변수만 넣을 수 있게 된다.

`인사.korean`의 값은 '안녕'이 맞으나 type이 `string`이기 때문에 에러가 난다.

```typescript
// type이 '안녕'인 변수
let 인사 :'안녕' = '안녕';

function sayHello(a :'안녕') {
  console.log(a);
}

sayHello(인사);
```
위의 에러를 해결하려면?

1. object 만들 때 타입을 잘 정하거나 

2. 타입을 덮어쓰는 assertion을 쓰거나 (as '안녕')

3. object 자료에 as const 문법 사용하거나

<br>

## as const
이 object는 literal type 알아서 지정해줘!

1. 타입을 object의 value로 바꿔준다. (타입을 '안녕'으로 바꿔줌)

2. object안에 있는 모든 속성을 readonly로 바꿔준다 (변경하면 에러나도록)

```typescript
let 인사 = { korean: '안녕'} as const

function sayHello(a :'안녕') {
  console.log(a);
}

sayHello(인사.korean);
```