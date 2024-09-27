import { useState } from "react";
import PropTypes from "prop-types";
import ReactSpeedometer from "react-d3-speedometer";

import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import Table from "examples/Tables/Table";
import "./style.css"; // Import CSS file for styles

import data from "layouts/dashboard/components/Projects/data";

function Projects({ value1, value2, value3 }) {
  const { columns, rows } = data();
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );

  return (
    <Card>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <SoftBox>
          <SoftTypography variant="h3" gutterBottom>
            Performance Stats
          </SoftTypography>
          <SoftBox display="flex" alignItems="center" lineHeight={0}>
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
            </Icon>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong>Your Services</strong> this month
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </SoftBox>
        {renderMenu}
      </SoftBox>

      <div style={{ display: "flex" }}>
        <SoftBox flex="1" mr={1}>
          <div className="center">
            <h1 className="title">Delivery Rate</h1>
            <div className="speedometer">
              <ReactSpeedometer
                maxValue={100}
                ringWidth={20}
                customSegmentStops={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                segmentColors={[
                  "#FAFAFA",
                  "#FAFAFA",
                  "#FAFAFA",
                  "#FAFAFA",
                  "#FAFAFA",
                  "#007fff",
                  "#007fff",
                  "#FAFAFA",
                  "#FAFAFA",
                  "#FAFAFA"
                ]}
                needleTransitionDuration={9000}
                needleTransition="easeElastic"
                currentValueText={`${value1} %`}
                value={value1}
              />
            </div>
          </div>
        </SoftBox>

        <SoftBox flex="1" mx={1}>
          <div className="center">
            <h1 className="title">Reach and Growth</h1>
            <div className="speedometer">
              <ReactSpeedometer
                maxValue={100}
                ringWidth={20}
                customSegmentStops={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                segmentColors={[
                  "#FAFAFA",
                  "#FAFAFA",
                  "#FAFAFA",
                  "#FAFAFA",
                  "#FAFAFA",
                  "#007fff",
                  "#007fff",
                  "#FAFAFA",
                  "#FAFAFA",
                  "#FAFAFA"
                ]}
                needleTransitionDuration={9000}
                needleTransition="easeElastic"
                currentValueText={`${value2} %`}
                value={value2}
              />
            </div>
          </div>
        </SoftBox>

        <SoftBox flex="1" ml={1}>
          <div className="center">
            <h1 className="title">Customer Traffic</h1>
            <div className="speedometer">
              <ReactSpeedometer
                maxValue={100}
                ringWidth={20}
                customSegmentStops={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                segmentColors={[
                  "#FAFAFA",
                  "#FAFAFA",
                  "#FAFAFA",
                  "#FAFAFA",
                  "#FAFAFA",
                  "#007fff",
                  "#007fff",
                  "#FAFAFA",
                  "#FAFAFA",
                  "#FAFAFA"
                ]}
                needleTransitionDuration={9000}
                needleTransition="easeElastic"
                currentValueText={`${value3} %`}
                value={value3}
              />
            </div>
          </div>
        </SoftBox>
      </div>
    </Card>
  );
}

Projects.propTypes = {
  value1: PropTypes.number.isRequired,
  value2: PropTypes.number.isRequired,
  value3: PropTypes.number.isRequired,
};


export default Projects;
