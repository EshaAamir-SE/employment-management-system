import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Departments() {
  const [departments, setDepartments] = useState([
    {
      id: 1,
      name: "IT",
      manager: "John Smith",
      employeeCount: 42,
      budget: 850000
    },
    {
      id: 2,
      name: "HR",
      manager: "Sarah Johnson",
      employeeCount: 15,
      budget: 320000
    },
    {
      id: 3,
      name: "Sales",
      manager: "Robert Chen",
      employeeCount: 68,
      budget: 1250000
    },
    {
      id: 4,
      name: "Marketing",
      manager: "Lisa Williams",
      employeeCount: 32,
      budget: 750000
    },
    {
      id: 5,
      name: "Finance",
      manager: "Michael Brown",
      employeeCount: 23,
      budget: 680000
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    manager: '',
    budget: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDepartment = {
      id: departments.length + 1,
      name: formData.name,
      manager: formData.manager,
      employeeCount: 0,
      budget: parseFloat(formData.budget)
    };
    
    setDepartments([...departments, newDepartment]);
    setFormData({ name: '', manager: '', budget: '' });
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Department Management</h1>
        <Link to="/" className="btn btn-outline-secondary">Back to Dashboard</Link>
      </div>
      
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-success text-white">
              <h4>Add New Department</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Department Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Department Manager</label>
                  <input
                    type="text"
                    className="form-control"
                    name="manager"
                    value={formData.manager}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Budget</label>
                  <div className="input-group">
                    <span className="input-group-text">$</span>
                    <input
                      type="number"
                      className="form-control"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-success w-100">Add Department</button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h4>Departments</h4>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Department</th>
                    <th>Manager</th>
                    <th>Employees</th>
                    <th>Budget</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {departments.map((dept) => (
                    <tr key={dept.id}>
                      <td>{dept.name}</td>
                      <td>{dept.manager}</td>
                      <td>{dept.employeeCount}</td>
                      <td>${dept.budget.toLocaleString()}</td>
                      <td>
                        <button className="btn btn-sm btn-info me-2">View</button>
                        <button className="btn btn-sm btn-warning me-2">Edit</button>
                        <button className="btn btn-sm btn-danger">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Departments;