const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  manager: { type: String, required: true },
  budget: { type: Number, required: true },
  employeeCount: { type: Number, default: 0 }
});

module.exports = mongoose.model('Department', departmentSchema);