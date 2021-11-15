import Task from "./Task";
import React from "react";
interface task { //making our "type"
    id?: number,
    text?: string,
    day?: string,
    reminder?: boolean,
}
interface props {
    tasks: task[]
    onDelete: any
}
const Tasks = ({tasks, onDelete}:props) => {

    return (
        <>
            {tasks.map( (task) => (
                <Task key={task.id} taskOne={task} onDelete={onDelete}/>
            ))}
        </>
    );
};

export default Tasks;
