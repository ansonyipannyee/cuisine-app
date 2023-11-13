import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/homepage">home.</Link>
        </li>
        <li>
          <Link to="/recipelist">all dishes.</Link>
        </li>
        <li>
          <Link to="/continents">by continent.</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
