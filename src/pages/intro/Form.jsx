import "./Form.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Form() {
  const navigate = useNavigate();
  return (
    <>
      <div className="app-container">
        <>
          <div className="form-container">
            <h2>Sign Up</h2>
            <form>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
              </div>
              <button type="submit" onClick={() => navigate("/homepage")}>
                Sign Up
              </button>
            </form>
            <p className="login-option">
              If you already have an account,{" "}
              <Link to="/login">
                <a>Login</a>
              </Link>
            </p>
          </div>
        </>
      </div>
    </>
  );
}
