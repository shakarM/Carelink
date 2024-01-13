import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Intro from "./pages/intro/Intro";
import Form from "./pages/intro/Form";
import LoginForm from "./pages/intro/Login";
import DoctorHomePage from "./pages/homepage/DoctorHomePage";
import PatientDetails from "./pages/patient/PatientDetails";
import ChatBox from "./pages/chat/Chatbox";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/signup" element={<Form />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="homepage" element={<DoctorHomePage />} />
        <Route path="/patient/:id" element={<PatientDetails />} />
        <Route path="chat" element={<ChatBox />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
