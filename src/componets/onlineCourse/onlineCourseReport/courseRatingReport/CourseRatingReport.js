import { FaEye, FaStar, FaStarHalf } from "react-icons/fa";
import { Link } from "react-router-dom";
function CourseRatingReport() {
  return (
    <>
      <div className="card">
        <table
          className="datatables-users table dataTable no-footer dtr-column"
          id="DataTables_Table_0"
          aria-describedby="DataTables_Table_0_info"
        >
          <thead className="border-top">
            <tr>
              <th>Title</th>
              <th>Class</th>
              <th>Rating</th>
              <th>Review Count </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A Course on Modern History </td>

              <td>Class 4 (A)</td>
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
              <td>3</td>
              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/CourseRating-report-details"
                      className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                      style={{ backgroundColor: "#2298C1" }}
                    >
                      <FaEye />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Indian Economy</td>

              <td>Class 4 (A)</td>
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
              <td>3</td>
              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/CourseRating-report-details"
                      className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                      style={{ backgroundColor: "#2298C1" }}
                    >
                      <FaEye />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Indias Geography</td>

              <td>Class 3 (A)</td>
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
                <span>
                  <FaStar />
                </span>
              </td>
              <td>6</td>
              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/CourseRating-report-details"
                      className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                      style={{ backgroundColor: "#2298C1" }}
                    >
                      <FaEye />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Web Design Courses </td>

              <td>Class 3 (A)</td>
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
                {/* <span>
                <FaStarHalf />
              </span> */}
              </td>
              <td>2</td>
              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/CourseRating-report-details"
                      className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                      style={{ backgroundColor: "#2298C1" }}
                    >
                      <FaEye />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Motivation Course for students</td>

              <td>Class 3 (A)</td>
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
              <td>4</td>
              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/CourseRating-report-details"
                      className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                      style={{ backgroundColor: "#2298C1" }}
                    >
                      <FaEye />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Personal Development Course</td>

              <td>Class 3 (A)</td>
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
              <td>3</td>
              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/CourseRating-report-details"
                      className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                      style={{ backgroundColor: "#2298C1" }}
                    >
                      <FaEye />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Communication Skills course</td>

              <td>Class 3 (A)</td>
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
              <td>5</td>
              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to={`#`}
                      className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                      style={{ backgroundColor: "#2298C1" }}
                    >
                      <FaEye />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CourseRatingReport;
