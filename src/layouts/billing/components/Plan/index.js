import React, { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import borders from "assets/theme/base/borders";
import masterCardLogo from "assets/images/logos/mastercard.png";
import visaLogo from "assets/images/logos/visa.png";
import CardPopup from "./CardPopup";
import { MdOutlineDesignServices } from "react-icons/md";
import { Typography } from '@mui/material';
import SoftProgress from "components/SoftProgress";


function PaymentMethod() {
  const { borderWidth, borderColor } = borders;

  // Payment methods data
  const paymentMethods = [
    { logo: masterCardLogo, number: "7852" },
    { logo: visaLogo, number: "5248" },
    // Add more payment methods as needed
  ];

  // State to manage visibility of payment methods
  const [showAllMethods, setShowAllMethods] = useState(false);
  // State to manage selected payment method
  const [selectedMethod, setSelectedMethod] = useState(null);
  // State to store the initial payment method
  const [initialMethod, setInitialMethod] = useState(paymentMethods[0]);
  // State to manage visibility of card popup
  const [showCardPopup, setShowCardPopup] = useState(false);

  // Function to handle selecting a payment method
  const handleSelectMethod = (methodIndex) => {
    setSelectedMethod(methodIndex);
  };

  // Function to handle saving the selected method
  const handleSaveMethod = () => {
    if (selectedMethod !== null) {
      // Update the initial payment method with the selected method
      setInitialMethod(paymentMethods[selectedMethod]);
      // Hide the payment methods
      setShowAllMethods(false);
    }
  };

  // Function to handle showing the card popup
  const handleShowCardPopup = () => {
    setShowCardPopup(true);
  };

  // Function to handle hiding the card popup
  const handleCloseCardPopup = () => {
    setShowCardPopup(false);
  };

  // Define the Completion component
  function Completion({ value, color }) {
    return (
      <SoftBox display="flex" alignItems="center">
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {value}%&nbsp;
        </SoftTypography>
        <SoftBox width="46rem">
          <SoftProgress value={value} color={color} variant="gradient" label={false} />
        </SoftBox>
      </SoftBox>
    );
  }

  return (
    <Card id="delete-account" sx={{ maxWidth: 800, margin: "auto" }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Current Plan
        </SoftTypography>
        <SoftBox display="flex" alignItems="flex-start">
          <SoftBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
            <MdOutlineDesignServices />
            </Icon>
          </SoftBox>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Plan <Typography component="span" variant="inherit" fontWeight="bold" color="dark-blue">/ Enterprise</Typography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
  
      <SoftBox mt={4} px={2}>
        <SoftTypography variant="body2" color="text" fontWeight="medium">
          Plan usage
        </SoftTypography>
        <Completion value={64} color="info" />
      </SoftBox>
  
      <SoftBox display="flex" justifyContent="flex-end" mt={3.5} px={2} mb={2}>
        <SoftButton variant="gradient" color="dark" onClick={handleShowCardPopup}>
          <Icon sx={{ fontWeight: "bold" }}>refresh</Icon>
          &nbsp;Refresh
        </SoftButton>
      </SoftBox>
    </Card>
  );
  
}

export default PaymentMethod;
