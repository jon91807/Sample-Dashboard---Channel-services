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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RedditIcon from '@mui/icons-material/Reddit';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


// Fast Business Technology React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Fast Business Technology React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";
import Invoices from "./components/Invoices";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <SoftBox mt={5}
    mb={3}
    display="flex" // Ensure it's a flex container
    justifyContent="center" // Horizontal centering
    alignItems="center" // Vertical centering
  >
    <Grid container spacing={7} justifyContent="center"> {/* Grid-level centering */}
      <Grid item xs={7} md={12} xl={4}>
        <ProfileInfoCard
          title="profile information"
          info={{
            fullName: "Yash Kumar",
            mobile: "+91 9386435271",
            email: "yashkumar22200@explore.com",
            location: "Banaglore, Karnataka",
          }}
          social={[
            {
              link: "https://www.facebook.com/FastBizTech/",
              icon: <FacebookIcon />,
              color: "facebook",
            },
            {
              link: "https://twitter.com/FastBizTech",
              icon: <TwitterIcon />,
              color: "twitter",
            },
            {
              link: "https://www.instagram.com/FastBizTechofficial/",
              icon: <InstagramIcon />,
              color: "instagram",
            },
            {
              link: "https://www.linkedin.com/company/fastbiztech/",
              icon: <LinkedInIcon />,
              color: "linkedin",
            },
            {
              link: "https://www.youtube.com/user/FastBizTech",
              icon: <YouTubeIcon />,
              color: "youtube",
            },
            {
              link: "https://www.pinterest.com/fastbiztech/",
              icon: <PinterestIcon />,
              color: "pinterest",
            },
          ]}
          action={{ route: "", tooltip: "Edit Profile" }}
        />
      </Grid>
          <Grid item xs={12} xl={4}>
            <Invoices />
          </Grid>
        </Grid>
      </SoftBox>
      
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
