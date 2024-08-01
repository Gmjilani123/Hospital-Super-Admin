import React from "react";

function IpdBalanceReportTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> OPD No</th>
            <th>Patient Name</th>

            <th> Case ID</th>
            <th>Age </th>
            <th>Gender</th>
            <th>Mobile Number</th>
            <th>Guardian name</th>
            <th>Discharged</th>
            <th>Patient Active </th>
            <th>Net Amount ($) </th>
            <th>Paid Amount ($) </th>
            <th>Balance Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td colSpan={10}>
              <div>
                No data available in table <br /> <br />
                <img
                  src="https://smart-hospital.in/shappresource/images/addnewitem.svg"
                  width={150}
                />
                <br />
                <br />{" "}
                <span className="text-success bolds">
                  <i className="fa fa-arrow-left" /> Add new record or search
                  with different criteria.
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default IpdBalanceReportTable;
