import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Departments from './pages/Departments';
import Reports from './pages/Reports';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content-container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/employees" component={Employees} />
            <Route path="/departments" component={Departments} />
            <Route path="/reports" component={Reports} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;