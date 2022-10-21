const EditTask = ({ editTasks, editTask, updateTask, cancelUpdate }) => {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>EDIT YOUR TASK</h3>
      <div className="edit-task">
        <input
          value={editTasks && editTasks.task}
          onChange={(event) => editTask(event)}
        />
        <div>
          <button onClick={updateTask}>Update</button>
          <button onClick={cancelUpdate}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default EditTask;
