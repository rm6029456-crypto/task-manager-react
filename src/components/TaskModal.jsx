function TaskModal({ task, onClose }) {
    if (!task) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <h2>{task.title}</h2>
                <div className="modal-body">
                    <p><strong>Status:</strong> {task.status}</p>
                    <p>{task.description}</p>
                </div>
            </div>
        </div>
    );
}

export default TaskModal;
