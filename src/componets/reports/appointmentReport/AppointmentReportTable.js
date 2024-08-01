import React from "react";

function AppointmentReportTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Name</th>
            <th> Date</th>

            <th> Phone</th>
            <th> Gender</th>
            <th>Doctor</th>
            <th> Source</th>
            <th> Alternate Address</th>

            <th>Fees</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kalpana Chawla (1096)</td>
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

export default AppointmentReportTable;
