const FilterButtons = ({ showAllTasks, showDoneTasks, showTodoTasks }) => {
  return (
    <div className="buttons">
      <button className="btn" onClick={showAllTasks}>
        ALL
      </button>
      <button className="btn" onClick={showDoneTasks}>
        DONE
      </button>
      <button className="btn" onClick={showTodoTasks}>
        TODO
      </button>
    </div>
  );
};

export default FilterButtons;
