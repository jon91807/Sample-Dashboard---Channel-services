import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactSpeedometer from "react-d3-speedometer";

// @mui/material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Fast Business Technology React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import "./style.css";

function PlatformSettings() {
  const initialSpeedometerValue = 3.1;
  const [currentSpeedometerValue, setCurrentSpeedometerValue] = useState(initialSpeedometerValue);
  const [email, setEmail] = useState(false);
  const [whatsapp, setWhatsapp] = useState(false);
  const [sales, setSales] = useState(false);

  const handleServiceToggle = (service) => {
    let newValue = initialSpeedometerValue;

    if (service === 'email') {
      const newEmailState = !email;
      setEmail(newEmailState);
      setWhatsapp(false);
      setSales(false);
      newValue = newEmailState ? initialSpeedometerValue + 2.8 : initialSpeedometerValue;
    } else if (service === 'whatsapp') {
      const newWhatsappState = !whatsapp;
      setEmail(false);
      setWhatsapp(newWhatsappState);
      setSales(false);
      newValue = newWhatsappState ? initialSpeedometerValue + 4.2 : initialSpeedometerValue;
    } else if (service === 'sales') {
      const newSalesState = !sales;
      setEmail(false);
      setWhatsapp(false);
      setSales(newSalesState);
      newValue = newSalesState ? initialSpeedometerValue + 4.9 : initialSpeedometerValue;
    }

    setCurrentSpeedometerValue(newValue);
  };

  return (
    <Card>
      <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Grow More
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={1.5} pb={2} px={2} lineHeight={1.25}>
        <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Current Service
        </SoftTypography>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            {/* SMS toggle button fixed in the on position */}
            <Switch checked={true} disabled />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              SMS Service
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        
        {/* Speedometer section */}
        <div className="speedometer-container" style={{ textAlign: 'center', padding: '20px 0' }}>
          <ReactSpeedometer
            maxValue={10}
            ringWidth={15}
            customSegmentStops={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
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
            formatValue={(value) => `${value.toFixed(1)}K`} // Ensure correct formatting
            currentValueText={`${currentSpeedometerValue.toFixed(1)}K`} // Adjust the displayed value
            value={currentSpeedometerValue} // Adjust the value to reflect currentValueText
          />
        </div>
        
        <SoftBox mt={0.5}> {/* Adjust the margin here */}
          <SoftTypography
            variant="caption"
            fontWeight="bold"
            color="text"
            textTransform="uppercase"
          >
            Services
          </SoftTypography>
        </SoftBox>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <Switch checked={email} onChange={() => handleServiceToggle('email')} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              Email Marketing
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <Switch checked={whatsapp} onChange={() => handleServiceToggle('whatsapp')} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              WhatsApp Marketing
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <Switch checked={sales} onChange={() => handleServiceToggle('sales')} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              Sales Dialer
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default PlatformSettings;
