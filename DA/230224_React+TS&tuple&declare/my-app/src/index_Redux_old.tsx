import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';


// React 에서 Redux 쓰는 이유
// 1. 모든 컴포넌트가 state 공유가능
// 2. state 수정 방법을 파일 한 곳에 정의해둠

const initialValue: { count: number } = { count: 0 };

function reducer(state = initialValue, action: { type: string }){
  if (action.type === "증가") {
    return { ...state, count: state.count + 1 }
  } else if (action.type === "감소") {
    return { ...state, count: state.count + 1 }
  } else {
    return initialValue
  }
}
const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();