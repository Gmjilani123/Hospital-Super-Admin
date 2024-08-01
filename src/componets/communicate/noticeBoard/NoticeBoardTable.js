import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { PiCalendarCheckLight, PiCalendarDotsThin } from "react-icons/pi";
import { TiUser } from "react-icons/ti";
import { FaUserSecret } from "react-icons/fa6";

import "react-quill/dist/quill.snow.css";

function NoticeBoardTable() {
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: "Staff Meeting",
      content:
        "A meeting attended by the members of staff of a company, school, etc, to discuss issues relating to the running of the company, school, etc.",

      accountant: "Accountant",
      student: "Student",
      parent: "Parent",
      icon: <FaUserSecret />,
      user: <TiUser />,
    },
    {
      id: 2,
      title: "EMPLOYMENT ASSISTANCE",
      content: "Details about employment assistance.",
    },
    {
      id: 3,
      title: "Fees Reminder",
      content: "Details about the fees reminder.",
    },
    {
      id: 4,
      title: "Student Health Check-up",
      content: "Details about the student health check-up.",
    },
    {
      id: 5,
      title: "New Academic Session For Admission (2024-25)",
      content: "Details about the new academic session.",
    },
  ]);

  const [selectedNotice, setSelectedNotice] = useState(null);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleNoticeClick = (notice) => {
    setSelectedNotice(notice);
    setShowOffcanvas(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this notice?")) {
      setNotices(notices.filter((notice) => notice.id !== id));
    }
  };

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
    setSelectedNotice(null);
  };

  return (
    <div style={{ margin: "20px 0", overflow: "auto" }}>
      <table className="table">
        <thead className="border-top">
          <tr>
            <th>Notice</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((notice) => (
            <tr key={notice.id}>
              <td>
                <a href="#!" onClick={() => handleNoticeClick(notice)} className="d-block">
                  <AiOutlineMail className="me-2 fs-4" />
                  {notice.title}
                </a>
              </td>
              <td>
                <div className="d-flex justify-content-center">
                  <div>
                    <Link
                      to="/admin/NoticeBoard/Edit-Notice"
                      className="btn btn-primary btn-icon btn-circle btn-sm"
                    >
                      <EditIcon />
                    </Link>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="btn btn-danger btn-icon btn-circle btn-sm ms-1"
                      onClick={() => handleDelete(notice.id)}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Offcanvas
        show={showOffcanvas}
        onHide={handleCloseOffcanvas}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Notice Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="body_content">
            {selectedNotice && (
              <>
                <h5 className="mb-3">{selectedNotice.title}</h5>
                <p>{selectedNotice.content}</p>
              </>
            )}
          </div>

          <div className="list_group">
            <ul className="list_item">
              <li className="fs-5">
                <span>
                  <PiCalendarCheckLight className="fs-4 me-2" />
                </span>
                Publish Date:06/25/2024
              </li>

              <li className="fs-5">
                <span>
                  <PiCalendarDotsThin className="fs-4 me-2" />
                </span>
                Notice Date: 06/21/2024
              </li>

              <li className="fs-5">
                <span>
                  <TiUser className="fs-4 me-2" />
                </span>
                Created By:Joe Black (9000)
              </li>
            </ul>
          </div>

          <div className="py-3">
            <h4>Message To</h4>

            {selectedNotice && (
              <>
                <span className="d-flex">
                  <div className="d-flex">
                    <h5 className="me-1">{selectedNotice.icon}</h5>
                    <h5 className="fs-5">{selectedNotice.accountant}</h5>
                  </div>
                  <div className="d-flex ml-3">
                    <h5 className="me-1 fs-5">{selectedNotice.user}</h5>
                    <h5 className="fs-5">{selectedNotice.student}</h5>
                  </div>

                  <div className="d-flex ml-3">
                    <h5 className="me-1 fs-5">{selectedNotice.user}</h5>
                    <h5 className="fs-5">{selectedNotice.parent}</h5>
                  </div>
                </span>
              </>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default NoticeBoardTable;
