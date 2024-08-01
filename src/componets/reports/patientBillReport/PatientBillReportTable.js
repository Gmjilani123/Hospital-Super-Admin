
import React from 'react'

function PatientBillReportTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Module</th>
            <th>OPD No</th>
            <th> IPD No</th>
            <th>Bill No</th>
            <th>Payment Mode</th>
            <th> Payment Date</th>
            <th>Payment Amount($)</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default PatientBillReportTable
