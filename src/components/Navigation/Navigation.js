import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./Navigation.css";

const Navigation = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="navigation">
      <div className="back-button">
        <button onClick={() => navigate(-1)}>← Create New Invoice</button>
      </div>
      <div className="tabs">
        <div className="tab active">Vendor Details</div>
        <div className="tab">Invoice Details</div>
        <div className="tab">Comments</div>
      </div>
      <div className="logout-button">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navigation;
