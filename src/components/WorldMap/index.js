/* eslint react/prefer-stateless-function:0 */
import React, { Component } from 'react';
import superagent from 'superagent';
import { feature } from 'topojson';
import { geoPath, geoMercator } from 'd3-geo';

import styles from './styles.scss';

class WorldMap extends Component {
  constructor(props) {
    super(props);
    // initialize an empty state so we can keep render clean(er)
    this.state = {
      userLocation: false,
    };

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
    return superagent('get', 'data/geo-countries.json')
      .then(result => JSON.parse(result.text))
      .then(geoData => this.getFeatureCollection(geoData))
      .then(geoData => this.setState({ geoData }));
  }

  getProjection() {
    const projection = geoMercator()
      .fitExtent([[20, 20], [961, 620]], this.state.geoData)
      .rotate([-11, 0, 0]);

    return {
      scale: projection.scale(),
      translate: projection.translate(),
      rotation: projection.rotate(),
    };
  }

  getPath() {
    const projection = geoMercator()
      .fitExtent([[20, 20], [961, 620]], this.state.geoData)
      .rotate([-11, 0, 0]);
    const path = geoPath(projection);
    return path;
  }

  getFeatureCollection(geoData) {
    const featureCollection = feature(geoData, geoData.objects.geoCountries);
    featureCollection.features = featureCollection.features.filter(country => country.geometry);
    return featureCollection;
  }

  renderFeatureCollection() {
    const path = this.getPath();
    const features = this.state.geoData.features.map(country => (
      <path key={country.properties.ADMIN} d={path(country)} />
    ));

    return features;
  }

  filterGeoData() {
    const path = this.getPath();

    // Filter the GeoJSON by countries war crimes have been committed in
    const filteredFeatures = this.state.geoData.features.filter((country) => {
      const countryName = country.properties.ADMIN;
      return this.countriesWarCrimes.includes(countryName);
    });

    const pathCenters = filteredFeatures.map(country => ({
      name: country.properties.ADMIN,
      center: path.centroid(country),
    }));

    return pathCenters;
  }

  requestUserLocation() {
    const { scale, rotation, translate } = this.getProjection();

    const projection = geoMercator();
    projection.scale(scale);
    projection.rotate(rotation);
    projection.translate(translate);

    if (navigator && 'geolocation' in navigator) {
      // geolocation is available
      navigator.geolocation.getCurrentPosition((position) => {
        const lonLat = [position.coords.longitude, position.coords.latitude];
        // great, we have geolocation, save to state
        this.setState({ userLocation: projection(lonLat) });
      });
    }
  }

  componentDidMount() {
    // fetch the data needed to render countries
    this.fetchGeodata();
  }

  componentDidUpdate() {
    this.requestUserLocation();

    const user = this.User;
    const warCrimes = Array.from(this.WarCrimes.querySelectorAll('circle'));

    if (user && warCrimes) {
      const userX = user.cx.baseVal.value;
      const userY = user.cy.baseVal.value;

      warCrimes.forEach((crime) => {
        const crimeX = crime.cx.baseVal.value;
        const crimeY = crime.cy.baseVal.value;
        crime.distanceToUser = Math.sqrt(
          ((userX - crimeX) * (userX - crimeX)) +
          ((userY - crimeY) * (userY - crimeY))
        );
      });

      warCrimes.sort((crimeA, crimeB) => {
        return crimeA.distanceToUser - crimeB.distanceToUser;
      });

      warCrimes[0].style = 'fill: blue;';
    }
  }

  render() {
    const { geoData } = this.state;

    return (
      <section className={styles.WorldMapContainer}>
        { geoData &&
          <svg
            className={styles.WorldMapSVG}
            viewBox="0 0 961 620" preserveAspectRatio="xMidYMin slice"
            ref={(svg) => { this.SVG = svg; }}
          >
            <g className={styles.WorldMapCountries}>
              { this.renderFeatureCollection() }
            </g>

            { this.state.userLocation &&
              <g className={styles.WorldMapUser}>
                <circle
                  ref={(ref) => { this.User = ref; }} r="3"
                  cx={this.state.userLocation[0]}
                  cy={this.state.userLocation[1]}
                />
              </g>
            }

            <g ref={(ref) => { this.WarCrimes = ref; }} className={styles.WorldMapWarCrimes}>
              { this.filterGeoData().map(country =>
                <circle
                  key={country.name}
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
