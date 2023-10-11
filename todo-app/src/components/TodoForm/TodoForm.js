import { useState } from 'react';

import styles from './TodoForm.module.css';
import Button from '../UI/Button';

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
                <Button type="submit" title="Submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default TodoForm;
