/**
=========================================================
* Fast Business Technology React - v3.1.0
=========================================================

* Product Page: https://www.fastbiztechnologies.com/product/fast-biz-tech-pro-react
* Copyright 2023 Fast Business Technologies (https://www.fastbiztechnologies.com)

Coded by www.fastbiztechnologies.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Fade from "@mui/material/Fade";

// Fast Business Technology React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";

// Fast Business Technology React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { black, light } = colors;
const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;

const tooltip = {
  defaultProps: {
    arrow: true,
    TransitionComponent: Fade,
  },

  styleOverrides: {
    tooltip: {
      maxWidth: pxToRem(200),
      backgroundColor: black.main,
      color: light.main,
      fontSize: size.sm,
      fontWeight: fontWeightRegular,
      textAlign: "center",
      borderRadius: borderRadius.md,
      opacity: 0.7,
      padding: `${pxToRem(5)} ${pxToRem(8)} ${pxToRem(4)}`,
    },

    arrow: {
      color: black.main,
    },
  },
};

export default tooltip;
