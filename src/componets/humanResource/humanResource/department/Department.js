import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";

function Department() {
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
              <td>Academic</td>
              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Department/Edit-department"
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
              <td> Library</td>
              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Department/Edit-department"
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
              <td> Sports</td>

              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Department/Edit-department"
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
              <td> Science</td>
              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Department/Edit-department"
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
              <td>Commerce </td>

              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Department/Edit-department"
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
              <td>Arts </td>

              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Department/Edit-department"
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
              <td>Exam </td>

              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Department/Edit-department"
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
              <td>Admin </td>

              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Department/Edit-department"
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
              <td>Finance </td>

              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Department/Edit-department"
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
              <td>Maths </td>

              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Department/Edit-department"
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

export default Department;
