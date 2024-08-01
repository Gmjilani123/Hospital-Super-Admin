import { Link } from "react-router-dom";
import AppointmentTable from "./AppointmentTable";
import { HiBars3 } from "react-icons/hi2";
import ExportFile from "../../common/exportFile/ExportFile";

function Appointment() {
  return (
    <div className="card">
      <div className="dataTables_wrapper ">
        <div className="row_wrapper">
          <div className="row">
            <div className="col">
              <h4>Appointment Details</h4>
            </div>
            <div className="col">
              <div className="d-flex align-item-center justify-content-end">
                <Link
                  className="btn btn-secondary add-new btn-primary waves-effect waves-light"
                  to={"/admin/Appointment/DoctorAppointment"}
                >
                  <span>
                    {/* <i className="ti ti-plus me-0 me-sm-1 ti-xs mb-1" /> */}
                    <HiBars3 className="fs-4 me-1" />
                    <span className="d-none d-sm-inline-block">
                      Doctor Wise
                    </span>
                  </span>
                </Link>
                <Link
                  className="btn btn-secondary add-new btn-primary ml-2"
                  to={"/admin/Appointment/Queue"}
                >
                  <span>
                    <HiBars3 className="fs-4 me-1" />
                    <span className="d-none d-sm-inline-block">Queue</span>
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
        <AppointmentTable />
      </div>
    </div>
  );
}

export default Appointment;
