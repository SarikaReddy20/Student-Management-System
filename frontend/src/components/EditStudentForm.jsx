import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const EditStudentForm = () => {
  const { id } = useParams(); // gets student ID from the URL
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    department: '',
    enrollmentYear: '',
  });

  useEffect(() => {
    console.log("Trying to fetch student with id:", id);
    axios.get(`http://localhost:5000/api/students/${id}`)
      .then(res => {
        console.log("Student data fetched:", res.data);
        const fetchedStudent = res.data;
  
        setStudent({
          studentId: fetchedStudent.studentId || '',
          firstName: fetchedStudent.firstName || '',
          lastName: fetchedStudent.lastName || '',
          email: fetchedStudent.email || '',
          dob: fetchedStudent.dob ? fetchedStudent.dob.substr(0, 10) : '',
          department: fetchedStudent.department || '',
          enrollmentYear: fetchedStudent.enrollmentYear || '',
        });
      })
      .catch(err => {
        alert('Failed to fetch student data.');
        console.error('Fetch error:', err?.response || err.message || err);
      });
  }, [id]);
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/students/${id}`, student)
      .then(() => {
        alert('Student updated successfully!');
        navigate('/students'); // redirect to student list
      })
      .catch(err => {
        alert('Failed to update student.');
        console.error(err);
      });
  };

  return (
    <div className="container mt-4">
      <h3>Edit Student</h3>
      <form onSubmit={handleSubmit} className="row g-3">

        <div className="col-md-6">
          <input className="form-control" type="text" name="studentId" placeholder="Student ID" value={student.studentId} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <input className="form-control" type="text" name="firstName" placeholder="First Name" value={student.firstName} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <input className="form-control" type="text" name="lastName" placeholder="Last Name" value={student.lastName} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <input className="form-control" type="email" name="email" placeholder="Email" value={student.email} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <input className="form-control" type="date" name="dob" value={student.dob?.substr(0, 10)} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <select className="form-select" name="department" value={student.department} onChange={handleChange} required>
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
          <input className="form-control" type="number" name="enrollmentYear" placeholder="Enrollment Year" value={student.enrollmentYear} onChange={handleChange} required />
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">Update Student</button>
        </div>

      </form>
    </div>
  );
};

export default EditStudentForm;
