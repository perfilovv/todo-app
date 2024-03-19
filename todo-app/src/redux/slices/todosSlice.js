import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            return [...state, action.payload];
        },
        deleteTodo(state, action) {
            return state.filter((todo) => todo.id !== action.payload);
        },
        toggleTodo(state, action) {
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo
            );
        },
        deleteCompletedTodo(state) {
            return state.filter((todo) => !todo.isCompleted);
        },
        resetTodos: () => {
            return initialState;
        },
    },
});

export const {
    addTodo,
    deleteTodo,
    toggleTodo,
    deleteCompletedTodo,
    completedTodosCount,
    resetTodos,
} = todosSlice.actions;

export default todosSlice.reducer;
