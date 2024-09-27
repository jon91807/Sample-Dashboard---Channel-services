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

  return (
    <Card>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={2} pb={1}>
        <SoftBox>
          <SoftTypography variant="h3" gutterBottom>
            Performance Stats
          </SoftTypography>
          <SoftBox display="flex" alignItems="center" lineHeight={0} mt={-1}>
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
        <SoftBox color="text" px={1}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </SoftBox>
      </SoftBox>

      <SoftBox display="flex" px={2} pb={2}>
        <SoftBox flex="1" mr={1} sx={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="center">
            <h1 className="title">Delivery Rate</h1>
            <div className="speedometer">
              <ReactSpeedometer
                maxValue={100}
                ringWidth={20}
                height={240}
                customSegmentStops={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                segmentColors={[
                  "#FF0000", // Red (0-20)
                  "#FF0000",
                  "#ADD8E6", // Light-blue (20-50)
                  "#ADD8E6",
                  "#ADD8E6",
                  "#FFFF00", // Yellow (50-70)
                  "#FFFF00",
                  "#90EE90", // Light-green (70-100)
                  "#90EE90",
                  "#90EE90"
                ]}
                needleTransitionDuration={9000}
                needleTransition="easeElastic"
                currentValueText={`${value1} %`}
                value={value1}
              />
            </div>
          </div>
        </SoftBox>

        <SoftBox flex="1" mx={1} sx={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="center">
            <h1 className="title">Reach and Growth</h1>
            <div className="speedometer">
              <ReactSpeedometer
                maxValue={100}
                ringWidth={20}
                height={240}
                customSegmentStops={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                segmentColors={[
                  "#FF0000", // Red (0-20)
                  "#FF0000",
                  "#ADD8E6", // Light-blue (20-50)
                  "#ADD8E6",
                  "#ADD8E6",
                  "#FFFF00", // Yellow (50-70)
                  "#FFFF00",
                  "#90EE90", // Light-green (70-100)
                  "#90EE90",
                  "#90EE90"
                ]}
                needleTransitionDuration={9000}
                needleTransition="easeElastic"
                currentValueText={`${value2} %`}
                value={value2}
              />
            </div>
          </div>
        </SoftBox>

        <SoftBox flex="1" ml={1} sx={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="center">
            <h1 className="title">Customer Traffic</h1>
            <div className="speedometer">
              <ReactSpeedometer
                maxValue={100}
                ringWidth={20}
                height={240}
                customSegmentStops={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                segmentColors={[
                  "#FF0000", // Red (0-20)
                  "#FF0000",
                  "#ADD8E6", // Light-blue (20-50)
                  "#ADD8E6",
                  "#ADD8E6",
                  "#FFFF00", // Yellow (50-70)
                  "#FFFF00",
                  "#90EE90", // Light-green (70-100)
                  "#90EE90",
                  "#90EE90"
                ]}
                needleTransitionDuration={9000}
                needleTransition="easeElastic"
                currentValueText={`${value3} %`}
                value={value3}
              />
            </div>
          </div>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

Projects.propTypes = {
  value1: PropTypes.number.isRequired,
  value2: PropTypes.number.isRequired,
  value3: PropTypes.number.isRequired,
};

export default Projects;
