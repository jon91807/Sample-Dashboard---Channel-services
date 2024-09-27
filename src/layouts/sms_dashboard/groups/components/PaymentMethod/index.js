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
  MenuItem,
  Button,
} from '@mui/material';

import Table from 'examples/Tables/Table';
import authorsTableData from 'layouts/sms_dashboard/groups/data/authorsTableData';

function Tables() {
  const { columns, rows } = authorsTableData;

  const [senderCode, setSenderCode] = useState('');
  const [senderType, setSenderType] = useState('Promotional'); // Default type
  const [visibleCard, setVisibleCard] = useState('allGroups'); // State to manage which card is visible

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
          &nbsp;All Groups
        </SoftButton>
        <SoftButton
          variant="gradient"
          sx={buttonDimensions}
          color={visibleCard === 'createGroup' ? 'primary' : 'secondary'}
          onClick={showNewSenderDetails}
        >
          <Icon sx={{ fontWeight: 'bold' }}>add</Icon>
          &nbsp;Create Group
        </SoftButton>
        <SoftButton
          variant="gradient"
          sx={buttonDimensions}
          color={visibleCard === 'getGroups' ? 'primary' : 'secondary'}
          onClick={showGetGroups}
        >
          <Icon sx={{ fontWeight: 'bold' }}>add</Icon>
          &nbsp;Get Groups
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
<SoftBox display="flex" justifyContent="center" sx={{ mt: 4 }}>
<Card sx={{ width: '500px', height: '500px' }}>
<SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
<SoftTypography variant="h5">Create Group</SoftTypography>
</SoftBox>
<SoftBox p={3}>
<FormControl fullWidth margin="normal" variant="outlined">
<InputLabel htmlFor="sender-code" shrink>
Group Name
</InputLabel>
<br></br>
<Input
id="sender-code"
value={senderCode}
onChange={(e) => setSenderCode(e.target.value)}
placeholder="e.g., Loan Prospects"
/>
<br></br>
</FormControl>

{/* Sender Type */}
<FormControl fullWidth margin="normal" variant="outlined">
<Link to=""> {/* Link to desired path */}

<SoftTypography variant="h2" sx={linkStyle}>
<Icon sx={{ fontWeight: 'bold', marginRight:'4px' }}>add</Icon>
  Upload
</SoftTypography>
</Link>
<span style={{ fontSize: '0.6em', marginTop: '0.3rem' }}>(&nbsp; .csv file only &nbsp;)</span>
<Select
id="sender-type"
value={senderType}
onChange={(e) => setSenderType(e.target.value)}
>
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

{/* All Get Groups Card */}
{visibleCard === 'getGroups' && (<></>)}
    </div>
  );
}

export default Tables;
