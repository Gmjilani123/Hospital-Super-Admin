import React, { useState } from "react";
import JoditEditor from "jodit-react";

function EmailGroupTab() {
  const [content, setContent] = useState("");

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };
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
                  <label>Attachment</label>{" "}
                  <input
                    className="form-control"
                    name="group_template_id"
                    type="file"
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <JoditEditor
                    value={content}
                    config={config}
                    onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={(newContent) => {}}
                  />
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

export default EmailGroupTab;
