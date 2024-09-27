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
import authorsTableData from 'layouts/sms_dashboard/templates/data/authorsTableData';

function Tables() {
  const { columns, rows } = authorsTableData;

  const [senderCode, setSenderCode] = useState('Select');
  const [dltTemplateID, setdltTemplateID] = useState('');
  const [smsContent, setsmsContent] = useState('');
  const [senderType, setSenderType] = useState('Select'); // Default type
  const [visibleCard, setVisibleCard] = useState('allTemplates'); // State to manage which card is visible

  const linkStyle = {
    fontSize: '0.75rem', // Adjust font size (smaller)
    marginLeft: '1rem',  // Shift position to the right
    marginTop: '0.2rem', // Shift up a bit
    color: 'black',      // Default text color
    '&:hover': {
      color: '#922B21', // Change to reddish-purple on hover
    },
  };

  const handleSave = () => {
    console.log('Sender Code:', senderCode, 'Type:', senderType);
  };

  const buttonDimensions = {
    width: '200px', // Custom width for buttons
    height: '60px', // Custom height for buttons
  };

  const showAllTemplates = () => {
    setVisibleCard('allTemplates');
  };

  const showNewTemplates = () => {
    setVisibleCard('newTemplates');
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
          color={visibleCard === 'allTemplates' ? 'primary' : 'secondary'}
          onClick={showAllTemplates}
        >
          <Icon sx={{ fontWeight: 'bold' }}>list</Icon>
          &nbsp;All Templates
        </SoftButton>
        <SoftButton
          variant="gradient"
          sx={buttonDimensions}
          color={visibleCard === 'newTemplates' ? 'primary' : 'secondary'}
          onClick={showNewTemplates}
        >
          <Icon sx={{ fontWeight: 'bold' }}>add</Icon>
          &nbsp;New Templates
        </SoftButton>
      </SoftBox>

      {/* All Templates Card */}
      {visibleCard === 'allTemplates' && (
        <Card sx={{ mt: 3 }}>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">All Templates</SoftTypography>
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

      {/* New Templates Card */}
      {visibleCard === 'newTemplates' && (
        <SoftBox display="flex" justifyContent="center" sx={{ mt: 2 }}>
          <Card sx={{ width: '600px', height: '720px' }}>
          <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={3} // Reduced padding
        >
          <SoftTypography variant="h5">Add New Template</SoftTypography>
        </SoftBox>
        
        <SoftBox p={2}> {/* Adjusted padding */}
          <FormControl fullWidth margin="dense" variant="outlined"> {/* Changed to "dense" */}
            <InputLabel htmlFor="template" shrink>
              Template
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
              Sender Code
              </InputLabel>
              <br></br>
              <Select
              id="sender-code"
              value={senderCode}
              onChange={(e) => setSenderCode(e.target.value)}
              >
              <MenuItem value="Select">Select</MenuItem>
              <MenuItem value="Transactional">TX-ICICILOAN</MenuItem>
              <MenuItem value="Promotional">PROMO-OYOHOMES</MenuItem>
              </Select>
              <br></br>
              </FormControl>
              
              {/**DLT Template id */}
              <FormControl fullWidth margin="normal" variant="outlined">
              <InputLabel htmlFor="sender-code" shrink>
              DLT Template id
              </InputLabel>
              <br></br>
              <Input
              id="dlt-Template_Id"
              value={dltTemplateID}
              onChange={(e) => setdltTemplateID(e.target.value)}
              placeholder="e.g., TX-BMRCKY"
              />
              <br></br>
              </FormControl>

              {/**SMS Content */}
              <FormControl fullWidth variant="outlined">
    <InputLabel htmlFor="sms-content" shrink>
      SMS Content
    </InputLabel>
    <br></br>
    <TextField
      id="sms-content"
      value={smsContent}
      onChange={(e) => setsmsContent(e.target.value)}
      placeholder="Enter message here"
      multiline // Allow multiline text
      minRows={3} // Minimum number of rows
      InputProps={{ style: { padding: '10px', lineHeight: '1.9' } }} // Adjust padding and line height
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
        </SoftBox> //
      )}
    </div>
  );
}

export default Tables;
