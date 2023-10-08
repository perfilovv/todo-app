import { useState } from 'react';

import styles from './TodoForm.module.css';

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');
    const onSubmitListener = (event) => {
        event.preventDefault();
        addTodo(text);
        setText('');
    };
    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitListener}>
                <input
                    type="text"
                    placeholder="Enter new todo"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default TodoForm;
