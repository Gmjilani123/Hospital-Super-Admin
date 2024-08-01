import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function PatientListTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>
              <input type="checkbox" className="me-2" />
              Patient Name
            </th>
            <th>Age</th>
            <th> Gender</th>
            <th>Phone</th>
            <th>Guardian Name</th>
            <th> Address</th>
            <th>Dead</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" className="me-2" />
              Oliver Thomas(1)
            </td>
            <td> 39 Year 3 Month 13 Days </td>
            <td>Male</td>
            <td>7896541230</td>
            <td>Edward Thomas</td>
            <td>482 Kingsway, Brooklyn West, CA</td>
            <td>No</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/PatientList/PatientDetail"
                    className="btn btn-primary bg-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
                <div className="tool_show_parent">
                  <Link
                    to="#"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <BsFillPencilFill />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" className="me-2" /> John Mashall(2)
            </td>
            <td> 39 Year 3 Month 13 Days </td>
            <td>Male</td>
            <td>7896541230</td>
            <td> Smith Marshall</td>
            <td>Blackstone Park, Brooklyn North, CA</td>
            <td>No</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/PatientList/PatientDetail"
                    className="btn btn-primary bg-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
                <div className="tool_show_parent">
                  <Link
                    to="#"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <BsFillPencilFill />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" className="me-2" />
              Mariya Tylor(121)
            </td>
            <td> 14 Year 10 Month 5 Days</td>
            <td>Female</td>
            <td>7896541230</td>
            <td> Jonson</td>
            <td>CA,USA</td>
            <td>No</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/PatientList/PatientDetail"
                    className="btn btn-primary bg-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
                <div className="tool_show_parent">
                  <Link
                    to="#"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <BsFillPencilFill />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" className="me-2" />
              Arnav joshi(190)
            </td>
            <td>2 Month 25 Days</td>
            <td>Male</td>
            <td>7896541230</td>
            <td> </td>
            <td></td>
            <td>Yes</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/PatientList/PatientDetail"
                    className="btn btn-primary bg-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
                <div className="tool_show_parent">
                  <Link
                    to="#"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <BsFillPencilFill />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" className="me-2" />
              Oliver Thomas(1)
            </td>
            <td> 39 Year 3 Month 13 Days </td>
            <td>Male</td>
            <td>7896541230</td>
            <td>Edward Thomas</td>
            <td>482 Kingsway, Brooklyn West, CA</td>
            <td>No</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/PatientList/PatientDetail"
                    className="btn btn-primary bg-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
                <div className="tool_show_parent">
                  <Link
                    to="#"
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

export default PatientListTable;
