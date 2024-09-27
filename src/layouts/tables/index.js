import React, { useState, useRef, useEffect } from 'react';
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SoftButton from 'components/SoftButton';

// Fast Business Technology React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Fast Business Technology React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import MKPagination from "./MKPagination";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

  const [serviceDropdown, setServiceDropdown] = useState(null);
  const [operationDropdown, setOperationDropdown] = useState(null);
  const [campaignDropdown, setCampaignDropdown] = useState(null);
  const [durationDropdown, setDurationDropdown] = useState(null);

  const [service, setService] = useState("");
  const [operation, setOperation] = useState("");
  const [campaign, setCampaign] = useState("");
  const [duration, setDuration] = useState("");

  const serviceRef = useRef(null);
  const operationRef = useRef(null);
  const campaignRef = useRef(null);
  const durationRef = useRef(null);

  const openServiceDropdown = ({ currentTarget }) => setServiceDropdown(currentTarget);
  const closeServiceDropdown = () => setServiceDropdown(null);

  const openOperationDropdown = ({ currentTarget }) => setOperationDropdown(currentTarget);
  const closeOperationDropdown = () => setOperationDropdown(null);

  const openCampaignDropdown = ({ currentTarget }) => setCampaignDropdown(currentTarget);
  const closeCampaignDropdown = () => setCampaignDropdown(null);

  const openDurationDropdown = ({ currentTarget }) => setDurationDropdown(currentTarget);
  const closeDurationDropdown = () => setDurationDropdown(null);

  const handleServiceSelect = (event) => {
    setService(event.target.innerText);
    setServiceDropdown(null);
    setOperation("");
  };

  const handleOperationSelect = (event) => {
    setOperation(event.target.innerText);
    setOperationDropdown(null);
    setCampaign("");
  };

  const handleCampaignSelect = (event) => {
    setCampaign(event.target.innerText);
    setCampaignDropdown(null);
    setDuration("");
  };

  const handleDurationSelect = (event) => {
    setDuration(event.target.innerText);
    setDurationDropdown(null);
  };

  const [visibleCard, setVisibleCard] = useState('allServices'); // State to manage which card is visible

  const showAllServices = () => {
    setVisibleCard('allServices');
  };

  const showOperations = () => {
    setVisibleCard('operations');
  };

  const buttonDimensions = {
    width: '150px', // Custom width for buttons
    height: '60px', // Custom height for buttons
  };

  // Styles
  const iconStyles = {
    ml: 1,
    fontWeight: "bold",
    transition: "transform 200ms ease-in-out",
  };

  const dropdownIconStyles = (open) => ({
    transform: open ? "rotate(180deg)" : "rotate(0)",
    ...iconStyles,
  });

  // Ensure elements are set before any updates
  useEffect(() => {
    if (serviceRef.current) {
      serviceRef.current.textContent = service;
    }
    if (operationRef.current) {
      operationRef.current.textContent = operation;
    }
    if (campaignRef.current) {
      campaignRef.current.textContent = campaign;
    }
    if (durationRef.current) {
      durationRef.current.textContent = duration;
    }
  }, [service, operation, campaign, duration]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <Container>
          <Grid container spacing={3} direction="row" justifyContent="space-between" alignItems="center">
            {/* Left Filters */}
            <Grid item>
              <Grid container spacing={3} direction="row" alignItems="center">
                {/* Service dropdown */}
                <Grid item>
                  <Button variant="contained" color="primary" onClick={openServiceDropdown}>
                    {service || "Services"} <Icon sx={dropdownIconStyles(Boolean(serviceDropdown))}>expand_more</Icon>
                  </Button>
                  <Menu anchorEl={serviceDropdown} open={Boolean(serviceDropdown)} onClose={closeServiceDropdown}>
                    <MenuItem onClick={handleServiceSelect}>Service 1</MenuItem>
                    <MenuItem onClick={handleServiceSelect}>Service 2</MenuItem>
                    <MenuItem onClick={handleServiceSelect}>Service 3</MenuItem>
                    <MenuItem onClick={handleServiceSelect}>Service 4</MenuItem>
                    <MenuItem onClick={handleServiceSelect}>Service 5</MenuItem>
                  </Menu>
                </Grid>
                {/* Operation dropdown */}
                <Grid item>
                  <Button variant="contained" color="primary" onClick={openOperationDropdown} disabled={!service}>
                    {operation || "Operations"} <Icon sx={dropdownIconStyles(Boolean(operationDropdown))}>expand_more</Icon>
                  </Button>
                  <Menu anchorEl={operationDropdown} open={Boolean(operationDropdown)} onClose={closeOperationDropdown}>
                    <MenuItem onClick={handleOperationSelect}>Operation 1</MenuItem>
                    <MenuItem onClick={handleOperationSelect}>Operation 2</MenuItem>
                    <MenuItem onClick={handleOperationSelect}>Operation 3</MenuItem>
                    <MenuItem onClick={handleOperationSelect}>Operation 4</MenuItem>
                    <MenuItem onClick={handleOperationSelect}>Operation 5</MenuItem>
                  </Menu>
                </Grid>
                {/* Campaign dropdown */}
                <Grid item>
                  <Button variant="contained" color="primary" onClick={openCampaignDropdown} disabled={!operation}>
                    {campaign || "Campaigns"} <Icon sx={dropdownIconStyles(Boolean(campaignDropdown))}>expand_more</Icon>
                  </Button>
                  <Menu anchorEl={campaignDropdown} open={Boolean(campaignDropdown)} onClose={closeCampaignDropdown}>
                    <MenuItem onClick={handleCampaignSelect}>Campaign 1</MenuItem>
                    <MenuItem onClick={handleCampaignSelect}>Campaign 2</MenuItem>
                    <MenuItem onClick={handleCampaignSelect}>Campaign 3</MenuItem>
                    <MenuItem onClick={handleCampaignSelect}>Campaign 4</MenuItem>
                    <MenuItem onClick={handleCampaignSelect}>Campaign 5</MenuItem>
                  </Menu>
                </Grid>
                {/* Duration dropdown */}
                <Grid item>
                  <Button variant="contained" color="primary" onClick={openDurationDropdown} disabled={!campaign}>
                    {duration || "Duration"} <Icon sx={dropdownIconStyles(Boolean(durationDropdown))}>expand_more</Icon>
                  </Button>
                  <Menu anchorEl={durationDropdown} open={Boolean(durationDropdown)} onClose={closeDurationDropdown}>
                    <MenuItem onClick={handleDurationSelect}>Duration 1</MenuItem>
                    <MenuItem onClick={handleDurationSelect}>Duration 2</MenuItem>
                    <MenuItem onClick={handleDurationSelect}>Duration 3</MenuItem>
                    <MenuItem onClick={handleDurationSelect}>Duration 4</MenuItem>
                    <MenuItem onClick={handleDurationSelect}>Duration 5</MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </Grid>

            {/* Right Filters */}
            
          </Grid>
        </Container>
        <br />
        <br />
        <Card>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">Entries</SoftTypography>
          </SoftBox>
          <SoftBox
            sx={{
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },
            }}
          >
            <Table columns={prCols} rows={prRows} />
          </SoftBox>
          <SoftBox py={3}>
            <SoftBox
              display="flex"
              justifyContent="center"
              gap={10} // Space between buttons
              p={2} // Padding around the SoftBox
            >
              <SoftButton
                variant="gradient"
                sx={buttonDimensions}
                color={visibleCard === 'allServices' ? 'primary' : 'secondary'}
                onClick={showAllServices}
              >
                <Icon sx={{ fontWeight: 'bold' }}>list</Icon>
                &nbsp;view
              </SoftButton>
              <SoftButton
                variant="gradient"
                sx={buttonDimensions}
                color={visibleCard === 'operations' ? 'primary' : 'secondary'}
                onClick={showOperations}
              >
                <Icon sx={{ fontWeight: 'bold' }}>download</Icon>
                &nbsp;Download
              </SoftButton>
            </SoftBox>
          </SoftBox>
          <SoftBox display="flex" justifyContent="center" py={3}>
            <MKPagination>
              <MKPagination item>
                <Icon>keyboard_arrow_left</Icon>
              </MKPagination>
              <MKPagination item active>
                1
              </MKPagination>
              <MKPagination item>2</MKPagination>
              <MKPagination item>3</MKPagination>
              <MKPagination item>4</MKPagination>
              <MKPagination item>5</MKPagination>
              <MKPagination item>
                <Icon>keyboard_arrow_right</Icon>
              </MKPagination>
            </MKPagination>
          </SoftBox>
        </Card>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
