import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import curved14 from "assets/images/curved-images/white-curved.jpeg";
import masterCardLogo from "assets/images/logos/mastercard.png";

function MasterCard({ color, holder, expires }) {
  return (
    <Card
      sx={{
        maxWidth: "450px",
        background: `url(${curved14})`,
        backgroundSize: "cover",
        padding: "16px",
        borderRadius: "12px",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
      }}
    >
      <SoftBox color="black" p={1} lineHeight={0} display="inline-block">
        <Icon fontSize="default">wifi</Icon>
      </SoftBox>
      <SoftTypography variant="h5" color="black" fontWeight="medium" sx={{ mt: 3, mb: 5, pb: 1 }}>
        Credits: 1000
      </SoftTypography>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center">
        <SoftBox display="flex" alignItems="center">
          <SoftBox mr={3} lineHeight={1}>
            <SoftTypography variant="button" color="black" fontWeight="regular" opacity={0.8}>
              Card Holder
            </SoftTypography>
            <SoftTypography variant="h6" color="black" fontWeight="medium" textTransform="capitalize">
              {holder}
            </SoftTypography>
          </SoftBox>
          <SoftBox lineHeight={1}>
            <SoftTypography variant="button" color="black" fontWeight="regular" opacity={0.8}>
              Expires
            </SoftTypography>
            <SoftTypography variant="h6" color="black" fontWeight="medium">
              {expires}
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox display="flex" justifyContent="flex-end" width="20%">
          <SoftBox component="img" src={masterCardLogo} alt="master card" width="60%" mt={1} />
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

MasterCard.defaultProps = {
  color: "dark",
};

MasterCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  holder: PropTypes.string.isRequired,
  expires: PropTypes.string.isRequired,
};

export default MasterCard;
