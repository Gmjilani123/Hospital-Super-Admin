import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function TpaDetailsTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Charge Type</th>
            <th> Charge Category</th>
            <th> Charge Name</th>
            <th> Description</th>
            <th>Standard Charge ($) </th>
            <th>TPA Charge ($)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>OPD</td>
            <td>OPD Consultation Fees</td>
            <td>Consultation Fees</td>
            <td></td>
            <td>150.00</td>
            <td>100.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TpaDetailsTable;
