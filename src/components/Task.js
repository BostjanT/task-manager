const Task = ({ tasks, toggleStatus, setEditTasks, deleteTask }) => {
  return (
    <div className="task" key={tasks.id}>
      <p className={tasks.taskDone ? "task-done" : ""}>{tasks.task}</p>
      <div className="icons">
        <input
          id={tasks.id}
          type="checkbox"
          name="taskDone"
          onChange={() => toggleStatus(tasks.id)}
          checked={tasks.taskDone}
        />
        {tasks.taskDone ? null : (
          <img
            src="../images/edit.png"
            alt=""
            onClick={() =>
              setEditTasks({
                id: tasks.id,
                task: tasks.task,
                taskStatus: tasks.taskStatus,
                taskDone: tasks.taskDone ? true : false,
              })
            }
          />
        )}
        <img
          src="../images/delete.jpeg"
          alt=""
          onClick={() => deleteTask(tasks.id)}
        />
      </div>
    </div>
  );
};

export default Task;
