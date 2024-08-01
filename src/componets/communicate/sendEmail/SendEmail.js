import SendEmailForm from "./sendEmailForm/SendEmailForm";
import MessageTab from "./messageTab/MessageTab";

function SendEmail() {
  return (
    <div className="card" style={{ padding: "10px" }}>
      <div className="row">
        <div className="col-7">
          <h4 className="mt-2">Send Email</h4>
          <SendEmailForm />
        </div>
        <div className="col-lg-5">
          <MessageTab />
        </div>
      </div>
    </div>
  );
}

export default SendEmail;
