import Student from "../models/Student.js";

// POST - Add a new student
const studentRegister = async (req, res) => {
  try {
    const { studentId, email } = req.body;

    // Check if a student with the same ID or email already exists
    const existingStudent = await Student.findOne({
      $or: [{ studentId }, { email }]
    });

    if (existingStudent) {
      return res.status(409).json({ message: "Student with same ID or email already exists" });
    }

    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// GET - Fetch all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET - Fetch a student by ID
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT - Update student information
const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE - Delete a student
const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { studentRegister, getAllStudents, getStudentById, updateStudent, deleteStudent };
