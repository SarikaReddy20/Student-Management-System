import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const AddStudentForm = () => {
  const [student, setStudent] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    department: '',
    enrollmentYear: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setStudent(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('https://studentmanagementsystem-backend-xfnw.onrender.com/api/students', student)
      .then(res => {
        alert('Student added successfully!');
        setStudent({
          studentId: '',
          firstName: '',
          lastName: '',
          email: '',
          dob: '',
          department: '',
          enrollmentYear: '',
        });
      })
      .catch(err => {
        if (err.response && err.response.status === 409) {
          alert('Student with the same ID or email already exists.');
        } else {
          alert('Something went wrong while adding the student.');
          console.error(err);
        }
      });
  };
  
  

  return (
    <div className="container mt-4">
      <h3>Add New Student</h3>
      <form onSubmit={handleSubmit} className="row g-3">

        <div className="col-md-6">
          <input className="form-control" type="text" name="studentId" placeholder="Student ID" onChange={handleChange} value={student.studentId} required />
        </div>

        <div className="col-md-6">
          <input className="form-control" type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={student.firstName} required />
        </div>

        <div className="col-md-6">
          <input className="form-control" type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={student.lastName} required />
        </div>

        <div className="col-md-6">
          <input className="form-control" type="email" name="email" placeholder="Email" onChange={handleChange} value={student.email} required />
        </div>

        <div className="col-md-6">
          <input className="form-control" type="date" name="dob" onChange={handleChange} value={student.dob} required />
        </div>

        <div className="col-md-6">
          <select className="form-select" name="department" onChange={handleChange} value={student.department} required>
            <option value="">Select Department</option>
            <option value="CSE">Computer Science and Engineering</option>
            <option value="ECE">Electronics and Communication Engineering</option>
            <option value="EEE">Electrical and Electronics Engineering</option>
            <option value="MECH">Mechanical Engineering</option>
            <option value="CIVIL">Civil Engineering</option>
            <option value="CHEMICAL">Chemical Engineering</option>
            <option value="BIO">Bio Technology</option>
          </select>
        </div>

        <div className="col-md-6">
          <input className="form-control" type="number" name="enrollmentYear" placeholder="Enrollment Year" onChange={handleChange} min={1997} value={student.enrollmentYear} required />
        </div>

        <div className="col-12">
          <button className="btn btn-success" type="submit">Add Student</button>
        </div>
      </form>
    </div>
  );
};

export default AddStudentForm;
