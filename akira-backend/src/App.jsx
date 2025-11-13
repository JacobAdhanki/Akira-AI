import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Attendance from "./pages/Attendance";
import Timetable from "./pages/Timetable";
import Fees from "./pages/Fees";
import Exams from "./pages/Exams";
import AIChat from "./pages/AIChat";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Login />} />

        {/* Protected */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute Component={Dashboard} />}
        />
        <Route
          path="/students"
          element={<ProtectedRoute Component={Students} />}
        />
        <Route
          path="/teachers"
          element={<ProtectedRoute Component={Teachers} />}
        />
        <Route
          path="/attendance"
          element={<ProtectedRoute Component={Attendance} />}
        />
        <Route
          path="/timetable"
          element={<ProtectedRoute Component={Timetable} />}
        />
        <Route
          path="/fees"
          element={<ProtectedRoute Component={Fees} />}
        />
        <Route
          path="/exams"
          element={<ProtectedRoute Component={Exams} />}
        />
        <Route
          path="/ai"
          element={<ProtectedRoute Component={AIChat} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
