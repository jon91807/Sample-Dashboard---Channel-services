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

// @mui/material/Grid
import Grid from "@mui/material/Grid";

// Fast Business Technology React components
import SoftBox from "components/SoftBox";

// Fast Business Technology React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Billing page components
import PaymentMethod from "layouts/sms_dashboard/sender_details/components/PaymentMethod";

function Billing() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox mb={1.5}>
          <Grid
            container
            spacing={3}
            justifyContent="center" // Centers horizontally
            alignItems="center" // Centers vertically
          >
            <Grid item xs={12} sm={6} md={4} lg={11.8}>
              <PaymentMethod />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox my={3}>
          {/* Additional content could be added here */}
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
