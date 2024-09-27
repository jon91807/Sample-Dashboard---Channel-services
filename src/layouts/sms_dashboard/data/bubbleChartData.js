const generateBubbleChartData = () => {
  const labels = ["Bubble 1", "Bubble 2", "Bubble 3", "Bubble 4", "Bubble 5"];
  const datasets = [
    {
      label: "Dataset 1",
      data: [
        { x: 10, y: 20, r: 30 },
        { x: 15, y: 25, r: 35 },
        { x: 20, y: 30, r: 40 },
        { x: 25, y: 35, r: 45 },
        { x: 30, y: 40, r: 50 },
      ],
      color: "primary", // color key is used to determine background color
    },
    {
      label: "Dataset 2",
      data: [
        { x: 35, y: 45, r: 55 },
        { x: 40, y: 50, r: 60 },
        { x: 45, y: 55, r: 65 },
        { x: 50, y: 60, r: 70 },
        { x: 55, y: 65, r: 75 },
      ],
      color: "secondary", // color key is used to determine background color
    },
  ];

  return { labels, datasets };
};

export default generateBubbleChartData;
