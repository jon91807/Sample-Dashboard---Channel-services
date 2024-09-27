import { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom"; // Import NavLink
import PropTypes from "prop-types";
import { List, Divider } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";
import SidenavCard from "examples/Sidenav/SidenavCard";
import SidenavRoot from "examples/Sidenav/SidenavRoot";
import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";
import { useSoftUIController, setMiniSidenav } from "context";

function Sidenav({ color, brand, brandName, routes, ...rest }) {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentSidenav } = controller;
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(!location.pathname.includes("/authentication/sign-in") && !location.pathname.includes("/authentication/sign-up"));
  }, [location.pathname]);

  useEffect(() => {
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
    }

    window.addEventListener("resize", handleMiniSidenav);
    handleMiniSidenav();

    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch]);

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  if (!isVisible) return null;

  return (
    <SidenavRoot {...rest} variant="permanent" ownerState={{ transparentSidenav, miniSidenav }}>
      <SoftBox pt={3} pb={1} px={4} textAlign="center">
        <SoftBox display={{ xs: "block", xl: "none" }} position="absolute" top={0} right={0} p={1.625} onClick={closeSidenav} style={{ cursor: "pointer" }}>
          <SoftTypography variant="h6" color="secondary">
            <i className="material-icons">close</i>
          </SoftTypography>
        </SoftBox>
        <SoftBox component="a" href="/" display="flex" alignItems="center">
          {brand && <SoftBox component="img" src={brand} alt="Soft UI Logo" width="2rem" />}
          <SoftBox width={!brandName && "100%"} sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}>
            <SoftTypography component="h6" variant="button" fontWeight="medium">
              {brandName}
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </SoftBox>
      <Divider />
      <List>
        {routes.map(({ type, name, icon, title, noCollapse, key, route, href }) => {
          if (type === "collapse") {
            return (
              <NavLink to={route} key={key}> {/* Use NavLink */}
                <SidenavCollapse color={color} key={key} name={name} icon={icon} active={location.pathname.startsWith(route)} noCollapse={noCollapse} />
              </NavLink>
            );
          } else if (type === "title") {
            return (
              <SoftTypography
                key={key}
                display="block"
                variant="caption"
                fontWeight="bold"
                textTransform="uppercase"
                opacity={0.6}
                pl={3}
                mt={2}
                mb={1}
                ml={1}
              >
                {title}
              </SoftTypography>
            );
          } else if (type === "divider") {
            return <Divider key={key} />;
          }
          return null;
        })}
      </List>
      <SoftBox pt={2} my={2} mx={2} mt="auto">
        <SidenavCard />
        <SoftBox mt={2}>
          <SoftButton component="a" href="https://fastbiztechnologies.com/product/fast-biz-tech-pro-react" target="_blank" rel="noreferrer" variant="gradient" color={color} fullWidth>
            Settings
          </SoftButton>
        </SoftBox>
      </SoftBox>
    </SidenavRoot>
  );
}

Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
