import React from "react";

function ExpiryMadicineReportTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Medicine Name</th>
            <th>Batch No</th>
            <th>Company Name</th>
            <th> Medicine Category</th>
            <th> Medicine Group</th>
            <th>Supplier</th>

            <th>Expire Date </th>
            <th>Qty</th>
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

export default ExpiryMadicineReportTable;
