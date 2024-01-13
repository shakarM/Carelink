import { Link } from "react-router-dom";
import "./DoctorNavbar.css";
const DoctorNavbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <div className="profile-name">Dr. John Doe</div>
        <ul>
          <li>
            <a href="#patient-history">Patient History</a>
          </li>
          <li>
            <a href="#lab-tests">Lab Tests</a>
          </li>
          <li>
            <Link to="/chat">
              <a> Chat </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DoctorNavbar;
