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

/** 
  All of the routes for the Fast Business Technology React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Fast Business Technology React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import SMS from "layouts/sms_dashboard";
import Billing from "layouts/billing";

import Sender_Details from "layouts/sms_dashboard/sender_details"
import Templates from "layouts/sms_dashboard/templates"
import Instant_SMS from "layouts/sms_dashboard/instant_sms"
import Groups from "layouts/sms_dashboard/groups"
import Campaigns from "layouts/sms_dashboard/campaigns"
import Pricing from "components/Pricing"

// Fast Business Technology React icons
import { GiReturnArrow } from "react-icons/gi";
import { TbListDetails } from "react-icons/tb";
import { MdOutlineDashboard } from "react-icons/md";
import { CgTemplate } from "react-icons/cg";


import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";


const sms_routes = [
  {
    type: "collapse",
    name: "Return to Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <GiReturnArrow size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "SMS Dashboard",
    key: "sms_dashboard",
    route: "/sms_dashboard",
    icon: <MdOutlineDashboard size="12px" />,
    component: <SMS />,
    noCollapse: true,
  },
  {
    type: "title",
    title: "Actions",
    key: "Action-pages",
  },
  {
    type: "collapse",
    name: "Sender_Details",
    key: "sender_details",
    route: "/sms_dashboard/sender_details",
    icon: <TbListDetails size="12px" />,
    component: <Sender_Details />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Templates",
    key: "templates",
    route: "/sms_dashboard/templates",
    icon: <CgTemplate size="12px" />,
    component: <Templates />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Instant_SMS",
    key: "instant_sms",
    route: "/sms_dashboard/instant_sms",
    icon: <Shop size="12px" />,
    component: <Instant_SMS />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Groups",
    key: "groups",
    route: "/sms_dashboard/groups",
    icon: <Shop size="12px" />,
    component: <Groups />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Campaigns",
    key: "campaigns",
    route: "/sms_dashboard/campaigns",
    icon: <Shop size="12px" />,
    component: <Campaigns />,
    noCollapse: true,
  },
  {
    type: "title",
    title: "Overview",
    key: "Overview_pages",
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    route: "/billing",
    icon: <Shop size="12px" />,
    component: <Billing />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Report",
    key: "report",
    route: "/billing",
    icon: <Shop size="12px" />,
    component: <Billing />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Analysis",
    key: "analysis",
    route: "/billing",
    icon: <Shop size="12px" />,
    component: <Billing />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Pricing",
    key: "Pricing",
    route: "/Pricing",
    icon: <Shop size="12px" />,
    component: <Pricing />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Developer APIs",
    key: "developer_apis",
    route: "/billing",
    icon: <Shop size="12px" />,
    component: <Billing />,
    noCollapse: true,
  },
];

export default sms_routes;
