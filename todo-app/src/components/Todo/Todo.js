import { RiTodoLine, RiDeleteBin2Line, RiCheckLine } from 'react-icons/ri';
import styles from './Todo.module.css';

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
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
                onClick={() => deleteTodo(todo.id)}
            />
            <RiCheckLine
                className={styles.checkIcon}
                onClick={() => toggleTodo(todo.id)}
            />
        </div>
    );
};

export default Todo;
