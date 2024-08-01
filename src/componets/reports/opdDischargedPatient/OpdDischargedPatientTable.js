import React from "react";

function OpdDischargedPatientTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Patient Name</th>
            <th> OPD No</th>
            <th>Case ID</th>
            <th> Gender</th>
            <th> Phone</th>
            <th>Consultant</th>

            <th>Appointment Date</th>
            <th>Discharged Date</th>
            <th>Discharge Status</th>
            <th>Total Admit Days</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>harry</td>
            <td>32423 </td>
            <td>BP65</td>
            <td>Female</td>
            <td>98437583289</td>
            <td>Reyan(9002)</td>
            <td>12/10/1993</td>
            <td>11/03/2024</td>
            <td>12/08/1993</td>
            <td>98 </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OpdDischargedPatientTable;
