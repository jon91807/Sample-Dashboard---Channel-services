import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StockIcon from '@mui/icons-material/TrendingUp'; // Assuming you have a relevant stock icon

const reportsBarChartData = {
  chart: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: { label: "Sales", data: [450, 200, 100, 220, 500, 100, 400, 230, 500] },
  },
  items: [
    {
      icon: { color: "primary", component: "sms" },
      label: "SMS",
      progress: { content: "3K", percentage: 30 },
    },
    {
      icon: { color: "info", component: "email" },
      label: "Email",
      progress: { content: "2.1k", percentage: 15 },
    },
    {
      icon: { color: "success", component: <WhatsAppIcon /> },
      label: "WhatsApp",
      progress: { content: "6.44k", percentage: 60 },
    },
    {
      icon: { color: "error", component: <StockIcon /> },
      label: "Sales Dials",
      progress: { content: "1k", percentage: 10 },
    },
  ],
};

export default reportsBarChartData;
