# 230220_타입스크립트는 타입이 애매한 것을 싫어한다.

## 타입 확정하기 : Narrowing & Assertion
`Narrowing` : type을 하나로 거르기

`Assertion` : type을 덮어쓰기

어떤 변수가 type이 불확실한 경우(union type, unknown 등) Narrowing을 통해 type을 하나로 걸러낸다.
```typescript
function 함수(x :number|string) {
  if (x의 타입이 string이면) {
    return x + '1'
  } else { // x의 타입이 string이 아니면
    return x + 1
  }
}
```
- 대표적인 Narrowing 방법 (type을 하나로 거른다!)
  - ### `typeof`
    ```typescript
    function 함수(x :number|string) {
      if (typeof x === 'string') {
        return x + '1'
      } else {
        return x + 1
      }
    }

    함수(123);
    ```

  - ### 속성명 `in` 오브젝트자료형

  - ### 인스턴스 `instanceof` 부모

  - ### Assertion 문법 `as`
    - `as`의 용도
      - type을 a에서 b로 변경하는 것이 아니다. (number 타입을 as string 이렇게 바꾸려고 하면 error)
      - union type 같이 복합적일 때 하나의 타입으로 Narrowing 하는 것!
      - 해당 변수의 `type이 100% 확실할 때 사용`할 것
      - 타입실드 임시 해제용으로 생각하기
        ```typescript
        // typeof 사용한 Narrowing
        function 함수(x :number|string) {
          let array :number[] = [];
          if (typeof x === 'number') {
            array[0] = x;
          }
        }
        ```
        ```typescript
        // as 사용한 Narrowing
        function 함수(x :number|string) {
          let array :number[] = [];
          array[0] = x as number; // x의 type을 number로 덮어쓴다.
        }
        함수('123'); // string을 넣어도 error가 아니게 되므로 주의!
        ```

        - as 문법은 언제 사용?
          1. 왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러해결용
          2. 내가 어떤 타입이 들어올지 정말 확실하게 알고 있는데 컴파일러 에러가 방해할 때
          3. 타입을 강제로 부여하는 함수를 만들 때
              ```typescript
              type Person = {
                name : string
              }
              function 변환기<T>(data: string): T {
                return JSON.parse(data) as T;
              }
              const jake = 변환기<Person>('{"name":"kim"}');
              ```

        - 옛날 as 문법
          ```typescript
          let 이름 :number = 123;
          
          (이름 as string) + 1;  //현재문법
          <string>이름 + 1;   //옛날문법
          ```