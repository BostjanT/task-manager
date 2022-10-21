const AddTask = ({ handleSubmit, task, handleTaskInput }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        value={task}
        id="task"
        onChange={handleTaskInput}
      />
      <button>Add New Task</button>
    </form>
  );
};

export default AddTask;
