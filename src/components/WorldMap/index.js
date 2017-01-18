/*eslint react/prefer-stateless-function:0 */
import React, { Component } from 'react';
import superagent from 'superagent';
import { mesh } from 'topojson';
import { geoPath, geoMercator } from 'd3-geo';

import styles from './styles.scss';

class WorldMap extends Component {
  constructor(props) {
    super(props);
    // initialize an empty state so we can keep render clean(er)
    this.state = {};
  }

  fetchGeodata() {
    superagent('get', 'data/geo-countries.json')
      .then(result => JSON.parse(result.text))
      .then(geoData => this.setState({ geoData }));
  }

  requestUserLocation() {
    const projection = geoMercator();

    if (navigator && 'geolocation' in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition((position) => {
        const lonLat = [position.coords.longitude, position.coords.latitude];
        // great, we have geolocation, save to state
        this.setState({ userLocation: projection(lonLat) });
        // user did not give permissions, abort
      }, () => this.setState({ userLocation: false }));
    } else {
      // no geolocation, abort
      this.setState({ userLocation: false });
    }
  }

  componentDidMount() {
    // fetch the data needed to render countries
    this.fetchGeodata();
    // and request the users' location
    this.requestUserLocation();
  }

  render() {
    const { userLocation, geoData } = this.state;
    const path = geoPath(geoMercator());

    return (
      <section className={styles.WorldMapContainer}>
        { geoData &&
          <svg
            className={styles.WorldMap}
            viewBox="0 0 961 620" preserveAspectRatio="xMidYMin slice"
          >
            <g className={styles.WorldMapCountries} transform="translate(0, 192)">
              <path d={path(mesh(geoData, geoData.objects.geoCountries))} />
              { userLocation &&
                <circle className={styles.WorldMapUserPosition} r="2" stroke="none" cx={`${userLocation[0]}`} cy={`${userLocation[1]}`} />
              }
            </g>
          </svg>
        }
      </section>
    );
  }
}

export default WorldMap;
