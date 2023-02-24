# React에서 TypeScript 사용하기
 함수, 컴포넌트, state, props 타입체크를 잘 해줘야 에러가 나지 않는다.

- 처음부터 React-TypeScript 프로젝트로 설치
  ```bash
  npx create-react-app my-app --template typescript
  ```

- 이미 생성된 React 프로젝트에 설치
  ```bash
  npm install --save typescript @types/node @types/react @types/react-dom @types/jest
  ```

## 1. 일반 변수, 함수 타입지정
타입스크립트 배웠던 대로 똑같이 하면 된다. 

## 2. JSX 타입지정
`JSX.Element` 라는 타입 지정
```tsx
let 박스 :JSX.Element = <div></div>
let 버튼 :JSX.Element = <button></button>
```

## 3. function component 타입지정
파라미터와 return 타입지정

파라미터는 항상 props기 때문에 props의 형태에 따라 타입지정

컴포넌트의 return은 항상 JSX이기 때문에 `:JSX.Element`

```tsx
type AppProps = {
  name: string;
}; 

function App (props: AppProps) :JSX.Element {
  return (
    <div>{message}</div>
  )
}
```
### `JSX.IntrinsicElements` props로 JSX를 입력할 때
```tsx
<Container a={<h4>안녕</h4>} />

function Container (props) {
  return (
    <div>{props.a}</div>
  )
}
```
```tsx
type ContainerProps = {
  a: JSX.IntrinsicElements['h4'];
}; 

function Container (props: ContainerProps) {
  return (
    <div>{props.a}</div>
  )
}
```

## 4. state 문법 사용시 타입지정
state 만들 때 자동으로 타입이 할당된다.

만약에 state의 타입이 변할 수 있는 경우?
- Generic 문법으로 타입을 useState함수에 설정
```tsx
const [user, setUser] = useState<string | null>('kim');
```

<br>

# Redux
- 모든 컴포넌트가 props없이 state 공유 가능
- state를 reducer라는 함수로 정의하여 한 곳에서 관리(수정/유지보수 용이)