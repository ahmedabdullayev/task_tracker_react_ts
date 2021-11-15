import Task from "./Task";
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
                <Task key={task.id} taskOne={task} />
            ))}
        </>
    );
};

export default Tasks;
