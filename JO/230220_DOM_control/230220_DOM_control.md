# 타입스크립트로 HTML 변경과 조작할 때 주의점

tsconfig.json 파일에 옵션 추가하고 실습 진행하기

- null 타입을 엄격하게 체크하는 옵션

```json
"strictNullChecks": true
```

TypeScript로 DOM 탐색을 하고 조작하려고 할 때

```typescript
let 제목 = document.querySelector("#title");

제목.innerHTML = "반가워요."; // error
```

- '제목' 변수가 `union type (Element | null)`이기 때문에 에러
- if문으로 type narrowing 해야함

<br>

## 여러가지 Narrowing 방법

  1. ### 일반적인 narrowing 
      - `if (제목 != null)`
  2. ### instanceof 연산자 (👍가장 좋음)
      - `if (제목 instanceof Element)`
  3. ### assertion 문법 (👎좋지 않음)
      - `let 제목 = document.querySelector('#title') as Element;`
  4. ### optional chaining 연산자 `?.`
      - `if (제목?.innerHTML)`
      
        - 왼쪽에 있는 object 자료안에 .innerHTML이 존재하면 그거 써주시고 없으면 undefined 남겨주세요~
        - && 연산자 대신 사용할 수 있다.
        - if (제목?.innerHTML != undefined)

<br>

## HTML 태그 종류별 타입명칭이 있다.
instanceof 연산자로 Narrowing을 할 때 각 태그에 맞는 타입으로 체크를 해주어야 한다.

- a 태그는 `HTMLAnchorElement`

- img 태그는 `HTMLImageElement`

- h4 태그는 `HTMLHeadingElement`

<br>

> HTML 타입은 `Element`(광범위한 타입) ➡ `HTMLElement`(Element 보다는 구체적인 타입) ➡ `HTMLAnchorElement`(완전 구체적인 타입)으로 세분화 되어 있다. (MDN 문서 참고할 것)

(예시)
```typescript
let 링크 = document.querySelector('#link');
if (링크 instanceof HTMLAnchorElement) {
  링크.href = 'https://kakao.com'
}
```