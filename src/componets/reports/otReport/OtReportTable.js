import React from "react";

function OtReportTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Date</th>
            <th>Reference No</th>
            <th> OPD No</th>
            <th>Consultant Doctor</th>
            <th>Assistant Consultant1</th>
            <th>Operation Name</th>
            <th>Operation Category</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12/10/1993</td>
            <td>423 </td>
            <td>BLD00</td>
            <td>Amit Singh (9007)</td>
            <td>Oral Surgery</td>
            <td>Digital</td>
            <td> </td>
            <td>Success</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OtReportTable;
