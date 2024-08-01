import React from "react";

import ExportFile from "../../../../common/exportFile/ExportFile";
import { Link } from "react-router-dom";
import { CgArrowsExchange } from "react-icons/cg";
import { FaEye, FaHome } from "react-icons/fa";
import { LiaShareSquare } from "react-icons/lia";
import { Dropdown } from "react-bootstrap";
import { PiPrinterDuotone } from "react-icons/pi";
import { MdFileOpen } from "react-icons/md";

function Visit() {
  const handlePrint = () => {
    console.log("Printing...");
    window.print();
  };

  return (
    <div className="dataTables_wrapper ">
      <div className="row_wrapper">
        <div className="row">
          <div className="col-md-4 ">
            <h4>Visit </h4>
          </div>
          <div className="col">
            <div className="d-flex align-item-center justify-content-end">
              <Link
                className="btn btn-secondary add-new btn-primary waves-effect waves-light"
                to={"/admin/OPD/PatientProfile/NewVisitPatient"}
              >
                <span>
                  {/* <i className="ti ti-plus me-0 me-sm-1 ti-xs mb-1" /> */}
                  <CgArrowsExchange className="fs-4" />

                  <span className="d-none d-sm-inline-block">New Visit</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row me-2">
        <div className="col-md-4">
          <div className="me-3">
            <div className="dataTables_length d-flex">
              <label>
                <select className="form-select">
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="mt-3" style={{ textAlign: "end" }}>
            <ExportFile />
          </div>
        </div>
      </div>
      <div className="" style={{ overflow: "auto" }}>
        <table className="table py-1 px-1">
          <thead className="border-top">
            <tr>
              <th>OPD No</th>
              <th>Case Id</th>
              <th>Appointment Date</th>

              <th> Consultant</th>
              <th>Reference</th>
              <th>Symptoms</th>
              <th>Previous Medical Issue</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to="/admin/OPD/PatientProfile/VisitDetails-overview">
                  OPDN6296
                </Link>
              </td>
              <td>6320</td>
              <td>06/30/2024 02:51 PM</td>
              <td>Amit Singh (9009)</td>
              <td></td>
              <td></td>
              <td></td>
              <td style={{ textAlign: "center" }}>
                <div className="d-flex">
                  <div className="me-1">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="py-1 px-2 print_btn"
                      >
                        <PiPrinterDuotone className="fs-3" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={handlePrint}>
                          <i className="fa fa-print" aria-hidden="true"></i>{" "}
                          Print
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="tool_show_parent">
                    <Link
                      to="/admin/OPD/PatientProfile/prescription"
                      className="btn text-white btn-icon btn-circle btn-sm me-1 bg-dark share_squar"
                    >
                      <MdFileOpen />
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/admin/OPD/PatientProfile/VisitDetails"
                      className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                      style={{ backgroundColor: "#2298C1" }}
                    >
                      <FaEye />
                    </Link>
                  </div>
                  <div className="tool_show_parent">
                    <Link
                      to="/admin/OPD/PatientProfile/MovePatient-To-IPD"
                      className="btn text-white btn-icon btn-circle btn-sm me-1 bg-dark share_squar"
                    >
                      <LiaShareSquare />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <Link to="/admin/OPD/PatientProfile/VisitDetails-overview">
                  OPDN6043
                </Link>
              </td>
              <td>6067</td>
              <td>04/30/2024 10:48 AM</td>
              <td>Sansa Gomez (9008)</td>
              <td></td>
              <td></td>
              <td></td>
              <td style={{ textAlign: "center" }}>
                <div className="d-flex">
                  <div className="me-1">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="py-1 px-2 print_btn"
                      >
                        <PiPrinterDuotone className="fs-3" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={handlePrint}>
                          <i className="fa fa-print" aria-hidden="true"></i>{" "}
                          Print
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="tool_show_parent">
                    <Link
                      to="/admin/OPD/PatientProfile/prescription"
                      className="btn text-white btn-icon btn-circle btn-sm me-1 bg-dark share_squar"
                    >
                      <MdFileOpen />
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/admin/OPD/PatientProfile/VisitDetails"
                      className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                      style={{ backgroundColor: "#2298C1" }}
                    >
                      <FaEye />
                    </Link>
                  </div>
                  <div className="tool_show_parent">
                    <Link
                      to="/admin/OPD/PatientProfile/MovePatient-To-IPD"
                      className="btn text-white btn-icon btn-circle btn-sm me-1 bg-dark share_squar"
                    >
                      <LiaShareSquare />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <Link to="/admin/OPD/PatientProfile/VisitDetails-overview">
                  OPDN5177
                </Link>
              </td>
              <td>5201</td>
              <td>11/08/2023 06:21 PM</td>
              <td>Reyan Jain (9011) </td>
              <td></td>
              <td></td>
              <td></td>
              <td style={{ textAlign: "center" }}>
                <div className="d-flex">
                  <div className="me-1">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="py-1 px-2 print_btn"
                      >
                        <PiPrinterDuotone className="fs-3" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={handlePrint}>
                          <i className="fa fa-print" aria-hidden="true"></i>{" "}
                          Print
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="tool_show_parent">
                    <Link
                      to="/admin/OPD/PatientProfile/prescription"
                      className="btn text-white btn-icon btn-circle btn-sm me-1 bg-dark share_squar"
                    >
                      <MdFileOpen />
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/admin/OPD/PatientProfile/VisitDetails"
                      className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                      style={{ backgroundColor: "#2298C1" }}
                    >
                      <FaEye />
                    </Link>
                  </div>
                  <div className="tool_show_parent">
                    <Link
                      to="/admin/OPD/PatientProfile/MovePatient-To-IPD"
                      className="btn text-white btn-icon btn-circle btn-sm me-1 bg-dark share_squar"
                    >
                      <LiaShareSquare />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <Link to="/admin/OPD/PatientProfile/VisitDetails-overview">
                  OPDN6296
                </Link>
              </td>
              <td>6320</td>
              <td>06/30/2024 02:51 PM</td>
              <td>Amit Singh (9009)</td>
              <td></td>
              <td></td>
              <td></td>
              <td style={{ textAlign: "center" }}>
                <div className="d-flex">
                  <div className="me-1">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="py-1 px-2 print_btn"
                      >
                        <PiPrinterDuotone className="fs-3" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={handlePrint}>
                          <i className="fa fa-print" aria-hidden="true"></i>{" "}
                          Print
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="tool_show_parent">
                    <Link
                      to="/admin/OPD/PatientProfile/prescription"
                      className="btn text-white btn-icon btn-circle btn-sm me-1 bg-dark share_squar"
                    >
                      <MdFileOpen />
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/admin/OPD/PatientProfile/VisitDetails"
                      className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                      style={{ backgroundColor: "#2298C1" }}
                    >
                      <FaEye />
                    </Link>
                  </div>
                  <div className="tool_show_parent">
                    <Link
                      to="/admin/OPD/PatientProfile/MovePatient-To-IPD"
                      className="btn text-white btn-icon btn-circle btn-sm me-1 bg-dark share_squar"
                    >
                      <LiaShareSquare />
                    </Link>
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

export default Visit;
