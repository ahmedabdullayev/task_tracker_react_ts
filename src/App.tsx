import {useState} from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
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
        <Header title='hello'/>
        {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks To Show')}
    </div>
  );
}

export default App;
