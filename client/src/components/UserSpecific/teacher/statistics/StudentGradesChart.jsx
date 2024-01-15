import React from "react";
import { Bar } from "react-chartjs-2";

const StudentGradesChart = () => {
  const gradeData = {
    5: 20,
    6: 30,
    7: 25,
    8: 15,
    9: 10,
    10: 3,
  };

  const data = {
    labels: Object.keys(gradeData),
    datasets: [
      {
        label: "Μέσος Όρος Μαθητών",
        data: Object.values(gradeData),
        backgroundColor: [
          "#4CAF50",
          "#FFC107",
          "#2196F3",
          "#FF5722",
          "#E91E63",
          "#23AA91",
        ],
        borderColor: ["#4CAF50", "#FFC107", "#2196F3", "#FF5722", "#E91E63"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const chartSize = { width: 500, height: 300 };

  return (
    <div style={{ width: 600, height: "400px", overflow: "hidden" }}>
      <h2>Κατανομή Βαθμών</h2>
      <Bar
        data={data}
        options={options}
        width={chartSize.width}
        height={chartSize.height}
      />
    </div>
  );
};

export default StudentGradesChart;
