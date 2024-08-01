import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import LabInvestigation from "../../labInvestigation/LabInvestigation";
import PaymentTab from "./paymentTab/PaymentTab";
import Charges from "./charges/Charges";
import VisitCheckups from "./visitCheckups/VisitCheckups";
import VisitOverview from "./visitoverview/VisitOverview";

function VisitDetailsOverview() {
  return (
    <div className="patient_profile_main_sec">
      <div className="nav_tab_custom">
        <Tabs
          defaultValue="profile"
          id="uncontrolled-tab-example"
          className="mb-2 patient_tab"
        >
          <Tab eventKey="OverView" title="OverView">
            <VisitOverview />
          </Tab>
          <Tab eventKey="Visits" title="Visits">
            <VisitCheckups />
          </Tab>
          <Tab eventKey="Lab Investigation" title="Lab Investigation">
            <LabInvestigation />
          </Tab>
          <Tab eventKey="Charges" title="Charges">
            <Charges />
          </Tab>
          <Tab eventKey="Payments" title="Payments">
            <PaymentTab />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default VisitDetailsOverview;
