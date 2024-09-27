// @mui material components
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SoftBox from '../../components/SoftBox';

import SoftTypography from "components/SoftTypography";
import SMS from "../sms_dashboard"

// Fast Business Technology React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/1MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Fast Business Technology React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";

// React Router hook
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  const gaugeValue = 57;
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
      <SoftBox mb={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} xl={3}>
          <MiniStatisticsCard
            bgColor="info"
            title={{ text: "", fontWeight: "medium" }}
            count="SMS"
            percentage={{ color: "success", text: "Active" }}
            icon={{ color: "info", component: "sms" }}
            route="/sms_dashboard"
          />
        </Grid>

        <Grid item xs={12} sm={6} xl={3}>
          <MiniStatisticsCard
            bgColor="info"
            title={{ text: "", fontWeight: "medium" }}
            count="Email"
            percentage={{ color: "error", text: "Inactive" }}
            icon={{ color: "info", component: "email" }}
            route="/email"
          />
        </Grid>
        <Grid item xs={12} sm={6} xl={3}>
          <MiniStatisticsCard
            bgColor="info"
            title={{ text: "", fontWeight: "medium" }}
            count="WhatsApp"
            percentage={{ color: "error", text: "Inactive" }}
            icon={{ color: "info", component: <WhatsAppIcon /> }}
            route="/whatsapp-campaigns"
          />
        </Grid>
        <Grid item xs={12} sm={6} xl={3}>
          <MiniStatisticsCard
            bgColor="info"
            title={{ text: "", fontWeight: "medium" }}
            count="Web Design"
            percentage={{ color: "error", text: "Inactive" }}
            icon={{ color: "info", component: "web" }}
            route="/website-design"
          />
        </Grid>
      </Grid>
    </SoftBox>
        <SoftBox mb={3}>
            {/**<Grid item xs={12} lg={7}>
              <BuildByDevelopers />
            </Grid> */}
            <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <WorkWithTheRockets />
            </Grid>
          </Grid>
        </SoftBox>
          
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <ReportsBarChart
                title="Subscribed Services"
                description={
                  <>
                    (<strong>+23%</strong>) than last month
                  </>
                }
                chart={chart}
                items={items}
              />
            </Grid>
            <Grid item xs={12} lg={7}>
              <GradientLineChart
                title="Overall Interaction"
                description={
                  <SoftBox display="flex" alignItems="center">
                    <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className="font-bold">arrow_upward</Icon>
                    </SoftBox>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      4% more{" "}
                      <SoftTypography variant="button" color="text" fontWeight="regular">
                        in 2021
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                }
                height="20.30rem"
                chart={gradientLineChartData}
              />
            </Grid>
          </Grid>
        </SoftBox>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={15}>
              <Projects 
                value1={67}
                value2={42}
                value3={80}
              />
          </Grid>
         
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
