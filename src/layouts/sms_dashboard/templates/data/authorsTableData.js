import React, { useState } from 'react'; // Make sure useState is imported
import SoftBox from 'components/SoftBox';
import SoftTypography from 'components/SoftTypography';
import SoftAvatar from 'components/SoftAvatar';
import SoftBadge from 'components/SoftBadge';
import SoftButton from 'components/SoftButton';
import Icon from '@mui/material/Icon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'; // Importing necessary MUI components

import img1 from 'assets/images/curved-images/curved1.jpg';
import img2 from 'assets/images/curved-images/curved14.jpg';
import img3 from 'assets/images/curved-images/curved-6.jpg';

// Component for the action menu
function Action() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <SoftBox>
      <SoftButton onClick={handleClick} variant="text" color="secondary">
        <Icon sx={{ cursor: 'pointer', fontWeight: 'bold' }} fontSize="small">
          more_vert
        </Icon>
      </SoftButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem color="Success" onClick={handleClose}><Icon>edit</Icon>&nbsp;Edit</MenuItem>
        <MenuItem color="error" onClick={handleClose}><Icon>delete</Icon>&nbsp;Delete</MenuItem>
      </Menu>
    </SoftBox>
  );
}

function Author({ image, name }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
    </SoftBox>
  );
}

const authorsTableData = {
  columns: [
    { name: 'Template', align: 'left' },
    { name: 'Sender_code', align: 'center' },
 
    { name: 'Created', align: 'center' },
    { name: 'action', align: 'center' },
  ],

  rows: [
    {
      Template: <Author image={img2} name="Template 1" />,
      Sender_code: <Function job="TX-YRPXE" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="Pending" color="error" size="xs" container />
      ),
      Created: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      action: <Action />, // Now includes the Action component
    },
    {
      Template: <Author image={img1} name="Template 2" />,
      Sender_code: <Function job="PROMO-NIRMA" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="Not Verified" color="secondary" size="xs" container />
      ),
      Created: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </SoftTypography>
      ),
      action: <Action />, // Now includes the Action component
    },
    {
      Template: <Author image={img3} name="Template 3" />,
      Sender_code: <Function job="TX-ICICILOAN" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="Active" color="success" size="xs" container />
      ),
      Created: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/17
        </SoftTypography>
      ),
      action: <Action />, // Now includes the Action component
    },
    {
      Template: <Author image={img1} name="Template 4" />,
      Sender_code: <Function job="TX-AXISFRE" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="Active" color="success" size="xs" container />
      ),
      Created: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/17
        </SoftTypography>
      ),
      action: <Action />, // Now includes the Action component
    }
    // More rows can be added here...
  ],
};

export default authorsTableData;
