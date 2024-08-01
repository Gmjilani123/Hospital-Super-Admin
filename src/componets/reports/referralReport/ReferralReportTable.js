import React from 'react'

function ReferralReportTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Name</th>
            <th>Patient Name</th>

            <th>Bill No</th>
            <th>Bill Amount ($) </th>
            <th>Commission Percentage (%) </th>
            <th>Commission Amount ($)</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default ReferralReportTable
