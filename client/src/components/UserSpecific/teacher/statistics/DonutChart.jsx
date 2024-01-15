import React from "react";
import { Doughnut } from "react-chartjs-2";

const DonutChart = () => {
  const data = {
    labels: ["Πέρασαν το Μάθημα", "Κόπηκαν στο Μάθημα", "Δεν Έδωσαν το Μάθημα"],
    datasets: [
      {
        data: [30, 15, 5],
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    cutoutPercentage: 70,
    legend: {
      display: true,
      position: "bottom",
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var total = dataset.data.reduce(function (
            previousValue,
            currentValue
          ) {
            return previousValue + currentValue;
          });
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = Math.floor((currentValue / total) * 100 + 0.5);
          return percentage + "%";
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DonutChart;
