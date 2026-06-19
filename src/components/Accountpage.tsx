import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// --- Types & Interfaces ---
interface UserProfile {
  name: string;
  email: string;
  avatarUrl: string;
  joinedDate: string;
}

type TabType = "profile" | "security" | "orders";

// Change: Exporting as default functional component
const AccountPage: React.FC = () => {
  // Mock User Data
  const [user, setUser] = useState<UserProfile>({
    name: "Oloru Abdulsobuur",
    email: "olorusobuur1@gmail.com",
    avatarUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80",
    joinedDate: "October 2024",
  });
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<TabType>("profile");
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState<boolean>(false);

  // --- Handlers ---
  const handleLogout = (): void => {
    console.log("Logging out user...");
    setIsLogoutModalOpen(false);
    alert("Logged out successfully!");
    navigate("/login");
  };

  const handleProfileUpdate = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <div style={styles.container}>
      {/* Sidebar Navigation */}
      <aside style={styles.sidebar}>
        <div style={styles.avatarContainer}>
          <img src={user.avatarUrl} alt={user.name} style={styles.avatar} />
          <h2 style={styles.userName}>{user.name}</h2>
          <p style={styles.userEmail}>{user.email}</p>
        </div>

        <nav style={styles.navMenu}>
          <button
            style={{
              ...styles.navItem,
              ...(activeTab === "profile" ? styles.activeNavItem : {}),
            }}
            onClick={() => setActiveTab("profile")}
          >
            👤 Profile Details
          </button>
          <button
            style={{
              ...styles.navItem,
              ...(activeTab === "security" ? styles.activeNavItem : {}),
            }}
            onClick={() => setActiveTab("security")}
          >
            🔒 Security & Password
          </button>
          <button
            style={{
              ...styles.navItem,
              ...(activeTab === "orders" ? styles.activeNavItem : {}),
            }}
            onClick={() => setActiveTab("orders")}
          >
            📦 Order History
          </button>

          <hr style={styles.divider} />

          <button
            style={{ ...styles.navItem, ...styles.logoutBtn }}
            onClick={() => setIsLogoutModalOpen(true)}
          >
            🚪 Log Out
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main style={styles.mainContent}>
        {activeTab === "profile" && (
          <section>
            <h1 style={styles.sectionTitle}>Profile Details</h1>
            <p style={styles.sectionSubtitle}>Member since {user.joinedDate}</p>

            <form onSubmit={handleProfileUpdate} style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Full Name</label>
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email Address</label>
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  style={styles.input}
                />
              </div>
              <button type="submit" style={styles.saveBtn}>
                Save Changes
              </button>
            </form>
          </section>
        )}

        {activeTab === "security" && (
          <section>
            <h1 style={styles.sectionTitle}>Security Settings</h1>
            <div style={styles.formGroup}>
              <label style={styles.label}>Current Password</label>
              <input
                type="password"
                style={styles.input}
                placeholder="••••••••"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>New Password</label>
              <input
                type="password"
                style={styles.input}
                placeholder="••••••••"
              />
            </div>
            <button style={styles.saveBtn}>Update Password</button>
          </section>
        )}

        {activeTab === "orders" && (
          <section>
            <h1 style={styles.sectionTitle}>Order History</h1>
            <div style={styles.orderCard}>
              <div>
                <strong>Order #10294</strong>
                <p style={styles.userEmail}>Placed on June 15, 2026</p>
              </div>
              <span style={styles.statusBadge}>Delivered</span>
            </div>
            <div style={styles.orderCard}>
              <div>
                <strong>Order #10112</strong>
                <p style={styles.userEmail}>Placed on May 22, 2026</p>
              </div>
              <span style={styles.statusBadge}>Delivered</span>
            </div>
          </section>
        )}
      </main>

      {/* Logout Confirmation Modal */}
      {isLogoutModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h3>Confirm Log Out</h3>
            <p>Are you sure you want to log out of your account?</p>
            <div style={styles.modalActions}>
              <button
                style={styles.cancelBtn}
                onClick={() => setIsLogoutModalOpen(false)}
              >
                Cancel
              </button>
              <button style={styles.confirmLogoutBtn} onClick={handleLogout}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Change: Explicitly declaring default export at the bottom
export default AccountPage;

// --- Embedded CSS Styles ---
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    background: "radial-gradient(#fff, #ffd6d6)",
    color: "#333",
  },
  sidebar: {
    width: "280px",
    backgroundColor: "#ffffff",
    borderRight: "1px solid #e9ecef",
    padding: "2rem 1.5rem",
    display: "flex",
    flexDirection: "column",
  },
  avatarContainer: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem",
    border: "3px solid #007bff",
  },
  userName: {
    fontSize: "1.25rem",
    margin: "0 0 0.25rem 0",
    fontWeight: "600",
  },
  userEmail: {
    fontSize: "0.87rem",
    color: "#6c757d",
    margin: 0,
  },
  navMenu: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  navItem: {
    padding: "0.75rem 1rem",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "transparent",
    textAlign: "left",
    fontSize: "0.95rem",
    cursor: "pointer",
    transition: "all 0.2s ease",
    color: "#495057",
  },
  activeNavItem: {
    backgroundColor: "#e7f1ff",
    color: "#0056b3",
    fontWeight: "600",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #e9ecef",
    margin: "1rem 0",
  },
  logoutBtn: {
    color: "#dc3545",
  },
  mainContent: {
    flex: 1,
    padding: "3rem",
    maxWidth: "800px",
  },
  sectionTitle: {
    fontSize: "1.75rem",
    marginBottom: "0.25rem",
    fontWeight: "600",
  },
  sectionSubtitle: {
    color: "#6c757d",
    marginBottom: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  label: {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#495057",
  },
  input: {
    padding: "0.75rem",
    borderRadius: "6px",
    border: "1px solid #ced4da",
    fontSize: "1rem",
  },
  saveBtn: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "orangered",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    alignSelf: "flex-start",
    marginTop: "1rem",
  },
  orderCard: {
    backgroundColor: "#fff",
    border: "1px solid #e9ecef",
    borderRadius: "8px",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  statusBadge: {
    backgroundColor: "#d4edda",
    color: "#155724",
    padding: "0.25rem 0.5rem",
    borderRadius: "4px",
    fontSize: "0.85rem",
    fontWeight: "600",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  modalActions: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1.5rem",
  },
  cancelBtn: {
    padding: "0.5rem 1rem",
    backgroundColor: "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  confirmLogoutBtn: {
    padding: "0.5rem 1rem",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
