import React from "react";
import SendSmsForm from "./sendSmsForm/SendSmsForm";
import SendSmsTab from "./sendSmsTab/SendSmsTab";

function SendSms() {
  return (
    <div className="card" style={{ padding: "10px" }}>
      <div className="row">
        <div className="col-7">
          <h4 className="mt-2">Send SMS</h4>
          <SendSmsForm />
         
        </div>
        <div className="col-lg-5">
          <SendSmsTab />
        </div>
      </div>
    </div>
  );
}

export default SendSms;
