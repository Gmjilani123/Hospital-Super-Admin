import React from "react";

import img2 from "../../../../../assets/images/staff-img/shivam.jpg";
import img3 from "../../../../../assets/images/staff-img/2.jpg";
import img4 from "../../../../../assets/images/staff-img/4.jpg";
import img5 from "../../../../../assets/images/staff-img/5.jpg";
import img6 from "../../../../../assets/images/staff-img/6.jpg";
import img7 from "../../../../../assets/images/staff-img/7.jpg";
import img8 from "../../../../../assets/images/staff-img/8.jpg";

function CardView() {
  return (
    <div className="row">
      <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12">
        <div className="staffinfo-box">
          <div className="staffleft-box">
            <img src="https://demo.smart-school.in/uploads/staff_images/1704266933-42176155365950cb5d254f!1683100897-1103622616645214e13939f!1 (1).jpg?1717661444" />
          </div>
          <div className="staffleft-content">
            <h5>
              <span
                data-toggle="tooltip"
                title="Name"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Joe Black
              </span>
            </h5>
            <p>
              <font
                data-toggle="tooltip"
                title="Employee Id"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                9000
              </font>
            </p>
            <p>
              <font
                data-toggle="tooltip"
                title="Contact Number"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                6545645645
              </font>
            </p>
            <p>
              <font
                data-toggle="tooltip"
                title="Location"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Ground Floor,
              </font>
              <font
                data-toggle="tooltip"
                title="Department"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                {" "}
                Admin
              </font>
            </p>
            <p className="staffsub">
              <span
                data-toggle="tooltip"
                title="Role"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing"
              >
                Super Admin
              </span>{" "}
              <span
                data-toggle="tooltip"
                title="Designation"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Technical Head
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12">
        <div className="staffinfo-box">
          <div className="staffleft-box">
            <img src={img2} />
          </div>
          <div className="staffleft-content">
            <h5>
              <span
                data-toggle="tooltip"
                title="Name"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Shivam Verma
              </span>
            </h5>
            <p>
              <font
                data-toggle="tooltip"
                title="Employee Id"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                9002
              </font>
            </p>
            <p>
              <font
                data-toggle="tooltip"
                title="Contact Number"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                96955645645
              </font>
            </p>
            <p>
              <font
                data-toggle="tooltip"
                title="Location"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                1st Floor,
              </font>
              <font
                data-toggle="tooltip"
                title="Department"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Acadmic
              </font>
            </p>
            <p className="staffsub">
              <span
                data-toggle="tooltip"
                title="Role"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing"
              >
                Teacher
              </span>{" "}
              <span
                data-toggle="tooltip"
                title="Designation"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Faculty
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12">
        <div className="staffinfo-box">
          <div className="staffleft-box">
            <img src={img3} />
          </div>
          <div className="staffleft-content">
            <h5>
              <span
                data-toggle="tooltip"
                title="Name"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Brandon Heart
              </span>
            </h5>
            <p>
              <font
                data-toggle="tooltip"
                title="Employee Id"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                9006
              </font>
            </p>
            <p>
              <font
                data-toggle="tooltip"
                title="Contact Number"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                6545645645
              </font>
            </p>
            <p>
              <font
                data-toggle="tooltip"
                title="Location"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                2nd Floor Library,
              </font>
              <font
                data-toggle="tooltip"
                title="Department"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                {" "}
                Librarian
              </font>
            </p>
            <p className="staffsub">
              <span
                data-toggle="tooltip"
                title="Role"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing"
              >
                Librarian
              </span>{" "}
              <span
                data-toggle="tooltip"
                title="Designation"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Librarian
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12">
        <div className="staffinfo-box">
          <div className="staffleft-box">
            <img src={img4} />
          </div>
          <div className="staffleft-content">
            <h5>
              <span
                data-toggle="tooltip"
                title="Name"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Joe Black
              </span>
            </h5>
            <p>
              <font
                data-toggle="tooltip"
                title="Employee Id"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                9000
              </font>
            </p>
            <p>
              <font
                data-toggle="tooltip"
                title="Contact Number"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                6545645645
              </font>
            </p>
            <p>
              <font
                data-toggle="tooltip"
                title="Location"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Ground Floor,
              </font>
              <font
                data-toggle="tooltip"
                title="Department"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                {" "}
                Admin
              </font>
            </p>
            <p className="staffsub">
              <span
                data-toggle="tooltip"
                title="Role"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing"
              >
                Super Admin
              </span>{" "}
              <span
                data-toggle="tooltip"
                title="Designation"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Technical Head
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12">
        <div className="staffinfo-box">
          <div className="staffleft-box">
            <img src={img5} />
          </div>
          <div className="staffleft-content">
            <h5>
              <span
                data-toggle="tooltip"
                title="Name"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Joe Black
              </span>
            </h5>
            <p>
              <font
                data-toggle="tooltip"
                title="Employee Id"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                9000
              </font>
            </p>
            <p>
              <font
                data-toggle="tooltip"
                title="Contact Number"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                6545645645
              </font>
            </p>
            <p>
              <font
                data-toggle="tooltip"
                title="Location"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Ground Floor,
              </font>
              <font
                data-toggle="tooltip"
                title="Department"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                {" "}
                Admin
              </font>
            </p>
            <p className="staffsub">
              <span
                data-toggle="tooltip"
                title="Role"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing"
              >
                Super Admin
              </span>{" "}
              <span
                data-toggle="tooltip"
                title="Designation"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Technical Head
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12">
        <div className="staffinfo-box">
          <div className="staffleft-box">
            <img src={img6} />
          </div>
          <div className="staffleft-content">
            <h5>
              <span
                data-toggle="tooltip"
                title="Name"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Joe Black
              </span>
            </h5>
            <p>
              <font
                data-toggle="tooltip"
                title="Employee Id"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                9000
              </font>
            </p>
            <p>
              <font
                data-toggle="tooltip"
                title="Contact Number"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                6545645645
              </font>
            </p>
            <p>
              <font
                data-toggle="tooltip"
                title="Location"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Ground Floor,
              </font>
              <font
                data-toggle="tooltip"
                title="Department"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                {" "}
                Admin
              </font>
            </p>
            <p className="staffsub">
              <span
                data-toggle="tooltip"
                title="Role"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing"
              >
                Super Admin
              </span>{" "}
              <span
                data-toggle="tooltip"
                title="Designation"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Technical Head
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12">
        <div className="staffinfo-box">
          <div className="staffleft-box">
            <img src={img7} />
          </div>
          <div className="staffleft-content">
            <h5>
              <span
                data-toggle="tooltip"
                title="Name"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Joe Black
              </span>
            </h5>
            <p>
              <font
                data-toggle="tooltip"
                title="Employee Id"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                9000
              </font>
            </p>
            <p>
              <font
                data-toggle="tooltip"
                title="Contact Number"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                6545645645
              </font>
            </p>
            <p>
              <font
                data-toggle="tooltip"
                title="Location"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Ground Floor,
              </font>
              <font
                data-toggle="tooltip"
                title="Department"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                {" "}
                Admin
              </font>
            </p>
            <p className="staffsub">
              <span
                data-toggle="tooltip"
                title="Role"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing"
              >
                Super Admin
              </span>{" "}
              <span
                data-toggle="tooltip"
                title="Designation"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Technical Head
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12">
        <div className="staffinfo-box">
          <div className="staffleft-box">
            <img src={img8} />
          </div>
          <div className="staffleft-content">
            <h5>
              <span
                data-toggle="tooltip"
                title="Name"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Joe Black
              </span>
            </h5>
            <p>
              <font
                data-toggle="tooltip"
                title="Employee Id"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                9000
              </font>
            </p>
            <p>
              <font
                data-toggle="tooltip"
                title="Contact Number"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                6545645645
              </font>
            </p>
            <p>
              <font
                data-toggle="tooltip"
                title="Location"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Ground Floor,
              </font>
              <font
                data-toggle="tooltip"
                title="Department"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                {" "}
                Admin
              </font>
            </p>
            <p className="staffsub">
              <span
                data-toggle="tooltip"
                title="Role"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing"
              >
                Super Admin
              </span>{" "}
              <span
                data-toggle="tooltip"
                title="Designation"
                data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing..."
              >
                Technical Head
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardView;
