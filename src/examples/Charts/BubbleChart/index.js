/**
 * Importing necessary modules
 */
import { useMemo } from "react";
import PropTypes from "prop-types";
import { Bubble } from "react-chartjs-2";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import configs from "examples/Charts/BubbleChart/configs";
import colors from "assets/theme/base/colors";

/**
 * BubbleChart component
 */
function BubbleChart({ title, description, height, width, chart }) {
  // Mapping chart datasets to match the required format
  const chartDatasets = chart.datasets
    ? chart.datasets.map((dataset) => ({
        ...dataset,
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 2,
        backgroundColor: colors[dataset.color]
          ? colors[dataset.color || "dark"].main
          : colors.dark.main,
        borderColor: colors[dataset.color]
          ? colors[dataset.color || "dark"].main
          : colors.dark.main,
        maxBarThickness: 6,
      }))
    : [];

  // Generating chart data and options using configs
  const { data, options } = useMemo(() => configs(chart.labels || [], chartDatasets), [
    chart.labels,
    chartDatasets,
  ]);

  // Rendering the chart
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
      {/* Setting height and width */}
      <SoftBox height={height} width={width}>
        <Bubble data={data} options={options} />
      </SoftBox>
    </SoftBox>
  );

  // Returning the rendered chart
  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default props
BubbleChart.defaultProps = {
  title: "",
  description: "",
  height: "100%",
  width: "100%", // Default width set to 100%
};

// Typechecking props
BubbleChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Adding width prop
  chart: PropTypes.objectOf(PropTypes.array).isRequired,
};

// Exporting the component
export default BubbleChart;
