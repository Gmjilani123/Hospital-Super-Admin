import React from "react";

import Print from "../../../../common/print/Print";
import { Link } from "react-router-dom";
import MadicineDetailsTab from "./madicineDetailsTab/MadicineDetailsTab";

function MadicineDetails() {
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Madicine Details</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            <div className="mr-2">
              <Print />
            </div>
            <Link
              to="/admin/Pharmacy-Bill-list/MadicineStock"
              className="back_btn"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="prescription_body_sec">
        <div className="modal-body pt0 pb0">
          <div className="row">
            <form id="view" acceptCharset="utf-8" method="get" className="">
              <div className="col-lg-1 col-md-2 col-sm-4">
                <img
                  id="medicine_image"
                  src="https://demo.smart-hospital.in/uploads/patient_images/no_image.png?1719674935"
                  style={{ width: 100, height: 100 }}
                />
              </div>
              <div className="col-lg-11 col-md-10 col-sm-8">
                <div className="table-responsive">
                  <table className="  ">
                    <tbody>
                      <tr>
                        <th />
                        <td />
                        <th width="15%">Medicine Name</th>
                        <td width="35%">
                          <span id="medicine_names">VARICELLA</span>
                        </td>
                        <th width="15%">Medicine Category</th>
                        <td width="35%">
                          <span id="medicine_category_ids">Injection</span>
                        </td>
                      </tr>
                      <tr>
                        <th />
                        <td />
                        <th width="15%">Medicine Company</th>
                        <td width="35%">
                          <span id="medicine_companys">VARICELLA Pvt. Ltd</span>
                        </td>
                        <th width="15%">Medicine Composition</th>
                        <td width="35%">
                          <span id="medicine_compositions">Injection</span>
                        </td>
                      </tr>
                      <tr>
                        <th />
                        <td />
                        <th width="15%">Medicine Group</th>
                        <td width="35%">
                          <span id="medicine_groups">Varicella</span>
                        </td>
                        <th width="15%">Unit</th>
                        <td width="35%">
                          <span id="units">100</span>
                        </td>
                      </tr>
                      <tr>
                        <th />
                        <td />
                        <th width="15%">Min Level</th>
                        <td width="35%">
                          <span id="min_levels">100</span>
                        </td>
                        <th width="15%">Re-Order Level</th>
                        <td width="35%">
                          <span id="reorder_levels">250</span>
                        </td>
                      </tr>
                      <tr>
                        {" "}
                        <th />
                        <td />
                        <th width="15%">VAT(%)</th>
                        <td width="35%">
                          <span id="vats">10</span>
                        </td>
                        <th width="15%">Unit/Packing</th>
                        <td width="35%">
                          <span id="unit_packings">500</span>
                        </td>
                      </tr>
                      <tr>
                        <th />
                        <td />
                        <th width="15%">VAT A/C</th>
                        <td width="35%">
                          <span id="vat_acs">200</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </form>
            {/*./col-md-12*/}
          </div>
        </div>

        <MadicineDetailsTab />
      </div>
    </div>
  );
}

export default MadicineDetails;
