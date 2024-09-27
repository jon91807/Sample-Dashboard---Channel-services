import React, { useState } from 'react';
import Card from '@mui/material/Card';
import SoftBox from 'components/SoftBox';
import SoftTypography from 'components/SoftTypography';
import SoftButton from 'components/SoftButton';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Invoices() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const toggleVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const inputBoxStyle = {
    padding: 1,
    border: '1px solid lightgray',
    borderRadius: '4px',
    minWidth: '200px', // Fixed width for both input boxes
  };

  return (
    <Card id="delete-account" sx={{ height: '100%' }}>
      <SoftBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <SoftTypography variant="h6" fontWeight="medium">
          Account Information
        </SoftTypography>
      </SoftBox>

      <SoftBox p={3}>
        {/* Username section */}
        <SoftBox display="flex" alignItems="center" mb={3}>
          <SoftTypography variant="body2" fontWeight="bold" sx={{ mr: 2 }}>
            Username
          </SoftTypography>
          
          <SoftBox sx={inputBoxStyle}>
            <SoftTypography variant="body2">
              Yash_Kumar_222000
            </SoftTypography>
          </SoftBox>
        </SoftBox>

        {/* Password section */}
        <SoftBox display="flex" alignItems="center">
          <SoftTypography variant="body2" fontWeight="bold" sx={{ mr: 2 }}>
            Password
          </SoftTypography>

          <SoftBox sx={{ ...inputBoxStyle, position: 'relative' }}>
            <SoftTypography variant="body2">
              {isPasswordVisible ? 'yk@222000' : '••••••••'}
            </SoftTypography>

            <IconButton
              onClick={toggleVisibility}
              size="small"
              sx={{
                position: 'absolute',
                right: -2,
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            >
              {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </SoftBox>
        </SoftBox>
      </SoftBox>

      <SoftBox p={2} display="flex" justifyContent="flex-end">
        <SoftButton variant="outlined" color="info" size="small">
          Change Password
        </SoftButton>
      </SoftBox>
    </Card>
  );
}

export default Invoices;
