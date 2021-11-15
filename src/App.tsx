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
    // const name:string = "Brad"
  return (
    <div className="container">
        <Header title='hello'/>
        <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
