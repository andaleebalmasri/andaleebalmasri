import { useState } from "react";

function TaskManager() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    function addTask() {
        if (input.trim() === "") return;

        setTasks([...tasks, input]);
        setInput("");
    }

    function deleteTask(index) {
        setTasks(tasks.filter((_,i) => i !== index));
    }

    return (
        <div>
            <h3>My Tasks</h3>

            <input
                placeholder="Write a task..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={addTask}>Add</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}{" "}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskManager;
