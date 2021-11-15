import {useState, useEffect} from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
interface task{
    id: number,
    text: string,
    day: string,
    reminder: boolean
}
function App() {

    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState<task[]>([]);
    useEffect(() => {
        const getTasks = async () => {
            const taskFromServer = await fetchTasks()
            setTasks(taskFromServer)
        }
        getTasks()
    }, [])
    //npm run server - to run server
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()

        return data
    }
    //Add Task to existing Tasks
    const addTask = async (task: task[]) => {
        const res = await fetch('http://localhost:5000/tasks', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body:JSON.stringify(task) //from js object to json
            })
        const data = await res.json() as task
        setTasks([...tasks, data])
      // console.log(task)
      //   const id = Math.floor(Math.random() * 10000) +1
      //   const newTask = {id, ...task} //object with rand id and task
      //   setTasks([...tasks, newTask])
    }
    // Delete Task
    const deleteTask = async (id? : number) => {
        await  fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        })
      setTasks(tasks.filter((task) => task.id !== id)) //filtering out tasks, delete task
    }
    //Toggle Reminder
    const toggleReminder = (id : number) => {
      setTasks(tasks.map( (task) => task.id === id ? {...task, reminder: !task.reminder} : task ))
    }
  return (
    <div className="container">
        <Header title='hello' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks To Show')}
    </div>
  );
}

export default App;
