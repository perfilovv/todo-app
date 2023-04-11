import { useState } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    return (
        <div className="app">
            <h1>Todo App</h1>
            <TodoForm />
            <TodoList todos={todos} />
        </div>
    );
}

export default App;

