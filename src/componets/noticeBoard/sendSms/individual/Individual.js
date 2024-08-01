import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
function Individual() {
  return (
    <div className="">
      {/* /.tab-pane */}
      <div className="tab-pane active" id="tab_perticular">
        <form
          action="https://demo.smart-hospital.in/admin/mailsms/send_individual_sms"
          method="post"
          id="individual_form"
        >
          {/* /.box-header */}
          <div className="pb10">
            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                  <label>Title</label>
                  <small className="req"> *</small>
                  <input
                    className="form-control"
                    name="individual_title"
                    fdprocessedid="dedt1x"
                  />
                </div>
                <div className="form-group">
                  <label className="pr20">
                    Send Through<small className="req"> *</small>
                  </label>
                  <label className="checkbox-inline">
                    <input
                      type="checkbox"
                      name="individual_send_by[]"
                      defaultValue="sms"
                    />
                    SMS{" "}
                  </label>
                  <label className="checkbox-inline">
                    <input
                      type="checkbox"
                      name="individual_send_by[]"
                      defaultValue="push"
                    />
                    Mobile App{" "}
                  </label>
                  <span className="text-danger" />
                </div>
                <div className="form-group">
                  <label>Template Id</label>&nbsp; (
                  <small style={{ color: "red" }}>
                    This field required only for Indian SMS Gateway
                  </small>
                  )
                  <input
                    className="form-control"
                    name="individual_template_id"
                    fdprocessedid="t8hcv18"
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <small className="req"> *</small>
                  <textarea
                    id="individual_msg_text"
                    name="individual_message"
                    className="form-control compose-textarea"
                    rows={12}
                    defaultValue={""}
                  />
                  <span className="text-muted tot_count_individual_msg_text pull-right word_counter">
                    Character Count: 0
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="inpuFname">Message To</label>
                  <small className="req"> *</small>
                  <div className="input-group">
                    <div className="input-group-btn bs-dropdown-to-select-group">
                      
                      <select name="" id="" className="form-select">
                        <option value="select">select</option>
                        <option value="select">select1</option>
                        <option value="select">select1</option>
                        <option value="select">select1</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      defaultValue
                      data-record
                      data-email
                      data-mobileno
                      data-app_key
                      className="form-control"
                      autoComplete="off"
                      name="text"
                      id="search-query"
                      fdprocessedid="hdg05"
                    />
                    <div id="suggesstion-box" />
                    <span className="input-group-btn">
                      <button
                        className="btn btn-primary btn-searchsm add-btn"
                        type="button"
                        fdprocessedid="5r14m"
                      >
                        Add
                      </button>
                    </span>
                  </div>
                </div>
                <div className="dual-list list-right">
                  <div className="well minheight260">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <input
                            type="text"
                            name="SearchDualList"
                            className="form-control"
                            placeholder="Search"
                            fdprocessedid="5pzcl4"
                          />
                          <div className="input-group-btn">
                            <span className="btn ">
                              <HiOutlineSearch className="fa fa-search" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wellscroll">
                      <ul className="list-group send_list"></ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.box-body */}
          <div className="modal-footer row">
            <div className="pull-right">
              <button
                type="submit"
                className="btn btn-primary submit_individual"
                data-loading-text="<i class='fa fa-spinner fa-spin '></i> Sending"
                fdprocessedid="9l1du"
              >
                <i className="fa fa-envelope-o" /> Send
              </button>
            </div>
          </div>
          {/* /.box-footer */}
        </form>
      </div>
    </div>
  );
}

export default Individual;
