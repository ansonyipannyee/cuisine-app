import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar"> 
      <ul>
        <li>
          <Link to="/homepage">home.</Link>
        </li>
        <li>
          <Link to="/recipelist">recipe list.</Link>
        </li>
        <li>
          <Link to="/favorites">favorites.</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;