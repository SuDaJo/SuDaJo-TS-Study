"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./App.css");
const react_redux_1 = require("react-redux");
const index_1 = require("./index"); //예전 문법
function App() {
    const 꺼내온거 = (0, react_redux_1.useSelector)((state) => state);
    const dispatch = (0, react_redux_1.useDispatch)();
    return (<div className='App'>
      {/* {꺼내온거.count} */}
      {꺼내온거.counter1.count}
      {/* <button onClick={() => {dispatch({type : "증가"} )}}>버튼</button> */}
      <button onClick={() => { dispatch((0, index_1.increment)()); }}>버튼</button>
      {/* reduxjs totolkit 방식 dispatch 하는 법 */}
    </div>);
}
exports.default = App;
