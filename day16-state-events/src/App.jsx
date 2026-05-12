import "./App.css";

import LoginForm from "./components/LoginForm";
import TaskManager from "./components/task-manager/TaskManager";

function App() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>React Day 16 - State & Events</h1>

            <hr />

            <h2>Login Form Example</h2>
            <LoginForm />

            <hr />

            <h2>Task Manager Example</h2>
            <TaskManager />
        </div>
    );
}

export default App;
