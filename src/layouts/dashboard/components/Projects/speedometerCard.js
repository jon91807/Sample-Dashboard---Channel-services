import React from 'react';
import PropTypes from 'prop-types';
import SoftBox from 'components/SoftBox';
import ReactSpeedometer from 'react-d3-speedometer';
import './style.css'; // Import CSS file for styles

const SpeedometerCard = ({ title, value }) => (
  <SoftBox flex="1" ml={1} sx={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <div className="center">
      <h1 className="title">{title}</h1>
      <div className="speedometer">
        <ReactSpeedometer
          maxValue={100}
          ringWidth={20}
          height={240}
          customSegmentStops={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          segmentColors={[
            "#FF0000", // Red (0-20)
            "#FF0000",
            "#ADD8E6", // Light-blue (20-50)
            "#ADD8E6",
            "#ADD8E6",
            "#FFFF00", // Yellow (50-70)
            "#FFFF00",
            "#90EE90", // Light-green (70-100)
            "#90EE90",
            "#90EE90"
          ]}
          needleTransitionDuration={9000}
          needleTransition="easeElastic"
          currentValueText={`${value} %`}
          value={value}
        />
      </div>
    </div>
  </SoftBox>
);

SpeedometerCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default SpeedometerCard;
