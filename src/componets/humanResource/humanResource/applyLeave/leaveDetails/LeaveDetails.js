function LeaveDetailsComp() {
  return (
    <div style={{ margin: "20px" }}>
      <div className="card" style={{ padding: "10px" }}>
        <h5 className="mb-0"> Leave Details</h5>
        <div style={{ margin: "20px 0", overflow: "auto" }}>
          <table className=" table">
            <tbody>
              <tr>
                <th>Name</th>
                <td>Joe Black</td>
                <th>Staff ID</th>
                <td>9004</td>
              </tr>

              <tr>
                <th>Submitted By</th>
                <td>James Deckar (9004)</td>
                <th>Leave Type</th>
                <td>Maternity Leave</td>
              </tr>
              <tr>
                <th>Leave</th>
                <td>06/15/2024 - 06/18/2024 (4 Days)</td>
                <th>Apply Date</th>
                <td>06/10/2024</td>
              </tr>
              
              <tr>
                <th>Reason</th>
                <td></td>
                <th>Download</th>
                <td></td>
              </tr>
              <tr>
                <th>Note</th>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LeaveDetailsComp;
