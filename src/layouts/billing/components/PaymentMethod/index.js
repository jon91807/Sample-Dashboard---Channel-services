import React, { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import borders from "assets/theme/base/borders";
import masterCardLogo from "assets/images/logos/mastercard.png";
import visaLogo from "assets/images/logos/visa.png";
import SimpleModal from "./SimpleModal"; // Import the SimpleModal component

function PaymentMethod() {
  const { borderWidth, borderColor } = borders;

  // Payment methods data
  const paymentMethods = [
    { logo: masterCardLogo, number: "7852" },
    { logo: visaLogo, number: "5248" },
    // Add more payment methods as needed
  ];

  // State to manage visibility of payment methods
  const [dropdown, setDropdown] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(0);
  const [initialMethod, setInitialMethod] = useState(paymentMethods[0]);
  const [showCardPopup, setShowCardPopup] = useState(false);

  // Function to handle opening the dropdown
  const openDropdown = (event) => {
    setDropdown(event.currentTarget);
  };

  // Function to handle closing the dropdown
  const closeDropdown = () => {
    setDropdown(null);
  };

  // Function to handle selecting a payment method
  const handleSelectMethod = (methodIndex) => {
    setSelectedMethod(methodIndex);
    setInitialMethod(paymentMethods[methodIndex]);
    closeDropdown();
  };

  // Function to handle showing the card popup
  const handleShowCardPopup = () => {
    setShowCardPopup(true);
  };

  // Function to handle hiding the card popup
  const handleCloseCardPopup = () => {
    setShowCardPopup(false);
  };

  return (
    <Card id="delete-account" sx={{ maxWidth: 800, margin: "auto" }}>
      <SoftBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <SoftTypography variant="h6" fontWeight="medium">
          Payment Method
        </SoftTypography>
        <SoftButton variant="gradient" color="dark" onClick={handleShowCardPopup}>
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;Add Payment Method
        </SoftButton>
      </SoftBox>
      <SoftBox p={2} mt={4.3}>
        <Grid container spacing={3} direction="column">
          <Grid item xs={12}>
            <SoftBox
              border={`${borderWidth[1]} solid ${borderColor}`}
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
              onClick={openDropdown} // Open dropdown on click
              sx={{ cursor: "pointer" }}
            >
              <SoftBox component="img" src={initialMethod?.logo} alt="payment method" width="10%" mr={2} />
              <SoftTypography variant="h6" fontWeight="medium">
                ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;{initialMethod?.number}
              </SoftTypography>
              <SoftBox lineHeight={0}>
                <Tooltip title="Change method" placement="top">
                  <Icon sx={{ color: "blue" }}>expand_more</Icon>
                </Tooltip>
              </SoftBox>
            </SoftBox>
            <Menu anchorEl={dropdown} open={Boolean(dropdown)} onClose={closeDropdown}>
              {paymentMethods.map((method, index) => (
                <MenuItem key={index} onClick={() => handleSelectMethod(index)}>
                  <SoftBox
                    display="flex"
                    alignItems="center"
                    sx={{ width: '100%' }}
                  >
                    <SoftBox component="img" src={method.logo} alt="payment method" width="15%" mr={16} />
                    <SoftTypography variant="h6" fontWeight="medium" >
                      ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;{method.number}
                    </SoftTypography>
                  </SoftBox>
                </MenuItem>
              ))}
            </Menu>
          </Grid>
        </Grid>
      </SoftBox>
      <SimpleModal open={showCardPopup} onClose={handleCloseCardPopup} /> {/* Render the SimpleModal component */}
    </Card>
  );
}

export default PaymentMethod;
