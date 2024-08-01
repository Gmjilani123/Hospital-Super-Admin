import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TabProfile from "./tabProfile/TabProfile";
// import TabPayroll from "./tabPayroll/TabPayroll";
import TabLeaves from "./tabLeaves/TabLeaves";
import TabAttendance from "./tabAttendance/TabAttendance";
import TabDocument from "./tabDocument/TabDocument";

function StaffProfileRight() {
  return (
    <div className="nav_tab_custom">
      <Tabs
        defaultValue="profile"
        id="uncontrolled-tab-example"
        className="mb-2"
      >
        <Tab eventKey="Profile" title="Profile">
          <TabProfile />
        </Tab>
        {/* <Tab eventKey="Payroll" title="Payroll">
          <TabPayroll />
        </Tab> */}
        <Tab eventKey="Leaves" title="Leaves">
          <TabLeaves />
        </Tab>
        <Tab eventKey="Attendance" title="Attendance">
          <TabAttendance />
        </Tab>
        <Tab eventKey="Document" title="Document">
          <TabDocument />
        </Tab>
        <Tab eventKey="Timeline" title="Timeline">
          <TabDocument />
        </Tab>
      </Tabs>
    </div>
  );
}

export default StaffProfileRight;
