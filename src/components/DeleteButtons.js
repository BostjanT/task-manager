const DeleteButtons = ({ deleteDoneTask, deleteAllTasks }) => {
  return (
    <div className="delete-buttons">
      <button className="delete-btn" onClick={deleteDoneTask}>
        Delete done tasks
      </button>
      <button className="delete-btn" onClick={deleteAllTasks}>
        Delete all tasks
      </button>
    </div>
  );
};

export default DeleteButtons;
