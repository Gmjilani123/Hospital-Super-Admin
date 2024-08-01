import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function PathologyTestTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Test Name</th>
            <th> Short Name</th>
            <th> Test Type</th>
            <th> Category</th>
            <th>Sub Catergory</th>
            <th>Mathod</th>
            <th>Report Days</th>
            <th> Tax($)</th>
            <th> Charge($)</th>
            <th>Amount ($)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Appendicitis</td>
            <td>Appendicitis</td>
            <td>Appendicitis</td>
            <td>Hematology</td>
            <td>Appendicitis</td>
            <td> open appendectomy</td>
            <td>5</td>
            <td>30.00 </td>
            <td>150.00 </td>
            <td>195.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/PathologyBill-List/PathologyTest/TestDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>Chest X-rays</td>
            <td>C</td>
            <td>Chest X-rays</td>
            <td>Clinical Microbiology </td>
            <td>Chest X-rays</td>
            <td>Painless imaging test </td>
            <td>2</td>
            <td>30.00 </td>
            <td>150.00 </td>
            <td>195.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/PathologyBill-List/PathologyTest/TestDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>Breast Ultrasound</td>
            <td>BU</td>
            <td> Breast Ultrasound</td>
            <td>Clinical Microbiology</td>
            <td></td>
            <td></td>
            <td>2</td>
            <td>30.00 </td>
            <td>150.00 </td>
            <td>195.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/PathologyBill-List/PathologyTest/TestDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>Vascular Sonography</td>
            <td>VSG</td>
            <td>VSG</td>
            <td>Molecular Diagnostics </td>
            <td></td>
            <td></td>
            <td>5</td>
            <td>30.00 </td>
            <td>150.00 </td>
            <td>195.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/PathologyBill-List/PathologyTest/TestDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>Appendicitis</td>
            <td>Appendicitis</td>
            <td>Appendicitis</td>
            <td>Hematology</td>
            <td>Appendicitis</td>
            <td> open appendectomy</td>
            <td>5</td>
            <td>30.00 </td>
            <td>150.00 </td>
            <td>195.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/PathologyBill-List/PathologyTest/TestDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>Vascular Sonography</td>
            <td>VSG</td>
            <td>VSG</td>
            <td>Molecular Diagnostics </td>
            <td></td>
            <td></td>
            <td>5</td>
            <td>30.00 </td>
            <td>150.00 </td>
            <td>195.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/PathologyBill-List/PathologyTest/TestDetails"
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

export default PathologyTestTable;
