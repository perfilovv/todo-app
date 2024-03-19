import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './TodoForm.module.css';
import Button from '../UI/Button';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/slices/todosSlice';

const TodoForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const newTodo = {
        text,
        isCompleted: false,
        id: uuidv4(),
    };

    const onSubmitListener = (event) => {
        event.preventDefault();

        if (text) {
            dispatch(addTodo(newTodo));
            setText('');
        }
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
