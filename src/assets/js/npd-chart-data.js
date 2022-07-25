
  export const npdChartData = {
    type: "bar",
    data: {
      labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      datasets: [
        {
          label: "Net per Day",
          data: [22, 23, 1, 50, 79, 82, 27, 14, 2, 55],
          backgroundColor: "RGB(236, 169, 69)",
          borderColor: "#eca945",
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

  export default npdChartData;