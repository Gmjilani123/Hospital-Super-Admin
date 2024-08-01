import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { PiEyeSlashLight } from "react-icons/pi";
import { FaStar, FaStarHalf } from "react-icons/fa";

function TeachersRating() {
  return (
    <div>
      <div style={{ margin: "20px 0", overflow: "auto" }}>
        <table className=" table">
          <thead className="border-top">
            <tr>
              <th>Staff ID</th>
              <th>Name </th>
              <th>Rating </th>
              <th>Comment </th>

              <th>Status</th>
              <th>Student Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9002</td>
              <td>
                <a href="">Shivam Verma ( 9002 )</a>
              </td>
              <td>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStarHalf />
                </span>
              </td>

              <td> Motivates students to progress</td>

              <td>
                <span className="btn btn-success  btn-sm ">Approve</span>
              </td>
              <td>Saurabh Shah ( 908875 )</td>
              <td>
                <div className="d-flex">
                  <div>
                    <button
                      type="button"
                      className="btn btn-danger btn-icon btn-circle btn-sm ms-1"
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>9002</td>
              <td>
                <a href="">Shivam Verma ( 9002 )</a>
              </td>
              <td>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStarHalf />
                </span>
              </td>

              <td>Good</td>

              <td>
                <span className="btn btn-success  btn-sm ">Approve</span>
              </td>
              <td>Glen Stark ( 18005 )</td>
              <td>
                <div className="d-flex">
                  <div>
                    <button
                      type="button"
                      className="btn btn-danger btn-icon btn-circle btn-sm ms-1"
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>9002</td>
              <td>
                <a href="">Shivam Verma ( 9002 )</a>
              </td>
              <td>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStarHalf />
                </span>
              </td>

              <td>Excellent</td>

              <td>
                <span className="btn btn-success  btn-sm ">Approve</span>
              </td>
              <td>Robin Peterson ( 18002 )</td>
              <td>
                <div className="d-flex">
                  <div>
                    <button
                      type="button"
                      className="btn btn-danger btn-icon btn-circle btn-sm ms-1"
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>9002</td>
              <td>
                <a href="">Shivam Verma ( 9002 )</a>
              </td>
              <td>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStarHalf />
                </span>
              </td>

              <td>no comment</td>

              <td>
                <span className="btn btn-warning  btn-sm ">Pending</span>
              </td>
              <td>Edward Thomas ( 18001 )</td>
              <td>
                <div className="d-flex">
                  <div>
                    <button
                      type="button"
                      className="btn btn-danger btn-icon btn-circle btn-sm ms-1"
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>900002301</td>
              <td>
                <a href="">Jason Sharlton ( 900002301 )</a>
              </td>
              <td>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
              </td>

              <td>
                Solidifies a positive relationship or connection with your
                students
              </td>

              <td>
                <span className="btn btn-success  btn-sm ">Approve</span>
              </td>
              <td>Saurabh Shah ( 908875 )</td>
              <td>
                <div className="d-flex">
                  <div>
                    <button
                      type="button"
                      className="btn btn-danger btn-icon btn-circle btn-sm ms-1"
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>9002</td>
              <td>
                <a href="">Shivam Verma ( 9002 )</a>
              </td>
              <td>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStarHalf />
                </span>
              </td>

              <td> Motivates students to progress</td>

              <td>
                <span className="btn btn-success  btn-sm ">Approve</span>
              </td>
              <td>Saurabh Shah ( 908875 )</td>
              <td>
                <div className="d-flex">
                  <div>
                    <button
                      type="button"
                      className="btn btn-danger btn-icon btn-circle btn-sm ms-1"
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TeachersRating;
