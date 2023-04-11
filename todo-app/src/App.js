import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

import './App.css';

function App() {
    return (
        <div className="app">
            <h1>Todo App</h1>
            <TodoForm />
            <TodoList />
        </div>
    );
}

export default App;

