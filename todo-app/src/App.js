import { useState } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

import './App.css';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodoListener = (text) => {
        setTodos([...todos, text]);
    };

    const deleteTodoListener = (index) => {
        setTodos(todos.filter((_, id) => id !== index));
    };

    return (
        <div className="app">
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodoListener} />
            <TodoList todos={todos} deleteTodo={deleteTodoListener} />
        </div>
    );
}

export default App;

