import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";

function LogoutButton() {
  const history = useHistory();
  const { currentUser, setCurrentUser } = useContext(CurrentUser);

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('token');
    history.push('/login');
  };

  // Render the LogoutButton component only when currentUser exists
  return currentUser ? (
    <div
      style={{
        position: "fixed",
        left: "50%",
        bottom: "20px",
        transform: "translateX(-50%)",
      }}
    >
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </div>
  ) : null;
}

export default LogoutButton;
