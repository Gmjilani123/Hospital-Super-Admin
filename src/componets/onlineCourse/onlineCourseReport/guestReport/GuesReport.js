import React from "react";
import { FaEye, FaStar, FaStarHalf } from "react-icons/fa";
import { Link } from "react-router-dom";

function GuesReport() {
  return (
    <div className="card">
      <h5>Guest Report</h5>
      <table
        className="datatables-users table dataTable no-footer dtr-column"
        id="DataTables_Table_0"
        aria-describedby="DataTables_Table_0_info"
      >
        <thead className="border-top">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Admission No</th>
            <th> Email </th>
            <th>Date Of Birth</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="" alt="" />
            </td>
            <td>Arvind Sinha</td>

            <td>Guest100</td>
            <td>arvind@gmail.com</td>
            <td>980878768</td>
            <td>
              <input type="date" style={{ border: "none" }} />
            </td>
            <td>Male </td>
            <td>
              <div className="d-flex">
                {/* <div>
                  <Link
                    to={`#`}
                    className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                    style={{ backgroundColor: "#2298C1" }}
                  >
                    <FaEye />
                  </Link>
                </div> */}
                {/* <div>
                <Link
                  to={`#`}
                  className="btn btn-primary btn-icon btn-circle btn-sm"
                  data-original-title="Delete"
                  data-toggle="tooltip"
                  aria-describedby="tooltip"
                >
                  <EditIcon />
                </Link>
              </div> */}
                {/* <div>
                  <button
                    type="button"
                    className="btn btn-danger btn-icon btn-circle btn-sm ms-1"
                  >
                    <DeleteIcon />
                  </button>
                </div> */}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <img src="" alt="" />
            </td>
            <td>Vinay Patel</td>

            <td>Guest101</td>
            <td>vinay@gmail.com</td>
            <td>980878768</td>
            <td>
              <input type="date" style={{ border: "none" }} />
            </td>
            <td>Male </td>
            <td>
              <div className="d-flex">
                {/* <div>
                  <Link
                    to={`#`}
                    className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                    style={{ backgroundColor: "#2298C1" }}
                  >
                    <FaEye />
                  </Link>
                </div> */}
                {/* <div>
                <Link
                  to={`#`}
                  className="btn btn-primary btn-icon btn-circle btn-sm"
                  data-original-title="Delete"
                  data-toggle="tooltip"
                  aria-describedby="tooltip"
                >
                  <EditIcon />
                </Link>
              </div> */}
                {/* <div>
                  <button
                    type="button"
                    className="btn btn-danger btn-icon btn-circle btn-sm ms-1"
                  >
                    <DeleteIcon />
                  </button>
                </div> */}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <img src="" alt="" />
            </td>
            <td>Mitchel Thomas</td>

            <td>Guest102</td>
            <td>mitchel@gmail.com</td>
            <td></td>
            <td>
              <input type="date" style={{ border: "none" }} />
            </td>
            <td>Male </td>
            <td>
              <div className="d-flex">
                {/* <div>
                  <Link
                    to={`#`}
                    className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                    style={{ backgroundColor: "#2298C1" }}
                  >
                    <FaEye />
                  </Link>
                </div> */}
                {/* <div>
                <Link
                  to={`#`}
                  className="btn btn-primary btn-icon btn-circle btn-sm"
                  data-original-title="Delete"
                  data-toggle="tooltip"
                  aria-describedby="tooltip"
                >
                  <EditIcon />
                </Link>
              </div> */}
                {/* <div>
                  <button
                    type="button"
                    className="btn btn-danger btn-icon btn-circle btn-sm ms-1"
                  >
                    <DeleteIcon />
                  </button>
                </div> */}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <img src="" alt="" />
            </td>
            <td>Elisabeth Thomas</td>

            <td>Guest104</td>
            <td>elisabeth@gmail.com</td>
            <td></td>
            <td>
              <input type="date" style={{ border: "none" }} />
            </td>
            <td>Female </td>
            <td>
              <div className="d-flex">
                {/* <div>
                  <Link
                    to={`#`}
                    className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                    style={{ backgroundColor: "#2298C1" }}
                  >
                    <FaEye />
                  </Link>
                </div> */}
                {/* <div>
                <Link
                  to={`#`}
                  className="btn btn-primary btn-icon btn-circle btn-sm"
                  data-original-title="Delete"
                  data-toggle="tooltip"
                  aria-describedby="tooltip"
                >
                  <EditIcon />
                </Link>
              </div> */}
                {/* <div>
                  <button
                    type="button"
                    className="btn btn-danger btn-icon btn-circle btn-sm ms-1"
                  >
                    <DeleteIcon />
                  </button>
                </div> */}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <img src="" alt="" />
            </td>
            <td>Alberto Wood</td>

            <td>Guest105</td>
            <td>alberto@gmail.com	</td>
            <td>980878768</td>
            <td>
              <input type="date" style={{ border: "none" }} />
            </td>
            <td>Male </td>
            <td>
              <div className="d-flex">
                {/* <div>
                  <Link
                    to={`#`}
                    className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                    style={{ backgroundColor: "#2298C1" }}
                  >
                    <FaEye />
                  </Link>
                </div> */}
                {/* <div>
                <Link
                  to={`#`}
                  className="btn btn-primary btn-icon btn-circle btn-sm"
                  data-original-title="Delete"
                  data-toggle="tooltip"
                  aria-describedby="tooltip"
                >
                  <EditIcon />
                </Link>
              </div> */}
                {/* <div>
                  <button
                    type="button"
                    className="btn btn-danger btn-icon btn-circle btn-sm ms-1"
                  >
                    <DeleteIcon />
                  </button>
                </div> */}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GuesReport;
