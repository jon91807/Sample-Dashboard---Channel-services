// PieChart.js

import React from 'react';
import { Pie } from 'react-chartjs-2';

function PieChart({ data }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <div style={{ height: '200px', width: '500px' }}>
        <Pie
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default PieChart;
