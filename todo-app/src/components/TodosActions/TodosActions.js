import { RxReset } from 'react-icons/rx';
import { RiDeleteBin2Line } from 'react-icons/ri';
import Button from '../UI/Button';

function TodosActions() {
    return (
        <>
            <Button title="Reset Todos">
                <RxReset />
            </Button>
            <Button title="Clear Completed Todos">
                <RiDeleteBin2Line />
            </Button>
        </>
    );
}

export default TodosActions;
