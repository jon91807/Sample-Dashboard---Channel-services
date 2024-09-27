import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';
import SoftBox from 'components/SoftBox';
import SoftTypography from 'components/SoftTypography';
import SoftButton from 'components/SoftButton';
import {
  Box,
  FormControl,
  InputLabel,
  Input,
  Select,
  MenuItem,
  Button,
} from '@mui/material';

import Table from 'examples/Tables/Table';
import authorsTableData from 'layouts/sms_dashboard/sender_details/data/authorsTableData';

function Tables() {
  const { columns, rows } = authorsTableData;

  const [senderCode, setSenderCode] = useState('');
  const [senderType, setSenderType] = useState('Promotional'); // Default type
  const [visibleCard, setVisibleCard] = useState('allSenderDetails'); // State to manage which card is visible

  const handleSave = () => {
    console.log('Sender Code:', senderCode, 'Type:', senderType);
  };

  const buttonDimensions = {
    width: '200px', // Custom width for buttons
    height: '60px', // Custom height for buttons
  };

  const showAllSenderDetails = () => {
    setVisibleCard('allSenderDetails');
  };

  const showNewSenderDetails = () => {
    setVisibleCard('newSenderDetails');
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
          color={visibleCard === 'allSenderDetails' ? 'primary' : 'secondary'}
          onClick={showAllSenderDetails}
        >
          <Icon sx={{ fontWeight: 'bold' }}>list</Icon>
          &nbsp;All Sender Details
        </SoftButton>
        <SoftButton
          variant="gradient"
          sx={buttonDimensions}
          color={visibleCard === 'newSenderDetails' ? 'primary' : 'secondary'}
          onClick={showNewSenderDetails}
        >
          <Icon sx={{ fontWeight: 'bold' }}>add</Icon>
          &nbsp;New Sender Details
        </SoftButton>
      </SoftBox>

      {/* All Sender Details Card */}
      {visibleCard === 'allSenderDetails' && (
        <Card sx={{ mt: 10 }}>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">Sender Details</SoftTypography>
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
      {visibleCard === 'newSenderDetails' && (
<SoftBox display="flex" justifyContent="center" sx={{ mt: 4 }}>
<Card sx={{ width: '500px', height: '500px' }}>
<SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
<SoftTypography variant="h5">Add New Sender Details</SoftTypography>
</SoftBox>
<SoftBox p={3}>
<FormControl fullWidth margin="normal" variant="outlined">
<InputLabel htmlFor="sender-code" shrink>
Sender Code
</InputLabel>
<br></br>
<Input
id="sender-code"
value={senderCode}
onChange={(e) => setSenderCode(e.target.value)}
placeholder="e.g., TX-BMRCKY"
/>
<br></br>
</FormControl>

{/* Sender Type */}
<FormControl fullWidth margin="normal" variant="outlined">
<InputLabel htmlFor="sender-type" shrink>
Type
</InputLabel>
<br></br>
<Select
id="sender-type"
value={senderType}
onChange={(e) => setSenderType(e.target.value)}
>
<MenuItem value="Promotional">Promotional</MenuItem>
<MenuItem value="Transactional">Transactional</MenuItem>
</Select>
</FormControl>

{/* Action Buttons */}
<Box display="flex" justifyContent="flex-end" mt={11}>
<Button variant="contained" color="primary" onClick={handleSave}>
Create
</Button>
</Box>
</SoftBox>
</Card>
</SoftBox>
)}
    </div>
  );
}

export default Tables;
