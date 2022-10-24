import React, { useState } from "react";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import Task from "./components/Task";
import DeleteButtons from "./components/DeleteButtons";
import FilterButtons from "./components/FilterButtons";
import { v4 as uuid } from "uuid";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  const [editTasks, setEditTasks] = useState("");
  const [allClicked, setAllClicked] = useState(false);
  const [doneClicked, setDoneClicked] = useState(false);
  const [todoClicked, setTodoClicked] = useState(false);

  function createNewTask() {
    const newTask = {
      id: uuid(),
      task: task,
      taskStatus: "TODO",
      taskDone: false,
    };
    setAllTasks((prevTasks) => [...prevTasks, newTask]);
  }

  /*  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setAllTasks((prevTasks) => [
      ...prevTasks,
      { [name]: type === "checkbox" ? checked : value },
    ]);
  } */

  function handleTaskInput(event) {
    setTask(event.target.value);
  }

  function toggleStatus(id) {
    setAllTasks((prevTasks) =>
      prevTasks.map((task) => {
        return task.id === id
          ? {
              ...task,
              taskDone: !task.taskDone,
              taskStatus: !task.taskDone ? "DONE" : "TODO",
            }
          : task;
      })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    createNewTask();
    setTask("");
  }

  function editTask(event) {
    const newTask = {
      id: editTasks.id,
      task: event.target.value,
      taskStatus: editTasks.taskStatus ? true : false,
      taskDone: editTasks.taskDone,
    };
    setEditTasks(newTask);
  }

  function updateTask() {
    const updatedTask = [...allTasks].filter(
      (task) => task.id !== editTasks.id
    );
    const updatedTasks = [...updatedTask, editTasks];
    setAllTasks(updatedTasks);
    setEditTasks("");
  }

  function cancelUpdate() {
    setEditTasks("");
  }

  function deleteTask(id) {
    setAllTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function deleteDoneTask(event) {
    event.preventDefault();
    setAllTasks((prevTasks) => prevTasks.filter((task) => !task.taskDone));
  }

  function deleteAllTasks(event) {
    event.preventDefault();
    setAllTasks([]);
  }

  function showDoneTasks() {
    setDoneClicked((prevState) => !prevState);
    setTodoClicked(false);
    setAllClicked(false);
  }
  function showTodoTasks() {
    setTodoClicked((prevState) => !prevState);
    setAllClicked(false);
    setDoneClicked(false);
  }
  function showAllTasks() {
    setAllClicked((prevState) => !prevState);
    setDoneClicked(false);
    setTodoClicked(false);
  }

  return (
    <div className="container">
      <h1>Task Manager</h1>
      {editTasks && editTasks ? (
        <EditTask
          editTasks={editTasks}
          editTask={editTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTask
          handleSubmit={handleSubmit}
          task={task}
          handleTaskInput={handleTaskInput}
        />
      )}

      <div className="filter-buttons">
        <h3>ToDo List</h3>
        <FilterButtons
          showAllTasks={showAllTasks}
          showDoneTasks={showDoneTasks}
          showTodoTasks={showTodoTasks}
        />
      </div>

      {allClicked && (
        <div className="tasks-show">
          {allTasks.map((tasks) => (
            <Task
              tasks={tasks}
              toggleStatus={toggleStatus}
              setEditTasks={setEditTasks}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      )}
      {todoClicked ? (
        <div className="tasks-show">
          {allTasks
            .filter((tasks) => tasks.taskDone === false)
            .map((tasks) => (
              <Task
                tasks={tasks}
                toggleStatus={toggleStatus}
                setEditTasks={setEditTasks}
                deleteTask={deleteTask}
              />
            ))}
        </div>
      ) : (
        ""
      )}
      {doneClicked ? (
        <div className="tasks-show">
          {allTasks
            .filter((tasks) => tasks.taskDone === true)
            .map((tasks) => (
              <Task
                tasks={tasks}
                toggleStatus={toggleStatus}
                setEditTasks={setEditTasks}
                deleteTask={deleteTask}
              />
            ))}
        </div>
      ) : (
        ""
      )}

      <DeleteButtons
        deleteDoneTask={deleteDoneTask}
        deleteAllTasks={deleteAllTasks}
      />
    </div>
  );
}

export default App;
