import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        alert(`Email: ${email}\nPassword: ${password}`);

        setEmail("");
        setPassword("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
