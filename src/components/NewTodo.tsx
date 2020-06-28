import React, {useRef} from 'react';
import '../css/new.css'

type NewTodoProps = {
    onAddTodo: (todoText:string)=> void;
};


const NewTodo:React.FC<NewTodoProps> =  props => {
    const textInputRef = useRef<HTMLTextAreaElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText  = textInputRef.current!.value;
        props.onAddTodo(enteredText);
    }
    return (
        <form onSubmit={todoSubmitHandler}>
            <div className='form-container'>
                <label className='label' htmlFor="todo-text">Todo Text</label>
                <textarea id='todo-text' ref={textInputRef} />
            </div>
            <button className='submitButton' type='submit'>Add Todo</button>
        </form>
    )
}

export default NewTodo;