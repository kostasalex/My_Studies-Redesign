import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import styles from "./DoughnutChart.module.css"; // Αναλόγως τη δομή του project σας

const DoughnutChart = ({ passed, failed, noGrade }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let myChart = null;

    const createChart = () => {
      const ctx = chartRef.current.getContext("2d");
      myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Περασμένα", "Κομμένα", "Χωρίς Βαθμό"],
          datasets: [
            {
              data: [passed, failed, noGrade],
              backgroundColor: ["#0d6efd", "#dc3545", "#6c757d"],
            },
          ],
        },
        options: {
          responsive: true,
          // maintainAspectRatio: false, // Αφαιρέστε αυτή τη γραμμή
        },
      });
    };

    // Δημιουργία του γράφου κατά την αρχικοποίηση
    createChart();

    // Καταστροφή του γράφου πριν από κάθε ανανέωση
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [passed, failed, noGrade]);

  return <canvas ref={chartRef} className={styles.doughnutChartCanvas} />;
};

export default DoughnutChart;
