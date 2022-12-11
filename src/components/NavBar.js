import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav-bar">
      <ul>
        <li onClick={() => navigate(-1)} className="link-style">
          Go Back
        </li>
        <li>
          <Link to="/" className="link-style">
            Home
          </Link>
        </li>
        <li>
          <Link to="users" className="link-style">
            Users
          </Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default NavBar;
