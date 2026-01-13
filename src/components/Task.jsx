function Task({ title, description, status, onDelete, onToggle }) {
  const isCompleted = status === "completed";

  return (
    <div className={`task-card ${isCompleted ? "completed" : ""}`}>
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="task-actions">
        <button
          className={`btn complete ${isCompleted ? "active" : ""}`}
          onClick={onToggle}
        >
          {isCompleted ? "Mark Pending" : "Mark Completed"}
        </button>

        <button className="btn delete" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
