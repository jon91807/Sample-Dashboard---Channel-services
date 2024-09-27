import React, { useState } from "react";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import { styled } from "@mui/system";

const Root = styled('div')(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 999,
}));

const Card = styled('div')(({ theme }) => ({
  width: "80%",
  maxWidth: 400,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const Title = styled(SoftTypography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  textAlign: "center",
}));

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: "100%",
}));

const CheckboxStyled = styled(Checkbox)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const LinkStyled = styled(SoftTypography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ButtonStyled = styled(SoftButton)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: "100%",
}));

function CardPopup({ open, onClose }) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCVV] = useState("");
  const [agreement, setAgreement] = useState(false);

  const handleSaveCard = () => {
    onClose();
  };

  const handleSetAgreement = () => {
    setAgreement(!agreement);
  };

  return (
    <Root style={{ display: open ? "flex" : "none" }}>
      <Card>
        <Title variant="h5" fontWeight="medium">
          Add New Card
        </Title>
        <TextFieldStyled
          label="Card Number"
          variant="outlined"
          fullWidth
          placeholder="Enter card number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <TextFieldStyled
          label="Expiry (MM/YYYY)"
          variant="outlined"
          fullWidth
          placeholder="Enter expiry date"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
        />
        <TextFieldStyled
          label="CVV"
          variant="outlined"
          fullWidth
          placeholder="Enter CVV"
          value={cvv}
          onChange={(e) => setCVV(e.target.value)}
        />
        <CheckboxStyled
          checked={agreement}
          onChange={handleSetAgreement}
          color="primary"
        />
        <LinkStyled variant="body2">
          I agree to the <Link href="#">Terms and Conditions</Link>
        </LinkStyled>
        <ButtonStyled
          variant="gradient"
          color="primary"
          onClick={handleSaveCard}
        >
          Proceed to Save
        </ButtonStyled>
        <ButtonStyled variant="outlined" color="dark" onClick={onClose}>
          Cancel
        </ButtonStyled>
      </Card>
    </Root>
  );
}

export default CardPopup;
