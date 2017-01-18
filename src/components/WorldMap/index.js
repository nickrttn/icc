/* eslint react/prefer-stateless-function:0 */
import React, { Component } from 'react';
import superagent from 'superagent';
import { feature, mesh } from 'topojson';
import { geoPath, geoMercator } from 'd3-geo';

import UserLocation from '../UserLocation';

import styles from './styles.scss';

class WorldMap extends Component {
  constructor(props) {
    super(props);
    // initialize an empty state so we can keep render clean(er)
    this.state = {};
    this.countriesWarCrimes = [
      'Afghanistan',
      'Burundi',
      'Colombia',
      'Gabon',
      'Guinea',
      'Iraq',
      'United Kingdom',
      'Nigeria',
      'Palestine',
      'Ukraine',
    ];
  }

  fetchGeodata() {
    superagent('get', 'data/geo-countries.json')
      .then(result => JSON.parse(result.text))
      .then(geoData => this.setState({ geoData }));
  }

  filterGeoData() {
    const { geoData } = this.state;
    const path = geoPath(geoMercator());

    // Convert the geodata to GeoJSON
    const featureCollection = feature(geoData, geoData.objects.geoCountries);

    // Filter the GeoJSON by countries war crimes have been committed in
    const filteredFeatures = featureCollection.features.filter(country => {
      const countryName = country.properties.ADMIN;
      return this.countriesWarCrimes.includes(countryName);
    });

    const pathCenters = filteredFeatures.map((country) => {
      return {
        name: country.properties.ADMIN,
        center: path.centroid(country),
      };
    });

    return pathCenters;
  }

  componentDidMount() {
    // fetch the data needed to render countries
    this.fetchGeodata();
  }

  render() {
    const { geoData } = this.state;
    const path = geoPath(geoMercator());

    return (
      <section className={styles.WorldMapContainer}>
        <div className={styles.WorldMapContent}></div>
        <div className={styles.WorldMap}></div>
        { geoData &&
          <svg
            className={styles.WorldMapSVG}
            viewBox="0 0 961 620" preserveAspectRatio="xMidYMin slice"
          >
            <g className={styles.WorldMapCountries} transform="translate(0, 192)">
              <path d={path(mesh(geoData, geoData.objects.geoCountries))} />
              <UserLocation />
              { this.filterGeoData().map(country =>
                <circle
                  key={country.name}
                  className={styles.WorldMapCountryHighlight}
                  r="3" fill="blue" stroke="none"
                  cx={`${country.center[0]}`}
                  cy={`${country.center[1]}`}
                />
              )}
            </g>
          </svg>
        }
      </section>
    );
  }
}

export default WorldMap;
