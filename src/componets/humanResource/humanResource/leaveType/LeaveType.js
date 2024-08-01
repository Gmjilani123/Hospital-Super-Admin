import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";

function LeaveType() {
  return (
    <div>
      <div style={{ margin: "20px 0", overflow: "auto" }}>
        <table className=" table">
          <thead className="border-top">
            <tr>
              <th>Name</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>James Deckar</td>

              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Leave-type/Edit-leave"
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
              <td>Medical Leave</td>
              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Leave-type/Edit-leave"
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
              <td>Casual Leave</td>

              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Leave-type/Edit-leave"
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
              <td>Maternity Leave</td>
              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Leave-type/Edit-leave"
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
              <td>Sick Leave</td>

              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Leave-type/Edit-leave"
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
    </div>
  );
}

export default LeaveType;
