import React from "react";

function IssueItemTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Item</th>
            <th>Item Category</th>
            <th> Issue Return</th>
            <th> Issue To</th>
            <th>Issued By</th>
            <th> Quantity</th>
            <th> Status</th>
            <th>Action</th>
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
            <td>
              <span className="btn btn-danger btn-sm ">Click to Return</span>
            </td>
            <td> </td>
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
            <td>
              <span className="btn btn-danger btn-sm ">Click to Return</span>
            </td>
            <td> </td>
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
            <td>
              <span className="btn btn-danger btn-sm ">Click to Return</span>
            </td>
            <td> </td>
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
            <td>
              <span className="btn btn-danger btn-sm ">Click to Return</span>
            </td>
            <td> </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default IssueItemTable;
