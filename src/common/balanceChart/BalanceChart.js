import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const CreditChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create new chart instance
    chartInstanceRef.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Used Credit", "Balance Credit"],
        datasets: [
          {
            data: [1553, 21553],
            backgroundColor: ["#ff6384", "#36a2eb"],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="col-lg-4 col-md-4 col-sm-12">
      <div className="chart-responsive text-center">
        <div className="chart">
          <canvas
            ref={chartRef}
            style={{ height: "150px", width: "152px" }}
          ></canvas>
        </div>
        <p className="font12 mb0 font-medium text-black">Credit Limit: $20000</p>
        <p className="font12 mb0 font-medium text-danger">
          Used Credit Limit: $-1553
        </p>
        <p className="font12 mb0 font-medium text-success">
          Balance Credit Limit: $21553
        </p>
      </div>
    </div>
  );
};

export default CreditChart;
