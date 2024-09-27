/**
=========================================================
* Fast Business Technology React - v4.0.1
=========================================================

* Product Page: https://www.fastbiztechnologies.com/product/fast-biz-tech-react
* Copyright 2023 Fast Business Technologies (https://www.fastbiztechnologies.com)

Coded by www.fastbiztechnologies.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import React, { useState } from 'react';


import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Card, CardContent, Typography } from '@mui/material';

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import profilesListData from './data/profilesListData';
import PlatformSettings from './components/PlatformSettings';
import ProfileInfoCard from 'examples/Cards/InfoCards/ProfileInfoCard';
import ProfilesList from 'examples/Lists/ProfilesList';
// Fast Business Technology React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";

// Fast Business Technology React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import Invoices from "layouts/billing/components/Invoices";
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";
import PieChart from './data/PieChart';
// Fast Business Technology React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";

// Data
import reportsBarChartData from "layouts/sms_dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/sms_dashboard/data/gradientLineChartData";
import pieChartData from './data/PieChartData';
import BubbleChart from 'examples/Charts/BubbleChart';
import { purple } from "@mui/material/colors";
import generateDemoData from '../sms_dashboard/data/reportsBarChartData';
import generateBubbleChartData from './data/bubbleChartData';
import Transactions from './components/Transactions';

function SMS_Dashboard() {
  const { size } = typography;
  const chartData = reportsBarChartData();
  const gaugeValue = 57;
  const blueColor = 'blue'; // Replace with your desired blue color

  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4} xl={3}>
            <SoftBox mb={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} xl={18}>
                  <BuildByDevelopers />
                </Grid>
              </Grid>
            </SoftBox>
          </Grid>
          <Grid item xs={12} lg={8} xl={9}>
            <Card className="customCard"> {/* Apply custom class */}
              <CardContent>
                <Typography variant="h4" component="h2" gutterBottom>
                  Insights
                </Typography>
                <SoftBox mb={1}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} xl={3}>
                    <MiniStatisticsCard
    count="Campaign"
    number_of_campaigns={34654} // Adding the number_of_campaigns prop
    percentage={{ color: "success", text: "  33%" }} // Include &nbsp; in the percentage text
    icon={{ color: "info", component: "people" }}
/>

                    </Grid>
                    <Grid item xs={12} sm={6} xl={3}>
                      <MiniStatisticsCard
                        count="Recipients"
                        number_of_campaigns={74654} // Adding the number_of_campaigns prop
                        percentage={{ color: "error", text: " 4%" }}
                        icon={{ color: "info", component: "inbox" }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} xl={3}>
                      <MiniStatisticsCard
                        count="Sent"
                        number_of_campaigns={58054} // Adding the number_of_campaigns prop
                        percentage={{ color: "error", text: " 1%" }}
                        icon={{ color: "info", component: "send" }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} xl={3}>
                      <MiniStatisticsCard
                        count="Response"
                        percentage={{ color: "success", text: " 10%" }}
                        number_of_campaigns={14734} // Adding the number_of_campaigns prop
                        icon={{ color: "info", component: "alarm" }}
                      />
                    </Grid>
                  </Grid>
                </SoftBox>
              </CardContent>
            </Card>
          </Grid>  
        </Grid>
        
         
        <Grid container item xs={12} lg={8} xl={12} spacing={3} marginTop={1}>
         <Grid item xs={12} style={{ width: '200%' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Card className="customCard" style={{ width: 'calc(70% - 1.5rem)', marginRight: '1.5rem', height: '600px' }}>
  <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', marginRight: '2rem' }}>
  <Typography variant="h3" component="h2" gutterBottom>
    Credit Usage
  </Typography>
  
</div>


    <Grid container spacing={6} style={{ flex: 1 }}> {/* Added container wrapper and flex: 1 */}
      {/* First grid */}
    
      {/* Second grid */}
      <Grid item xs={12} lg={8} xl={12} spacing={3}>
        <VerticalBarChart
          title="By Campaign"
          description="(+23%) than last month"
          chart={chartData}
          height="410px"
          width="auto"
        />
      </Grid>
    </Grid>
  </CardContent>
</Card>




          <Grid item style={{ width: 'calc(30% - 1.5rem)', marginRight: '1.5rem', height: '290px' }}>
            <Card className="customCard" style={{ width: '100%', height: '100%' }}>
              <CardContent style={{ flex: 1 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                  Credit Report - Monthly
                </Typography>
                <GradientLineChart
                title="Sales Overview"
                description={
                  <SoftBox display="flex" alignItems="center">
                    <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className="font-bold">arrow_upward</Icon>
                    </SoftBox>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      4% more{" "}
                      <SoftTypography variant="button" color="text" fontWeight="regular">
                        this month
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                }
                height="12.25rem"
                width="25rem"
                chart={gradientLineChartData}
              />
              </CardContent>
            </Card>
            <Card className="customCard" style={{ width: '100%', height: '100%', marginTop: '10px' }}>
              <CardContent style={{ flex: 1 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                  Performance Metrics
                </Typography>
                <PieChart 
                    height="200px"
                    width="500px"
                    data={pieChartData} />


              </CardContent>
            </Card>
          </Grid>
        </div>
      </Grid>
    </Grid>
 
    <SoftBox mt={5} mb={3}>
  <Grid container spacing={3}>
    <Grid item xs={12} md={6} xl={4}>
      <PlatformSettings />
    </Grid>
    <Grid item xs={12} md={6} xl={4}> {/* Adjusted md and xl sizes */}
      <Transactions />
    </Grid>
    <Grid item xs={12} md={6} xl={4}> {/* Adjusted md and xl sizes */}
      <ProfilesList title="Blogs & News" profiles={profilesListData} />
    </Grid>
  </Grid>
</SoftBox>



 {/**
        <Grid container spacing={1}>
        <Grid item xs={12} md={6} lg={15}>
              <Projects 
                value1={67}
                value2={42}
                value3={80}
              />
            </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview value={gaugeValue} />
          </Grid>
        </Grid>
        */}
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default SMS_Dashboard;
