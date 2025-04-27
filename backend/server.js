import express from 'express';
import cors from 'cors';
import connectToDatabase from './db/db.js';
import studentRoutes from './routes/studentRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
connectToDatabase();

app.get("/",(req,res)=>{
  res.json("Hello");
})

// Routes
app.use('/api', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
