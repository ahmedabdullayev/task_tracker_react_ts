import {useState} from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5 at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Food Shop',
            day: 'Jan 5 at 2:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'School meeting',
            day: 'Mart 7 at 2:30pm',
            reminder: false,
        }
    ])
    //Add Task to existing Tasks
    const addTask = (task:any) => {
      console.log(task)
        const id = Math.floor(Math.random() * 10000) +1
        const newTask = {id, ...task} //object with rand id and task
        setTasks([...tasks, newTask])
    }
    // Delete Task
    const deleteTask = (id? : number) => {
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
