import MasterCard from "examples/Cards/MasterCard-1";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function BuildByDevelopers() {
  return (
            <Grid  justifyContent="center">
            <Grid item xs={11}>
                <MasterCard holder="jack peterson" expires="11/22" />
              </Grid>
          </Grid>
  );
}

export default BuildByDevelopers;
