"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementByAmount = exports.decrement = exports.increment = void 0;
const react_1 = require("react");
const client_1 = require("react-dom/client");
require("./index.css");
const App_1 = require("./App");
const reportWebVitals_1 = require("./reportWebVitals");
const toolkit_1 = require("@reduxjs/toolkit");
const react_redux_1 = require("react-redux");
// 이 문법의 장점
// 1. 함수라 가독성이 좋다
// 2. state 수정 시 사본을 반들 필요가 없다
const 초기값 = { count: 0, user: 'kim' };
// state + reducer 합친 것을 slice라 한다
const counterSlice = (0, toolkit_1.createSlice)({
    name: 'counter',
    initialState: 초기값,
    reducers: {
        increment(state) {
            state.count += 1;
        },
        decrement(state) {
            state.count -= 1;
        },
        incrementByAmount(state, action) {
            state.count += action.payload;
        }
    }
});
let store = (0, toolkit_1.configureStore)({
    reducer: {
        counter1: counterSlice.reducer
    }
});
//수정방법 만든거 export
_a = counterSlice.actions, exports.increment = _a.increment, exports.decrement = _a.decrement, exports.incrementByAmount = _a.incrementByAmount;
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
