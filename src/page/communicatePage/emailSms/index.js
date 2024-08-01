import EmailSms from "../../../componets/communicate/emailSms/EmailSms";

function EmialSmsPage() {
  return (
    <div style={{ margin: " 10px 20px" }}>
      <h3
        style={{
          margin: "0 20px",
          color: "black",
        }}
      >
        Email / SMS Log
      </h3>
      <EmailSms />
    </div>
  );
}

export default EmialSmsPage;
