import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>EMS</h3>
          <button className="close-btn" onClick={toggleSidebar}>×</button>
        </div>
        <div className="sidebar-profile">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" />
          <h4>Admin User</h4>
        </div>
        <ul className="sidebar-menu">
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">
              <i className="fas fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={location.pathname === '/employees' ? 'active' : ''}>
            <Link to="/employees">
              <i className="fas fa-users"></i>
              <span>Employees</span>
            </Link>
          </li>
          <li className={location.pathname === '/departments' ? 'active' : ''}>
            <Link to="/departments">
              <i className="fas fa-building"></i>
              <span>Departments</span>
            </Link>
          </li>
          <li className={location.pathname === '/reports' ? 'active' : ''}>
            <Link to="/reports">
              <i className="fas fa-chart-bar"></i>
              <span>Reports</span>
            </Link>
          </li>
        </ul>
        <div className="sidebar-footer">
          <p>© 2025 EMS</p>
        </div>
      </div>
      <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>
      <button className="hamburger-btn" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  );
}

export default Sidebar;