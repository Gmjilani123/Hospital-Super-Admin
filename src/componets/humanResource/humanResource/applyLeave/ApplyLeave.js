import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { PiEyeSlashLight } from "react-icons/pi";
function ApplyLeave() {
  return (
    <div>
      <div style={{ margin: "20px 0", overflow: "auto" }}>
        <table className=" table">
          <thead className="border-top">
            <tr>
              <th>Staff</th>
              <th>Leave Type</th>
              <th>Leave Date</th>
              <th> Days </th>
              <th>Apply Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>James Deckar</td>
              <td>Maternity Leave</td>
              <td>05/22/2024 - 05/23/2024</td>
              <td>2</td>
              <td>06/10/2024</td>

              <td>
                <span className="btn btn-warning  btn-sm ">Pending</span>
              </td>
              <td>
                <div className="d-flex">
                  <div className="me-1">
                    <Link
                      to="/admin/Apply-leave/leave-details"
                      className="btn btn-info btn-icon btn-circle btn-sm"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <PiEyeSlashLight />
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
              <td>James Deckar (9004)</td>
              <td>Maternity Leave</td>
              <td>05/22/2024 - 05/23/2024</td>
              <td>2</td>
              <td>06/10/2024</td>

              <td>
                <span className="btn btn-danger  btn-sm ">Disapproved</span>
              </td>
              <td>
                <div className="d-flex">
                  <div className="me-1">
                    <Link
                      to="/admin/Apply-leave/leave-details"
                      className="btn btn-info btn-icon btn-circle btn-sm"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <PiEyeSlashLight />
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
              <td>Jason Sharlton (900002301)</td>
              <td>Casual Leave</td>
              <td>06/15/2024 - 06/18/2024</td>
              <td>4</td>
              <td>06/10/2024</td>

              <td>
                <span className="btn btn-warning  btn-sm ">Pending</span>
              </td>
              <td>
                <div className="d-flex">
                  <div className="me-1">
                    <Link
                      to="/admin/Apply-leave/leave-details"
                      className="btn btn-info btn-icon btn-circle btn-sm"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <PiEyeSlashLight />
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
              <td>Joe Black (9000)</td>
              <td>Casual Leave</td>
              <td>06/15/2024 - 06/18/2024</td>
              <td>3</td>
              <td>06/10/2024</td>

              <td>
                <span className="btn btn-success btn-sm">Approved</span>
              </td>
              <td>
                <div className="d-flex">
                  <div className="me-1">
                    <Link
                      to="/admin/Apply-leave/leave-details"
                      className="btn btn-info btn-icon btn-circle btn-sm"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <PiEyeSlashLight />
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

export default ApplyLeave;
