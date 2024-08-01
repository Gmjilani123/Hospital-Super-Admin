import { Link } from "react-router-dom";

function PayrollTable() {
  return (
    <div>
      <div style={{ margin: "20px 0", overflow: "auto" }}>
        <table className=" table">
          <thead className="border-top">
            <tr>
              <th>Staff ID</th>
              <th>Name</th>

              <th>Role</th>
              <th> Department </th>
              <th>Designation</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9004</td>
              <td>James Deckar</td>
              <td>Accountant</td>
              <td>Finance</td>
              <td>Accountant</td>
              <td>79786546463</td>
              <td>
                <span className="btn btn-success  btn-sm ">Paid</span>
              </td>
              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Staff-Directory/Staff-Profile/Payroll-Payslip"
                      className="btn btn-secondary  btn-circle btn-sm"
                    >
                      View Payslip
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PayrollTable;
