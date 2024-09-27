/* eslint-disable react/prop-types */
// Fast Business Technology React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/pdfimg.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Author({ image, name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "invoice", align: "left" },
    { name: "date", align: "left" },
    { name: "status", align: "center" },
    { name: "amount", align: "center" },
    { name: "plan", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      invoice: <Author image={team2} name="Invoice-Dec 2023" email="#012-366-546" />,
      date: <Function job="Dec 1, 2023" org="(07:06 PM)" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="Paid" color="success" size="xs" container />
      ),
      amount: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          ₹5000.00
        </SoftTypography>
      ),
      plan: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          font color="secondary"
          fontWeight="medium"
        >
          Intermediate
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="button"
          color="secondary"
          fontWeight="bold"
        >
          Download
        </SoftTypography>
      ),
    },
    {
      invoice: <Author image={team2} name="Invoice-Dec 2023" email="#012-366-546" />,
      date: <Function job="Dec 1, 2023" org="(07:06 PM)" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="Paid" color="success" size="xs" container />
      ),
      amount: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          ₹5000.00
        </SoftTypography>
      ),
      plan: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          font color="secondary"
          fontWeight="medium"
        >
          Intermediate
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="button"
          color="secondary"
          fontWeight="bold"
        >
          Download
        </SoftTypography>
      ),
    },
    {
      invoice: <Author image={team2} name="Invoice-Dec 2023" email="#012-366-546" />,
      date: <Function job="Dec 1, 2023" org="(07:06 PM)" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="Paid" color="success" size="xs" container />
      ),
      amount: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          ₹5000.00
        </SoftTypography>
      ),
      plan: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          font color="secondary"
          fontWeight="medium"
        >
          Intermediate
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="button"
          color="secondary"
          fontWeight="bold"
        >
          Download
        </SoftTypography>
      ),
    },
    {
      invoice: <Author image={team2} name="Invoice-Dec 2023" email="#012-366-546" />,
      date: <Function job="Dec 1, 2023" org="(07:06 PM)" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="Paid" color="success" size="xs" container />
      ),
      amount: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          ₹5000.00
        </SoftTypography>
      ),
      plan: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          font color="secondary"
          fontWeight="medium"
        >
          Intermediate
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="button"
          color="secondary"
          fontWeight="bold"
        >
          Download
        </SoftTypography>
      ),
    },
    {
      invoice: <Author image={team2} name="Invoice-Dec 2023" email="#012-366-546" />,
      date: <Function job="Dec 1, 2023" org="(07:06 PM)" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="Paid" color="success" size="xs" container />
      ),
      amount: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          ₹5000.00
        </SoftTypography>
      ),
      plan: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          font color="secondary"
          fontWeight="medium"
        >
          Intermediate
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="button"
          color="secondary"
          fontWeight="bold"
        >
          Download
        </SoftTypography>
      ),
    },
    {
      invoice: <Author image={team2} name="Invoice-Dec 2023" email="#012-366-546" />,
      date: <Function job="Dec 1, 2023" org="(07:06 PM)" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="Paid" color="success" size="xs" container />
      ),
      amount: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          ₹5000.00
        </SoftTypography>
      ),
      plan: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          font color="secondary"
          fontWeight="medium"
        >
          Intermediate
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="button"
          color="secondary"
          fontWeight="bold"
        >
          Download
        </SoftTypography>
      ),
    },
  ],
};

export default authorsTableData;
