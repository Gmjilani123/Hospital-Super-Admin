import React from 'react'

function AmbulanceReportTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Ambulance Call No</th>
            <th>Patient Name</th>
            <th>Date</th>
            <th>Contact No </th>
            <th>Vehicle Number</th>
            <th>Vehicle Model</th>
            <th> Driver Name</th>
            <th>Address</th>
            <th>Amount($)</th>
            <th>Paid Amount($)</th>
            <th>Balance Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>545684</td>
            <td>Ladhi </td>
            <td>12/10/1993</td>
            <td>4645756745</td>
            <td>gh547h</td>
            <td></td>
            <td>Pajhi</td>
            <td> </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AmbulanceReportTable
