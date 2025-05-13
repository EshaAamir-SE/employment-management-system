import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Reports() {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Reports and Analytics</h1>
        <Link to="/" className="btn btn-outline-secondary">Back to Dashboard</Link>
      </div>
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h4>Department Headcount</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Department</th>
                      <th>Employees</th>
                      <th>% of Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sales</td>
                      <td>68</td>
                      <td>29.1%</td>
                    </tr>
                    <tr>
                      <td>IT</td>
                      <td>42</td>
                      <td>17.9%</td>
                    </tr>
                    <tr>
                      <td>Marketing</td>
                      <td>32</td>
                      <td>13.7%</td>
                    </tr>
                    <tr>
                      <td>Finance</td>
                      <td>23</td>
                      <td>9.8%</td>
                    </tr>
                    <tr>
                      <td>HR</td>
                      <td>15</td>
                      <td>6.4%</td>
                    </tr>
                    <tr>
                      <td>Others</td>
                      <td>54</td>
                      <td>23.1%</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="table-dark">
                      <th>Total</th>
                      <th>234</th>
                      <th>100%</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header bg-success text-white">
              <h4>Department Budget Allocation</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Department</th>
                      <th>Budget</th>
                      <th>% of Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sales</td>
                      <td>$1,250,000</td>
                      <td>32.4%</td>
                    </tr>
                    <tr>
                      <td>IT</td>
                      <td>$850,000</td>
                      <td>22.0%</td>
                    </tr>
                    <tr>
                      <td>Marketing</td>
                      <td>$750,000</td>
                      <td>19.5%</td>
                    </tr>
                    <tr>
                      <td>Finance</td>
                      <td>$680,000</td>
                      <td>17.6%</td>
                    </tr>
                    <tr>
                      <td>HR</td>
                      <td>$320,000</td>
                      <td>8.3%</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="table-dark">
                      <th>Total</th>
                      <th>$3,850,000</th>
                      <th>100%</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="card-header bg-warning">
              <h4>Salary Distribution by Department</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Department</th>
                      <th>Min Salary</th>
                      <th>Avg Salary</th>
                      <th>Max Salary</th>
                      <th>Total Payroll</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>IT</td>
                      <td>$65,000</td>
                      <td>$92,500</td>
                      <td>$145,000</td>
                      <td>$3,885,000</td>
                    </tr>
                    <tr>
                      <td>Sales</td>
                      <td>$48,000</td>
                      <td>$75,400</td>
                      <td>$120,000</td>
                      <td>$5,127,200</td>
                    </tr>
                    <tr>
                      <td>Finance</td>
                      <td>$62,000</td>
                      <td>$88,300</td>
                      <td>$140,000</td>
                      <td>$2,030,900</td>
                    </tr>
                    <tr>
                      <td>Marketing</td>
                      <td>$52,000</td>
                      <td>$72,600</td>
                      <td>$125,000</td>
                      <td>$2,323,200</td>
                    </tr>
                    <tr>
                      <td>HR</td>
                      <td>$58,000</td>
                      <td>$68,200</td>
                      <td>$110,000</td>
                      <td>$1,023,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;