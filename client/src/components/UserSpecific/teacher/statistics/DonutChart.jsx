import React from "react";
import { Doughnut } from "react-chartjs-2";

const DonutChart = ({ data }) => {

  const options = {
    maintainAspectRatio: false,
    cutoutPercentage: 50,
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
          var percentage = Math.floor(currentValue / total);
          return percentage + "%";
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DonutChart;
