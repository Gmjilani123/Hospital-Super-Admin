import { FaAmbulance } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa6";
import DashboardList from "./DashboardList";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState([12, 19, 3, 5, 2, 3]);

  const onChange = (date) => {
    setDate(date);
    // Update chart data based on selected date
    // For example, fetch data from an API or use some logic to change the data
    // setData(newData);
  };

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sample Data",
        data: data,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="content">
      <DashboardList />
      {/*./row*/}
      <div className="row">
        <div
          className="col-lg-2 col-md-3 col-sm-6 col20"
          title="Ambulance Income"
        >
          <div className="info-box">
            <Link to="https://demo.smart-hospital.in/admin/vehicle/getcallambulance">
              <span className="info-box-icon bg-green">
                <FaAmbulance className="fas fa-ambulance" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Ambulance Income</span>
                <span className="info-box-number">$1,248.00</span>
              </div>
            </Link>
          </div>
        </div>
        {/*./col-lg-2*/}
      </div>
      {/*./row*/}
      <div className="row"></div>
      {/*./row*/}
      <div className="row">
        <div className="col-lg-9 col-md-9 col-sm-12 col80">
          <div>
            <Calendar onChange={onChange} value={date} />
            <Bar data={chartData} />
          </div>
        </div>
        {/*./col-lg-9*/}
        <div className="col-lg-3 col-md-3 col-sm-12 col20">
          <div className="info-box">
            <Link to="/admin/Staff-Directory">
              <span className="info-box-icon bg-yellow">
                <FaUserSecret className="fas fa-user-secret" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Admin</span>
                <span className="info-box-number">1</span>
              </div>
            </Link>
          </div>

          <div className="info-box">
            <Link to="/admin/Staff-Directory">
              <span className="info-box-icon bg-yellow">
                <FaUserSecret className="fas fa-user-secret" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Accountant</span>
                <span className="info-box-number">1</span>
              </div>
            </Link>
          </div>
          <div className="info-box">
            <Link to="/admin/Staff-Directory">
              <span className="info-box-icon bg-yellow">
                <FaUserSecret className="fas fa-user-secret" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Doctor</span>
                <span className="info-box-number">4</span>
              </div>
            </Link>
          </div>
          <div className="info-box">
            <Link to="/admin/Staff-Directory">
              <span className="info-box-icon bg-yellow">
                <FaUserSecret className="fas fa-user-secret" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Pharmacist</span>
                <span className="info-box-number">1</span>
              </div>
            </Link>
          </div>
          <div className="info-box">
            <Link to="/admin/Staff-Directory">
              <span className="info-box-icon bg-yellow">
                <FaUserSecret className="fas fa-user-secret" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Pathologist</span>
                <span className="info-box-number">1</span>
              </div>
            </Link>
          </div>
          <div className="info-box">
            <Link to="/admin/Staff-Directory">
              <span className="info-box-icon bg-yellow">
                <FaUserSecret className="fas fa-user-secret" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Radiologist</span>
                <span className="info-box-number">1</span>
              </div>
            </Link>
          </div>
          <div className="info-box">
            <Link to="/admin/Staff-Directory">
              <span className="info-box-icon bg-yellow">
                <FaUserSecret className="fas fa-user-secret" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Super Admin</span>
                <span className="info-box-number">1</span>
              </div>
            </Link>
          </div>
          <div className="info-box">
            <Link to="/admin/Staff-Directory">
              <span className="info-box-icon bg-yellow">
                <FaUserSecret className="fas fa-user-secret" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Receptionist</span>
                <span className="info-box-number">1</span>
              </div>
            </Link>
          </div>
          <div className="info-box">
            <Link to="/admin/Staff-Directory">
              <span className="info-box-icon bg-yellow">
                <FaUserSecret className="fas fa-user-secret" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Nurse</span>
                <span className="info-box-number">2</span>
              </div>
            </Link>
          </div>
        </div>
        {/*./col-lg-3*/}
      </div>
      {/*./row*/}
    </section>
  );
}

export default Dashboard;
