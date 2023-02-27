// 조건부 타입 : if문은 삼항연산자로
// 조건식은 extends 써야한다
// <> 일반 타입 변수에도 사용가능
type AgeGetType<T> = T extends string ? T : unknown;
let newA: AgeGetType<string> // string
let newA2: AgeGetType<number> // unknown


/* QUIZ */
/*
그럼 파라미터로 array 자료를 입력하면 array의 첫 자료의 타입을 그대로 남겨주고,
array 자료가 아니라 다른걸 입력하면 any 타입을 남겨주는 타입은 어떻게 만들면 될까요?
*/

type FirstItem<T> = T extends any[] ? T[0] : any

let age1: FirstItem<string[]>; // string
let age2: FirstItem<number>; // any


// infer : 조건문에서 쓸 수 있는 키워드! 타입을 왼쪽에서 추출해줌
type InferPerson<T> = T extends infer R ? R : unknown; // 보통 R or return type
let age3: InferPerson<string> // but, 실용성이 부족하다!


// 예시2 -> array 내부의 타입만 뽑고 싶을 때
type 타입추출<T> = T extends (infer R)[] ? R : unknown;
let age4: 타입추출<string[]> // string -> 같은 위치에 있는 것을 비교 후 넣어줌

// 예시3 -> 함수를 넣으면 함수의 return 타입만 뽑고 싶을 때
type 함수타입추출<T> = T extends ( () => infer R ) ? R : unknown;
let age5: 함수타입추출<() => void> // void


/* QUIZ */
/* 
(숙제1) 타입 파라미터로 
1. array 타입을 입력하면
2. array의 첫 자료가 string이면 string 타입을 그대로 남겨주고 
3. array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?

(동작예시)
let age1 :Age<[string, number]>;
let age2 :Age<[boolean, number]>; 
이러면 age1의 타입은 string, age2의 타입은 unknown이 되어야합니다. (array나 tuple이나 그게 그거임)

이걸 만족하는 type Age를 만들어봅시다.
*/
type ParamCheck<T> = T extends [string, ...any] ? T[0] : unknown;
let age6 :ParamCheck<[string, number]>;
let age7 :ParamCheck<[boolean, number]>; 

/* 
(숙제2) 함수의 파라미터의 타입을 뽑아주는 기계를 만들어보십시오. 

타입뽑기<(x :number) => void> //이러면 number가 이 자리에 남음
타입뽑기<(x :string) => void> //이러면 string이 이 자리에 남음
아무튼 함수의 파라미터타입이 남아야합니다.
*/

type PickType<T> = T extends (x: infer R) => any ? R : any;
type a = PickType<(x :number) => void> 
type b = PickType<(x :string) => void> 