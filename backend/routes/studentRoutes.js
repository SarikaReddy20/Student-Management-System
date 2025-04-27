import express from 'express';
import { studentRegister, getAllStudents, getStudentById, updateStudent, deleteStudent } from '../controllers/studentController.js';

const router = express.Router();

router.post('/students', studentRegister);
router.get('/students', getAllStudents);
router.get('/students/:id', getStudentById);
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);

export default router;
