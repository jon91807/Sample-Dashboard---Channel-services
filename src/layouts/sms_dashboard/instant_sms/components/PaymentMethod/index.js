import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';
import SoftBox from 'components/SoftBox';
import SoftTypography from 'components/SoftTypography';
import SoftButton from 'components/SoftButton';
import { Link } from 'react-router-dom'; // Import Link for navigation
import {
  FormControl,
  InputLabel,
  Input,
  Select,
  MenuItem,
  TextField,
  Button,
  Box,
} from '@mui/material';

function NewSenderDetails() {
  const [dltTemplateID, setdltTemplateID] = useState('');
  const [smsContent, setsmsContent] = useState('');
  const [senderCode, setSenderCode] = useState('Select');
  const [senderType, setSenderType] = useState('Promotional'); // Default type

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

  return (
    <div>
      <SoftBox display="flex" justifyContent="center" sx={{ mt: 2 }}>
          <Card sx={{ width: '600px', height: '720px' }}>
          <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={3} // Reduced padding
        >
          <SoftTypography variant="h5">Instant SMS</SoftTypography>
        </SoftBox>
        
        <SoftBox p={2}> {/* Adjusted padding */}
          
              
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
              
              {/**Templates */}
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
              
              <br></br>
              </FormControl>


              {/**DLT Template id */}
              <FormControl fullWidth margin="normal" variant="outlined">
              <InputLabel htmlFor="sender-code" shrink>
              Contact Number
              </InputLabel>
              <br></br>
              <Input
              id="dlt-Template_Id"
              value={dltTemplateID}
              onChange={(e) => setdltTemplateID(e.target.value)}
              placeholder="e.g., +91-XXXXXXXXXX"
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
              Send SMS
              </Button>
              </Box>
              </SoftBox>
          </Card>
        </SoftBox>
    </div>
  );
}

export default NewSenderDetails;
