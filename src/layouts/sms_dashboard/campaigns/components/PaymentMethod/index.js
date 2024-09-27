import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';
import SoftBox from 'components/SoftBox';
import SoftTypography from 'components/SoftTypography';
import SoftButton from 'components/SoftButton';
import { Link } from 'react-router-dom'; // Import Link for navigation
import {
  Box,
  FormControl,
  InputLabel,
  Input,
  Select,
  TextField,
  MenuItem,
  Button,
} from '@mui/material';

import Table from 'examples/Tables/Table';
import authorsTableData from 'layouts/sms_dashboard/campaigns/data/authorsTableData';

import DatePicker from 'react-datepicker'; // import react-datepicker for date picker
import 'react-datepicker/dist/react-datepicker.css'; // import corresponding CSS
import TimePicker from 'react-time-picker'; // import TimePicker for time picker
import 'react-time-picker/dist/TimePicker.css';


function Tables() {
  const { columns, rows } = authorsTableData;

  const [dltTemplateID, setdltTemplateID] = useState('Select');
  const [smsContent, setsmsContent] = useState('');
  const [senderCode, setSenderCode] = useState('Select');
  const [senderType, setSenderType] = useState('Promotional'); // Default type
  const [visibleCard, setVisibleCard] = useState('allGroups'); // State to manage which card is visible

  const [scheduleDate, setScheduleDate] = useState(null); // State to hold selected date
  const [scheduleTime, setScheduleTime] = useState('10:00'); // State to hold selected time


  const handleSave = () => {
    console.log('Sender Code:', senderCode, 'Type:', senderType);
  };

  const linkStyle = {
    fontSize: '0.95rem', // Adjust font size (smaller)
    marginLeft: '1rem',  // Shift position to the right
    marginTop: '0.1rem', // Shift up a bit
    color: 'blue',      // Default text color
    '&:hover': {
      color: '#922B21', // Change to reddish-purple on hover
    },
  };

  const buttonDimensions = {
    width: '200px', // Custom width for buttons
    height: '60px', // Custom height for buttons
  };

  const showAllSenderDetails = () => {
    setVisibleCard('allGroups');
  };

  const showNewSenderDetails = () => {
    setVisibleCard('createGroup');
  };

  const showGetGroups = () => {
    setVisibleCard('getGroups');
  };

  return (
    <div>
      {/* Buttons to switch between cards */}
      <SoftBox
        display="flex"
        justifyContent="center"
        gap={4} // Space between buttons
        p={2} // Padding around the SoftBox
      >
        <SoftButton
          variant="gradient"
          sx={buttonDimensions}
          color={visibleCard === 'allGroups' ? 'primary' : 'secondary'}
          onClick={showAllSenderDetails}
        >
          <Icon sx={{ fontWeight: 'bold' }}>list</Icon>
          &nbsp;All Campaigns
        </SoftButton>
        <SoftButton
          variant="gradient"
          sx={buttonDimensions}
          color={visibleCard === 'createGroup' ? 'primary' : 'secondary'}
          onClick={showNewSenderDetails}
        >
          <Icon sx={{ fontWeight: 'bold' }}>add</Icon>
          &nbsp;Create Campaign
        </SoftButton>
        <SoftButton
          variant="gradient"
          sx={buttonDimensions}
          color={visibleCard === 'getGroups' ? 'primary' : 'secondary'}
          onClick={showGetGroups}
        >
          <Icon sx={{ fontWeight: 'bold' }}>add</Icon>
          &nbsp;Run Campaign
        </SoftButton>
      </SoftBox>

      {/* All Sender Details Card */}
      {visibleCard === 'allGroups' && (
        <Card sx={{ mt: 10 }}>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">All Groups</SoftTypography>
          </SoftBox>
          <SoftBox
            sx={{
              '& .MuiTableRow-root:not(:last-child)': {
                '& td': {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },
            }}
          >
            <Table columns={columns} rows={rows} />
          </SoftBox>
        </Card>
      )}

      {/* New Sender Details Card */}
      {visibleCard === 'createGroup' && (
        <SoftBox display="flex" justifyContent="center" sx={{ mt: 2 }}>
          <Card sx={{ width: '600px', height: '720px' }}>
          <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={3} // Reduced padding
        >
          <SoftTypography variant="h5">Create Campaign</SoftTypography>
        </SoftBox>
        
        <SoftBox p={2}> {/* Adjusted padding */}
          <FormControl fullWidth margin="dense" variant="outlined"> {/* Changed to "dense" */}
            <InputLabel htmlFor="template" shrink>
              Sender Code
            </InputLabel>
              <br></br>
              <Select
              id="sender-code"
              value={senderCode}
              onChange={(e) => setSenderCode(e.target.value)}
              >
              <MenuItem value="Select">Select</MenuItem>
              <MenuItem value="Temp1">TX-YRPXE</MenuItem>
              <MenuItem value="Temp1">PROMO-NIRMA</MenuItem>
              <MenuItem value="Temp1">TX-ICICILOAN</MenuItem>
              <MenuItem value="Temp1">PROMO-OYOHOMES</MenuItem>
              <MenuItem value="Temp1">TX-KAJARIYA</MenuItem>
              </Select>
              <Link to="/new-template"> {/* Link to desired path */}
                <SoftTypography variant="h6" sx={linkStyle}>
                  Add Template
                </SoftTypography>
              </Link>
              <br></br>
              </FormControl>
              
              {/* Sender Code */}
              <FormControl fullWidth margin="normal" variant="outlined">
              <InputLabel htmlFor="sender-code" shrink>
              Template Code
              </InputLabel>
              <br></br>
              <Select
              id="sender-code"
              value={senderCode}
              onChange={(e) => setSenderCode(e.target.value)}
              >
              <MenuItem value="Select">Select</MenuItem>
              <MenuItem value="Temp1">Template 1</MenuItem>
              <MenuItem value="Temp1">Template 2</MenuItem>
              <MenuItem value="Temp1">Template 3</MenuItem>
              <MenuItem value="Temp1">Template 4</MenuItem>
              </Select>
              <br></br>
              </FormControl>
              
              {/**DLT Template id */}
              <FormControl fullWidth margin="normal" variant="outlined">
              <InputLabel htmlFor="sender-code" shrink>
              Group
              </InputLabel>
              <br></br>
              <Select
              id="sender-code"
              value={senderCode}
              onChange={(e) => setSenderCode(e.target.value)}
              >
              <MenuItem value="Select">Select</MenuItem>
              <MenuItem value="Temp1">Relience Customers</MenuItem>
              <MenuItem value="Temp1">Tourists</MenuItem>
              <MenuItem value="Temp1">Bengaluru Distributions</MenuItem>
              <MenuItem value="Temp1">SP Jain College 2022 Batch</MenuItem>
              </Select>
              <br></br>
              </FormControl>

              {/**SMS Content */}
              <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="schedule-date" shrink>
          Schedule
        </InputLabel>
        <br />
        {/* Date Picker */}
        <DatePicker
          selected={scheduleDate} // Bind selected date to state
          onChange={(date) => setScheduleDate(date)} // Update state on change
          isClearable // Allow user to clear the selection
          dateFormat="dd/MM/yyyy" // Custom format for date
        />
        <br />
        {/* Time Picker */}
        <TimePicker
          onChange={(time) => setScheduleTime(time)} // Update state on change
          value={scheduleTime} // Bind value to state
          disableClock // Hide the clock icon
        />
      </FormControl>

              {/* Action Buttons */}
              <Box display="flex" justifyContent="flex-end" mt={7}>
              <Button variant="contained" color="primary" onClick={handleSave}>
              Create
              </Button>
              </Box>
              </SoftBox>
          </Card>
        </SoftBox>
)}

{/* All Get Groups Card */}
{visibleCard === 'getGroups' && (<></>)}
    </div>
  );
}

export default Tables;
