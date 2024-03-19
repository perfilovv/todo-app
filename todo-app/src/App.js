import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodosActions from './components/TodosActions/TodosActions';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
    const todos = useSelector((state) => state.todos);
    const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;
    return (
        <div className="app">
            <h1>Todo App</h1>
            <TodoForm />
            {!!todos.length && (
                <TodosActions completedTodosExist={!!completedTodosCount} />
            )}

            <TodoList />
            {completedTodosCount > 0 && (
                <h2>{`You have completed ${completedTodosCount} ${
                    completedTodosCount > 1 ? 'todos' : 'todo'
                }`}</h2>
            )}
        </div>
    );
}

export default App;
