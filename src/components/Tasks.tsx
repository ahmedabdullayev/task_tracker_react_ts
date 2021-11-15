import React from "react";
interface task { //making our "type"
    id?: number,
    text?: string,
    day?: string,
    reminder?: boolean,
}
interface props {
    tasks: task[]
}
const Tasks = ({tasks}:props) => {

    return (
        <>
            {tasks.map( (task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    );
};

export default Tasks;
