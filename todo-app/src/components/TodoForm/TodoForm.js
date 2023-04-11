import './TodoForm.module.css';

const TodoForm = () => {
    return (
        <form>
            <input type="text" placeholder="Enter new todo" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default TodoForm;
