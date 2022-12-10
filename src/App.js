import "./App.scss";
import React, { useState } from "react";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";

function App() {
  const [activeUserId, setActiveUserId] = useState(null);
  return (
    <div className="app">
      <div className="user-list">
        <UserList setActiveUserId={setActiveUserId} />
      </div>
      <div className="user-details">
        {activeUserId && <UserDetail activeUserId={activeUserId} />}
      </div>
    </div>
  );
}

export default App;
