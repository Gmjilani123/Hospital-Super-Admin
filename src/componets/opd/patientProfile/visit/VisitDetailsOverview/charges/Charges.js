import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { PiPrinterDuotone } from "react-icons/pi";
import ExportFile from "../../../../../../common/exportFile/ExportFile";
import { TfiPencil } from "react-icons/tfi";
import { IoTrashOutline } from "react-icons/io5";

function Charges() {
  const handlePrint = () => {
    console.log("Printing...");
    window.print();
  };
  return (
    <div className="dataTables_wrapper ">
      <div className="row_wrapper">
        <div className="row">
          <div className="col-md-4 ">
            <h4>Charges </h4>
          </div>
          <div className="col">
            <div className="d-flex align-item-center justify-content-end">
              <Link
                className="btn btn-secondary add-new btn-primary waves-effect waves-light"
                to={
                  "/admin/OPD/PatientProfile/VisitDetails-overview/AddCharges"
                }
              >
                <span>
                  <i className="ti ti-plus me-0 me-sm-1 ti-xs mb-1" />
                  <span className="d-none d-sm-inline-block">Add Charges</span>
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
              <th>Name</th>
              <th>Date</th>
              <th>Charges Type</th>
              <th> Charge Category </th>
              <th>Qty</th>
              <th>Standard Charge($)</th>
              <th>TPA Charge($)</th>
              <th>TAX</th>
              <th>Applied Charge($)</th>
              <th>Amount($)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>06/01/2024 04:19 PM</td>

              <td>Appointment Fees</td>
              <td>Appointment</td>
              <td>Appointment Charges</td>
              <td>1 G/Dl</td>
              <td>120.00 </td>
              <td>0.00 </td>
              <td>(20.00%) 24.00 </td>
              <td>120.00 </td>
              <td>144.00 </td>
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
              <td></td>
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

export default Charges;
