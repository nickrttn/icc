/* eslint react/prefer-stateless-function:0 */
import React, { Component, PropTypes } from 'react';
import superagent from 'superagent';
import { feature } from 'topojson';
import { geoPath, geoMercator } from 'd3-geo';

import styles from './styles.scss';

import aleppo from './aleppo.jpg';
import location from './location.svg';

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
    const warCrimes = Array.from(this.WarCrimes.children);

    if (user && warCrimes) {
      const userX = user.transform.baseVal[0].matrix.e;
      const userY = user.transform.baseVal[0].matrix.f;

      console.dir(user);

      warCrimes.forEach((crime) => {
        const crimeX = crime.x.baseVal.value;
        const crimeY = crime.y.baseVal.value;

        crime.distanceToUser = Math.sqrt(
          ((userX - crimeX) * (userX - crimeX)) +
          ((userY - crimeY) * (userY - crimeY))
        );
      });

      warCrimes.sort((crimeA, crimeB) => {
        return crimeA.distanceToUser - crimeB.distanceToUser;
      });

      warCrimes[0].classList.add('closest');
      warCrimes[0].style.animationPlayState = 'running';
    }
  }

  render() {
    const { geoData, userLocation } = this.state;

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
                <g
                  ref={(ref) => { this.User = ref; }}
                  transform={`translate(${userLocation[0] - 9} ${userLocation[1] - 35})`}
                  fill="#0C99E7"
                  className={styles.WorldMapUser}
                >
                  <g fill="#0C99E7" transform="translate(4 13)">
                    <ellipse cx="6.327" cy="1.802" rx="1.852" ry="1.802"/>
                    <path d="M10.6206025,1.7078437 C10.9713354,0.546376136 12.7862994,1.06527508 12.4355262,2.22685804 L11.2829341,6.00559012 C11.145827,6.45959299 10.6807443,6.73280591 10.2127675,6.65273371 L8.41741861,6.24591298 L8.43724161,12.1787276 L9.36595528,16.7597297 C9.37684998,16.8140542 9.38258913,16.8681848 9.38354741,16.9216439 L9.64846623,21.0335724 C9.72641762,22.2425012 7.27218603,22.357838 7.19423369,21.1489297 L6.93088549,17.0612495 L6.28008014,13.8511454 L5.62930356,17.0612495 L5.36595536,21.1489297 C5.28800299,22.3578379 2.8337714,22.2425012 2.91172282,21.0335724 L3.1766426,16.9216439 C3.17759992,16.8681847 3.18333906,16.8140542 3.1942242,16.7597297 L4.12294744,12.1787275 L4.14276087,6.24601834 L2.34742156,6.65311788 C1.87944482,6.73319008 1.41436162,6.45997716 1.277255,6.00596495 L0.124859762,2.22705012 C-0.22591292,1.06546741 1.58904192,0.546558687 1.93978491,1.70803578 L2.85058064,4.69467489 C6.20856841,4.11321577 6.35159097,4.1132927 9.70963815,4.69439654 L10.6206025,1.7078437 Z"/>
                  </g>
                </g>
              }

              <g ref={(ref) => { this.WarCrimes = ref; }} className={styles.WorldMapWarCrimes}>
                { this.filterGeoData().map(country =>
                  <image
                    xlinkHref={location}
                    x={country.center[0] - 11}
                    y={country.center[1] - 30}
                    className={styles.WorldMapWarCrime}
                    id={country.name}
                    key={country.name}
                  />
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
