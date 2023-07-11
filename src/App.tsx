import HomePage from "./pages/HomePage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminSignupPage from "./pages/AdminSignupPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adminlogin" element={<AdminLoginPage />} />
          <Route path="/adminsignup" element={<AdminSignupPage />} />
          <Route path="/dashboard" element={<AdminDashboardPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
