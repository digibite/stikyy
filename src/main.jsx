import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Login from "./Login";
import Signup from "./Signup";
import NotesPage from "./pages/NotesPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/notes" element={<NotesPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
