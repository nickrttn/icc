/*eslint react/prefer-stateless-function:0 */
import React, { Component } from 'react';
import superagent from 'superagent';
import { mesh } from 'topojson';
import { geoPath, geoMercator } from 'd3-geo';

import styles from './styles.scss';

class WorldMap extends Component {
  fetchGeodata() {
    superagent('get', 'https://d3js.org/world-110m.v1.json')
      .then(result => JSON.parse(result.text))
      .then(data => this.setState({ geoData: mesh(data, data.objects.countries) }));
  }

  componentDidMount() {
    this.fetchGeodata();
  }

  render() {

    const path = geoPath(geoMercator());

    return (
      <section className={styles.WorldMapContainer}>
      { this.state && this.state.geoData &&
        <svg className={styles.WorldMap}>
          <path d={ path(this.state.geoData) }></path>
        </svg>
      }
      </section>
    );
  }
}

export default WorldMap;
