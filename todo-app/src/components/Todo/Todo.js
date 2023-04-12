import { MdOutlineTaskAlt } from 'react-icons/md';
import styles from './Todo.module.css';

const Todo = ({ todo, index, deleteTodo }) => {
    return (
        <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
            <MdOutlineTaskAlt className={styles.todoIcon} />
            <div className={styles.todoText}>{todo}</div>
        </div>
    );
};

export default Todo;
