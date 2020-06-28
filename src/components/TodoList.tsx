import React from 'react';

interface TodosProps {
  items : {id: string, text: string}[];
  onDeleteTodo: (id:string) => void;
}


const TodoList : React.FC<TodosProps> = props => {
    return (
        <ul>
            {props.items.map(todo => (
                <li key={todo.id}>{todo.text}
                <span>{todo.text}</span>
                <button onClick={props.onDeleteTodo.bind(null, todo.id)}>DELETER</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList
