import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-box">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
        <li>
          <Link to="/darkMode">Dark Mode</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
