import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{items: Todo[]}> = (props) => { 
  // React.FC -> 리엑트 패키지에 정의된 타입
  // 함수형 컴포넌트로 동작한다는 것을 명시함
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} todoText={item.text} />
      ))}
    </ul>
  );
}

export default Todos;