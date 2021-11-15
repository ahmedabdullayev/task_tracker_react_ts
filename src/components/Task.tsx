import {FaTimes} from "react-icons/fa";

interface task { //making our "type"
    id?: number,
    text?: string,
    day?: string,
    reminder?: boolean,
}
interface props {
    taskOne: task
    onDelete: any
}
const Task = ({taskOne, onDelete}:props) => {
    return (
        <div className={'task'}>
            <h3>{taskOne.text} <FaTimes style={{color:'red', cursor: 'pointer'}} onClick={() => onDelete(taskOne.id)}/></h3>
            <p>{taskOne.day}</p>
        </div>
    );
};

export default Task;
