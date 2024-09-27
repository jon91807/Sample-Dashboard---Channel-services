import React, { Component } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import ReactSpeedometer from "react-d3-speedometer";
import "./style.css"; // Import CSS file for styles

class Gauge extends Component {
  render() {
    return (
      <div className="center">
        <h1 className="title">Delivery Rate</h1>
        <div className="speedometer">
          <ReactSpeedometer
            maxValue={100}
            ringWidth={20}
            customSegmentStops={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            segmentColors={[
              "#FAFAFA",
              "#FAFAFA",
              "#FAFAFA",
              "#FAFAFA",
              "#FAFAFA",
              "#007fff",
              "#007fff",
              "#FAFAFA",
              "#FAFAFA",
              "#FAFAFA"
            ]}
            needleTransitionDuration={9000}
            needleTransition="easeElastic"
            currentValueText={`${this.props.value} %`}
            value={this.props.value}
          />
        </div>
      </div>
    );
  }
}

// Add prop type validation
Gauge.propTypes = {
  value: PropTypes.number.isRequired, // Value prop should be a number and is required
};

export default Gauge;
