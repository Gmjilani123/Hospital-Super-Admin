import React from 'react'

function RadiologyReportTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Bill No</th>
            <th>Date</th>
            <th>Patient Name</th>
            <th>Category Name</th>
            <th> Test Name</th>
            <th>Consultant Doctor</th>

            <th> Sample Collected Person Name</th>
            <th> Previous Report Value</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Synthatic</td>
            <td>32423 </td>
            <td>Himalya</td>
            <td>upper age</td>
            <td>Thou</td>
            <td>himalaya pharmacy</td>
            <td>12/10/1993</td>

            <td> </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RadiologyReportTable
