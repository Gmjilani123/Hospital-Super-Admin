import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Stock from "./stock/Stock";

function MadicineDetailsTab() {
  return (
    <div className="mt-3">
      <div className="nav_tab_custom">
        <Tabs
          defaultValue="profile"
          id="uncontrolled-tab-example"
          className="mb-2 patient_tab"
        >
          <Tab eventKey="Stock" title="Stock">
            <Stock />
          </Tab>
          <Tab eventKey="Bed Stock" title="Bed Stock">
            {/* <Visit /> */}
            fsgs
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default MadicineDetailsTab;
