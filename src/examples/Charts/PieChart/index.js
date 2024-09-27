import { useMemo } from "react";
import PropTypes from "prop-types";
import { Pie } from "react-chartjs-2";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import configs from "examples/Charts/PieChart/configs";

function PieChart({ title, description, height, width, chart }) {
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

  const renderChart = (
    <SoftBox p={2}>
      {title || description ? (
        <SoftBox px={description ? 1 : 0} pt={description ? 1 : 0}>
          {title && (
            <SoftBox mb={1}>
              <SoftTypography variant="h6">{title}</SoftTypography>
            </SoftBox>
          )}
          <SoftBox mb={2}>
            <SoftTypography component="div" variant="button" fontWeight="regular" color="text">
              {description}
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      ) : null}
      {useMemo(() => (
        <SoftBox height={height} width={width}>
          <Pie data={data} options={options} />
        </SoftBox>
      ), [chart, height, width])}
    </SoftBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

PieChart.defaultProps = {
  title: "",
  description: "",
  height: "19.125rem",
  width: "100%", // Default width set to 100%
};

PieChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Prop type for width
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default PieChart;
