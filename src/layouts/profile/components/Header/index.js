import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Cube from "examples/Icons/Cube";
import Settings from "examples/Icons/Settings";
import breakpoints from "assets/theme/base/breakpoints";
import burceMars from "assets/images/prashant_profilepic.jpeg";

function Header() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  useEffect(() => {
    const handleTabsOrientation = () => {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    };

    window.addEventListener("resize", handleTabsOrientation);
    handleTabsOrientation();

    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, []);

  return (
    <SoftBox position="relative">
      <DashboardNavbar /> {/* Navbar is not impacted by the margin */}
      
      <SoftBox ml={0} mt={2}> {/* Left margin added here, not affecting the navbar */}
        <Card
          sx={{
            backdropFilter: `saturate(200%) blur(30px)`,
            backgroundColor: ({ functions: { rgba }, palette: { white } }) => rgba(white.main, 0.8),
            boxShadow: ({ boxShadows: { navbarBoxShadow } }) => navbarBoxShadow,
            position: "relative",
            mt: 7,
            mx: 1.5,
            py: 2,
            px: 2,
            maxWidth: "100%", // Optional, restricts maximum width
          }}
        >
          <Grid container spacing={3} alignItems="center"> {/* Grid configuration */}
            <Grid item>
              <SoftAvatar
                src={burceMars}
                alt="profile-image"
                variant="rounded"
                size="xl"
                shadow="sm"
              />
            </Grid>
            <Grid item>
              <SoftBox height="100%" mt={0.5} lineHeight={1}>
                <SoftTypography variant="h5" fontWeight="medium">
                  Yash Kumar
                </SoftTypography>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                  Project Manager
                </SoftTypography>
              </SoftBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
              <AppBar position="static">
                <Tabs
                  orientation={tabsOrientation}
                  value={tabValue}
                  onChange={handleSetTabValue}
                  sx={{ background: "transparent" }}
                >
                  <Tab label="My Profile" icon={<Cube />} />
                  <Tab label="Settings" icon={<Settings />} />
                </Tabs>
              </AppBar>
            </Grid>
          </Grid>
        </Card>
      </SoftBox> {/* Margin applied to the content section */}
    </SoftBox>
  );
}

export default Header;
