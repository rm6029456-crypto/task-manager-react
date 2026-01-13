import { useState, useEffect } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import TaskModal from "./TaskModal";

function TaskList() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [searchText, setSearchText] = useState(() => {
    return localStorage.getItem("searchText") || "";
  });
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedTask, setSelectedTask] = useState(null);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("searchText", searchText);
    setCurrentPage(1); // Reset page on search change
  }, [searchText]);

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filterStatus]);


  const addTask = (newTask) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        status: "pending",
        ...newTask
      }
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
            ...task,
            status:
              task.status === "pending" ? "completed" : "pending"
          }
          : task
      )
    );
  };

  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase())
    )
    .filter((task) =>
      filterStatus === "all" ? true : task.status === filterStatus
    );

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);

  const totalCount = tasks.length;
  const completedCount = tasks.filter(
    (task) => task.status === "completed"
  ).length;
  const pendingCount = totalCount - completedCount;

  const suggestions = tasks
    .filter(
      (task) =>
        searchText &&
        task.title.toLowerCase().includes(searchText.toLowerCase())
    );


  return (
    <div>
      {/* Stats */}
      <div className="task-stats">
        <div className="stat total">
          <span>Total</span>
          <strong>{totalCount}</strong>
        </div>
        <div className="stat pending">
          <span>Pending</span>
          <strong>{pendingCount}</strong>
        </div>
        <div className="stat completed">
          <span>Completed</span>
          <strong>{completedCount}</strong>
        </div>
      </div>
      {/* Search */}
      <div className="search-container">
        <input
          className="search-input"
          placeholder="Search tasks..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {searchText && suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((task) => (
              <li
                key={task.id}
                onClick={() => {
                  setSearchText("");
                  setSelectedTask(task);
                }}
              >
                {task.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      <TaskModal
        task={selectedTask}
        onClose={() => setSelectedTask(null)}
      />


      {/* Filters */}
      <div className="filter-buttons">
        <button
          className={filterStatus === "all" ? "active" : ""}
          onClick={() => setFilterStatus("all")}
        >
          All
        </button>
        <button
          className={filterStatus === "pending" ? "active" : ""}
          onClick={() => setFilterStatus("pending")}
        >
          Pending
        </button>
        <button
          className={filterStatus === "completed" ? "active" : ""}
          onClick={() => setFilterStatus("completed")}
        >
          Completed
        </button>
      </div>

      {/* Add Task */}
      <TaskForm onAddTask={addTask} />

      {/* Tasks */}
      {currentTasks.length === 0 && (
        <p className="empty">No matching tasks</p>
      )}

      {currentTasks.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          description={task.description}
          status={task.status}
          onDelete={() => deleteTask(task.id)}
          onToggle={() => toggleStatus(task.id)}
        />
      ))}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={currentPage === page ? "active" : ""}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );




}

export default TaskList;
