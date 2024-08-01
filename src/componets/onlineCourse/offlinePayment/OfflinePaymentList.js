import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { Link } from "react-router-dom";
function OfflinePaymentList() {
  return (
    // <div
    //   className="card"
    //   style={{ padding: "10px", margin: "20px 0", overflow: "auto" }}
    // >
    //   <h5>Student List</h5>
    //   {/* <form className="row">
    //     <div className="form-group col-3">
    //       <label htmlFor="branch">Search</label>
    //       <input className="form-control" type="text" />
    //     </div>
    //   </form> */}

    // </div>

    <div className="card">
      <table
        className="datatables-users table dataTable no-footer dtr-column"
        id="DataTables_Table_0"
        aria-describedby="DataTables_Table_0_info"
      >
        <thead className="border-top">
          <tr>
            <th>Course </th>
            <th>Section</th>
            <th>Lesson</th>

            <th>Quiz</th>
            <th>Course Provide </th>
            <th>Price ($)</th>
            <th>Current Price ($)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Seven</td>
            <td>A</td>
            <td>RSM-00007 </td>

            <td>Aiden</td>
            <td>Aiden Loxton</td>
            <td>17/05/1989</td>
            <td>8892345667</td>

            <td>
              <div className="d-flex">
                <div>
                  <Link
                    to={`#`}
                    className="btn btn-primary btn-icon btn-circle btn-sm"
                  >
                    <EditIcon />
                  </Link>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-danger btn-icon btn-circle btn-sm ms-1"
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Seven</td>
            <td>A</td>
            <td>RSM-00007 </td>

            <td>Aiden</td>
            <td>Aiden Loxton</td>
            <td>17/05/1989</td>
            <td>8892345667</td>

            <td>
              <div className="d-flex">
                <div>
                  <Link
                    to={`#`}
                    className="btn btn-primary btn-icon btn-circle btn-sm"
                  >
                    <EditIcon />
                  </Link>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-danger btn-icon btn-circle btn-sm ms-1"
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Seven</td>
            <td>A</td>
            <td>RSM-00007 </td>

            <td>Aiden</td>
            <td>Aiden Loxton</td>
            <td>17/05/1989</td>
            <td>8892345667</td>

            <td>
              <div className="d-flex">
                <div>
                  <Link
                    to={`#`}
                    className="btn btn-primary btn-icon btn-circle btn-sm"
                  >
                    <EditIcon />
                  </Link>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-danger btn-icon btn-circle btn-sm ms-1"
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OfflinePaymentList;
