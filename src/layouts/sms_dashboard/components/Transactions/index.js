import React, { useState } from "react";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Popover from "@mui/material/Popover";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format } from 'date-fns';
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Transaction from "layouts/billing/components/Transaction";

function Transactions() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date("2024-04-23"));

  const handleCalendarOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCalendarClose = () => {
    setAnchorEl(null);
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    handleCalendarClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'calendar-popover' : undefined;

  const startDate = format(selectedDate, "dd.MM.yyyy");
  const endDate = format(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, selectedDate.getDate()), "dd.MM.yyyy");

  return (
    <Card sx={{ height: 610, maxWidth: 500 }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Upcoming plans
        </SoftTypography>
        <SoftBox display="flex" alignItems="center">
          <SoftTypography variant="button" color="text" fontWeight="regular" mr={0.5}>
            {`${startDate} - ${endDate}`}
          </SoftTypography>
          <IconButton onClick={handleCalendarOpen} size="small">
            <Icon color="inherit" fontSize="small">date_range</Icon>
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleCalendarClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={selectedDate}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Popover>
        </SoftBox>
      </SoftBox>
      <SoftBox pt={3} pb={2} px={2}>
        <SoftBox mb={2}>
          <SoftTypography
            variant="caption"
            color="text"
            fontWeight="bold"
            textTransform="uppercase"
          >
            newest
          </SoftTypography>
        </SoftBox>
        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="success"
            icon="arrow_upward"
            name="WhatsApp Marketing"
            description="5000 messages, 23.04.2024"
            value=" 4,000"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="SMS Marketing"
            description="10,000 messages, 25.04.2024"
            value=" 7,000"
          />
        </SoftBox>
        <SoftBox mt={1} mb={2}>
          <SoftTypography
            variant="caption"
            color="text"
            fontWeight="bold"
            textTransform="uppercase"
          >
            Next Month
          </SoftTypography>
        </SoftBox>
        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Email Marketing"
            description="7,000 messages, 05.05.2024"
            value=" 5,000"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="SMS Marketing"
            description="15,000 messages, 08.05.2024"
            value=" 11,000"
          />
          <Transaction
            color="error"
            icon="check"
            name="Surprise of the Month"
            description="18.05.2024"
            value="xxxx"
          />
          <Transaction
            color="dark"
            icon="information"
            name="For more Information"
            description="Connect with Expert"
            value="Contact Us"
          />
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Transactions;
