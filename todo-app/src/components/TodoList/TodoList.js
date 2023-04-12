import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

const TodoList = ({ todos }) => {
    return (
        <div className={styles.todoListContainer}>
            {!todos.length && <h2>Todo list is empty</h2>}
            {todos.map((todo, index) => (
                <Todo key={index} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
