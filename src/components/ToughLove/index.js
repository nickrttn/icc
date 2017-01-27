import React from 'react';
import styles from './styles.scss';

// Components
import Landing from '../Landing';
import MapCase from '../MapCase';
import Preface from '../Preface';
import Process from '../Process';
import WarCrimes from '../WarCrimes';
import Conditions from '../Conditions';

function ToughLove() {
  return (
    <article className={styles.content}>
      <Landing />
      <MapCase />
      <Preface />
      <WarCrimes />
      <Conditions />
      <Process />
    </article>
  );
}

export default ToughLove;
