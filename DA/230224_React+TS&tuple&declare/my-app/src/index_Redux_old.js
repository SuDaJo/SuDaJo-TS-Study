"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const client_1 = require("react-dom/client");
require("./index.css");
const App_1 = require("./App");
const reportWebVitals_1 = require("./reportWebVitals");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
// React 에서 Redux 쓰는 이유
// 1. 모든 컴포넌트가 state 공유가능
// 2. state 수정 방법을 파일 한 곳에 정의해둠
const initialValue = { count: 0 };
function reducer(state = initialValue, action) {
    if (action.type === "증가") {
        return Object.assign(Object.assign({}, state), { count: state.count + 1 });
    }
    else if (action.type === "감소") {
        return Object.assign(Object.assign({}, state), { count: state.count + 1 });
    }
    else {
        return initialValue;
    }
}
const store = (0, redux_1.legacy_createStore)(reducer);
const root = client_1.default.createRoot(document.getElementById('root'));
root.render(<react_1.default.StrictMode>
    <react_redux_1.Provider store={store}>
      <App_1.default />
    </react_redux_1.Provider>
  </react_1.default.StrictMode>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1.default)();
