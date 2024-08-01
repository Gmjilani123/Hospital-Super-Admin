import React from "react";

function Group() {
  return (
    <div className="">
      <div className="tab-pane active" id="tab_group">
        <form
          action="https://demo.smart-hospital.in/admin/mailsms/send_group_sms"
          method="post"
          id="group_form"
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
                    name="group_title"
                    fdprocessedid="ju69bfb"
                  />
                </div>
                <div className="form-group">
                  <label>Template Id</label>&nbsp; (
                  <small style={{ color: "red" }}>
                    This field required only for Indian SMS Gateway
                  </small>
                  )
                  <input
                    className="form-control"
                    name="group_template_id"
                    fdprocessedid="upth5"
                  />
                </div>
                <div className="form-group">
                  <label className="pr20">
                    Send Through <small className="req"> *</small>
                  </label>
                  <label className="checkbox-inline">
                    <input
                      type="checkbox"
                      defaultValue="sms"
                      name="group_send_by[]"
                      className="me-1"
                    />
                    SMS{" "}
                  </label>
                  <label className="checkbox-inline">
                    <input
                      type="checkbox"
                      defaultValue="push"
                      name="group_send_by[]"
                      className="me-1"
                    />
                    Mobile App{" "}
                  </label>
                  <span className="text-danger" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <small className="req"> *</small>
                  <textarea
                    id="group_msg_text"
                    name="group_message"
                    className="form-control compose-textarea"
                    rows={12}
                    defaultValue={""}
                  />
                  <span className="text-muted tot_count_group_msg_text pull-right word_counter">
                    Character Count: 0
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Message To</label>
                  <small className="req"> *</small>
                  <div className="well">
                    <div className="checkbox mt0">
                      <label>
                        <input
                          type="checkbox"
                          name="user[]"
                          defaultValue="patient"
                          
                        />{" "}
                        <b>Patient</b>{" "}
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="user[]" defaultValue={1} />{" "}
                        <b>Admin</b>
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="user[]" defaultValue={2} />{" "}
                        <b>Accountant</b>
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="user[]" defaultValue={3} />{" "}
                        <b>Doctor</b>
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="user[]" defaultValue={4} />{" "}
                        <b>Pharmacist</b>
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="user[]" defaultValue={5} />{" "}
                        <b>Pathologist</b>
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="user[]" defaultValue={6} />{" "}
                        <b>Radiologist</b>
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="user[]" defaultValue={7} />{" "}
                        <b>Super Admin</b>
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="user[]" defaultValue={8} />{" "}
                        <b>Receptionist</b>
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="user[]" defaultValue={9} />{" "}
                        <b>Nurse</b>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="modal-footer row">
            <div className="pull-right">
              <button
                type="submit"
                className="btn btn-primary submit_group"
                data-loading-text="<i class='fa fa-spinner fa-spin '></i> Sending"
                fdprocessedid="btdpl9"
              >
                <i className="fa fa-envelope-o" /> Send
              </button>
            </div>
          </div>
         
        </form>
      </div>
    </div>
  );
}

export default Group;
