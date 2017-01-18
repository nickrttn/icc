/* eslint react/prefer-stateless-function:0 */
import React, { Component } from 'react';
import { geoMercator } from 'd3-geo';
import styles from './styles.scss';

class UserLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: false,
    };
  }

  componentWillMount() {
    this.requestUserLocation();
  }

  requestUserLocation() {
    const projection = geoMercator();

    if (navigator && 'geolocation' in navigator) {
      // geolocation is available
      navigator.geolocation.getCurrentPosition((position) => {
        const lonLat = [position.coords.longitude, position.coords.latitude];
        // great, we have geolocation, save to state
        this.setState({ userLocation: projection(lonLat) });
      });
    }
  }

  render() {
    const { userLocation } = this.state;

    return !userLocation ? null : (
      <circle r="3" className={styles.UserLocation} cx={userLocation[0]} cy={userLocation[1]} />
    );
  }
}

export default UserLocation;
