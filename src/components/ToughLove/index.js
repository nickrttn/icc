import React from 'react';
import styles from './styles.scss';

// Components
import Landing from '../Landing';
import MapCase from '../MapCase';
import Preface from '../Preface';
import WarCrimes from '../WarCrimes';
import Conditions from '../Conditions';
import Process from '../Process';
import Footer from '../Footer';



function ToughLove() {
  return (
    <article className={styles.content}>
      <Landing />
      <MapCase />
      <Preface />
      <WarCrimes />
      <Conditions />
      <Process />
      <Footer />
    </article>
  );
}

export default ToughLove;
