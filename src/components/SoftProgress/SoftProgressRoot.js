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
import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";

export default styled(LinearProgress)(({ theme, ownerState }) => {
  const { palette, functions } = theme;
  const { color, value, variant } = ownerState;

  const { text, gradients } = palette;
  const { linearGradient } = functions;

  // background value
  let backgroundValue;

  if (variant === "gradient") {
    backgroundValue = gradients[color]
      ? linearGradient(gradients[color].main, gradients[color].state)
      : linearGradient(gradients.info.main, gradients.info.state);
  } else {
    backgroundValue = palette[color] ? palette[color].main : palette.info.main;
  }

  return {
    "& .MuiLinearProgress-bar": {
      background: backgroundValue,
      width: `${value}%`,
      color: text.main,
    },
  };
});