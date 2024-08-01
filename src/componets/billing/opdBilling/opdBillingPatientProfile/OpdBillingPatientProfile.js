import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Visits from "./visits/Visits";

function OpdBillingPatientProfile() {
  return (
    <div className="content_wrapper">
      <section className="content">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="box box-primary">
              <div className="box-body box-profile">
                <div className="profileimg">
                  <img
                    className="profile-user-img img-responsive img-circle"
                    src="https://demo.smart-hospital.in/uploads/patient_images/no_image.png?1721464250"
                    alt="User profile picture"
                  />
                </div>
                <h3 className="profile-username text-center">Baber Devan</h3>
                <ul className="list-group list-group-unbordered">
                  <li className="list-group-item listnoback">
                    <b>Patient Id</b>{" "}
                    <a className="pull-right text-aqua">1081</a>
                  </li>
                  <li className="list-group-item listnoback">
                    <b>Gender</b> <a className="pull-right text-aqua">Male</a>
                  </li>
                  <li className="list-group-item listnoback">
                    <b>Marital Status</b> <a className="pull-right text-aqua" />
                  </li>
                  <li className="list-group-item listnoback">
                    <b>Phone</b>{" "}
                    <a className="pull-right text-aqua">9552554252</a>
                  </li>
                  <li className="list-group-item listnoback">
                    <b>Email</b>{" "}
                    <a className="pull-right text-aqua">Baber@gmail.com</a>
                  </li>
                  <li className="list-group-item listnoback">
                    <b>Address</b> <a className="pull-right text-aqua" />
                  </li>
                  <li className="list-group-item listnoback">
                    <b>Age</b> <a className="pull-right text-aqua" />
                  </li>
                  <li className="list-group-item listnoback">
                    <b>Guardian Name</b> <a className="pull-right text-aqua" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="tab_profile_img">
              <div className="nav_tab_custom my_tab">
                <Tabs
                  defaultValue="profile"
                  id="uncontrolled-tab-example"
                  className="mb-2 patient_tab"
                >
                  <Tab eventKey="Visits" title="Visits">
                    <Visits/>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OpdBillingPatientProfile;
