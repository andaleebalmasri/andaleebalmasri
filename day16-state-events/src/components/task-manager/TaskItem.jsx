function TaskItem({ task, onDelete }) {
    return (
        <li className="list-item">
            <span>{task}</span>
            <button onClick={onDelete} className="danger">
                Delete
            </button>
        </li>
    );
}

export default TaskItem;
