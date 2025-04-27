import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import StudentList from './components/StudentList';
import AddStudentForm from './components/AddStudentForm';
import EditStudentForm from './components/EditStudentForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-student" element={<AddStudentForm />} />
        <Route path="/edit-student/:id" element={<EditStudentForm />} />
        <Route path="/students" element={<StudentList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
