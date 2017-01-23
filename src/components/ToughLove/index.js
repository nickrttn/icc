import React from 'react';
import styles from './styles.scss';

// Components
import Landing from '../Landing';
import MapCase from '../MapCase';

function ToughLove() {
  return (
    <article className={styles.content}>
      <Landing />
      <MapCase />
    </article>
  );
}

export default ToughLove;
