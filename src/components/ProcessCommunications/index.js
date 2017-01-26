import React from 'react';
import Sticky from 'react-stickynode';

import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';

import styles from './styles.scss';

function ProcessCommunications() {
  const communications = [
    { name: 'Afghanistan', communications: 112 },
    { name: 'Burundi', communications: 23 },
    { name: 'Colombia', communications: 181 },
    { name: 'Nigeria', communications: 116 },
    { name: 'Gabonese Republic', communications: 14 },
    { name: 'Guinea', communications: 34 },
    { name: 'Iraq/UK', communications: 27 },
  ];

  const width = scaleLinear()
    .domain([0, 200])
    .range([0, 100]);

  return (
    <Sticky top='#process-start' bottom="#process-continuation" className={styles.ProcessCommunications}>
      <h4><span>507</span> individuals already helped bring justice for these cases.</h4>
      <svg className={styles.BarChart} height={communications.length*56} width="100%">
        { communications.map((country, index) => (
          <g key={country.name} className={styles.BarChartCountry} transform={`translate(0 ${index * 56})`}>
            <text x="0" y="20">{country.name}</text>
            <rect
              x="0" y="34"
              width={`${width(country.communications)}%`}
              height="3" />
            <text y="40" x={`${width(country.communications) + 1}%`}>{country.communications}</text>
          </g>
        ))}
      </svg>
    </Sticky>
  );
}

export default ProcessCommunications;
