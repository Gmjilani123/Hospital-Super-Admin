import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import IpdOverviewTab from "./ipdOverviewTab/IpdOverviewTab";
import IpdOperationTab from "./ipdOperationTab/IpdOperationTab";
import IpdChargesTab from "./ipdChargesTab/IpdChargesTab";
import IpdPaymentsTab from "./ipdPaymentsTab/IpdPaymentsTab";
import IpdBedHistoryTab from "./ipdBedHistoryTab/IpdBedHistoryTab";
import TreatmentHistoryTab from "./treatmentHistoryTab/TreatmentHistoryTab";

function IpdProfile() {
  return (
    <div className="patient_profile_main_sec">
      <div className="nav_tab_custom">
        <Tabs
          defaultValue="profile"
          id="uncontrolled-tab-example"
          className="mb-2 patient_tab"
        >
          <Tab eventKey="Overview" title="Overview">
            <IpdOverviewTab />
          </Tab>
          <Tab eventKey="Operations" title="Operations">
            <IpdOperationTab />
          </Tab>
          <Tab eventKey="Charges" title="Charges">
            <IpdChargesTab />
          </Tab>
          <Tab eventKey="Payments" title="Payments">
            <IpdPaymentsTab />
          </Tab>
          <Tab eventKey="Bed History" title="Bed History">
            <IpdBedHistoryTab />
          </Tab>
          <Tab eventKey="Treatment History" title="Treatment History">
            <TreatmentHistoryTab />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default IpdProfile;
