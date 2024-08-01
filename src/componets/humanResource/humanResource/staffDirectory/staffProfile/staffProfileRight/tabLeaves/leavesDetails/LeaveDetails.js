import React from "react";

function LeaveDetails() {
  return (
    <div style={{ margin: "20px" }}>
      <div className="card" style={{ padding: "10px" }}>
        <h5>Leave Details</h5>

        <div style={{ margin: "20px 0", overflow: "auto" }}>
          <table
            className="datatables-users table dataTable no-footer dtr-column"
            id="DataTables_Table_0"
            aria-describedby="DataTables_Table_0_info"
          >
            <tbody>
              <tr>
                <th width="15%">Name</th>
                <td width="35%">Joe Black</td>
                <th width="15%">Staff ID</th>
                <td width="35%">9000</td>
              </tr>

              <tr>
                <th width="15%">Leave</th>
                <td width="35%">06/15/2024 - 06/18/2024 (4 Days)</td>
                <th width="15%"> Leave Type</th>
                <td width="35%"> Casual Leave </td>
              </tr>

              <tr>
                <th width="15%">Status</th>
                <td width="35%"> Pending</td>
                <th width="15%">Apply Date</th>
                <td width="35%"> 06/10/2024</td>
              </tr>
              <tr>
                <th>Reason</th>
                <td></td>
                <th>Note</th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LeaveDetails;
