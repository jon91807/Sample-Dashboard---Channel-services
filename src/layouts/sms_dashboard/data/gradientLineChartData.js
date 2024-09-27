const creditReportMonthlyData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Credit Usage",
      color: "primary",
      data: [150, 160, 170, 180, 190, 200, 180, 170, 160, 170, 180, 190],
    },
    {
      label: "Expenses",
      color: "error",
      data: [120, 130, 140, 150, 160, 170, 180, 190, 200, 190, 180, 170],
    },
  ],
};

export default creditReportMonthlyData;
