import React from 'react';
import styles from './styles.scss';

import Case from '../Case';
import WorldMap from '../WorldMap';

function MapCase() {
  return (
    <section className={styles.mapcase}>
      <WorldMap />
      <Case />
    </section>
  );
}

export default MapCase;
