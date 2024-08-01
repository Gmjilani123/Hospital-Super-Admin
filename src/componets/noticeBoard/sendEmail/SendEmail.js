import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Group from "../sendSms/group/Group";
import EmailGroupTab from "./EmailGroupTab/EmailGroupTab";
import EmailIndividualTab from "./EmailIndividualTab/EmailIndividualTab";

function SendEmail() {
  return (
    <div className="patient_profile_main_sec">
      <div className="nav_tab_custom">
        <div className="send_sms_header">
          <h3>Send Email</h3>
        </div>
        <div>
          <Tabs
            defaultValue="profile"
            id="uncontrolled-tab-example"
            className="mb-2 patient_tab"
          >
            <Tab eventKey="Group" title="Group">
              <EmailGroupTab />
            </Tab>
            <Tab eventKey="Individual" title="Individual">
              <EmailIndividualTab />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default SendEmail;
