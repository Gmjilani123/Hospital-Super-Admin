import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TreatmentHistory from "./treatmentHistory/TreatmentHistory";
import LabInvestigation from "./labInvestigation/LabInvestigation";
import Visit from "./visit/Visit";
import PatientProfileOverview from "./patientProfileOverview/PatientProfileOverview";

function PatientProfile() {
  return (
    <div className="patient_profile_main_sec">
      <div className="nav_tab_custom">
        <Tabs
          defaultValue="profile"
          id="uncontrolled-tab-example"
          className="mb-2 patient_tab"
        >
          <Tab eventKey="OverView" title="OverView">
            <PatientProfileOverview />
          </Tab>
          <Tab eventKey="Visits" title="Visits">
            <Visit />
          </Tab>
          <Tab eventKey="Lab Investigation" title="Lab Investigation">
            <LabInvestigation />
          </Tab>
          <Tab eventKey="Treatment History" title="Treatment History">
            <TreatmentHistory />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default PatientProfile;
