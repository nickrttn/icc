/* eslint react/prefer-stateless-function:0 */
import React, { Component, PropTypes } from 'react';
import superagent from 'superagent';
import { feature } from 'topojson';
import { geoPath, geoMercator } from 'd3-geo';

import styles from './styles.scss';

import aleppo from './aleppo.jpg';

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
        this.props.setClosestCase('afghanistan');
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
        <header className={styles.WorldMapHeader}>
          <h2><span>9</span> war crimes <span>75,000</span> victims</h2>
          <p>The crimes on the map have been committed between 2004 and now. Start exploring the map and find out which crimes are being investigated by the International Criminal Court.</p>
        </header>
        <div className={styles.WorldMapContent}>
          { geoData &&
            <svg
              className={styles.WorldMapSVG}
              viewBox="0 0 961 620" preserveAspectRatio="xMidYMin slice"
              ref={(svg) => { this.SVG = svg; }}
            >
              <defs>
                <mask id="worldmap" maskUnits="userSpaceOnUse" className={styles.WorldMapCountries}>
                  { this.renderFeatureCollection() }
                </mask>
              </defs>

              <image xlinkHref={aleppo} className={styles.WorldMapImage} />

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
                  <g id={country.name} key={country.name} className={styles.WorldMapWarCrime} transform={`translate(${country.center[0] - 11} ${country.center[1] - 30})`}>
                    <path d="M10.75 0A10.719 10.719 0 0 0 .018 10.732c0 2.07.661 4.047 1.581 5.671l6.994 12.105c.439.79 1.323 1.186 2.157 1.186.834 0 1.674-.396 2.156-1.186L19.9 16.41c.927-1.624 1.581-3.565 1.581-5.671C21.481 4.802 16.687 0 10.75 0zm0 13.902a3.927 3.927 0 0 1-3.918-3.918 3.927 3.927 0 0 1 3.918-3.917 3.927 3.927 0 0 1 3.917 3.917 3.922 3.922 0 0 1-3.917 3.918z" fill="#FFF"/><ellipse stroke="#9D0000" fill="#9D0000" cx="10.814" cy="10.116" rx="3.837" ry="3.837"/>
                  </g>
                )}
              </g>
            </svg>
          }
        </div>
      </section>
    );
  }
}

WorldMap.propTypes = {
  setClosestCase: PropTypes.func.isRequired,
};

export default WorldMap;
