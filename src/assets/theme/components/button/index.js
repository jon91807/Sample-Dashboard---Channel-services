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

// Fast Business Technology React Button Styles
import root from "assets/theme/components/button/root";
import contained from "assets/theme/components/button/contained";
import outlined from "assets/theme/components/button/outlined";
import buttonText from "assets/theme/components/button/text";

const button = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: { ...root },
    contained: { ...contained.base },
    containedSizeSmall: { ...contained.small },
    containedSizeLarge: { ...contained.large },
    containedPrimary: { ...contained.primary },
    containedSecondary: { ...contained.secondary },
    outlined: { ...outlined.base },
    outlinedSizeSmall: { ...outlined.small },
    outlinedSizeLarge: { ...outlined.large },
    outlinedPrimary: { ...outlined.primary },
    outlinedSecondary: { ...outlined.secondary },
    text: { ...buttonText.base },
    textSizeSmall: { ...buttonText.small },
    textSizeLarge: { ...buttonText.large },
    textPrimary: { ...buttonText.primary },
    textSecondary: { ...buttonText.secondary },
  },
};

export default button;
