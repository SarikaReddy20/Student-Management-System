import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">Student Management System</Link>

      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarNav"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ms-0">
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-student" onClick={() => setIsOpen(false)}>Add Student</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/students" onClick={() => setIsOpen(false)}>Student List/Edit</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
