import { TfiPencil } from "react-icons/tfi";
import { IoTrashOutline } from "react-icons/io5";
import { PiHospitalLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { BsTagFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import CreditChart from "../../../../common/balanceChart/BalanceChart";

function IpdOverviewTab() {
  return (
    <div className="tab-pane tab-content-height active" id="overview">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 border-r">
          <div className="box-header border-b mb-2 pl-0 pt0 d-flex align-item-center justify-content-between">
            <h4 className="text-uppercase bolds mt0 ptt10 pull-left font14">
              AKA HOLAN (1084)
            </h4>
            <div className="pull-right d-flex">
              <div>
                <Link
                  to="/admin/IPD-Patient/IPD-patient-Profile/IPD-PatientDetails"
                  className="btn btn-info btn-icon btn-circle btn-sm me-1"
                >
                  <FaEye className="fs-5" />
                </Link>
              </div>
              <div className="tool_show_parent d-">
                <Link
                  to="/admin/IPD-Patient/IPD-patient-Profile/EditPatient-Overview"
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
              <div>
                <Link
                  to="/admin/IPD-Patient/IPD-patient-Profile/IPD-PatientDischarged"
                  className="btn btn-success btn-icon btn-circle btn-sm me-1"
                >
                  <PiHospitalLight className="fs-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 ptt10">
              <img
                width={115}
                height={115}
                className="profile-user-img img-responsive img-rounded"
                src="https://demo.smart-hospital.in/uploads/patient_images/xuzOY_980.jpg?1719548380"
              />
            </div>

            <div className="col-lg-9 col-md-8 col-sm-12">
              <table className="">
                <tbody>
                  <tr>
                    <td className="text-black">
                      <b>Gender</b>
                    </td>
                    <td>Male</td>
                  </tr>
                  <tr>
                    <td className="text-black">
                      <b>Age</b>
                    </td>
                    <td>13 Year 10 Month 7 Days</td>
                  </tr>
                  <tr>
                    <td className="text-black">
                      <b>Guardian Name</b>
                    </td>
                    <td>Martin Wood</td>
                  </tr>
                  <tr>
                    <td className="text-black">
                      <b>Phone</b>
                    </td>
                    <td>87969078</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/*./row*/}
          <hr className="hr-panel-heading hr-10" />
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="align-content-center pt25">
                <table className="">
                  <tbody>
                    <tr>
                      <td className="bolds">Case ID</td>
                      <td>6320</td>
                    </tr>
                    <tr>
                      <td className="bolds">IPD No</td>
                      <td>OPDN6296</td>
                    </tr>
                    <tr>
                      <td className="bolds">IPD No</td>
                      <td>OPDN6296</td>
                    </tr>
                    <tr>
                      <td className="bolds">Bed</td>
                      <td>SF - 132 - NICU - 2nd Floor</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <CreditChart />
          </div>

          <hr className="hr-panel-heading hr-10" />
          <p>
            <b>
              <BsTagFill className="fa fa-tag" /> Known Allergies:
            </b>
          </p>
          <ul></ul>
          <hr className="hr-panel-heading hr-10" />
          <p>
            <b>
              <BsTagFill className="fa fa-tag" /> Findings:
            </b>
          </p>
          <ul></ul>
          <hr className="hr-panel-heading hr-10" />
          <p>
            <b>
              <BsTagFill className="fa fa-tag" /> Symptoms:
            </b>
          </p>
          <ul></ul>
          <hr className="hr-panel-heading hr-10" />
          <div className="box-header mb-3 pl-0">
            <h5 className="text-uppercase bolds  ptt10 pull-left font14">
              Consultant Doctor
            </h5>
            <div className="pull-right">
              <div className="editviewdelete-icon pt8"></div>
            </div>
          </div>
          <div className="staff-members">
            <div className="media">
              <div className="media-left pr-3">
                <a href="#">
                  <img
                    src="https://demo.smart-hospital.in/uploads/staff_images/11.jpg?1719480495"
                    className="member-profile-small media-object"
                  />
                </a>
              </div>
              <div className="media-body">
                <a
                  href="#"
                  className="pull-right text-danger pt4"
                  data-toggle="tooltip"
                  data-placement="top"
                />
                <h5 className="media-heading">
                  <a href="#">Amit Singh (9009)</a>
                </h5>
              </div>
            </div>
            {/*./media*/}
          </div>
          {/*./staff-members*/}
          <div className="box-tab-header">
            <h5 className="box-tab-title">Timeline</h5>
          </div>
          <div className="timeline-header no-border">
            <div id="timeline_list"></div>
          </div>
        </div>
        {/*./col-lg-6*/}
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="row">
            <div className="col-md-6 project-progress-bars">
              <div className="row">
                <div className="col-md-12 mtop5">
                  <div className="topprograssstart">
                    <h5 className="text-uppercase mt5 bolds">
                      OPD Payment/Billing{" "}
                    </h5>
                    <p className="text-muted bolds">
                      100.00%
                      <span className="pull-right"> $144.00/$144.00</span>
                    </p>
                    <div className="progress-group">
                      <div className="progress progress-minibar">
                        <div
                          className="progress-bar progress-bar-aqua"
                          style={{ width: "100.00%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*./row*/}
            </div>
            {/*./col-lg-6*/}
            <div className="col-md-6 project-progress-bars">
              <div className="row">
                <div className="col-md-12 mtop5">
                  <div className="topprograssstart">
                    <h5 className="text-uppercase mt5 bolds">
                      Pharmacy Payment/Billing{" "}
                    </h5>
                    <p className="text-muted bolds">
                      0%<span className="pull-right"> $0/$0</span>
                    </p>
                    <div className="progress-group">
                      <div className="progress progress-minibar">
                        <div
                          className="progress-bar progress-bar-aqua"
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*./col-lg-6*/}
          </div>
          {/*./row*/}
          <div className="row">
            <div className="col-md-6 project-progress-bars">
              <div className="row">
                <div className="col-md-12 mtop5">
                  <div className="topprograssstart">
                    <h5 className="text-uppercase mt5 bolds">
                      Pathology Payment/Billing{" "}
                    </h5>
                    <p className="text-muted bolds">
                      0%<span className="pull-right"> $0/$0</span>
                    </p>
                    <div className="progress-group">
                      <div className="progress progress-minibar">
                        <div
                          className="progress-bar progress-bar-aqua"
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*./row*/}
            </div>
            {/*./col-lg-6*/}
            <div className="col-md-6 project-progress-bars">
              <div className="row">
                <div className="col-md-12 mtop5">
                  <div className="topprograssstart">
                    <h5 className="text-uppercase mt5 bolds">
                      Radiology Payment/Billing{" "}
                    </h5>
                    <p className="text-muted bolds">
                      0%<span className="pull-right"> $0/$0</span>
                    </p>
                    <div className="progress-group">
                      <div className="progress progress-minibar">
                        <div
                          className="progress-bar progress-bar-aqua"
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*./col-lg-6*/}
          </div>
          {/*./row*/}
          <div className="row">
            <div className="col-md-6 project-progress-bars">
              <div className="row">
                <div className="col-md-12 mtop5">
                  <div className="topprograssstart">
                    <h5 className="text-uppercase mt5 bolds">
                      Blood Bank Payment/Billing{" "}
                    </h5>
                    <p className="text-muted bolds">
                      0%<span className="pull-right"> $0/$0</span>
                    </p>
                    <div className="progress-group">
                      <div className="progress progress-minibar">
                        <div
                          className="progress-bar progress-bar-aqua"
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*./row*/}
            </div>
            {/*./col-lg-6*/}
            <div className="col-md-6 project-progress-bars">
              <div className="row">
                <div className="col-md-12 mtop5">
                  <div className="topprograssstart">
                    <h5 className="text-uppercase mt5 bolds">
                      Ambulance Payment/Billing{" "}
                    </h5>
                    <p className="text-muted bolds">
                      0%<span className="pull-right"> $0/$0</span>
                    </p>
                    <div className="progress-group">
                      <div className="progress progress-minibar">
                        <div
                          className="progress-bar progress-bar-aqua"
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*./col-lg-6*/}
          </div>
          {/*./row*/}
          <div className="box-header mb-2 pl-0">
            <h5 className="text-uppercase bolds mt0 ptt10 pull-left font14">
              Medication
            </h5>
            <div className="pull-right"></div>
          </div>
          <div className="box-header mb-4 pl-0">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Medicine Name</th>
                    <th>Dose</th>
                    <th>Time</th>
                    <th>Remark</th>
                  </tr>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>06/22/2024</td>
                    <td>WORMSTOP</td>
                    <td>1 (MG)</td>
                    <td> 01:00 PM</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>06/22/2024</td>
                    <td>WORMSTOP</td>
                    <td>1 (MG)</td>
                    <td> 09:00 PM</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/*-lab investigation*/}
          <div className="box-header mb-2 pl-0">
            <h5 className="text-uppercase bolds mt0 ptt10 pull-left font14">
              Operation
            </h5>
            <div className="pull-right"></div>
          </div>
          <div className="box-header mb-4 pl-0">
            <div className="table-responsive">
              <table className="table " data-export-title="Operations">
                <thead>
                  <tr>
                    <th>Reference No</th>
                    <th>Operation Date</th>
                    <th>Operation Name</th>
                    <th>Operation Category</th>
                    <th>OT Technician</th>
                  </tr>
                </thead>
                <tbody id></tbody>
              </table>
            </div>
          </div>

          <div className="box-header mb-4 pl-0">
            <h5 className="text-uppercase bolds mt0 ptt10 pull-left font14">
              PRESCRIPTION
            </h5>
            <div className="pull-right"></div>
          </div>

          <div className="box-header mb-4 pl-0">
            <h5 className="text-uppercase bolds mt0 ptt10 pull-left font14">
              CONSULTANT REGISTER
            </h5>
            <div className="pull-right"></div>
          </div>

          <div className="box-header mb-4 pl-0">
            <h5 className="text-uppercase bolds mt0 ptt10 pull-left font14">
              LAB INVESTIGATION
            </h5>
            <div className="pull-right"></div>
          </div>
        </div>
        {/*./col-lg-6*/}
      </div>
      {/*./row*/}
    </div>
  );
}

export default IpdOverviewTab;
