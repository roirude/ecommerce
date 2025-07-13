import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => (
    console.log(tasks)
  ), [tasks]);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const addTask = () => {
    setTasks([...tasks, {id: id, name:value, status: false}]);
    setId(id + 1);
  }

  const handleStatusChange = (updatedtask) => {
    setTasks(tasks.map((task) => (
      (task.id === updatedtask.id) ? {...task, status: !task.status} : task
    )))
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
                <li key={task.id}>
                  <input type="checkbox" value={task.status} onChange={() => handleStatusChange(task)} />
                  {task.name + " " + task.id}
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
