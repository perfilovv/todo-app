import Todo from '../Todo/Todo';

const TodoList = ({ todos }) => {
    return todos.map((todo, index) => <Todo key={index} todo={todo} />);
};

export default TodoList;
