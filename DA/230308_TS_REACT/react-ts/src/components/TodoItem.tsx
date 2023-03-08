const TodoItem: React.FC<{ todoText: string }> = (props) => {
  return (
    <li>{props.todoText}</li>
  )
}

export default TodoItem;