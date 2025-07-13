import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const addTask = () => {
    setTasks([...tasks, value]);
  }

  return (
    <>
      {/* 
        Objective : Create a simple React app that can add task with input and display the task list.
      */}
      <div>
        <div>
          <p>Add a task</p>
          <p>
            <input type="text" placeholder='add a task' onChange={handleChange} />
          </p>
          <button onClick={addTask}>Add task</button>
        </div>
        <div>
          <h1>Task List</h1>
          <ul>
            {
              tasks.map((task) => (
                <li key={task}>
                  {task}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
