export const tspdChartData = {
    type: "line",
    data: {
      labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      datasets: [
        {
          label: "Total Supply per Day",
          data: [0, 0, 1, 2, 79, 82, 27, 14],
          backgroundColor: "transparent",
          borderColor: "#ffc632",
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
};

export default tspdChartData;