import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  return (
    <div className="container mt-4">
      <h1 className="page-header text-center">Employee Management Dashboard</h1>
      
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img 
              src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              className="dashboard-card-img" 
              alt="Employees"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Employees</h5>
              <p className="card-text">Manage your employees data, add new employees, and view employee details.</p>
              <Link to="/employees" className="btn btn-primary">Manage Employees</Link>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              className="dashboard-card-img" 
              alt="Departments"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Departments</h5>
              <p className="card-text">View and manage departments, assign employees to departments.</p>
              <Link to="/departments" className="btn btn-success">Manage Departments</Link>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img 
              src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              className="dashboard-card-img" 
              alt="Reports"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Reports</h5>
              <p className="card-text">View reports and analytics about your workforce and departments.</p>
              <Link to="/reports" className="btn btn-warning">View Reports</Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header bg-info text-white">
              <h5 className="mb-0"><i className="fas fa-bell me-2"></i> Recent Updates</h5>
            </div>
            <div className="card-body p-0">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-center">
                  <span className="badge bg-success rounded-circle p-2 me-3">
                    <i className="fas fa-user-plus"></i>
                  </span>
                  New employee John Doe added to Sales department
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <span className="badge bg-primary rounded-circle p-2 me-3">
                    <i className="fas fa-dollar-sign"></i>
                  </span>
                  IT department budget increased by 15%
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <span className="badge bg-warning rounded-circle p-2 me-3">
                    <i className="fas fa-graduation-cap"></i>
                  </span>
                  3 employees completed training program
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <span className="badge bg-info rounded-circle p-2 me-3">
                    <i className="fas fa-calendar-check"></i>
                  </span>
                  Annual review process started
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header bg-danger text-white">
              <h5 className="mb-0"><i className="fas fa-chart-line me-2"></i> Key Metrics</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="stat-card text-center">
                    <i className="fas fa-users fa-2x"></i>
                    <h6>Total Employees</h6>
                    <h2>234</h2>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="stat-card text-center">
                    <i className="fas fa-building fa-2x"></i>
                    <h6>Departments</h6>
                    <h2>8</h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="stat-card text-center">
                    <i className="fas fa-money-bill-wave fa-2x"></i>
                    <h6>Avg. Salary</h6>
                    <h2>$75,250</h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="stat-card text-center">
                    <i className="fas fa-user-plus fa-2x"></i>
                    <h6>New Hires</h6>
                    <h2>12</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;