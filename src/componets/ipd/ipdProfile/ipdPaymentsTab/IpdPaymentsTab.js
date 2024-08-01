import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { PiPrinterDuotone } from "react-icons/pi";
import { TfiPencil } from "react-icons/tfi";
import { IoTrashOutline } from "react-icons/io5";
import ExportFile from "../../../../common/exportFile/ExportFile";

function IpdPaymentsTab() {
  const handlePrint = () => {
    console.log("Printing...");
    window.print();
  };
  return (
    <div className="dataTables_wrapper ">
      <div className="row_wrapper">
        <div className="row">
          <div className="col-md-4 ">
            <h4>Payment </h4>
          </div>
          <div className="col">
            <div className="d-flex align-item-center justify-content-end">
              <Link
                className="btn btn-secondary add-new btn-primary waves-effect waves-light"
                to={"/admin/IPD-Patient/IPD-patient-Profile/AddPaymentIPD"}
              >
                <span>
                  <i className="ti ti-plus me-0 me-sm-1 ti-xs mb-1" />
                  <span className="d-none d-sm-inline-block">Add Payment</span>
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
              <th>Transition ID </th>
              <th>Date</th>
              <th> Note</th>
              <th> Payment Mode </th>
              <th>Paid Amount($)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TRANID9156</td>

              <td>06/26/2024 05:42 PM</td>
              <td></td>
              <td>Cash </td>
              <td>1800.00 </td>

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
                      to="#"
                      className="btn btn-primary text-white btn-icon btn-circle btn-sm me-1 "
                    >
                      <TfiPencil className="fs-5" />
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/admin/OPD/PatientProfile/VisitDetails"
                      className="btn btn-danger btn-icon btn-circle btn-sm me-1"
                    >
                      <IoTrashOutline className="fs-5" />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="bg-dark ">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="text-white">
                <b>Total:-</b> $144.00
              </td>

              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IpdPaymentsTab;
