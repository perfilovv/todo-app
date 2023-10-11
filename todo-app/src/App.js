import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodosActions from './components/TodosActions/TodosActions';

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

    const toggleTodoListener = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : { ...todo }
            )
        );
    };

    const resetTodosListener = () => {
        setTodos([]);
    };

    const deleteCompletedTodosListener = () => {
        setTodos(todos.filter((todo) => !todo.isCompleted));
    };

    const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

    return (
        <div className="app">
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodoListener} />
            {!!todos.length && (
                <TodosActions
                    completedTodosExist={!!completedTodosCount}
                    resetTodos={resetTodosListener}
                    deleteCompletedTodos={deleteCompletedTodosListener}
                />
            )}

            <TodoList
                todos={todos}
                deleteTodo={deleteTodoListener}
                toggleTodo={toggleTodoListener}
            />
            {completedTodosCount > 0 && (
                <h2>{`You have completed ${completedTodosCount} ${
                    completedTodosCount > 1 ? 'todos' : 'todo'
                }`}</h2>
            )}
        </div>
    );
}

export default App;

