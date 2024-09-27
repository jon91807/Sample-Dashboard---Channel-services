import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Grid,
  Modal,
  Divider,
  Slide,
  FormControl,
  InputLabel,
  FormHelperText,
  Tooltip,
  Typography,
  AppBar,
  Tabs,
  Tab,
  IconButton,
  Popover,
} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import CloseIcon from "@mui/icons-material/Close";
import Cube from "@mui/icons-material/Widgets"; // Assuming Cube icon
import Settings from "@mui/icons-material/Settings"; // Assuming Settings icon
import MKBox from "components/SoftBox";
import MKButton from "components/SoftButton";
import MKTypography from "components/SoftTypography";
import MKInput from "components/SoftInput";
import theme from "./theme"; // Import the theme

function SimpleModal({ open, onClose }) {
  const theme = useTheme();
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [popoverAnchor, setPopoverAnchor] = useState(null);
  const [popoverText, setPopoverText] = useState("");
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  useEffect(() => {
    const handleTabsOrientation = () => {
      return window.innerWidth < theme.breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    };

    window.addEventListener("resize", handleTabsOrientation);
    handleTabsOrientation();

    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [theme.breakpoints.values.sm]);

  const handlePopoverClose = () => {
    setPopoverAnchor(null);
  };

  const openPopover = Boolean(popoverAnchor);
  const popoverId = openPopover ? 'simple-popover' : undefined;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", { cardNumber, cardHolder, expiry, cvv });
    onClose();
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").substring(0, 16);
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(formattedValue);
  };

  const handleCardHolderChange = (e) => {
    const value = e.target.value.toUpperCase();
    if (/^[A-Z ]*$/.test(value)) {
      setCardHolder(value);
    } else {
      setPopoverAnchor(e.currentTarget);
      setPopoverText("Card holder name can only contain alphabets and spaces.");
    }
  };

  const handleExpiryChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").substring(0, 4);
    const formattedValue = value.replace(/(\d{2})(?=\d)/g, "$1/");
    setExpiry(formattedValue);
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").substring(0, 3);
    setCvv(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Modal open={open} onClose={onClose} sx={{ display: "grid", placeItems: "center" }}>
        <Slide direction="down" in={open} timeout={500}>
          <MKBox
            position="relative"
            width="500px"
            display="flex"
            flexDirection="column"
            borderRadius="xl"
            bgColor="white"
            shadow="xl"
            component="form"
            onSubmit={handleFormSubmit}
            p={3} // Add padding to the form container
          >
            <MKBox display="flex" alignItems="center" justifyContent="space-between" mb={2}>
              <MKTypography variant="h5">Add Payment Method</MKTypography>
              <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={onClose} />
            </MKBox>
            <Divider />
            <AppBar position="static" sx={{ backgroundColor: 'transparent', mb: 4 }}>
              <Tabs
                orientation={tabsOrientation}
                value={tabValue}
                onChange={handleSetTabValue}
                sx={{
                  '& .MuiTab-root': {
                    color: 'gray', // Default color for tabs
                  },
                  '& .MuiTab-root.Mui-selected': {
                    color: `${theme.palette.grey[100]} !important`, // Ensuring the selected tab text color is a specific shade of white
                  },
                  '& .MuiTabs-indicator': {
                    backgroundColor: theme.palette.primary.main, // Indicator color
                  },
                }}
              >
                <Tab label="Credit/Debit Card" icon={<Cube />} />
                <Tab label="UPI" icon={<Settings />} />
              </Tabs>
            </AppBar>
            <MKBox>
              <Container>
                {tabValue === 0 ? (
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
                        <MKBox sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                          <InputLabel
                            htmlFor="card-number"
                            sx={{
                              backgroundColor: 'white',
                              px: 1,
                              position: 'absolute',
                              left: '12px',
                              top: '-12px',
                              zIndex: 1,
                            }}
                          >
                            Card Number
                          </InputLabel>
                          <MKInput
                            id="card-number"
                            label="Card Number"
                            placeholder="1234 5678 9123 4567"
                            fullWidth
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            sx={{ borderColor: theme?.palette?.borderColor || 'defaultColor' }} // Safe access to borderColor
                          />
                          <Tooltip title="Enter your 16-digit card number">
                            <IconButton sx={{ ml: 0.1, opacity: 0.7 }}>
                              <InfoIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </MKBox>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
                        <MKBox sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                          <InputLabel
                            htmlFor="card-holder"
                            sx={{
                              backgroundColor: 'white',
                              px: 1,
                              position: 'absolute',
                              left: '12px',
                              top: '-12px',
                              zIndex: 1,
                            }}
                          >
                            Card Holder
                          </InputLabel>
                          <MKInput
                            id="card-holder"
                            label="Card Holder"
                            placeholder="JOHN DOE"
                            fullWidth
                            value={cardHolder}
                            onChange={handleCardHolderChange}
                            sx={{ borderColor: theme?.palette?.borderColor || 'defaultColor' }} // Safe access to borderColor
                          />
                          <Tooltip title="Enter the name as it appears on the card">
                            <IconButton sx={{ ml: 0.2, opacity: 0.7 }}>
                              <InfoIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </MKBox>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
                        <MKBox sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                          <InputLabel
                            htmlFor="expiry"
                            sx={{
                              backgroundColor: 'white',
                              px: 1,
                              position: 'absolute',
                              left: '12px',
                              top: '-12px',
                              zIndex: 1,
                            }}
                          >
                            Expiry
                          </InputLabel>
                          <MKInput
                            id="expiry"
                            label="Expiry"
                            placeholder="MM/YY"
                            fullWidth
                            value={expiry}
                            onChange={handleExpiryChange}
                            sx={{ borderColor: theme?.palette?.borderColor || 'defaultColor' }} // Safe access to borderColor
                          />
                          <Tooltip title="Enter the expiry date (MM/YY)">
                            <IconButton sx={{ ml: 0.1, opacity: 0.7 }}>
                              <InfoIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </MKBox>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
                        <MKBox sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                          <InputLabel
                            htmlFor="cvv"
                            sx={{
                              backgroundColor: 'white',
                              px: 1,
                              position: 'absolute',
                              left: '12px',
                              top: '-12px',
                              zIndex: 1,
                            }}
                          >
                            CVV
                          </InputLabel>
                          <MKInput
                            id="cvv"
                            label="CVV"
                            placeholder="123"
                            fullWidth
                            value={cvv}
                            onChange={handleCvvChange}
                            sx={{ borderColor: theme?.palette?.borderColor || 'defaultColor' }} // Safe access to borderColor
                          />
                          <Tooltip title="Enter the 3-digit code on the back of the card">
                            <IconButton sx={{ ml: 0.1, opacity: 0.7 }}>
                              <InfoIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </MKBox>
                      </FormControl>
                    </Grid>
                  </Grid>
                ) : (
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
                        <MKBox sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                          <InputLabel
                            htmlFor="upi-id"
                            sx={{
                              backgroundColor: 'white',
                              px: 1,
                              position: 'absolute',
                              left: '12px',
                              top: '-12px',
                              zIndex: 1,
                            }}
                          >
                            UPI ID
                          </InputLabel>
                          <MKInput
                            id="upi-id"
                            label="UPI ID"
                            placeholder="example@upi"
                            fullWidth
                            sx={{ borderColor: theme?.palette?.borderColor || 'defaultColor' }} // Safe access to borderColor
                          />
                          <Tooltip title="Enter your UPI ID">
                            <IconButton sx={{ ml: 1, opacity: 0.7 }}>
                              <InfoIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </MKBox>
                      </FormControl>
                    </Grid>
                  </Grid>
                )}
              </Container>
            </MKBox>
            <Divider sx={{ my: 2 }} />
            <MKBox display="flex" justifyContent="space-between">
              <MKButton onClick={onClose} sx={{ mr: 2 }}>Cancel</MKButton>
              <MKButton type="submit" color="primary">Save</MKButton>
            </MKBox>
          </MKBox>
        </Slide>
      </Modal>
      <Popover
        id={popoverId}
        open={openPopover}
        anchorEl={popoverAnchor}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>{popoverText}</Typography>
      </Popover>
    </ThemeProvider>
  );
}

SimpleModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SimpleModal;
