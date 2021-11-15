import React from 'react';
interface task { //making our "type"
    id?: number,
    text?: string,
    day?: string,
    reminder?: boolean,
}
interface props {
    taskOne: task
}
const Task = ({taskOne}:props) => {
    return (
        <div className={'task'}>
            <h3>{taskOne.text}</h3>
        </div>
    );
};

export default Task;
