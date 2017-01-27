/* eslint react/prefer-stateless-function:0 */
import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link, Element, Events, animateScroll, scrollSpy } from 'react-scroll';

import { feature } from 'topojson';
import { geoPath, geoMercator } from 'd3-geo';

import styles from './styles.scss';

import aleppo from './aleppo3.jpg';
import location from './location.svg';

import geoData from './geo-countries.json';

class WorldMap extends Component {
  constructor(props) {
    super(props);

    // initialize an empty state so we can keep render clean(er)
    this.state = {
      userLocation: false,
    };

    this.getProjection = this.getProjection.bind(this);
    this.fetchFeatureCollection = this.fetchFeatureCollection.bind(this);
    this.filterFeatureCollection = this.filterFeatureCollection.bind(this);
    this.renderFeatureCollection = this.renderFeatureCollection.bind(this);

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

  fetchFeatureCollection() {
    const featureCollection = this.getFeatureCollection(geoData);
    this.setState({featureCollection});
  }

  getProjection() {
    // Get the projection function from the path
    const projection = this.path.projection();

    // Return the required values
    return {
      scale: projection.scale(),
      translate: projection.translate(),
      rotation: projection.rotate(),
    };
  }

  getPath() {
    const projection = geoMercator()
      .fitExtent([[20, 20], [961, 620]], this.state.featureCollection)
      .rotate([-11, 0, 0]);

    this.path = geoPath(projection);
  }

  getFeatureCollection(geoData) {
    // Convert the TopoJSON to a GeoJSON FeatureCollection
    const featureCollection = feature(geoData, geoData.objects.geoCountries);

    // Only include the Features that actually do have a geometry (some were removed in simplification)
    featureCollection.features = featureCollection.features.filter(country => country.geometry);

    return featureCollection;
  }

  renderFeatureCollection() {
    const { featureCollection } = this.state;

    // Render a collection of svg paths from the FeatureCollection
    const features = featureCollection.features.map(country => (
      <path key={country.properties.ADMIN} d={this.path(country)} />
    ));

    return features;
  }

  filterFeatureCollection() {
    const { featureCollection } = this.state;
    const path = this.path;

    // Filter GeoJSON Features by countries war crimes have been committed in
    const filteredFeatures = featureCollection.features.filter((country) => {
      const countryName = country.properties.ADMIN;
      return this.countriesWarCrimes.includes(countryName);
    });

    // Map the centers of those countries to an array that includes the country name
    const pathCenters = filteredFeatures.map(country => ({
      name: country.properties.ADMIN,
      center: path.centroid(country),
    }));

    return pathCenters;
  }

  requestUserLocation() {
    const projection = this.path.projection()

    if (navigator && 'geolocation' in navigator) {
      // geolocation is available
      navigator.geolocation.getCurrentPosition((position) => {
        const lonLat = [position.coords.longitude, position.coords.latitude];
        // great, we have geolocation, save to state
        this.setState({ userLocation: projection(lonLat) });
        this.calculateDistanceToUser();
      });
    }
  }

  calculateDistanceToUser() {
    const user = this.User;
    const warCrimes = Array.from(this.WarCrimes.children);

    if (user && warCrimes) {
      const userX = user.transform.baseVal[0].matrix.e;
      const userY = user.transform.baseVal[0].matrix.f;

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

      // warCrimes[0].classList.add('bounce');
      warCrimes[0].style.animationPlayState = 'running';

      this.props.setClosestCase(warCrimes[0].toString());

      this.setState({ closestWarcrime: warCrimes[0].id });
    }
  }

  chooseWarCrime(event, countryName) {
    const selected = document.getElementById(countryName.toString());
    const allWarCrimes = Array.from(this.WarCrimes.children);

    allWarCrimes.forEach(crime => {
      crime.style.animationPlayState = 'paused';
    });
    selected.style.animationPlayState = 'running';
    this.setState({ closestWarcrime: countryName });
  }

  renderWarCrime() {
    const choosenCase = this.state.closestWarcrime;
    console.log(choosenCase);
    this.props.setClosestCase(choosenCase);
  }

  componentWillMount() {
    // fetch the data needed to render countries
    this.fetchFeatureCollection();
  }

  componentDidMount() {
    this.requestUserLocation();

    scrollSpy.update();
  }

  render() {
    const { featureCollection, userLocation } = this.state;

    // Set the required d3-geoPath function to this.path so all functions can access it
    this.getPath();

    return (
      <section className={styles.WorldMapContainer}>
        <header className={styles.WorldMapHeader}>
          <h2><span>9</span> war crimes <span>75,000</span> victims</h2>
          <p>The crimes on the map have been committed between 2004 and now. Start exploring the map and find out which crimes are being investigated by the International Criminal Court.</p>
        </header>

        <div className={styles.closestCase}>
          <p>Closest war crime to you:</p>
          {this.state.userLocation ? <h3>{this.state.closestWarcrime}</h3> : <div className={styles.isLoading}></div>}

          <Link
            className={this.state.userLocation ? `${styles.button} ${styles.buttonRed}` : styles.button}
            to="selectedCase"
            spy={true}
            smooth={true}
            duration={500}
            onClick={event => this.renderWarCrime(event)}
          >Learn more</Link>
        </div>

        <div className={styles.WorldMapContent}>
          { featureCollection &&
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

              <g ref={(ref) => { this.WarCrimes = ref; }}>
                { this.filterFeatureCollection().map(country =>
                  <image // Even though this looks a little nasty, it's just an svg included as an image
                    xlinkHref={location}
                    x={country.center[0] - 11}
                    y={country.center[1] - 30}
                    className={styles.Bounce}
                    id={country.name}
                    key={country.name}
                    onClick={event => this.chooseWarCrime(event, country.name)}
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
}

export default WorldMap;
