import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import AboutPage from "./Pages/AboutPage";
import UserDashboard from "./Pages/user/UserDashboard";
import AdminDashboard from "./Pages/admin/AdminDashboard";
import Feedback from "./Pages/user/Feedback";
import Profile from "./Pages/user/Profile";
import Report from "./Pages/user/Report";
import Service from "./Pages/user/Service";
import Signup from "./Pages/Signup";
import ManageServices from "./Pages/admin/ManageServices";
import Monitor from "./Pages/admin/Monitor";
import ManageReport from "./Pages/admin/ManageReport";
import ManageFeedback from "./Pages/admin/ManageFeedback";
import AdminProfile from "./Pages/admin/AdminProfile";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<Signup />} />

        {/* User Routes */}
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/services" element={<Service />} />
        <Route path="/user/feedback" element={<Feedback />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/report" element={<Report />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/services" element={<ManageServices />} />
        <Route path="/admin/infrastructure" element={<Monitor/>} />
        <Route path="/admin/reports" element={<ManageReport/>} />
        <Route path="/admin/feedback" element={<ManageFeedback/>}/>
        <Route path="/profile" element={<AdminProfile/>}/>


        {/* Logout (redirects to login) */}
        <Route path="/logout" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
