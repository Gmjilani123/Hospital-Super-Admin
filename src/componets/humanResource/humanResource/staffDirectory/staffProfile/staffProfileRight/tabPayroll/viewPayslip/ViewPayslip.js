function ViewPayslip() {
  return (
    <div style={{ margin: "20px" }}>
      <div className="card" style={{ padding: "10px" }}>
        <h5>Payslip Details</h5>
        <div className="bg-black text-white text-center">
          <h3 className="text-white mb-0 py-1">Payslip</h3>
        </div>
        <div className="text-center">
          <h2>Payslip For The Period Of February 2021</h2>
        </div>

        <div>
          <div className="d-flex align-items-center justify-content-between">
            <h6>Payslip #1</h6>
            <h6>Payment Date: 03/05/2021</h6>
          </div>
          <div style={{ margin: "20px 0", overflow: "auto" }}>
            <table
              className="datatables-users table dataTable no-footer dtr-column"
              id="DataTables_Table_0"
              aria-describedby="DataTables_Table_0_info"
            >
              <thead className="border-top">
                <tr>
                  <th>Staff ID </th>
                  <th>Department</th>
                  <th>Name</th>

                  <th>Designation</th>
                  <th>Earning ($)</th>
                  <th>Deduction($)</th>
                  <th>Total Earning($)</th>
                  <th>Total Deduction($)</th>
                  <th>Payment Mode</th>
                  <th>Basic Salary ($)</th>
                  <th>Gross Salary ($)</th>
                  <th>Net Salary ($)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>9000</td>
                  <td>Admin</td>
                  <td>Joe Black</td>

                  <td>Technical Head</td>
                  <td> 0.00</td>
                  <td> 0.00</td>
                  <td> 0.00</td>
                  <td> 0.00</td>
                  <td>Cash</td>

                  <td>45,000.00</td>
                  <td>45,000.00</td>
                  <td>45,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPayslip;
