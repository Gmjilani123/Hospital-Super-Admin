


function AuditReportTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Message</th>
            <th>Users</th>
            <th>IP-Address</th>
            <th>Action</th>
            <th>Platform</th>
            <th>Agent</th>
            <th>Date Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Record updated On Patient id 868</td>
            <td>SoniaBush (9002)</td>
            <td>106.197.93.186</td>
            <td>Update</td>
            <td> Windows 10</td>
            <td>Chrome 126.0.0.0</td>
            <td>07/16/2024 07:44 AM</td>
          </tr>

          <tr>
            <td>New Record inserted On Death Report id 51</td>
            <td>SoniaBush (9002)</td>
            <td>106.197.93.186</td>
            <td>Insert</td>
            <td> Windows 10</td>
            <td>Chrome 126.0.0.0</td>
            <td>07/16/2024 07:44 AM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AuditReportTable
