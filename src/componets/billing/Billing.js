import React from "react";
import { CiStethoscope } from "react-icons/ci";
import { PiFlaskLight, PiMicroscopeThin } from "react-icons/pi";
import { FaTint, FaBurn } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaRegCalendarCheck } from "react-icons/fa";

function Billing() {
  return (
    <section className="content">
      <div className="row row-equal">
        <div className="col-md-6">
          <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title titlefix">Single Module Billing</h3>
            </div>
            <div className="box-body py-2 px-2">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="billingbox text-center">
                    <Link to="/admin/Bill/appointment-bill">
                      <div className="billingbox-icon">
                        <FaRegCalendarCheck className="fas fa-stethoscope" />
                      </div>
                      <p>Appointment</p>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="billingbox text-center">
                    <Link to="/admin/Bill/OPD-bill">
                      <div className="billingbox-icon">
                        <CiStethoscope className="fas fa-stethoscope" />
                      </div>
                      <p>OPD</p>
                    </Link>
                  </div>
                </div>
                {/*./col-lg-4*/}
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="billingbox text-center">
                    <Link to="/admin/Bill/Pathology">
                      <div className="billingbox-icon">
                        <PiFlaskLight className="fas fa-flask" />
                      </div>
                      <p>Pathology</p>
                    </Link>
                  </div>
                </div>
                {/*./col-lg-4*/}
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="billingbox text-center">
                    <Link to="/admin/Bill/Radiology">
                      <div className="billingbox-icon">
                        <PiMicroscopeThin className="fas fa-microscope" />
                      </div>
                      <p>Radiology</p>
                    </Link>
                  </div>
                </div>
                {/*./col-lg-4*/}
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="billingbox text-center">
                    <Link to="/admin/Bill/bloodIssue">
                      <div className="billingbox-icon">
                        <FaTint className="fas fa-tint" />
                      </div>
                      <p>Blood Issue</p>
                    </Link>
                  </div>
                </div>
                {/*./col-lg-4*/}
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="billingbox text-center">
                    <Link to="/admin/Bill/BloodComponent">
                      <div className="billingbox-icon">
                        <FaBurn className="fas fa-burn" />
                      </div>
                      <p>Blood Component Issue</p>
                    </Link>
                  </div>
                </div>
                {/*./col-lg-4*/}
              </div>
            </div>
            {/* /.box-body */}
          </div>
        </div>
        {/*/.col (left) */}
        <div className="col-md-6">
          <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title titlefix">
                OPD/IPD Billing Through Case Id
              </h3>
            </div>
            <div className="box-body min-h-4 py-2 px-2">
              <form
                action="https://demo.smart-hospital.in/admin/bill/dashboard"
                acceptCharset="utf-8"
                method="post"
              >
                {/* <input type="hidden" name="ci_csrf_token" defaultValue />{" "} */}
                <div className="form-group d-flex case_id">
                  <div className="d-flex me-2">
                    <label className="fw-bold">Case ID</label>
                    <small className="req">*</small>
                  </div>

                  <div>
                    <input
                      type="text"
                      name="case_id"
                      className="form-control"
                      placeholder="Enter Case ID"
                    />

                    <span className="text-danger" />
                  </div>
                  <div className="ml-2">
                    <button className="btn btn-primary btn-md ">
                      <IoSearchSharp className="fa fa-search" /> Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* /.box-body */}
          </div>
        </div>
        {/*/.col (left) */}
      </div>
    </section>
  );
}

export default Billing;
