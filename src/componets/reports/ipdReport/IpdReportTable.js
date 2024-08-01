import React from "react";

function IpdReportTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Date</th>
            <th> OPD No</th>
            <th> OPD Checkup ID</th>
            <th>Patient Name</th>
            <th> Age</th>
            <th>Gender</th>

            <th>Mobile No</th>
            <th>Guardian Name</th>
            <th>Doctor Name</th>
            <th>Symptoms</th>
            <th>Findings</th>
            <th>Previous Medical Issue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>07/05/2024 07:00 AM </td>
            <td> 8989732423 </td>
            <td>Female</td>
            <td>Reyan Jain (9011)</td>
            <td>Online</td>
            <td>305, 1stfloor,k.kamarajroad,blr-42, Kamaraj Road</td>
            <td>144.00 </td>
            <td> </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default IpdReportTable;
