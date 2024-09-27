// website_routes.js

import React from "react";
import FBT from "layouts/fbt"; // Ensure this path is correct based on your project structure

const fbt_routes = [
  {
    type: "collapse",
    name: "Website",
    key: "website",
    route: "/website",
    component: <FBT />,
    noCollapse: true,
  },
];

export default fbt_routes;
