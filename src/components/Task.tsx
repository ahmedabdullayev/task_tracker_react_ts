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
    onToggle: any
}
const Task = ({taskOne, onDelete, onToggle}:props) => {
    return (
        <div className={`task ${taskOne.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(taskOne.id)}>
            <h3>{taskOne.text}  <FaTimes style={{color:'red', cursor: 'pointer'}} onClick={() => onDelete(taskOne.id)}/></h3>
            <p>{taskOne.day}</p>
        </div>
    );
};

export default Task;
