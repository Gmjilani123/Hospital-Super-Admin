import React from "react";
import EditMessageBody from "./EditMessageBody";

function EditMessage() {
  return (
    <div className="content_wrapper_main">
      <div className="card app_wrap">
        <div className="dataTables_wrapper ">
          <div className="row_wrapper app_heading">
            <div className="row">
              <div className="col">
                <h4>Edit Message</h4>
              </div>
            </div>
          </div>
          <EditMessageBody />
        </div>
      </div>
    </div>
  );
}

export default EditMessage;
