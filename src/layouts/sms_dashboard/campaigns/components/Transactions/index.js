/**
=========================================================
* Fast Business Technology React - v4.0.1
=========================================================

* Product Page: https://www.fastbiztechnologies.com/product/fast-biz-tech-react
* Copyright 2023 Fast Business Technologies (https://www.fastbiztechnologies.com)

Coded by www.fastbiztechnologies.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Fast Business Technology React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Billing page components
import Transaction from "layouts/billing/components/Transaction";

function Transactions() {
  return (
    <Card sx={{ height: 610, maxWidth: 500 }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
         Activities
        </SoftTypography>
        <SoftButton variant="outlined" color="info" size="small">
          view all
        </SoftButton>
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
            color="error"
            icon="pending"
            name="Status: TX-MGCPNP | TXN"
            description="21 April 2024, at 12:31 PM"
            value="pending"
          />
          <Transaction
            color="success"
            icon="created"
            name="Code: TX-MGCPNP | TXN"
            description="21 April 2024, at 12:30 AM"
            value="Created"
          />
        </SoftBox>
        <SoftBox mt={1} mb={2}>
          <SoftTypography
            variant="caption"
            color="text"
            fontWeight="bold"
            textTransform="uppercase"
          >
            yesterday
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
            color="error"
            icon="delete"
            name="Code: RM-BEATLYF | PROMO"
            description="01 April 2024, at 8:10 AM"
            value="Deleted"
          />
          <Transaction
            color="success"
            icon="verified"
            name="Status: RM-BEATLYF | PROMO"
            description="12 February 2024, at 13:45 PM"
            value="Verified"
          />
          <Transaction
            color="error"
            icon="pending"
            name="Status: RM-BEATLYF | PROMO"
            description="05 February 2024, at 09:03 AM"
            value="Pending"
          />
          <Transaction
            color="success"
            icon="created"
            name="Code: RM-BEATLYF | PROMO"
            description="05 February 2024, at 09:01 AM"
            value="Created"
          />
          <Transaction
            color="success"
            icon="verified"
            name="Status: VM-EATSRE | PROMO"
            description="21 January 2024, at 18:45 PM"
            value="Verified"
          />
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Transactions;
