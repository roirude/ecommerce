import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(0);
  const [taskFilters, setTaskFilters] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setTaskFilters(tasks);
    console.log(filter);
    const filterTasks = (filter) => {
      switch (filter) {
        case "all":
          setTaskFilters(tasks);
          break;
        case "todo":
          setTaskFilters(tasks.filter((task) => task.status === false));
          break;
        case "completed":
          setTaskFilters(tasks.filter((task) => task.status === true));
          break;
        default:
          setTaskFilters(tasks);
      }
    };
    filterTasks(filter);
  }, [tasks, filter]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, { id: id, name: value, status: false }]);
    setId(id + 1);
  };

  const handleStatusChange = (updatedtask) => {
    setTasks(
      tasks.map((task) =>
        task.id === updatedtask.id ? { ...task, status: !task.status } : task
      )
    );
  };
  return (
    <>
      {/* 
        Objective : Create a simple React app that can add task with input and display the task list.
      */}
      <div>
        <div>
          <p>Add a task</p>
          <p>
            <input
              type="text"
              placeholder="add a task"
              onChange={handleChange}
            />
          </p>
          <button onClick={addTask}>Add task</button>
        </div>
        <div>
          <h1>Task List</h1>
          <p>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("todo")}>Todo</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
          </p>
          <ul>
            {taskFilters.map((task) => (
              <li key={task.id}>
                <input
                  type="checkbox"
                  checked={task.status}
                  onChange={() => handleStatusChange(task)}
                />
                {task.name + " " + task.id}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
