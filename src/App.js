import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import SoftBox from "components/SoftBox";
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";
import theme from "assets/theme";
import routes from "main_routes";
import smsRoutes from "sms_routes";
import websiteRoutes from "./fbt_routes"; // Import the website routes
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import brandDefault from "assets/images/logo-ct.png";
import brandSMS from "assets/images/logo-ct.png";

// Import index.css conditionally in a useEffect hook
export default function App() {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();
  const [layout, setLayout] = useState("dashboard");

  useEffect(() => {
    if (pathname.startsWith("/sms_dashboard")) {
      setLayout("sms_dashboard");
    } else if (pathname.startsWith("/website")) {
      setLayout("website"); // Set layout for the website
    } else {
      setLayout("dashboard");
    }
  }, [pathname]);

  useEffect(() => {
    if (layout === "website") {
      require("./index.css"); // Dynamically require the CSS file
    }
  }, [layout]);

  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <SoftBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </SoftBox>
  );

  const sidenavProps = {
    color: sidenavColor,
    onMouseEnter: handleOnMouseEnter,
    onMouseLeave: handleOnMouseLeave,
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {layout !== "website" && ( // Render sidenav and configurator button only if not in the website layout
        <>
          {layout === "dashboard" && (
            <>
              <Sidenav
                {...sidenavProps}
                brand={brandDefault}
                brandName="Fast Business Technology"
                routes={routes}
              />
              {configsButton}
            </>
          )}
          {layout === "sms_dashboard" && (
            <>
              <Sidenav
                {...sidenavProps}
                brand={brandSMS}
                brandName="SMS"
                routes={smsRoutes}
              />
              {configsButton}
            </>
          )}
        </>
      )}
      <Routes>
        {layout === "dashboard"
          ? getRoutes(routes)
          : layout === "sms_dashboard"
          ? getRoutes(smsRoutes)
          : getRoutes(websiteRoutes)}
        <Route
          path="*"
          element={
            <Navigate
              to={
                layout === "dashboard"
                  ? "/dashboard"
                  : layout === "sms_dashboard"
                  ? "/sms_dashboard"
                  : "/website"
              }
            />
          }
        />
      </Routes>
    </ThemeProvider>
  );
}
