import { BsTagFill } from "react-icons/bs";
import MedicalChart from "../../../../common/madicalChart/MadicalChart";
function PatientProfileOverview() {
  return (
    <div className="tab-pane tab-content-height active" id="overview">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 border-r">
          <div className="box-header border-b mb-2 pl-0 pt0 d-flex align-item-center justify-content-between">
            <h4 className="text-uppercase bolds mt0 ptt10 pull-left font14">
              Stuart Wood (580)
            </h4>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 ptt10">
              <img
                width={115}
                height={115}
                className="profile-user-img img-responsive img-rounded"
                src="https://demo.smart-hospital.in/uploads/patient_images/no_image.png?1719480495"
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
                      <td className="bolds">OPD No</td>
                      <td>OPDN6296</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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
            <div className="media mt-2">
              <div className="media-left pr-3">
                <a href="#">
                  <img
                    src="https://demo.smart-hospital.in/uploads/staff_images/4.jpg?1719492252"
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
                  <a href="#">Sansa Gomez (9008)</a>
                </h5>
              </div>
            </div>
            <div className="media mt-2">
              <div className="media-left pr-3">
                <a href="#">
                  <img
                    src="https://demo.smart-hospital.in/uploads/staff_images/no_image.png?1719492252"
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
                  <a href="#">Reyan Jain (9011)</a>
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
          <div className="box-header border-b mb10 pl-0 pt0">
            <h4 className="text-uppercase bolds mt0 ptt10 pull-left font14">
              Medical History
            </h4>
          </div>
          <div className="row mb-5">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="box box-info">
                <div className="box-body">
                  <div className="chart">
                    <MedicalChart />
                  </div>
                </div>
              </div>
            </div>
            {/*./col-lg-7*/}
          </div>
          <div>
            <div>
              <div className="box-header mb-4 pl-0">
                <h5 className="text-uppercase bolds mt0 ptt10 pull-left font14">
                  Visit Details
                </h5>
                <div className="pull-right">
                  <div className="editviewdelete-icon pt8">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="add-edit-members"
                    />
                  </div>
                </div>
              </div>
              <div className="staff-members">
                <div className="table-responsive">
                  <table
                    className="table "
                    data-export-title="Stuart Wood (580) OPD Details"
                  >
                    <thead>
                      <tr>
                        <th>OPD No</th>
                        <th>Case ID</th>
                        <th>Appointment Date</th>
                        <th>Consultant</th>
                        <th>Reference</th>
                        <th>Symptoms</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="https://demo.smart-hospital.in/admin/patient/visitdetails/580/6296">
                            OPDN6296
                          </a>
                        </td>
                        <td>6320</td>
                        <td>06/30/2024 02:51 PM</td>
                        <td>Amit Singh (9009)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>
                          <a href="https://demo.smart-hospital.in/admin/patient/visitdetails/580/6043">
                            OPDN6043
                          </a>
                        </td>
                        <td>6067</td>
                        <td>04/30/2024 10:48 AM</td>
                        <td>Sansa Gomez (9008)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>
                          <a href="https://demo.smart-hospital.in/admin/patient/visitdetails/580/5177">
                            OPDN5177
                          </a>
                        </td>
                        <td>5201</td>
                        <td>11/08/2023 06:21 PM</td>
                        <td>Reyan Jain (9011)</td>
                        <td />
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/*./staff-members*/}
            </div>
          </div>
          <div className>
            <div className>
              <div className="box-header mb-2 pl-0">
                <h5 className="text-uppercase bolds mt0 ptt10 pull-left font14">
                  Lab Investigation
                </h5>
                <div className="pull-right">
                  <div className="editviewdelete-icon pt8">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="add-edit-members"
                    />
                  </div>
                </div>
              </div>
              <div className="staff-members">
                <div className="table-responsive"></div>
              </div>
              {/*./staff-members*/}
            </div>
          </div>
          <div className>
            <div>
              <div className="box-header mb-2 pl-0">
                <h5 className="text-uppercase bolds mt0 ptt10 pull-left font14">
                  Treatment History
                </h5>
                <div className="pull-right">
                  <div className="editviewdelete-icon pt8"></div>
                </div>
              </div>
              <div className="staff-members">
                <div className="table-responsive"></div>
              </div>
              {/*./staff-members*/}
            </div>
          </div>
        </div>

        {/*./col-lg-6*/}
      </div>
      {/*./row*/}
    </div>
  );
}

export default PatientProfileOverview;
