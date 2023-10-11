import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

import './App.css';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodoListener = (text) => {
        const newTodo = {
            text,
            isCompleted: false,
            id: uuidv4(),
        };
        setTodos([...todos, newTodo]);
    };

    const deleteTodoListener = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleTodoHandler = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : { ...todo }
            )
        );
    };

    return (
        <div className="app">
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodoListener} />
            <TodoList
                todos={todos}
                deleteTodo={deleteTodoListener}
                toggleTodo={toggleTodoHandler}
            />
        </div>
    );
}

export default App;

