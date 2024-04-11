import React from "react";

const TaskList = () => {
  return (
    <>
      <fieldset>
        <ul>
          Lista de Tareas
          <li>
            Modelo de tarea 1 ❌ <button>🗑️</button>
          </li>
          <li>
            Modelo de tarea 2 ✔️ <button>🗑️</button>
          </li>
        </ul>
      </fieldset>

      <input placeholder="Ingrese una tarea" />
      <button>Cargar</button>
    </>
  );
};

export default TaskList;
