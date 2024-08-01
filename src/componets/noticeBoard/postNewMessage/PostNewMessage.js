
import PostMessageBody from "./PostMessageBody";

function PostNewMessage() {
  return (
    <div className="content_wrapper_main">
      <div className="card app_wrap">
        <div className="dataTables_wrapper ">
          <div className="row_wrapper app_heading">
            <div className="row">
              <div className="col">
                <h4>Compose New Message</h4>
              </div>
            </div>
          </div>
          <PostMessageBody />
        </div>
      </div>
    </div>
  );
}

export default PostNewMessage;
