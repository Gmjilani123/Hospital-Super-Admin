import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import GroupTab from "../../sendEmail/messageTab/GroupTab/GroupTab";
import IndividualTab from "../../sendEmail/messageTab/individualTab/IndividualTab";
import ClassTab from "../../sendEmail/messageTab/classTab/ClassTab";
function SendSmsTab() {
  return (
    <div className="nav_tab">
      <Tabs
        defaultValue="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Group" title="Group">
          <GroupTab />
        </Tab>
        <Tab eventKey="Individual" title="Individual">
          <IndividualTab />
        </Tab>
        <Tab eventKey="Class" title="Class">
          <ClassTab />
        </Tab>
        <Tab eventKey="Today's BirthDay" title="Today's BirthDay">
          <div className="content-wrapper">
            <div className="app-ecommerce">
              <div className="row">
                <div className="col-12 col-lg-12">
                  <div className="card mb-4">dfhdjh</div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default SendSmsTab;
