// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/employee_db')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Employee Schema
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  department: { type: String, required: true },
  salary: { type: Number, required: true },
  joinDate: { type: Date, default: Date.now }
});

const Employee = mongoose.model('Employee', employeeSchema);

// Department Schema
const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  manager: { type: String, required: true },
  budget: { type: Number, required: true },
  employeeCount: { type: Number, default: 0 }
});

const Department = mongoose.model('Department', departmentSchema);

// Employee Routes
app.get('/api/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/employees', async (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    position: req.body.position,
    department: req.body.department,
    salary: req.body.salary
  });

  try {
    const newEmployee = await employee.save();
    
    // Update department employee count
    await Department.findOneAndUpdate(
      { name: employee.department },
      { $inc: { employeeCount: 1 } }
    );
    
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Department Routes
app.get('/api/departments', async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/departments', async (req, res) => {
  const department = new Department({
    name: req.body.name,
    manager: req.body.manager,
    budget: req.body.budget,
    employeeCount: 0
  });

  try {
    const newDepartment = await department.save();
    res.status(201).json(newDepartment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'Server is running!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});