import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Group from "./group/Group";
import Individual from "./individual/Individual";

function SendSms() {
  return (
    <div className="patient_profile_main_sec">
      <div className="nav_tab_custom">
        <div className="send_sms_header">
          <h3>Send SMS</h3>
        </div>
        <div>
          <Tabs
            defaultValue="profile"
            id="uncontrolled-tab-example"
            className="mb-2 patient_tab"
          >
            <Tab eventKey="Group" title="Group">
              <Group />
            </Tab>
            <Tab eventKey="Individual" title="Individual">
              <Individual />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default SendSms;
