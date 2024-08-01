import React from "react";
import FrontOfficeTable from "./FrontOfficeTable";
import ExportFile from "../../common/exportFile/ExportFile";
import { Link } from "react-router-dom";
import { IoReorderThree } from "react-icons/io5";
import { Dropdown } from "react-bootstrap";

function FrontOffice() {
  return (
    <div className="card">
      <div className="dataTables_wrapper ">
        <div className="row_wrapper">
          <div className="row">
            <div className="col-md-4 ">
              <h4>Visitor List</h4>
            </div>
            <div className="col-md-8">
              <div className="d-flex align-item-center justify-content-end">
                <Link
                  className="btn btn-secondary add-new btn-primary waves-effect waves-light"
                  to={"/admin/Visitors/AddVisitor"}
                >
                  <span>
                    <i className="ti ti-plus me-0 me-sm-1 ti-xs mb-1" />

                    <span className="d-none d-sm-inline-block">
                      Add Visitor
                    </span>
                  </span>
                </Link>

                <Link
                  className="btn btn-secondary add-new btn-primary waves-effect waves-light ml-2"
                  to={"/admin/Visitors/PhoneCallLog"}
                >
                  <span>
                    {/* <i className="ti ti-plus me-0 me-sm-1 ti-xs mb-1" /> */}

                    <IoReorderThree className="fs-3" />

                    <span className="d-none d-sm-inline-block">
                      Phone Call Log
                    </span>
                  </span>
                </Link>

                <div className="ml-1">
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      <IoReorderThree className="fs-3" />
                      Postal
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        <Link
                          to="/admin/Visitors/PostalRecieve"
                          className="d-block"
                        >
                          Recieve
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <Link
                          to="/admin/Visitors/PostalDispatch"
                          className="d-block"
                        >
                          Dispatch
                        </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <Link
                  className="btn btn-secondary add-new btn-primary waves-effect waves-light ml-2"
                  to={"/admin/Visitors/Complain"}
                >
                  <span>
                    {/* <i className="ti ti-plus me-0 me-sm-1 ti-xs mb-1" /> */}
                    <IoReorderThree className="fs-3" />
                    <span className="d-none d-sm-inline-block">Complain</span>
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
        <FrontOfficeTable />
      </div>
    </div>
  );
}

export default FrontOffice;
