import React, { useState } from "react";
import JoditEditor from "jodit-react";
function EditMessageBody() {
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
          {/* <div className="form-group">
            <label>Message</label>
            <span className="req"> *</span>
            <ul className="wysihtml5-toolbar" style={{}}>
              <li className="dropdown">
                <a
                  className="btn btn-default dropdown-toggle "
                  data-toggle="dropdown"
                >
                  <span className="glyphicon glyphicon-font" />
                  <span className="current-font">Normal text</span>
                  <b className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      data-wysihtml5-command="formatBlock"
                      data-wysihtml5-command-value="p"
                      tabIndex={-1}
                      href="javascript:;"
                      unselectable="on"
                    >
                      Normal text
                    </a>
                  </li>
                  <li>
                    <a
                      data-wysihtml5-command="formatBlock"
                      data-wysihtml5-command-value="h1"
                      tabIndex={-1}
                      href="javascript:;"
                      unselectable="on"
                    >
                      Heading 1
                    </a>
                  </li>
                  <li>
                    <a
                      data-wysihtml5-command="formatBlock"
                      data-wysihtml5-command-value="h2"
                      tabIndex={-1}
                      href="javascript:;"
                      unselectable="on"
                    >
                      Heading 2
                    </a>
                  </li>
                  <li>
                    <a
                      data-wysihtml5-command="formatBlock"
                      data-wysihtml5-command-value="h3"
                      tabIndex={-1}
                      href="javascript:;"
                      unselectable="on"
                    >
                      Heading 3
                    </a>
                  </li>
                  <li>
                    <a
                      data-wysihtml5-command="formatBlock"
                      data-wysihtml5-command-value="h4"
                      tabIndex={-1}
                      href="javascript:;"
                      unselectable="on"
                    >
                      Heading 4
                    </a>
                  </li>
                  <li>
                    <a
                      data-wysihtml5-command="formatBlock"
                      data-wysihtml5-command-value="h5"
                      tabIndex={-1}
                      href="javascript:;"
                      unselectable="on"
                    >
                      Heading 5
                    </a>
                  </li>
                  <li>
                    <a
                      data-wysihtml5-command="formatBlock"
                      data-wysihtml5-command-value="h6"
                      tabIndex={-1}
                      href="javascript:;"
                      unselectable="on"
                    >
                      Heading 6
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div className="btn-group">
                  <a
                    className="btn  btn-default"
                    data-wysihtml5-command="bold"
                    title="CTRL+B"
                    tabIndex={-1}
                    href="javascript:;"
                    unselectable="on"
                  >
                    Bold
                  </a>
                  <a
                    className="btn  btn-default"
                    data-wysihtml5-command="italic"
                    title="CTRL+I"
                    tabIndex={-1}
                    href="javascript:;"
                    unselectable="on"
                  >
                    Italic
                  </a>
                  <a
                    className="btn  btn-default"
                    data-wysihtml5-command="underline"
                    title="CTRL+U"
                    tabIndex={-1}
                    href="javascript:;"
                    unselectable="on"
                  >
                    Underline
                  </a>
                  <a
                    className="btn  btn-default"
                    data-wysihtml5-command="small"
                    title="CTRL+S"
                    tabIndex={-1}
                    href="javascript:;"
                    unselectable="on"
                  >
                    Small
                  </a>
                </div>
              </li>
              <li>
                <a
                  className="btn  btn-default"
                  data-wysihtml5-command="formatBlock"
                  data-wysihtml5-command-value="blockquote"
                  data-wysihtml5-display-format-name="false"
                  tabIndex={-1}
                  href="javascript:;"
                  unselectable="on"
                >
                  <span className="glyphicon glyphicon-quote" />
                </a>
              </li>
              <li>
                <div className="btn-group">
                  <a
                    className="btn  btn-default"
                    data-wysihtml5-command="insertUnorderedList"
                    title="Unordered list"
                    tabIndex={-1}
                    href="javascript:;"
                    unselectable="on"
                  >
                    <span className="glyphicon glyphicon-list" />
                  </a>
                  <a
                    className="btn  btn-default"
                    data-wysihtml5-command="insertOrderedList"
                    title="Ordered list"
                    tabIndex={-1}
                    href="javascript:;"
                    unselectable="on"
                  >
                    <span className="glyphicon glyphicon-th-list" />
                  </a>
                  <a
                    className="btn  btn-default"
                    data-wysihtml5-command="Outdent"
                    title="Outdent"
                    tabIndex={-1}
                    href="javascript:;"
                    unselectable="on"
                  >
                    <span className="glyphicon glyphicon-indent-right" />
                  </a>
                  <a
                    className="btn  btn-default"
                    data-wysihtml5-command="Indent"
                    title="Indent"
                    tabIndex={-1}
                    href="javascript:;"
                    unselectable="on"
                  >
                    <span className="glyphicon glyphicon-indent-left" />
                  </a>
                </div>
              </li>
              <li>
                <div
                  className="bootstrap-wysihtml5-insert-link-modal modal fade"
                  data-wysihtml5-dialog="createLink"
                >
                  <div className="modal-dialog ">
                    <div className="modal-content">
                      <div className="modal-header">
                        <a className="close" data-dismiss="modal">
                          ×
                        </a>
                        <h3>Insert link</h3>
                      </div>
                      <div className="modal-body">
                        <div className="form-group">
                          <input
                            defaultValue="http://"
                            className="bootstrap-wysihtml5-insert-link-url form-control"
                            data-wysihtml5-dialog-field="href"
                          />
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              className="bootstrap-wysihtml5-insert-link-target"
                              defaultChecked
                            />
                            Open link in new window
                          </label>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <a
                          className="btn btn-default"
                          data-dismiss="modal"
                          data-wysihtml5-dialog-action="cancel"
                          href="#"
                        >
                          Cancel
                        </a>
                        <a
                          href="#"
                          className="btn btn-primary"
                          data-dismiss="modal"
                          data-wysihtml5-dialog-action="save"
                        >
                          Insert link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="btn  btn-default"
                  data-wysihtml5-command="createLink"
                  title="Insert link"
                  tabIndex={-1}
                  href="javascript:;"
                  unselectable="on"
                >
                  <span className="glyphicon glyphicon-share" />
                </a>
              </li>
            </ul>
            <textarea
              id="compose-textarea"
              name="message"
              className="form-control"
              style={{ height: 300, display: "none" }}
              autoComplete="off"
              defaultValue={
                "                                        <p>\n\nThe purpose of blood donation camp is to select a suitable donor whose blood is safe to the recipients and who himself shall not in any way be harmed by blood donation.\n\n<br></p>                                    "
              }
            />
            <input type="hidden" name="_wysihtml5_mode" defaultValue={1} />
            <iframe
              className="wysihtml5-sandbox"
              security="restricted"
              allowTransparency="true"
              frameBorder={0}
              width={0}
              height={0}
              marginWidth={0}
              marginHeight={0}
              style={{
                display: "block",
                backgroundColor: "rgb(255, 255, 255)",
                borderCollapse: "separate",
                borderColor: "rgb(210, 214, 222)",
                borderStyle: "solid",
                borderWidth: 1,
                clear: "none",
                float: "none",
                margin: 0,
                outline: "rgb(85, 85, 85) none 0px",
                outlineOffset: 0,
                padding: "0px 10px",
                position: "static",
                inset: "auto",
                zIndex: "auto",
                verticalAlign: "baseline",
                textAlign: "start",
                boxSizing: "border-box",
                boxShadow: "none",
                borderRadius: 0,
                width: "100%",
                height: 300,
              }}
            />
            <span className="text-danger" />
          </div> */}

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

export default EditMessageBody;
