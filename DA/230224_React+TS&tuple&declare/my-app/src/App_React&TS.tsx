import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

/*
- React + TS 설치 방법
npx create-react-app 프로젝트명 --template typescript
- Redux 설치 방법
npm install redux react-redux
*/

// 1. 일반 변수, 함수 타입지정
let myname: string = "Lee";

// 2. JSX 타입지정
let box: JSX.Element = <div></div>;
let button: JSX.Element = <button></button>;

function App() {

  // 5. useState 타입지정 -> 알아서 해줘서 신경안써줘도 됨
  // 드물지만!! string | number 가 들어오게 된다면 generic 사용하면 해결
  const [user, setUser] = useState<string | number>("kim");

  return (
    <div>
      <h4>REACT + TS 시작!!</h4>
      <Prifile name="dada" age="20" />
    </div>
  );
}

// 3. component 타입지정 -> 함수이므로 파라미터와 return 타입지정
// 컴포넌트는 return으로 JSX를 뱉으니 당연히 return 타입으로 JSX.Element 사용
// 4. props 타입지정 -> 객체로 들어오기 때문에 객체처럼 지정! type alias 권장
function Prifile(props: { name: string, age: string }): JSX.Element {
  return (
    <div>{props.name} 입니다!</div>
  )
}

export default App;
