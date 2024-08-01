import React from "react";

function DeathReportTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Reference No</th>
            <th> Case ID</th>
            <th>Guardian Name</th>
            <th>Death Date </th>
            <th>Patient Name</th>
            <th>Gender</th>
            <th> Report</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>545684</td>
            <td>Ladhi </td>
            <td>12/10/1993</td>
            <td>4645756745</td>

            <td></td>
            <td>Pajhi</td>
            <td> </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DeathReportTable;
