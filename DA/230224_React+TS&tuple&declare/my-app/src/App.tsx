import React, { useState } from 'react'
import "./App.css";
import { useSelector, useDispatch } from 'react-redux';
import {RootState, increment} from './index'; //예전 문법
import {Dispatch} from 'redux';

function App() {
  const 꺼내온거 = useSelector((state: RootState ) => state);
  const dispatch :Dispatch = useDispatch();
  return (
    <div className='App'>
      {/* {꺼내온거.count} */}
      {꺼내온거.counter1.count}
      {/* <button onClick={() => {dispatch({type : "증가"} )}}>버튼</button> */}
      <button onClick={() => {dispatch(increment())}}>버튼</button>
      {/* reduxjs totolkit 방식 dispatch 하는 법 */}
    </div>
  )
}

export default App;