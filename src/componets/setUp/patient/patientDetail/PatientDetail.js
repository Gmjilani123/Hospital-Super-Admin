import React from "react";
import Print from "../../../../common/print/Print";
import { Link } from "react-router-dom";

function PatientDetail() {
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Patient Details</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            <div className="mr-2">
              <Print />
            </div>
            <Link to="/admin/Radiology" className="back_btn">
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="prescription_body_sec">
        <div className="modal-body pt0 pb0">
          <div className="row row-eq">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="row ptt10">
                <div className="col-lg-12">
                  <div className="singlelist24bold pb10">
                    <h5>
                      <span id="patient_name">Olivier Thomas (1)</span>
                    </h5>
                  </div>
                </div>
                <div className="col-md-9 col-sm-9 col-xs-9" id="Myinfo">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <ul className="singlelist">
                        <li>
                          <i
                            className="fas fa-user-secret"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Guardian"
                          />
                          <span id="guardian">Edward Thomas</span>
                        </li>
                      </ul>
                      <ul className="multilinelist">
                        <li>
                          <i
                            className="fas fa-venus-mars"
                            data-toggle="tooltip"
                            data-placement="top"
                            title
                            data-original-title="Gender"
                          />
                          <span id="genders">Male</span>
                        </li>
                        <li>
                          <i
                            className="fas fa-tint"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Blood Group"
                          />
                          <span id="blood_group">B+</span>
                        </li>
                        <li>
                          <i
                            className="fas fa-ring"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Marital Status"
                          />
                          <span id="marital_status">Married</span>
                        </li>
                      </ul>
                      <ul className="singlelist">
                        <li>
                          <i
                            className="fas fa-hourglass-half"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Age"
                          />
                          <span id="age">39 Year 3 Month 13 Days</span>
                        </li>
                        <li>
                          <i
                            className="fa fa-phone-square"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Phone"
                          />
                          <span id="contact">7896541230</span>
                        </li>
                        <li>
                          <i
                            className="fa fa-envelope"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Email"
                          />
                          <span id="email">olivier@gmail.com</span>
                        </li>
                        <li>
                          <i
                            className="fas fa-street-view"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Address"
                          />
                          <span id="address">
                            482 Kingsway, Brooklyn West, CA
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <ul className="singlelist">
                        <li>
                          <b>Any Known Allergies </b>
                          <span id="allergies">No</span>
                        </li>
                        <li>
                          <b>Remarks </b>
                          <span id="note">Injury Treatment</span>
                        </li>
                        <li>
                          <b>TPA ID </b>
                          <span id="insurance_id">7745855</span>
                        </li>
                        <li>
                          <b>TPA Validity </b>
                          <span id="validity">04/21/2022</span>
                        </li>
                        <li>
                          <b>National Identification Number </b>
                          <span id="identification_number">77458596</span>
                        </li>
                        <li id="field_data">
                          <p>
                            <b>
                              <span id="vcustom_name">Alternate Number</span>
                            </b>{" "}
                            <span id="vcustom_value" />
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* ./col-md-9 */}
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <img
                    className="profile-user-img img-responsive"
                    src="https://demo.smart-hospital.in/uploads/patient_images/w7jXS_1.jpg?1720421648"
                    id="image"
                    alt="User profile picture"
                  />
                </div>
                {/* ./col-md-3 */}
              </div>
              <div id="visit_report_id">
                <div className="box border0 clear" id="visit_report">
                  <h4 className="mb0">Patient Visit Report</h4>
                  <div className="table-responsive">
                    <div>
                      <div
                        className="box-header with-border"
                        id="headreport"
                        style={{ display: "none" }}
                      >
                        <h3 className="box-title text-center" />
                      </div>
                    </div>
                    <div className="download_label">OPD Details</div>
                    <div className="ptt10">
                      <a
                        className="btn btn-default btn-xs pull-right"
                        id="print"
                        onclick="printDiv()"
                      >
                        <i className="fa fa-print" />
                      </a>
                      <a
                        className="btn btn-default btn-xs pull-right"
                        id="btnExport"
                        onclick="tablesToExcel(array1, array2, array3, array4, array5, array6, array7, 'myfile.xls');"
                      >
                        {" "}
                        <i className="fa fa-file-excel-o" />{" "}
                      </a>
                    </div>
                    <table
                      className="table table-striped table-bordered table-hover allajaxlist"
                      id={1}
                    >
                      <caption>
                        <h4 className="bolds">OPD Details</h4>
                      </caption>
                      <thead>
                        <tr>
                          <th>OPD No</th>
                          <th>Case ID</th>
                          <th>Date</th>
                          <th>OPD Checkup ID</th>
                          <th>Doctor Name</th>
                          <th width="20%">Symptoms</th>
                          <th width="20%">Findings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>OPDN4764</td>
                          <td>4788</td>
                          <td>09/04/2023</td>
                          <td>CHKID4766</td>
                          <td>Sonia Bush (9002)</td>
                          <td />
                          <td />
                        </tr>

                        <tr>
                          <td>OPDN6278</td>
                          <td>6302</td>
                          <td>06/01/2024</td>
                          <td>CHKID6281</td>
                          <td>Sonia Bush (9002)</td>
                          <td />
                          <td>
                            Elevated temperature (above 100.4°) The medical
                            community generally defines a fever as a body
                            temperature above 100.4 degrees Fahrenheit. A body
                            temp between 100.4 and 102.2 degree is usually
                            considered a low-grade fever.{" "}
                          </td>
                        </tr>
                        <tr>
                          <td>OPDN6379</td>
                          <td>6403</td>
                          <td>06/22/2024</td>
                          <td>CHKID6382</td>
                          <td>Amit Singh (9009)</td>
                          <td />
                          <td />
                        </tr>
                        <tr>
                          <td>OPDN6527</td>
                          <td>6551</td>
                          <td>07/02/2024</td>
                          <td>CHKID6530</td>
                          <td>Amit Singh (9009)</td>
                          <td />
                          <td>
                            Stomach pain Typhoid fever and paratyphoid fever
                            have similar symptoms̵. People usually have a
                            sustained fever (one that doesn’t come and go) that
                            can be as high as 103–104°F (39–40°C).
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="table-responsive">
                    <div className="download_label">IPD Report</div>
                    <table
                      className="table table-striped table-bordered table-hover allajaxlist"
                      id={2}
                    >
                      <caption>
                        <h4 className="bolds">IPD Details</h4>
                      </caption>
                      <thead>
                        <tr>
                          <th>IPD No</th>
                          <th>Case ID</th>
                          <th width="8%">Date</th>
                          <th>Doctor Name</th>
                          <th width="20%">Symptoms</th>
                          <th width="20%">Findings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>IPDN2</td>
                          <td>9</td>
                          <td>10/25/2021</td>
                          <td>Amit Singh(9009) </td>
                          <td>
                            Cramps and injuries Muscle pain: Muscle spasms,
                            cramps and injuries can all cause muscle pain. Some
                            infections or tumors may also lead to muscle pain.
                            Tendon and ligament pain: Ligaments and tendons{" "}
                          </td>
                          <td>
                            Osteoporosis Bone density problems may occur because
                            the body loses too much bone tissue, makes too
                            little of it, or some combination of both. It tends
                            to be symptomless. That is, people with osteoporosis
                            tend not to know they have it – until a bone
                            fracture has them visiting a doctor who makes the
                            diagnosis.{" "}
                          </td>
                        </tr>
                        <tr></tr>
                        <tr>
                          <td>IPDN7</td>
                          <td>16</td>
                          <td>10/30/2021</td>
                          <td>Amit Singh(9009) </td>
                          <td>
                            Atopic dermatitis (Eczema) Atopic dermatitis usually
                            develops in early childhood and is more common in
                            people who have a family history of the condition.{" "}
                          </td>
                          <td>
                            Refractive Errors. A refractive error is a very
                            common eye disorder. It occurs when the eye cannot
                            clearly focus the images from the outside world. The
                            result of refractive errors is blurred vision, which
                            is sometimes so severe that it causes visual
                            impairment{" "}
                          </td>
                        </tr>
                        <tr></tr>
                        <tr>
                          <td>IPDN7</td>
                          <td>16</td>
                          <td>10/30/2021</td>
                          <td>Amit Singh(9009) </td>
                          <td>
                            Atopic dermatitis (Eczema) Atopic dermatitis usually
                            develops in early childhood and is more common in
                            people who have a family history of the condition.{" "}
                          </td>
                          <td>
                            Rosacea Rosacea (roe-ZAY-she-uh) is a common skin
                            condition that causes blushing or flushing and
                            visible blood vessels in your face. It may also
                            produce small, pus-filled bumps. These signs and
                            symptoms may flare up for weeks to months and then
                            go away for a while.{" "}
                          </td>
                        </tr>
                        <tr></tr>
                        <tr>
                          <td>IPDN14</td>
                          <td>115</td>
                          <td>12/02/2021</td>
                          <td>Amit Singh(9009) </td>
                          <td>
                            Feeling sad or down Personality change in a way that
                            seems different for that person.{" "}
                          </td>
                          <td>
                            Stomach pain Typhoid fever and paratyphoid fever
                            have similar symptoms̵. People usually have a
                            sustained fever (one that doesn’t come and go) that
                            can be as high as 103–104°F (39–40°C). Diarrhea or
                            constipation Some people with typhoid fever or
                            paratyphoid fever develop a rash of flat,
                            rose-colored spots.{" "}
                          </td>
                        </tr>
                        <tr></tr>
                        <tr>
                          <td>IPDN14</td>
                          <td>115</td>
                          <td>12/02/2021</td>
                          <td>Amit Singh(9009) </td>
                          <td>
                            Feeling sad or down Personality change in a way that
                            seems different for that person.{" "}
                          </td>
                          <td>
                            Rosacea Rosacea (roe-ZAY-she-uh) is a common skin
                            condition that causes blushing or flushing and
                            visible blood vessels in your face. It may also
                            produce small, pus-filled bumps. These signs and
                            symptoms may flare up for weeks to months and then
                            go away for a while. Eczema. Eczema (atopic
                            dermatitis) is caused by a combination of immune
                            system activation, genetics, environmental triggers
                            and stress. Your immune system. If you have eczema,
                            your immune system overreacts to small irritants or
                            allergens. This overreaction can inflame your skin.{" "}
                          </td>
                        </tr>
                        <tr></tr>
                        <tr>
                          <td>IPDN14</td>
                          <td>115</td>
                          <td>12/02/2021</td>
                          <td>Amit Singh(9009) </td>
                          <td>
                            Feeling sad or down Personality change in a way that
                            seems different for that person.{" "}
                          </td>
                          <td>
                            Stomach pain Typhoid fever and paratyphoid fever
                            have similar symptoms̵. People usually have a
                            sustained fever (one that doesn’t come and go) that
                            can be as high as 103–104°F (39–40°C). Diarrhea or
                            constipation Some people with typhoid fever or
                            paratyphoid fever develop a rash of flat,
                            rose-colored spots.{" "}
                          </td>
                        </tr>
                        <tr></tr>
                        <tr>
                          <td>IPDN14</td>
                          <td>115</td>
                          <td>12/02/2021</td>
                          <td>Amit Singh(9009) </td>
                          <td>
                            Feeling sad or down Personality change in a way that
                            seems different for that person.{" "}
                          </td>
                          <td>
                            Elevated temperature (above 100.4°) The medical
                            community generally defines a fever as a body
                            temperature above 100.4 degrees Fahrenheit. A body
                            temp between 100.4 and 102.2 degree is usually
                            considered a low-grade fever. Flushed complexion or
                            hot skin. Flushed skin is often a visual sign of
                            embarrassment, anxiety, or being too hot. However,
                            frequent flushing can sometimes indicate an
                            underlying medical condition. Flushed skin occurs
                            when the hundreds of tiny blood vessels just beneath
                            the skin dilate, or widen.{" "}
                          </td>
                        </tr>
                        <tr></tr>
                        <tr>
                          <td>IPDN14</td>
                          <td>115</td>
                          <td>12/02/2021</td>
                          <td>Amit Singh(9009) </td>
                          <td>
                            Feeling sad or down Personality change in a way that
                            seems different for that person.{" "}
                          </td>
                          <td>
                            Stomach pain Typhoid fever and paratyphoid fever
                            have similar symptoms̵. People usually have a
                            sustained fever (one that doesn’t come and go) that
                            can be as high as 103–104°F (39–40°C).{" "}
                          </td>
                        </tr>
                        <tr></tr>
                        <tr>
                          <td>IPDN14</td>
                          <td>115</td>
                          <td>12/02/2021</td>
                          <td>Amit Singh(9009) </td>
                          <td>
                            Feeling sad or down Personality change in a way that
                            seems different for that person.{" "}
                          </td>
                          <td>
                            Stomach pain Typhoid fever and paratyphoid fever
                            have similar symptoms̵. People usually have a
                            sustained fever (one that doesn’t come and go) that
                            can be as high as 103–104°F (39–40°C).{" "}
                          </td>
                        </tr>
                        <tr></tr>
                        <tr>
                          <td>IPDN14</td>
                          <td>115</td>
                          <td>12/02/2021</td>
                          <td>Amit Singh(9009) </td>
                          <td>
                            Feeling sad or down Personality change in a way that
                            seems different for that person.{" "}
                          </td>
                          <td>
                            Elevated temperature (above 100.4°) The medical
                            community generally defines a fever as a body
                            temperature above 100.4 degrees Fahrenheit. A body
                            temp between 100.4 and 102.2 degree is usually
                            considered a low-grade fever. Flushed complexion or
                            hot skin. Flushed skin is often a visual sign of
                            embarrassment, anxiety, or being too hot. However,
                            frequent flushing can sometimes indicate an
                            underlying medical condition. Flushed skin occurs
                            when the hundreds of tiny blood vessels just beneath
                            the skin dilate, or widen.{" "}
                          </td>
                        </tr>
                        <tr></tr>
                        <tr>
                          <td>IPDN14</td>
                          <td>115</td>
                          <td>12/02/2021</td>
                          <td>Amit Singh(9009) </td>
                          <td>
                            Feeling sad or down Personality change in a way that
                            seems different for that person.{" "}
                          </td>
                          <td>
                            Elevated temperature (above 100.4°) The medical
                            community generally defines a fever as a body
                            temperature above 100.4 degrees Fahrenheit. A body
                            temp between 100.4 and 102.2 degree is usually
                            considered a low-grade fever.{" "}
                          </td>
                        </tr>
                        <tr></tr>
                        <tr>
                          <td>IPDN14</td>
                          <td>115</td>
                          <td>12/02/2021</td>
                          <td>Amit Singh(9009) </td>
                          <td>
                            Feeling sad or down Personality change in a way that
                            seems different for that person.{" "}
                          </td>
                          <td>
                            Elevated temperature (above 100.4°) The medical
                            community generally defines a fever as a body
                            temperature above 100.4 degrees Fahrenheit. A body
                            temp between 100.4 and 102.2 degree is usually
                            considered a low-grade fever. Flushed complexion or
                            hot skin. Flushed skin is often a visual sign of
                            embarrassment, anxiety, or being too hot. However,
                            frequent flushing can sometimes indicate an
                            underlying medical condition. Flushed skin occurs
                            when the hundreds of tiny blood vessels just beneath
                            the skin dilate, or widen.{" "}
                          </td>
                        </tr>
                        <tr></tr>
                        <tr>
                          <td>IPDN14</td>
                          <td>115</td>
                          <td>12/02/2021</td>
                          <td>Amit Singh(9009) </td>
                          <td>
                            Feeling sad or down Personality change in a way that
                            seems different for that person.{" "}
                          </td>
                          <td>
                            Stomach pain Typhoid fever and paratyphoid fever
                            have similar symptoms̵. People usually have a
                            sustained fever (one that doesn’t come and go) that
                            can be as high as 103–104°F (39–40°C).{" "}
                          </td>
                        </tr>
                        <tr></tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="table-responsive">
                    <div className="download_label" />
                    <table
                      className="table table-striped table-bordered table-hover allajaxlist"
                      id={3}
                    >
                      <caption>
                        <h4 className="bolds">Pharmacy Details</h4>
                      </caption>
                      <tbody>
                        <tr>
                          <th>Bill No</th>
                          <th>Case ID</th>
                          <th>Date</th>
                          <th className="text-right">Discount ($)</th>
                          <th className="text-right">Amount ($)</th>
                          <th className="text-right">Paid Amount ($)</th>
                          <th className="text-right">Balance Amount ($)</th>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td>PHARMAB307</td>
                          <td>115</td>
                          <td>10/22/2023 12:44 PM</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">210.00 </td>
                          <td className="text-right">210.00</td>
                          <td className="text-right">0.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={307}
                                className="btn btn-default btn-xs "
                                onclick="viewDetail(307)"
                                data-module-type="pharmacy"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PHARMAB309</td>
                          <td>5074</td>
                          <td>11/05/2023 12:41 PM</td>
                          <td className="text-right">20.80 (4.00%)</td>
                          <td className="text-right">551.20 </td>
                          <td className="text-right">551.20</td>
                          <td className="text-right">0.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={309}
                                className="btn btn-default btn-xs "
                                onclick="viewDetail(309)"
                                data-module-type="pharmacy"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PHARMAB319</td>
                          <td>115</td>
                          <td>12/05/2023 01:25 PM</td>
                          <td className="text-right">20.00 (5.00%)</td>
                          <td className="text-right">420.00 </td>
                          <td className="text-right">250.00</td>
                          <td className="text-right">170.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={319}
                                className="btn btn-default btn-xs "
                                onclick="viewDetail(319)"
                                data-module-type="pharmacy"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PHARMAB327</td>
                          <td>115</td>
                          <td>12/22/2023 05:30 PM</td>
                          <td className="text-right">50.00 (10.00%)</td>
                          <td className="text-right">500.00 </td>
                          <td className="text-right">350.00</td>
                          <td className="text-right">150.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={327}
                                className="btn btn-default btn-xs "
                                onclick="viewDetail(327)"
                                data-module-type="pharmacy"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PHARMAB329</td>
                          <td>115</td>
                          <td>01/05/2024 05:40 PM</td>
                          <td className="text-right">50.00 (10.00%)</td>
                          <td className="text-right">500.00 </td>
                          <td className="text-right">350.00</td>
                          <td className="text-right">150.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={329}
                                className="btn btn-default btn-xs "
                                onclick="viewDetail(329)"
                                data-module-type="pharmacy"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PHARMAB337</td>
                          <td>115</td>
                          <td>02/05/2024 01:30 PM</td>
                          <td className="text-right">50.00 (10.00%)</td>
                          <td className="text-right">475.00 </td>
                          <td className="text-right">320.00</td>
                          <td className="text-right">155.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={337}
                                className="btn btn-default btn-xs "
                                onclick="viewDetail(337)"
                                data-module-type="pharmacy"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PHARMAB344</td>
                          <td>115</td>
                          <td>02/12/2024 03:43 PM</td>
                          <td className="text-right">50.00 (10.00%)</td>
                          <td className="text-right">475.00 </td>
                          <td className="text-right">300.00</td>
                          <td className="text-right">175.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={344}
                                className="btn btn-default btn-xs "
                                onclick="viewDetail(344)"
                                data-module-type="pharmacy"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PHARMAB347</td>
                          <td>115</td>
                          <td>03/05/2024 05:30 PM</td>
                          <td className="text-right">50.00 (10.00%)</td>
                          <td className="text-right">500.00 </td>
                          <td className="text-right">500.00</td>
                          <td className="text-right">0.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={347}
                                className="btn btn-default btn-xs "
                                onclick="viewDetail(347)"
                                data-module-type="pharmacy"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PHARMAB354</td>
                          <td>115</td>
                          <td>04/01/2024 04:17 PM</td>
                          <td className="text-right">70.00 (10.00%)</td>
                          <td className="text-right">685.00 </td>
                          <td className="text-right">450.00</td>
                          <td className="text-right">235.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={354}
                                className="btn btn-default btn-xs "
                                onclick="viewDetail(354)"
                                data-module-type="pharmacy"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PHARMAB362</td>
                          <td>115</td>
                          <td>05/01/2024 05:42 PM</td>
                          <td className="text-right">90.00 (10.00%)</td>
                          <td className="text-right">880.00 </td>
                          <td className="text-right">520.00</td>
                          <td className="text-right">360.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={362}
                                className="btn btn-default btn-xs "
                                onclick="viewDetail(362)"
                                data-module-type="pharmacy"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PHARMAB370</td>
                          <td>115</td>
                          <td>06/01/2024 01:55 PM</td>
                          <td className="text-right">90.00 (10.00%)</td>
                          <td className="text-right">830.00 </td>
                          <td className="text-right">600.00</td>
                          <td className="text-right">230.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={370}
                                className="btn btn-default btn-xs "
                                onclick="viewDetail(370)"
                                data-module-type="pharmacy"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PHARMAB377</td>
                          <td>6302</td>
                          <td>06/12/2024 03:35 PM</td>
                          <td className="text-right">40.00 (10.00%)</td>
                          <td className="text-right">380.00 </td>
                          <td className="text-right">200.00</td>
                          <td className="text-right">180.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={377}
                                className="btn btn-default btn-xs "
                                onclick="viewDetail(377)"
                                data-module-type="pharmacy"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PHARMAB380</td>
                          <td>115</td>
                          <td>07/01/2024 03:09 PM</td>
                          <td className="text-right">54.00 (10.00%)</td>
                          <td className="text-right">513.00 </td>
                          <td className="text-right">420.00</td>
                          <td className="text-right">93.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={380}
                                className="btn btn-default btn-xs "
                                onclick="viewDetail(380)"
                                data-module-type="pharmacy"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PHARMAB387</td>
                          <td>115</td>
                          <td>07/02/2024 11:16 AM</td>
                          <td className="text-right">34.00 (10.00%)</td>
                          <td className="text-right">323.00 </td>
                          <td className="text-right">200.00</td>
                          <td className="text-right">123.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={387}
                                className="btn btn-default btn-xs "
                                onclick="viewDetail(387)"
                                data-module-type="pharmacy"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={3} />
                          <td className="text-right">
                            <b>Total Discount: </b>$668.80 (119.00%)
                          </td>
                          <td className="text-right">
                            <b>Total Amount: </b>$7,242.20
                          </td>
                          <td className="text-right">
                            <b>Total Paid: </b>$5,221.20
                          </td>
                          <td className="text-right">
                            <b>Total Balance: </b>$2,021.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="table-responsive">
                    <div className="download_label" />
                    <table
                      className="table table-striped table-bordered table-hover allajaxlist"
                      id={4}
                    >
                      <caption>
                        <h4 className="bolds">Pathology Details</h4>
                      </caption>
                      <thead>
                        <tr>
                          <th>Bill No</th>
                          <th>Case ID</th>
                          <th>Date</th>
                          <th className="text-right">Discount ($)</th>
                          <th className="text-right">Amount ($)</th>
                          <th className="text-right">Paid Amount ($)</th>
                          <th className="text-right">Balance Amount($)</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>PATHOB286</td>
                          <td>3154</td>
                          <td>02/14/2023 01:30 PM</td>
                          <td className="text-right">15.00 (10.00%)</td>
                          <td className="text-right">180.00</td>
                          <td className="text-right">180.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={286}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB298</td>
                          <td>115</td>
                          <td>03/06/2023 06:30 PM</td>
                          <td className="text-right">30.00 (10.00%)</td>
                          <td className="text-right">360.00</td>
                          <td className="text-right">300.00</td>
                          <td className="text-right">60.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={298}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB309</td>
                          <td>3439</td>
                          <td>04/06/2023 01:50 PM</td>
                          <td className="text-right">30.00 (10.00%)</td>
                          <td className="text-right">360.00</td>
                          <td className="text-right">200.00</td>
                          <td className="text-right">160.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={309}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB312</td>
                          <td>115</td>
                          <td>05/04/2023 09:48 AM</td>
                          <td className="text-right">30.00 (10.00%)</td>
                          <td className="text-right">360.00</td>
                          <td className="text-right">200.00</td>
                          <td className="text-right">160.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={312}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB323</td>
                          <td>4130</td>
                          <td>06/05/2023 01:02 PM</td>
                          <td className="text-right">30.00 (10.00%)</td>
                          <td className="text-right">360.00</td>
                          <td className="text-right">250.00</td>
                          <td className="text-right">110.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={323}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB330</td>
                          <td>115</td>
                          <td>06/12/2023 05:14 PM</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">390.00</td>
                          <td className="text-right">250.00</td>
                          <td className="text-right">140.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={330}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB336</td>
                          <td>115</td>
                          <td>07/20/2023 02:00 PM</td>
                          <td className="text-right">30.00 (10.00%)</td>
                          <td className="text-right">360.00</td>
                          <td className="text-right">200.00</td>
                          <td className="text-right">160.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={336}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB348</td>
                          <td>4445</td>
                          <td>08/08/2023 04:30 PM</td>
                          <td className="text-right">15.00 (5.00%)</td>
                          <td className="text-right">375.00</td>
                          <td className="text-right">200.00</td>
                          <td className="text-right">175.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={348}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB351</td>
                          <td>115</td>
                          <td>09/01/2023 11:42 AM</td>
                          <td className="text-right">30.00 (10.00%)</td>
                          <td className="text-right">360.00</td>
                          <td className="text-right">250.00</td>
                          <td className="text-right">110.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={351}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB358</td>
                          <td>115</td>
                          <td>09/12/2023 11:43 AM</td>
                          <td className="text-right">30.00 (10.00%)</td>
                          <td className="text-right">360.00</td>
                          <td className="text-right">210.00</td>
                          <td className="text-right">150.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={358}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB363</td>
                          <td>115</td>
                          <td>10/05/2023 05:31 PM</td>
                          <td className="text-right">7.50 (5.00%)</td>
                          <td className="text-right">187.50</td>
                          <td className="text-right">187.50</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={363}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB372</td>
                          <td>5074</td>
                          <td>11/05/2023 12:35 PM</td>
                          <td className="text-right">15.00 (5.00%)</td>
                          <td className="text-right">375.00</td>
                          <td className="text-right">300.00</td>
                          <td className="text-right">75.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={372}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB379</td>
                          <td>115</td>
                          <td>11/18/2023 01:58 PM</td>
                          <td className="text-right">15.00 (5.00%)</td>
                          <td className="text-right">375.00</td>
                          <td className="text-right">250.00</td>
                          <td className="text-right">125.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={379}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB383</td>
                          <td>115</td>
                          <td>12/10/2023 12:12 PM</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">390.00</td>
                          <td className="text-right">200.00</td>
                          <td className="text-right">190.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={383}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB390</td>
                          <td>115</td>
                          <td>12/22/2023 01:28 PM</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">195.00</td>
                          <td className="text-right">195.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={390}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB391</td>
                          <td>115</td>
                          <td>01/01/2024 04:47 PM</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">390.00</td>
                          <td className="text-right">250.00</td>
                          <td className="text-right">140.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={391}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB401</td>
                          <td>115</td>
                          <td>02/05/2024 02:30 PM</td>
                          <td className="text-right">15.00 (10.00%)</td>
                          <td className="text-right">180.00</td>
                          <td className="text-right">120.00</td>
                          <td className="text-right">60.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={401}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB407</td>
                          <td>115</td>
                          <td>02/12/2024 08:30 PM</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">195.00</td>
                          <td className="text-right">195.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={407}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB409</td>
                          <td>115</td>
                          <td>03/05/2024 10:30 AM</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">195.00</td>
                          <td className="text-right">195.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={409}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB416</td>
                          <td>115</td>
                          <td>04/01/2024 03:30 PM</td>
                          <td className="text-right">30.00 (10.00%)</td>
                          <td className="text-right">360.00</td>
                          <td className="text-right">260.00</td>
                          <td className="text-right">100.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={416}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB424</td>
                          <td />
                          <td>04/28/2024 05:01 PM</td>
                          <td className="text-right">15.00 (10.00%)</td>
                          <td className="text-right">180.00</td>
                          <td className="text-right">180.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={424}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB425</td>
                          <td>115</td>
                          <td>05/01/2024 05:32 PM</td>
                          <td className="text-right">30.00 (10.00%)</td>
                          <td className="text-right">360.00</td>
                          <td className="text-right">200.00</td>
                          <td className="text-right">160.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={425}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB433</td>
                          <td>115</td>
                          <td>06/01/2024 01:25 PM</td>
                          <td className="text-right">30.00 (10.00%)</td>
                          <td className="text-right">360.00</td>
                          <td className="text-right">250.00</td>
                          <td className="text-right">110.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={433}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB440</td>
                          <td>6302</td>
                          <td>06/12/2024 03:35 PM</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">195.00</td>
                          <td className="text-right">195.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={440}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB443</td>
                          <td>115</td>
                          <td>07/01/2024 03:10 PM</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">195.00</td>
                          <td className="text-right">120.00</td>
                          <td className="text-right">75.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={443}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PATHOB449</td>
                          <td>115</td>
                          <td>07/02/2024 11:16 AM</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">195.00</td>
                          <td className="text-right">120.00</td>
                          <td className="text-right">75.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={449}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="pathology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={3} />
                          <td className="text-right">
                            <b>Total Discount: </b>$397.50 (150.00%)
                          </td>
                          <td className="text-right">
                            <b>Total Amount: </b>$7,792.50
                          </td>
                          <td className="text-right">
                            <b>Total Paid: </b>$5,457.50
                          </td>
                          <td className="text-right">
                            <b>Total Balance: </b>$2,335.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="table-responsive">
                    <div className="download_label" />
                    <table
                      className="table table-striped table-bordered table-hover allajaxlist"
                      id={5}
                    >
                      <caption>
                        <h4 className="bolds">Radiology Details</h4>
                      </caption>
                      <thead>
                        <tr>
                          <th>Bill No</th>
                          <th>Case ID</th>
                          <th>Date</th>
                          <th className="text-right">Discount ($)</th>
                          <th className="text-right">Amount ($)</th>
                          <th className="text-right">Paid Amount ($)</th>
                          <th className="text-right">Balance Amount($)</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>RADIOB224</td>
                          <td>3154</td>
                          <td>02/14/2023 02:30 PM</td>
                          <td className="text-right">16.00 (10.00%)</td>
                          <td className="text-right">176.00</td>
                          <td className="text-right">176.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={224}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="radiology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>RADIOB236</td>
                          <td>115</td>
                          <td>03/06/2023 06:30 PM</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">384.00</td>
                          <td className="text-right">384.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={236}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="radiology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>RADIOB236</td>
                          <td>115</td>
                          <td>03/06/2023 06:30 PM</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">384.00</td>
                          <td className="text-right">384.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={236}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="radiology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>RADIOB238</td>
                          <td />
                          <td>04/05/2023 01:30 PM</td>
                          <td className="text-right">16.00 (10.00%)</td>
                          <td className="text-right">176.00</td>
                          <td className="text-right">176.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={238}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="radiology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>RADIOB246</td>
                          <td>3439</td>
                          <td>04/06/2023 02:30 PM</td>
                          <td className="text-right">32.00 (10.00%)</td>
                          <td className="text-right">352.00</td>
                          <td className="text-right">200.00</td>
                          <td className="text-right">152.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={246}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="radiology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>RADIOB249</td>
                          <td>115</td>
                          <td>05/03/2023 05:51 PM</td>
                          <td className="text-right">32.00 (10.00%)</td>
                          <td className="text-right">352.00</td>
                          <td className="text-right">200.00</td>
                          <td className="text-right">152.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={249}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="radiology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>RADIOB259</td>
                          <td>115</td>
                          <td>05/28/2023 04:35 PM</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">384.00</td>
                          <td className="text-right">384.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={259}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="radiology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>RADIOB261</td>
                          <td>4130</td>
                          <td>06/05/2023 01:15 PM</td>
                          <td className="text-right">16.00 (5.00%)</td>
                          <td className="text-right">368.00</td>
                          <td className="text-right">250.00</td>
                          <td className="text-right">118.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={261}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="radiology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>RADIOB270</td>
                          <td>115</td>
                          <td>06/12/2023 05:30 PM</td>
                          <td className="text-right">16.00 (5.00%)</td>
                          <td className="text-right">368.00</td>
                          <td className="text-right">368.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={270}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="radiology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>RADIOB276</td>
                          <td>115</td>
                          <td>07/08/2023 10:00 AM</td>
                          <td className="text-right">32.00 (10.00%)</td>
                          <td className="text-right">352.00</td>
                          <td className="text-right">250.00</td>
                          <td className="text-right">102.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={276}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="radiology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>RADIOB288</td>
                          <td>115</td>
                          <td>08/08/2023 05:03 PM</td>
                          <td className="text-right">16.00 (5.00%)</td>
                          <td className="text-right">368.00</td>
                          <td className="text-right">250.00</td>
                          <td className="text-right">118.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={288}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="radiology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>RADIOB294</td>
                          <td>115</td>
                          <td>09/15/2023 05:30 AM</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">384.00</td>
                          <td className="text-right">200.00</td>
                          <td className="text-right">184.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={294}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="radiology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>RADIOB298</td>
                          <td>115</td>
                          <td>09/18/2023 11:45 AM</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">192.00</td>
                          <td className="text-right">192.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={298}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="radiology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>RADIOB303</td>
                          <td>4861</td>
                          <td>10/05/2023 04:30 PM</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">192.00</td>
                          <td className="text-right">192.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={303}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="radiology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>RADIOB313</td>
                          <td>5074</td>
                          <td>11/10/2023 01:30 PM</td>
                          <td className="text-right">16.00 (5.00%)</td>
                          <td className="text-right">368.00</td>
                          <td className="text-right">200.00</td>
                          <td className="text-right">168.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={313}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="radiology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>RADIOB319</td>
                          <td>115</td>
                          <td>11/18/2023 01:59 PM</td>
                          <td className="text-right">16.00 (5.00%)</td>
                          <td className="text-right">368.00</td>
                          <td className="text-right">200.00</td>
                          <td className="text-right">168.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={319}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="radiology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>RADIOB322</td>
                          <td>5254</td>
                          <td>12/05/2023 01:30 PM</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">192.00</td>
                          <td className="text-right">192.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={322}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="radiology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>RADIOB330</td>
                          <td>115</td>
                          <td>12/22/2023 06:30 PM</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">192.00</td>
                          <td className="text-right">192.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={330}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="radiology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>RADIOB333</td>
                          <td>115</td>
                          <td>01/10/2024 03:20 PM</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">384.00</td>
                          <td className="text-right">250.00</td>
                          <td className="text-right">134.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={333}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="radiology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>RADIOB340</td>
                          <td>115</td>
                          <td>02/05/2024 01:05 PM</td>
                          <td className="text-right">16.00 (10.00%)</td>
                          <td className="text-right">176.00</td>
                          <td className="text-right">100.00</td>
                          <td className="text-right">76.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={340}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="radiology"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="table-responsive">
                    <div className="download_label" />
                    <table
                      className="table table-striped table-bordered table-hover allajaxlist"
                      id={6}
                    >
                      <caption>
                        <h4 className="bolds">Blood Bank Issue Details</h4>
                      </caption>
                      <thead>
                        <tr>
                          <th>Bill No</th>
                          <th>Case ID</th>
                          <th>Issue Date</th>
                          <th>Donor Name</th>
                          <th>Bags</th>
                          <th className="text-right">Discount ($)</th>
                          <th className="text-right">Amount ($)</th>
                          <th className="text-right">Paid Amount ($)</th>
                          <th className="text-right">Balance Amount ($)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>BIB293</td>
                          <td>115</td>
                          <td>02/06/2023 04:41 PM</td>
                          <td>Ahemad</td>
                          <td>9856 (220 2)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={293}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB298</td>
                          <td>3154</td>
                          <td>03/05/2023 02:30 PM</td>
                          <td>Kevlin </td>
                          <td>0332 (220 1)</td>
                          <td className="text-right">10.89 (10.00%)</td>
                          <td className="text-right">108.90</td>
                          <td className="text-right">108.90</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={298}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB314</td>
                          <td>115</td>
                          <td>03/06/2023 09:30 PM</td>
                          <td>Ahemad</td>
                          <td>9720 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={314}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB316</td>
                          <td />
                          <td>04/01/2023 04:00 PM</td>
                          <td>Riyaz</td>
                          <td>4332 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={316}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB332</td>
                          <td>3439</td>
                          <td>04/06/2023 05:30 PM</td>
                          <td>Mayank Singh</td>
                          <td>1233 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={332}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB336</td>
                          <td>115</td>
                          <td>05/05/2023 02:34 PM</td>
                          <td>Marsh</td>
                          <td>3195 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">50.00</td>
                          <td className="text-right">71.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={336}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB350</td>
                          <td>115</td>
                          <td>05/04/2023 12:00 PM</td>
                          <td>Addey</td>
                          <td>5220 (220 2)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={350}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB353</td>
                          <td>4130</td>
                          <td>06/06/2023 12:43 PM</td>
                          <td>Brian</td>
                          <td>45332 (220 1)</td>
                          <td className="text-right">5.75 (5.00%)</td>
                          <td className="text-right">114.95</td>
                          <td className="text-right">100.00</td>
                          <td className="text-right">14.95</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={353}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB369</td>
                          <td>115</td>
                          <td>06/12/2023 09:30 PM</td>
                          <td>Addey</td>
                          <td>1533 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={369}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB375</td>
                          <td>115</td>
                          <td>07/25/2023 01:30 PM</td>
                          <td>Maria</td>
                          <td>3601 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={375}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB386</td>
                          <td>115</td>
                          <td>08/01/2023 01:30 PM</td>
                          <td>Devin Coinneach</td>
                          <td>0533 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={386}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB399</td>
                          <td>115</td>
                          <td>08/09/2023 05:04 PM</td>
                          <td>Brian</td>
                          <td>11211 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={399}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB402</td>
                          <td>4130</td>
                          <td>09/01/2023 11:30 AM</td>
                          <td>Devin Coinneach</td>
                          <td>5900 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={402}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB415</td>
                          <td>115</td>
                          <td>09/22/2023 11:46 AM</td>
                          <td>Jhon</td>
                          <td>9623 (220 2)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={415}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB419</td>
                          <td>115</td>
                          <td>10/01/2023 04:30 PM</td>
                          <td>Mayank Singh</td>
                          <td>30021 (220 7)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={419}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB437</td>
                          <td>115</td>
                          <td>11/05/2023 12:51 PM</td>
                          <td>Mayank Singh</td>
                          <td>231 (220 7)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={437}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB450</td>
                          <td>115</td>
                          <td>11/12/2023 09:30 PM</td>
                          <td>Riyaz</td>
                          <td>63201 (220 2)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={450}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB453</td>
                          <td>115</td>
                          <td>12/05/2023 04:30 PM</td>
                          <td>Kevlin </td>
                          <td>003260 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={453}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB468</td>
                          <td>115</td>
                          <td>12/22/2023 10:30 PM</td>
                          <td>Riyaz</td>
                          <td>3201 (220 7)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={468}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB470</td>
                          <td>115</td>
                          <td>01/05/2024 03:41 PM</td>
                          <td>Veneet</td>
                          <td>65320 (220 7)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={470}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB484</td>
                          <td>115</td>
                          <td>02/01/2024 11:27 AM</td>
                          <td>Devin Coinneach</td>
                          <td>65201 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={484}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB498</td>
                          <td>5721</td>
                          <td>02/12/2024 03:39 PM</td>
                          <td>Mayank Singh</td>
                          <td>6321 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={498}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB500</td>
                          <td>115</td>
                          <td>03/05/2024 04:30 PM</td>
                          <td>Niklesh</td>
                          <td>685 (220 2)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={500}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB514</td>
                          <td>115</td>
                          <td>04/01/2024 02:59 PM</td>
                          <td>Kevlin </td>
                          <td>03112 (220 7)</td>
                          <td className="text-right">10.89 (10.00%)</td>
                          <td className="text-right">108.90</td>
                          <td className="text-right">95.00</td>
                          <td className="text-right">13.90</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={514}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB538</td>
                          <td>115</td>
                          <td>06/01/2024 12:32 PM</td>
                          <td>Kevlin </td>
                          <td>1202 (220 7)</td>
                          <td className="text-right">10.89 (10.00%)</td>
                          <td className="text-right">108.90</td>
                          <td className="text-right">80.00</td>
                          <td className="text-right">28.90</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={538}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB554</td>
                          <td>115</td>
                          <td>07/01/2024 01:02 PM</td>
                          <td>Riyaz</td>
                          <td>7563 (220 7)</td>
                          <td className="text-right">10.89 (10.00%)</td>
                          <td className="text-right">108.90</td>
                          <td className="text-right">108.90</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={554}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB568</td>
                          <td>115</td>
                          <td>07/02/2024 11:17 AM</td>
                          <td>Ahemad</td>
                          <td>5463 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={568}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="blood_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={5} />
                          <td className="text-right">
                            <b>Discount: </b>$49.31 (45.00%)
                          </td>
                          <td className="text-right">
                            <b>Total Amount: </b>$3,212.55
                          </td>
                          <td className="text-right">
                            <b>Total Paid: </b>$3,083.80
                          </td>
                          <td className="text-right">
                            <b>Total Balance: </b>$128.75
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="table-responsive">
                    <div className="download_label" />
                    <table
                      className="table table-striped table-bordered table-hover allajaxlist"
                      id={6}
                    >
                      <caption>
                        <h4 className="bolds">Blood Bank Component Details</h4>
                      </caption>
                      <thead>
                        <tr>
                          <th>Bill No</th>
                          <th>Case ID</th>
                          <th>Issue Date</th>
                          <th>Donor Name</th>
                          <th>Component</th>
                          <th>Bags</th>
                          <th className="text-right">Discount ($)</th>
                          <th className="text-right">Amount ($)</th>
                          <th className="text-right">Paid Amount ($)</th>
                          <th className="text-right">Balance Amount ($)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>BIB294</td>
                          <td>115</td>
                          <td>02/06/2023 04:41 PM</td>
                          <td>Mayank Singh</td>
                          <td>Plasma</td>
                          <td>5664 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={294}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="component_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB315</td>
                          <td>115</td>
                          <td>03/06/2023 10:30 PM</td>
                          <td>Riyaz</td>
                          <td>White Cells &amp; Granulocytes</td>
                          <td>483 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={315}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="component_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB324</td>
                          <td />
                          <td>04/05/2023 11:04 AM</td>
                          <td>Jhon</td>
                          <td>Platelets</td>
                          <td>6546846 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={324}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="component_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB333</td>
                          <td>3439</td>
                          <td>04/06/2023 02:34 PM</td>
                          <td>Maria</td>
                          <td>White Cells &amp; Granulocytes</td>
                          <td>3355 (220 2)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={333}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="component_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB342</td>
                          <td>115</td>
                          <td>05/01/2023 05:44 PM</td>
                          <td>Riyaz</td>
                          <td>Platelets</td>
                          <td>25444 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">95.00</td>
                          <td className="text-right">26.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={342}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="component_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB354</td>
                          <td>4130</td>
                          <td>06/06/2023 10:30 PM</td>
                          <td>Devin Coinneach</td>
                          <td>Platelets</td>
                          <td>3211 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={354}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="component_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB378</td>
                          <td>4130</td>
                          <td>07/06/2023 11:22 AM</td>
                          <td>Jhon</td>
                          <td>Platelets</td>
                          <td>332 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">100.00</td>
                          <td className="text-right">21.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={378}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="component_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB393</td>
                          <td>115</td>
                          <td>08/01/2023 01:30 PM</td>
                          <td>Ahemad</td>
                          <td>Plasma</td>
                          <td>5443 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={393}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="component_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB409</td>
                          <td>4130</td>
                          <td>09/01/2023 10:30 AM</td>
                          <td>Maria</td>
                          <td>Platelets</td>
                          <td>33212 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={409}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="component_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB427</td>
                          <td>115</td>
                          <td>10/05/2023 06:30 PM</td>
                          <td>Kevlin </td>
                          <td>Platelets</td>
                          <td>00320 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">100.00</td>
                          <td className="text-right">21.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={427}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="component_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB443</td>
                          <td>115</td>
                          <td>11/01/2023 11:56 AM</td>
                          <td>Kevlin </td>
                          <td>White Cells &amp; Granulocytes</td>
                          <td>00326 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={443}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="component_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB459</td>
                          <td>115</td>
                          <td>12/01/2023 10:38 AM</td>
                          <td>Niklesh</td>
                          <td>Plasma</td>
                          <td>1111 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={459}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="component_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB507</td>
                          <td>115</td>
                          <td>03/05/2024 04:30 PM</td>
                          <td>Ahemad</td>
                          <td>Cryo.</td>
                          <td>3222 (220 2)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={507}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="component_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB521</td>
                          <td>115</td>
                          <td>04/01/2024 03:06 PM</td>
                          <td>Brian</td>
                          <td>White Cells &amp; Granulocytes</td>
                          <td>555 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">90.00</td>
                          <td className="text-right">31.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={521}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="component_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB537</td>
                          <td>115</td>
                          <td>05/26/2024 04:58 PM</td>
                          <td>Niklesh</td>
                          <td>Platelets</td>
                          <td>7841 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={537}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="component_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB545</td>
                          <td>115</td>
                          <td>06/01/2024 12:51 PM</td>
                          <td>Niklesh</td>
                          <td>Platelets</td>
                          <td>7864 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={545}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="component_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB552</td>
                          <td>6302</td>
                          <td>06/16/2024 03:37 PM</td>
                          <td>Sara</td>
                          <td>White Cells &amp; Granulocytes</td>
                          <td>45230 (220 7)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={552}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="component_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>BIB561</td>
                          <td>115</td>
                          <td>07/01/2024 01:15 PM</td>
                          <td>Addey</td>
                          <td>Platelets</td>
                          <td>1205 (220 1)</td>
                          <td className="text-right">0.00 (0.00%)</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">121.00</td>
                          <td className="text-right">0.00</td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={561}
                                className="btn btn-default btn-xs view_detail"
                                data-module-type="component_issue"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={6} />
                          <td className="text-right">
                            <b>Discount: </b>$0.00 (0.00%)
                          </td>
                          <td className="text-right">
                            <b>Total Amount: </b>$2,178.00
                          </td>
                          <td className="text-right">
                            <b>Total Paid: </b>$2,079.00
                          </td>
                          <td className="text-right">
                            <b>Total Balance: </b>$99.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="table-responsive">
                    <div className="download_label">Ambulance Report</div>
                    <table
                      className="table table-striped table-bordered table-hover allajaxlist"
                      id={7}
                    >
                      <caption>
                        <h4 className="bolds">Ambulance Details</h4>
                      </caption>
                      <thead>
                        <tr>
                          <th>Bill No</th>
                          <th>Case ID</th>
                          <th>Date</th>
                          <th>Vehicle Number</th>
                          <th className="text-right">Amount ($)</th>
                          <th className="text-right">Paid Amount ($)</th>
                          <th className="text-right">Balance Amount($)</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>ACB194</td>
                          <td>115</td>
                          <td>03/06/2023 09:30 AM </td>
                          <td>BNS321</td>
                          <td className="text-right">195.00 </td>
                          <td className="text-right">195.00 </td>
                          <td className="text-right">0.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={194}
                                className="btn btn-default btn-xs"
                                onclick="viewDetailBill('194')"
                                data-module-type="ambulance"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>ACB276</td>
                          <td>115</td>
                          <td>11/12/2023 10:46 AM </td>
                          <td>HJG1650</td>
                          <td className="text-right">195.00 </td>
                          <td className="text-right">195.00 </td>
                          <td className="text-right">0.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={276}
                                className="btn btn-default btn-xs"
                                onclick="viewDetailBill('276')"
                                data-module-type="ambulance"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>ACB279</td>
                          <td>115</td>
                          <td>12/05/2023 10:01 AM </td>
                          <td>BS4</td>
                          <td className="text-right">195.00 </td>
                          <td className="text-right">195.00 </td>
                          <td className="text-right">0.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={279}
                                className="btn btn-default btn-xs"
                                onclick="viewDetailBill('279')"
                                data-module-type="ambulance"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>ACB287</td>
                          <td>115</td>
                          <td>12/21/2023 01:30 PM </td>
                          <td>DF342</td>
                          <td className="text-right">195.00 </td>
                          <td className="text-right">195.00 </td>
                          <td className="text-right">0.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={287}
                                className="btn btn-default btn-xs"
                                onclick="viewDetailBill('287')"
                                data-module-type="ambulance"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>ACB288</td>
                          <td>2215</td>
                          <td>01/01/2024 01:48 PM </td>
                          <td>BS4FGD</td>
                          <td className="text-right">195.00 </td>
                          <td className="text-right">195.00 </td>
                          <td className="text-right">0.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={288}
                                className="btn btn-default btn-xs"
                                onclick="viewDetailBill('288')"
                                data-module-type="ambulance"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>ACB296</td>
                          <td>115</td>
                          <td>02/01/2024 10:58 AM </td>
                          <td>MKL265</td>
                          <td className="text-right">195.00 </td>
                          <td className="text-right">195.00 </td>
                          <td className="text-right">0.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={296}
                                className="btn btn-default btn-xs"
                                onclick="viewDetailBill('296')"
                                data-module-type="ambulance"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>ACB304</td>
                          <td>5721</td>
                          <td>02/08/2024 03:39 PM </td>
                          <td>BS440</td>
                          <td className="text-right">195.00 </td>
                          <td className="text-right">195.00 </td>
                          <td className="text-right">0.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={304}
                                className="btn btn-default btn-xs"
                                onclick="viewDetailBill('304')"
                                data-module-type="ambulance"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>ACB305</td>
                          <td>115</td>
                          <td>03/01/2024 12:30 PM </td>
                          <td>BS4FGD</td>
                          <td className="text-right">195.00 </td>
                          <td className="text-right">195.00 </td>
                          <td className="text-right">0.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={305}
                                className="btn btn-default btn-xs"
                                onclick="viewDetailBill('305')"
                                data-module-type="ambulance"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>ACB313</td>
                          <td>115</td>
                          <td>03/05/2024 09:30 AM </td>
                          <td>DF342</td>
                          <td className="text-right">195.00 </td>
                          <td className="text-right">195.00 </td>
                          <td className="text-right">0.00 </td>
                          <td>
                            <div className="rowoptionview">
                              <a
                                href="javascript:void(0)"
                                data-loading-text=" "
                                data-record-id={313}
                                className="btn btn-default btn-xs"
                                onclick="viewDetailBill('313')"
                                data-module-type="ambulance"
                                data-toggle="tooltip"
                                title
                              >
                                <i className="fa fa-reorder" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <MadicineDetailsTab /> */}
      </div>
    </div>
  );
}

export default PatientDetail;
