import React from "react";

function AllTransactionReportTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Transaction ID</th>
            <th>Date</th>

            <th>Patient Name</th>
            <th>Reference </th>
            <th>Category</th>
            <th>Collected By</th>
            <th>Payment Type</th>
            <th>Payment Mode</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default AllTransactionReportTable;
