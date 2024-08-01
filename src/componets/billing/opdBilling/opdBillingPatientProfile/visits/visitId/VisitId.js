import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Charges from "./charges/Charges";
import Payment from "./payment/Payment";

function VisitId() {
  return (
    <div className="content_wrapper">
      <section className="content">
        <div className="row">
          <div className="">
            <div className="tab_profile_img">
              <div className="nav_tab_custom my_tab">
                <Tabs
                  defaultValue="profile"
                  id="uncontrolled-tab-example"
                  className="mb-2 patient_tab"
                >
                  <Tab eventKey="Charges" title="Charges">
                    <Charges />
                  </Tab>

                  <Tab eventKey="Payment" title="Payment">
                    <Payment />
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

export default VisitId;
