import React from "react";

function InventoryItemReportTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Name</th>
            <th> Category</th>
            <th> Supplier</th>
            <th> Store</th>
            <th> Total Quantity</th>
            <th>Total Issue</th>

            <th>Purchase Price ($)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Electrocardiography machines</td>
            <td>Cardiology </td>
            <td>VK Supplier</td>
            <td> SK Pharma</td>
            <td>20</td>
            <td>2</td>
            <td>98 </td>
          </tr>

          <tr>
            <td>Monitor for glucose management </td>
            <td> Medical Equipment </td>
            <td>VK Supplier</td>
            <td> Vinay Pharmacy</td>
            <td>20</td>
            <td>0</td>
            <td>20 </td>
          </tr>

          <tr>
            <td>Electrocardiography machines</td>
            <td>Cardiology </td>
            <td>VK Supplier</td>
            <td> SK Pharma</td>
            <td>20</td>
            <td>2</td>
            <td>98 </td>
          </tr>

          <tr>
            <td>Electrocardiography machines</td>
            <td>Cardiology </td>
            <td>VK Supplier</td>
            <td> SK Pharma</td>
            <td>20</td>
            <td>2</td>
            <td>98 </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InventoryItemReportTable;
