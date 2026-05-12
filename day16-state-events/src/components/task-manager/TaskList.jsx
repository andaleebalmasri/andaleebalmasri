import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete }) {
    if (tasks.length === 0) {
        return <p className="muted">No tasks yet. Add your first task above.</p>;
    }

    return (
        <ul className="list">
            {tasks.map((task, index) => (
                <TaskItem key={index} task={task} onDelete={() => onDelete(index)} />
            ))}
        </ul>
    );
}

export default TaskList;
