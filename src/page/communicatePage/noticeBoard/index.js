import React from "react";
import NoticeBoard from "../../../componets/communicate/noticeBoard/NoticeBoard";

function NoticeBoardPage() {
  return (
    <div style={{ margin: " 10px 20px" }}>
      <h3
        style={{
          margin: "0 20px",
          color: "black",
        }}
      >
        Notice Board
      </h3>
      <NoticeBoard />
    </div>
  );
}

export default NoticeBoardPage;
