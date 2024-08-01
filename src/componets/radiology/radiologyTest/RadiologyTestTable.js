import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function RadiologyTestTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Test Name</th>
            <th> Short Name</th>
            <th>Test Type</th>
            <th> Category</th>
            <th> Subcategory</th>
            <th> Report Days</th>
            <th> Tax (%)</th>
            <th> Charge ($)</th>
            <th> Amount ($)</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Resting 12-lead EKG</td>
            <td>RLE</td>
            <td>RLE</td>
            <td>X-RAY LUMBOSACRAL SPINE AP AND LAT VIEWS </td>
            <td>RLE / lead EKG</td>
            <td>1</td>
            <td>20.00 </td>
            <td>160.00 </td>
            <td>192.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/Radiology/RadiologyTest/testDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>Magnetic resonance imaging</td>
            <td>(MRI)</td>
            <td>Computed Tomography</td>
            <td>X-RAY CHEST PA VIEW</td>
            <td>Computed tomography</td>
            <td>1</td>
            <td>20.00 </td>
            <td>160.00 </td>
            <td>192.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/Radiology/RadiologyTest/testDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>Functional MRI (RI)</td>
            <td>FMRI</td>
            <td>FMRI</td>
            <td>X-RAY LUMBOSACRAL SPINE AP AND LAT VIEWS </td>
            <td></td>
            <td>1</td>
            <td>20.00 </td>
            <td>160.00 </td>
            <td>192.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/Radiology/RadiologyTest/testDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>Cardiopulmonary Exercise Test</td>
            <td>CPET</td>
            <td>CPET</td>
            <td>X-RAY LUMBOSACRAL SPINE AP AND LAT VIEWS </td>
            <td></td>
            <td>1</td>
            <td>20.00 </td>
            <td>160.00 </td>
            <td>192.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/Radiology/RadiologyTest/testDetails"
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

export default RadiologyTestTable;
