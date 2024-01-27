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
          "#36A2EB",
          "#36A2EB",
          "#36A2EB",
          "#36A2EB",
          "#36A2EB",
          "#36A2EB",
        ],
        borderColor: ["#fff ", "#fff", "#fff", "#fff", "#fff"],
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
    <div style={{ width: 500, height: "300px", overflow: "hidden" }}>
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
