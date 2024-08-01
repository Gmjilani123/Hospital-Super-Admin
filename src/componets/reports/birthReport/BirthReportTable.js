import React from "react";

function BirthReportTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Reference No</th>
            <th> Case ID</th>
            <th>Child Name</th>
            <th>Gender </th>
            <th>Birth Date</th>
            <th>Weight</th>
            <th>Mother Name</th>
            <th>Father Name</th>
            <th>Report</th>
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

export default BirthReportTable;
