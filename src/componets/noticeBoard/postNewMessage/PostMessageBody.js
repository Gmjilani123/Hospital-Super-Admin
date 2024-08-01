import React, { useState } from "react";
import JoditEditor from "jodit-react";
function PostMessageBody() {
  const [content, setContent] = useState("");

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };
  return (
    <div className="box-body px-2 py-2">
      <input type="hidden" name="ci_csrf_token" defaultValue />{" "}
      <div className="row">
        <div className="col-md-8">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <span className="req"> *</span>
            <input
              autofocus
              id="title"
              name="title"
              placeholder
              type="text"
              className="form-control"
              defaultValue="Free Blood Camping"
              autoComplete="off"
              fdprocessedid="f8gfqq"
            />
            <span className="text-danger" />
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
        <div className="col-md-3">
          <div className="box-body">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Notice Date</label>
              <span className="req"> *</span>
              <input
                id="date"
                name="date"
                placeholder
                type="text"
                className="form-control date"
                defaultValue="06/01/2023"
                fdprocessedid="m5h5c8"
              />
              <span className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Publish On</label>
              <span className="req"> *</span>
              <input
                id="publish_date"
                name="publish_date"
                placeholder
                type="text"
                className="form-control date"
                defaultValue="06/05/2023"
                fdprocessedid="smq1c4"
              />
              <span className="text-danger" />
            </div>
            <div className="form-horizontal">
              <label htmlFor="exampleInputEmail1">Message To</label>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="visible[]"
                    defaultValue={1}
                    defaultChecked="checked"
                  />{" "}
                  <b>Admin</b>
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" name="visible[]" defaultValue={2} />{" "}
                  <b>Accountant</b>
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="visible[]"
                    defaultValue={3}
                    defaultChecked="checked"
                  />{" "}
                  <b>Doctor</b>
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" name="visible[]" defaultValue={4} />{" "}
                  <b>Pharmacist</b>
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="visible[]"
                    defaultValue={5}
                    defaultChecked="checked"
                  />{" "}
                  <b>Pathologist</b>
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="visible[]"
                    defaultValue={6}
                    defaultChecked="checked"
                  />{" "}
                  <b>Radiologist</b>
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="visible[]"
                    defaultValue={7}
                    defaultChecked="checked"
                  />{" "}
                  <b>Super Admin</b>
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="visible[]"
                    defaultValue={8}
                    defaultChecked="checked"
                  />{" "}
                  <b>Receptionist</b>
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="visible[]"
                    defaultValue={9}
                    defaultChecked="checked"
                  />{" "}
                  <b>Nurse</b>
                </label>
              </div>
              <span className="text-danger" />
            </div>
          </div>
        </div>
      </div>
      <div className="box-footer" style={{ clear: "both" }}>
        <div className="pull-right">
          <button
            type="submit"
            className="btn btn-primary btn-sm"
            fdprocessedid="7z4xg"
          >
            <i className="fa fa-envelope-o" /> Send{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostMessageBody;
