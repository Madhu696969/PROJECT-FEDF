import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StatCard from "../../components/StatCard"; 
import AdminNavbar from "../../components/AdminNavbar";
import "./Profile.css";

const AdminProfile = () => {
  const navigate = useNavigate(); // Hook for navigation

  const [admin, setAdmin] = useState({
    name: "Sivesh",
    email: "Sivesh@example.com",
    phone: "6309745241",
    role: "City Admin",
    department: "Smart City Management",
    joinedDate: "2025-01-15",
    profilePic: "https://www.shareicon.net/download/2015/05/04/33366_administrator_256x256.png",
    about: "Passionate City Admin managing smart city projects, ensuring efficient services, and improving citizen satisfaction across all departments.",
  });

  const [stats, setStats] = useState({
    totalReports: 142,
    resolvedReports: 119,
    pendingReports: 23,
    feedbacksReceived: 87,
  });

  const [recentActivities, setRecentActivities] = useState([
    "Reviewed 5 new feedbacks",
    "Resolved 3 pending reports",
    "Updated infrastructure monitoring status",
    "Scheduled team meeting for city maintenance",
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...admin });

  useEffect(() => {
    setEditData({ ...admin });
  }, [admin]);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setAdmin(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(admin);
    setIsEditing(false);
  };

  // ---------------- LOGOUT FUNCTION ----------------
  const handleLogout = () => {
    localStorage.removeItem("adminData"); // clear any stored admin data
    navigate("/login"); // redirect to Sign-in page
  };

  return (
    <div className="admin-profile-page">
      <AdminNavbar />

      <div className="admin-profile-card">
        {/* Profile Header */}
        <div className="admin-profile-header">
          {admin.profilePic ? (
            <img
              src={admin.profilePic}
              alt="Admin"
              className="admin-profile-pic"
            />
          ) : (
            <div className="admin-profile-initials">
              {admin.name.split(" ").map(n => n[0]).join("")}
            </div>
          )}

          <div className="admin-profile-info">
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleEditChange}
                  className="edit-input"
                />
                <input
                  type="text"
                  name="role"
                  value={editData.role}
                  onChange={handleEditChange}
                  className="edit-input"
                />
                <input
                  type="text"
                  name="department"
                  value={editData.department}
                  onChange={handleEditChange}
                  className="edit-input"
                />
                <textarea
                  name="about"
                  value={editData.about}
                  onChange={handleEditChange}
                  className="edit-textarea"
                  rows="3"
                />
              </>
            ) : (
              <>
                <h1 className="admin-name">{admin.name}</h1>
                <p className="admin-role">{admin.role} - {admin.department}</p>
                <p className="admin-joined">Joined: {admin.joinedDate}</p>
                <p className="admin-about">{admin.about}</p>
              </>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="admin-profile-section">
          <h2>Contact Info</h2>
          {isEditing ? (
            <>
              <input
                type="email"
                name="email"
                value={editData.email}
                onChange={handleEditChange}
                className="edit-input"
              />
              <input
                type="text"
                name="phone"
                value={editData.phone}
                onChange={handleEditChange}
                className="edit-input"
              />
            </>
          ) : (
            <>
              <p><strong>Email:</strong> {admin.email}</p>
              <p><strong>Phone:</strong> {admin.phone}</p>
            </>
          )}
        </div>

        {/* Activity Stats */}
        <div className="admin-profile-section">
          <h2>Activity Stats</h2>
          <div className="admin-stats-grid">
            <StatCard title="Total Reports" icon="📊" value={stats.totalReports} trend="↑ 12% from last week" color="blue"/>
            <StatCard title="Pending Reports" icon="⏳" value={stats.pendingReports} trend="↓ 5% from last week" color="yellow"/>
            <StatCard title="Resolved Reports" icon="✅" value={stats.resolvedReports} trend="↑ 8% from last week" color="green"/>
            <StatCard title="Total Feedback" icon="💬" value={stats.feedbacksReceived} trend="↑ 3% from last week" color="purple"/>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="admin-profile-section">
          <h2>Recent Activity</h2>
          <ul className="recent-activity">
            {recentActivities.map((activity, idx) => (
              <li key={idx}>• {activity}</li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="admin-profile-section admin-actions">
          {isEditing ? (
            <>
              <button className="edit-btn" onClick={handleSave}>Save</button>
              <button className="logout-btn" onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit Profile</button>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
