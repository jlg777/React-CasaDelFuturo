import React, { useState } from "react";
import taskList from "../assets/taskList";
import "../assets/css/tasklist.css";

const TaskList = () => {
  const [tasks, setTasks] = useState(taskList);
  const [newTask, setNewTask] = useState("");

  const handleTask = (e) => {
    setNewTask(e.target.value);
    console.log(newTask);
  };

  const handleButton = () => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, tarea: newTask, cumplido: false },
    ]);
  };

  const handleCumplido = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, cumplido: !task.cumplido };
        }
        return task;
      })
    );
  };

  return (
    <>
      <h1> Lista de Tareas</h1>
      <fieldset>
        <ul>
          {/*}
          <li>
            Modelo de tarea 1 ❌ <button>🗑️</button>
          </li>
          <li>
            Modelo de tarea 2 ✔️ <button>🗑️</button>
          </li>
  {*/}
          {tasks.map((task) => (
            <li key={task.id}>
              {task.tarea}
              <div>
                <button onClick={() => handleCumplido(task.id)}>
                  {task.cumplido ? "✔️" : "❌"}{" "}
                </button>
                <button>🗑️</button>
              </div>
            </li>
          ))}
        </ul>
      </fieldset>
      <input
        placeholder="Ingrese una tarea"
        onChange={handleTask}
        value={newTask}
      />
      <button onClick={handleButton}>Cargar</button>
    </>
  );
};

export default TaskList;
