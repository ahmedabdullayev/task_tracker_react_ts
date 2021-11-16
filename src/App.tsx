import {useState, useEffect, useMemo} from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import {AppContextProvider,initialAppState} from "./context/AppContex";
import {BrowserRouter as Router,Route, Routes, Link} from "react-router-dom";
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
    const fetchTask = async (id: number) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()

        return data
    }
    async function fetchAsync(task: task[]): Promise<task> {
        const res = await fetch('http://localhost:5000/tasks/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify(task) //from js object to json
        })
        return await res.json();
    }
    //Add Task to existing Tasks
    const addTask = async (task: task[]) => {
        let taskPromise = fetchAsync(task);
        const data = await taskPromise
        setTasks([...tasks, data])
    }
    // Delete Task
    const deleteTask = async (id? : number) => {
        await  fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        })
      setTasks(tasks.filter((task) => task.id !== id)) //filtering out tasks, delete task
    }
    //Toggle Reminder
    const toggleReminder = async (id : number) => {
        const taskToToggle = await fetchTask(id)
        const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
        const res = await fetch(`http://localhost:5000/tasks/${id}`,{
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updTask)
        })
        const data = await res.json()

      setTasks(tasks.map( (task) => task.id === id ? {...task, reminder: data.reminder} : {...task} ))
    }
    // const [value, setValue] = useState(null)
    // const memo = useMemo(() => ({value, setValue}), [value, setValue])
    const setAuthInfo = (jwt: string | null, firstName: string, lastName: string, role: string): void => {
        setAppState({...appState, jwt, firstName,  lastName, role});
    }

    const [appState, setAppState] = useState({...initialAppState, setAuthInfo });

    return (
  <>
      <AppContextProvider value={appState}>
    <Router>
          <div className="container">
              <Header title='hello' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks To Show')}
              <Link to={"/about"}> About us</Link>
          </div>
          <Footer/>
        <Routes>
            <Route path="/about" element={<About></About>}> </Route>
            {/*<Route path="/" element={<Footer></Footer>}></Route>*/}
        </Routes>
    </Router>
      </AppContextProvider>
  </>
  );
}

export default App;
