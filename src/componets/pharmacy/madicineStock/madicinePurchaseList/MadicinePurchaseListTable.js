import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function MadicinePurchaseListTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>
              <div className="form-check">Pharmacy Purchase No</div>
            </th>
            <th>Purchase Date </th>
            <th> Bill No</th>
            <th> Supplier Name</th>
            <th>Total ($) </th>
            <th>Tax ($) </th>
            <th>Discount ($) </th>
            <th>Net Amount ($) </th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PCHNO138</td>
            <td>06/29/2024 05:45 PM</td>
            <td> </td>
            <td>SGS Pharmacy</td>
            <td>72000.00 </td>
            <td>7200.00 </td>
            <td>0.00 </td>
            <td>79200.00</td>

            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/Pharmacy-Bill-list/MadicineStock/MadicinePurchase/PurchaseDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>PCHNO137</td>
            <td>06/30/2024 12:30 PM</td>
            <td> 67999</td>
            <td>VKS Pharmacy</td>
            <td>20000.00 </td>
            <td>2000.00 </td>
            <td>4000.00 </td>

            <td>18000.00</td>

            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/Pharmacy-Bill-list/MadicineStock/MadicinePurchase/PurchaseDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>
          <tr>
            <td>PCHNO135</td>
            <td>06/12/2024 01:31 PM</td>
            <td> 5464</td>
            <td>SGS Pharmacy</td>
            <td>30000.00 </td>
            <td>7200.00 </td>
            <td>0.00 </td>
            <td>79200.00</td>

            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/Pharmacy-Bill-list/MadicineStock/MadicinePurchase/PurchaseDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>
          <tr>
            <td>PCHNO138</td>
            <td>06/29/2024 05:45 PM</td>
            <td>32421 </td>
            <td>SGS Pharmacy</td>
            <td>72000.00 </td>
            <td>7200.00 </td>
            <td>0.00 </td>
            <td>79200.00</td>

            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/Pharmacy-Bill-list/MadicineStock/MadicinePurchase/PurchaseDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>
          <tr>
            <td>PCHNO138</td>
            <td>06/29/2024 05:45 PM</td>
            <td> </td>
            <td>SGS Pharmacy</td>
            <td>72000.00 </td>
            <td>7200.00 </td>
            <td>0.00 </td>
            <td>79200.00</td>

            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/Pharmacy-Bill-list/MadicineStock/MadicinePurchase/PurchaseDetails"
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

export default MadicinePurchaseListTable;
