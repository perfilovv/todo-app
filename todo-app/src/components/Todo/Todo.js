import { RiTodoLine, RiDeleteBin2Line, RiCheckLine } from 'react-icons/ri';
import styles from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../redux/slices/todosSlice';

const Todo = ({ todo }) => {
    const dispatch = useDispatch();
    const deleteTodoListener = (id) => {
        dispatch(deleteTodo(id));
    };
    const toggleTodoListener = (id) => {
        dispatch(toggleTodo(id));
    };
    return (
        <div
            className={`${styles.todo} ${
                todo.isCompleted ? styles.completedTodo : ''
            }`}
        >
            <RiTodoLine className={styles.todoIcon} />
            <div className={styles.todoText}>{todo.text}</div>
            <RiDeleteBin2Line
                className={styles.deleteIcon}
                onClick={() => deleteTodoListener(todo.id)}
            />
            <RiCheckLine
                className={styles.checkIcon}
                onClick={() => toggleTodoListener(todo.id)}
            />
        </div>
    );
};

export default Todo;
