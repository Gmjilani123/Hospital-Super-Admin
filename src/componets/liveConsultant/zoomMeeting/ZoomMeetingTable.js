import React from "react";
import { IoIosVideocam } from "react-icons/io";
function ZoomMeetingTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Meeting Title</th>
            <th>Date</th>
            <th>API Used</th>
            <th>Created By</th>
            <th> Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Heart By Discussion</td>
            <td>09/30/2023 05:30 PM</td>
            <td>Global</td>
            <td>Jason Abbot</td>

            <td>
              <span className="btn btn-warning btn-sm ">Awaited</span>
            </td>
            <td>
              <a href="">
                {" "}
                <span className="btn btn-success btn-sm ">
                  <IoIosVideocam className="fs-5 me-1" />
                  Join
                </span>
              </a>
            </td>
          </tr>

          <tr>
            <td>Heart By Discussion</td>
            <td>09/30/2023 05:30 PM</td>
            <td>Global</td>
            <td>Jason Abbot</td>

            <td>
              <span className="btn btn-warning btn-sm ">Awaited</span>
            </td>
            <td>
              <a href="">
                {" "}
                <span className="btn btn-success btn-sm ">
                  <IoIosVideocam className="fs-5 me-1" />
                  Join
                </span>
              </a>
            </td>
          </tr>

          <tr>
            <td>Heart By Discussion</td>
            <td>09/30/2023 05:30 PM</td>
            <td>Global</td>
            <td>Jason Abbot</td>

            <td>
              <span className="btn btn-warning btn-sm ">Awaited</span>
            </td>
            <td>
              <a href="">
                {" "}
                <span className="btn btn-success btn-sm ">
                  <IoIosVideocam className="fs-5 me-1" />
                  Join
                </span>
              </a>
            </td>
          </tr>

          <tr>
            <td>Heart By Discussion</td>
            <td>09/30/2023 05:30 PM</td>
            <td>Global</td>
            <td>Jason Abbot</td>

            <td>
              <span className="btn btn-warning btn-sm ">Awaited</span>
            </td>
            <td>
              <a href="">
                {" "}
                <span className="btn btn-success btn-sm ">
                  <IoIosVideocam className="fs-5 me-1" />
                  Join
                </span>
              </a>
            </td>
          </tr>

          <tr>
            <td>Heart By Discussion</td>
            <td>09/30/2023 05:30 PM</td>
            <td>Global</td>
            <td>Jason Abbot</td>

            <td>
              <span className="btn btn-warning btn-sm ">Awaited</span>
            </td>
            <td>
              <a href="">
                {" "}
                <span className="btn btn-success btn-sm ">
                  <IoIosVideocam className="fs-5 me-1" />
                  Join
                </span>
              </a>
            </td>
          </tr>

          <tr>
            <td>Heart By Discussion</td>
            <td>09/30/2023 05:30 PM</td>
            <td>Global</td>
            <td>Jason Abbot</td>

            <td>
              <span className="btn btn-warning btn-sm ">Awaited</span>
            </td>
            <td>
              <a href="">
                <span className="btn btn-success btn-sm ">
                  <IoIosVideocam className="fs-5 me-1" />
                  Join
                </span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ZoomMeetingTable;
