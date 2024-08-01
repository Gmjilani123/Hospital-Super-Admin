import React from "react";
function InventoryTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Name</th>
            <th> Category</th>

            <th> Supplier</th>
            <th> Store</th>
            <th>Date</th>
            <th> Description</th>
            <th>Total Quantity</th>

            <th>Purchase Price ($)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Uniform (Patient-Staff)</td>
            <td>Uniforms</td>
            <td> Quick Service</td>
            <td>Vardaan</td>
            <td>06/30/2024</td>
            <td>
              Inventory item – is a separate product which can be specified in
              stock.
            </td>
            <td>10</td>
            <td>200.00 </td>
          </tr>

          <tr>
            <td>Uniform (Patient-Staff)</td>
            <td>Uniforms</td>
            <td> Quick Service</td>
            <td>Vardaan</td>
            <td>06/30/2024</td>
            <td>
              Inventory item – is a separate product which can be specified in
              stock.
            </td>
            <td>10</td>
            <td>200.00 </td>
          </tr>

          <tr>
            <td>Uniform (Patient-Staff)</td>
            <td>Uniforms</td>
            <td> Quick Service</td>
            <td>Vardaan</td>
            <td>06/30/2024</td>
            <td>
              Inventory item – is a separate product which can be specified in
              stock.
            </td>
            <td>10</td>
            <td>200.00 </td>
          </tr>

          <tr>
            <td>Uniform (Patient-Staff)</td>
            <td>Uniforms</td>
            <td> Quick Service</td>
            <td>Vardaan</td>
            <td>06/30/2024</td>
            <td>
              Inventory item – is a separate product which can be specified in
              stock.
            </td>
            <td>10</td>
            <td>200.00 </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InventoryTable;
