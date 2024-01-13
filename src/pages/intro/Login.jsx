import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-app-container">
      <div className="login-form-container">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="login-form-group">
            <label htmlFor="login-username" className="login-label">
              Username:
            </label>
            <input
              type="text"
              id="login-username"
              name="login-username"
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="login-password" className="login-label">
              Password:
            </label>
            <input
              type="password"
              id="login-password"
              name="login-password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="login-option">
          If you don't have an account,{" "}
          <Link to="/signup">
            <a>signup</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
