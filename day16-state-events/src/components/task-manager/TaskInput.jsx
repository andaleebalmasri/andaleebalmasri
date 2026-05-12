function TaskInput({ input, setInput, addTask }) {
    function onKeyDown(e) {
        // Add task when pressing Enter
        if (e.key === "Enter") addTask();
    }

    return (
        <div className="row">
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Write a new task..."
            />
            <button onClick={addTask}>Add</button>
        </div>
    );
}

export default TaskInput;
