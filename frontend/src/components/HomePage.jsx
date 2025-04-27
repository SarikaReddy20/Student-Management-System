import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container text-center mt-4">
      <img
        src="/banner.png"
        alt="Student Management System Banner"
        className="img-fluid mb-4 rounded shadow"
        style={{ maxHeight: '300px', objectFit: 'cover' }}
      />
      <h1>Welcome to the Student Management System</h1>

      <div className="d-flex gap-3 justify-content-center mt-4">
        <Link to="/add-student">
          <button className="btn btn-outline-success" type="button">
            Add Student
          </button>
        </Link>
        <Link to="/students">
          <button className="btn btn-outline-primary" type="button">
            Students List/Edit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
