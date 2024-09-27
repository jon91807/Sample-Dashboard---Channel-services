// pieChartData.js

const getPieChartData = () => {
    return {
      labels: ["Your Performance", "Competitors' Performance"],
      datasets: [
        {
          label: "Performance Comparison",
          data: [70, 30], // You can replace these values with actual performance data
          backgroundColor: ["#3f51b5", "#f50057"], // You can choose colors for the pie chart
        },
      ],
    };
  };
  
  export default getPieChartData;
  