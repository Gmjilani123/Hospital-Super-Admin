import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";

function Designation() {
  return (
    <div>
      <div style={{ margin: "20px 0", overflow: "auto" }}>
        <table className=" table">
          <thead className="border-top">
            <tr>
              <th>Designation</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Accountant</td>
              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Designation/Edit-Designation"
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
              <td> Admin</td>
              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Designation/Edit-Designation"
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
              <td> Director</td>

              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Designation/Edit-Designation"
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
              <td> Faculty</td>
              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Designation/Edit-Designation"
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
              <td>Librarian </td>

              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Designation/Edit-Designation"
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
              <td>Principal </td>

              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Designation/Edit-Designation"
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
              <td>Receptionist </td>

              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Designation/Edit-Designation"
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
              <td>Technical Head </td>

              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Designation/Edit-Designation"
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
              <td>Vice Principal </td>

              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Designation/Edit-Designation"
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

export default Designation;
