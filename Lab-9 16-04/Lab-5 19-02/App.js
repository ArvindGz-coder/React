import React, { useState } from "react";
import UserProfile from "./components/UserProfile";
import TaskManager from "./components/TaskManager";

function App() {
  const [showProfile, setShowUserProfile] = useState(true);
  const [showTaskManager, setShowTaskManager] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1> Advanced React lab - Mounting and unmounting Demo</h1>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setShowUserProfile(!showProfile)}>
          Toggle User Profile
        </button>
        <button
          onClick={() => setShowTaskManager(!showTaskManager)}
          style={{ marginLeft: "10px" }}
        >
          Toggle Task Manager
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
        {showProfile && <UserProfile />}
        {showTaskManager && <TaskManager />}
      </div>
    </div>
  );
}

export default App;