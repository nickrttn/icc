import React from 'react';
import styles from './styles.scss';

// Components
import Landing from '../Landing';
import MapCase from '../MapCase';
import Process from '../Process';
import WarCrimes from '../WarCrimes';

function ToughLove() {
  return (
    <article className={styles.content}>
      <Landing />
      <MapCase />
      <WarCrimes />
      <Process />
    </article>
  );
}

export default ToughLove;
