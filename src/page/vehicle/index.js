import React from "react";
import Vehicle from "../../componets/transport/vehicle/Vehicle";

function VehiclePage() {
  return (
    <div style={{ margin: "20px" }}>
      <h3
        style={{
          margin: "0 20px",
          color: "black",
        }}
      >
        Vehicle List
      </h3>
      <Vehicle />
    </div>
  );
}

export default VehiclePage;
