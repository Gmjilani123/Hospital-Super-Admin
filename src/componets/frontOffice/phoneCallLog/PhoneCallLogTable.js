import { AiOutlineDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function PhoneCallLogTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th> Date</th>
            <th>Next Follow Up Date</th>
            <th>Call Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Darwin</td>
            <td>80890567</td>
            <td>07/30/2024</td>
            <td>07/31/2024</td>
            <td>Incoming</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Visitors/PhoneCallLog/CallDetails"
                    className="btn btn-primary bg-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>

                <div className="tool_show_parent">
                  <Link
                    to="/admin/OPD/PatientProfile/MovePatient-To-IPD"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-danger share_squar"
                  >
                    <AiOutlineDelete />
                  </Link>
                </div>

                <div className="tool_show_parent">
                  <Link
                    to="/admin/Visitors/EditVisitor"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <BsFillPencilFill />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>Robert</td>
            <td>890567675</td>
            <td>07/30/2024</td>
            <td>07/31/2024</td>
            <td>Outgoing</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Visitors/PhoneCallLog/CallDetails"
                    className="btn btn-primary bg-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>

                <div className="tool_show_parent">
                  <Link
                    to="/admin/OPD/PatientProfile/MovePatient-To-IPD"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-danger share_squar"
                  >
                    <AiOutlineDelete />
                  </Link>
                </div>

                <div className="tool_show_parent">
                  <Link
                    to="/admin/Visitors/EditVisitor"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <BsFillPencilFill />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>Darwin</td>
            <td>80890567</td>
            <td>07/30/2024</td>
            <td>07/31/2024</td>
            <td>Incoming</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Visitors/PhoneCallLog/CallDetails"
                    className="btn btn-primary bg-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>

                <div className="tool_show_parent">
                  <Link
                    to="/admin/OPD/PatientProfile/MovePatient-To-IPD"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-danger share_squar"
                  >
                    <AiOutlineDelete />
                  </Link>
                </div>

                <div className="tool_show_parent">
                  <Link
                    to="/admin/Visitors/EditVisitor"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <BsFillPencilFill />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>Darwin</td>
            <td>80890567</td>
            <td>07/30/2024</td>
            <td>07/31/2024</td>
            <td>Incoming</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Visitors/PhoneCallLog/CallDetails"
                    className="btn btn-primary bg-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>

                <div className="tool_show_parent">
                  <Link
                    to="/admin/OPD/PatientProfile/MovePatient-To-IPD"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-danger share_squar"
                  >
                    <AiOutlineDelete />
                  </Link>
                </div>

                <div className="tool_show_parent">
                  <Link
                    to="/admin/Visitors/EditVisitor"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <BsFillPencilFill />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>Darwin</td>
            <td>80890567</td>
            <td>07/30/2024</td>
            <td>07/31/2024</td>
            <td>Incoming</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Visitors/PhoneCallLog/CallDetails"
                    className="btn btn-primary bg-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>

                <div className="tool_show_parent">
                  <Link
                    to="/admin/OPD/PatientProfile/MovePatient-To-IPD"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-danger share_squar"
                  >
                    <AiOutlineDelete />
                  </Link>
                </div>

                <div className="tool_show_parent">
                  <Link
                    to="/admin/Visitors/EditVisitor"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <BsFillPencilFill />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>Darwin</td>
            <td>80890567</td>
            <td>07/30/2024</td>
            <td>07/31/2024</td>
            <td>Incoming</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Visitors/PhoneCallLog/CallDetails"
                    className="btn btn-primary bg-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>

                <div className="tool_show_parent">
                  <Link
                    to="/admin/OPD/PatientProfile/MovePatient-To-IPD"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-danger share_squar"
                  >
                    <AiOutlineDelete />
                  </Link>
                </div>

                <div className="tool_show_parent">
                  <Link
                    to="/admin/Visitors/EditVisitor"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <BsFillPencilFill />
                  </Link>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PhoneCallLogTable;
