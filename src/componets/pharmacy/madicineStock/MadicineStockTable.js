import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function MadicineStockTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Madicine Name
                </label>
              </div>
            </th>
            <th> Madicine Company</th>
            <th> Madicine Composition</th>
            <th>Madicine Category</th>
            <th>Madicine Group</th>
            <th> Unit</th>
            <th> Available Qty</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Amlodipine
                </label>
              </div>
            </td>
            <td>S amlodipine</td>
            <td> Amlodipine</td>
            <td>Tablet</td>
            <td>AMD s</td>
            <td>100</td>

            <td>500</td>
            <td style={{ textAlign: "center" }}>
              <Link
               to="/admin/Pharmacy-Bill-list/MadicineStock/MadicineDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  VARICELLA
                </label>
              </div>
            </td>
            <td>VARICELLA Pvt. Ltd</td>
            <td> Injection</td>
            <td>Injection</td>
            <td>Varicella</td>
            <td>100</td>

            <td>2000</td>
            <td style={{ textAlign: "center" }}>
              <Link
               to="/admin/Pharmacy-Bill-list/MadicineStock/MadicineDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Ftox-DX
                </label>
              </div>
            </td>
            <td>Dextromethorphan 10 mg, Phenylephrine Hcl</td>
            <td> 5 mg</td>
            <td>Syrup</td>
            <td> Ftox-DX</td>
            <td>500</td>

            <td>1500</td>
            <td style={{ textAlign: "center" }}>
              <Link
               to="/admin/Pharmacy-Bill-list/MadicineStock/MadicineDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Mometasone
                </label>
              </div>
            </td>
            <td>Mometasone</td>
            <td> Mometasone</td>
            <td>Ointment</td>
            <td>Generic versions Westcort (cream and ointment)</td>
            <td>100</td>

            <td>500</td>
            <td style={{ textAlign: "center" }}>
              <Link
               to="/admin/Pharmacy-Bill-list/MadicineStock/MadicineDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Zukolite Wen
                </label>
              </div>
            </td>
            <td>Zydus</td>
            <td> Multivitamin</td>
            <td>Cream</td>
            <td>Multivitamin </td>
            <td>10</td>

            <td>1000</td>
            <td style={{ textAlign: "center" }}>
              <Link
               to="/admin/Pharmacy-Bill-list/MadicineStock/MadicineDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Amlodipine
                </label>
              </div>
            </td>
            <td>S amlodipine</td>
            <td> Amlodipine</td>
            <td>Tablet</td>
            <td>AMD s</td>
            <td>100</td>

            <td>500</td>
            <td style={{ textAlign: "center" }}>
              <Link
               to="/admin/Pharmacy-Bill-list/MadicineStock/MadicineDetails"
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

export default MadicineStockTable;
