import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function StockTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Inward Date</th>
            <th>Batch No</th>
            <th> Pharmacy Purchase No</th>
            <th>Expiry Date</th>
            <th>Packing Qty ($)</th>
            <th>Purchase Rate ($)</th>
            <th>Amount ($)</th>
            <th>Quantity</th>
            <th>MRP ($)</th>
            <th> Sales Price ($)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10/05/2023 </td>
            <td>89896</td>
            <td>PCHNO</td>
            <td>Jan/2024</td>
            <td>500</td>
            <td>50.00 </td>
            <td>50000.00</td>
            <td>1000</td>
            <td>50.00</td>
            <td>100.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="#"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>10/05/2023 </td>
            <td>89896</td>
            <td>PCHNO</td>
            <td>Jan/2024</td>
            <td>500</td>
            <td>50.00 </td>
            <td>50000.00</td>
            <td>1000</td>
            <td>50.00</td>
            <td>100.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="#"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StockTable;
