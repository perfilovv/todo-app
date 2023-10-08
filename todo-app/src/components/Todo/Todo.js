import { RiTodoLine } from 'react-icons/ri';
import styles from './Todo.module.css';

const Todo = ({ todo, deleteTodo }) => {
    return (
        <div className={styles.todo} onDoubleClick={() => deleteTodo(todo.id)}>
            <RiTodoLine className={styles.todoIcon} />
            <div className={styles.todoText}>{todo.text}</div>
        </div>
    );
};

export default Todo;
