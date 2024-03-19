import { RxReset } from 'react-icons/rx';
import { RiDeleteBin2Line } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosActions.module.css';
import { useDispatch } from 'react-redux';
import { deleteCompletedTodo, resetTodos } from '../../redux/slices/todosSlice';

function TodosActions({ completedTodosExist }) {
    const dispatch = useDispatch();
    const resetTodosListener = () => {
        dispatch(resetTodos());
    };

    const deleteCompletedTodosListener = () => {
        dispatch(deleteCompletedTodo());
    };

    return (
        <div className={styles.todosActionsContainer}>
            <Button title="Reset Todos" onClick={() => resetTodosListener()}>
                <RxReset />
            </Button>
            <Button
                title="Clear Completed Todos"
                onClick={() => deleteCompletedTodosListener()}
                disabled={!completedTodosExist}
            >
                <RiDeleteBin2Line />
            </Button>
        </div>
    );
}

export default TodosActions;
