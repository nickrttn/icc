import React from 'react';
import styles from './styles.scss';

// Components
import WorldMap from '../WorldMap';
import Introduction from '../Introduction';

function ToughLove() {
  return (
    <article className={styles.content}>
      <Introduction />
      <WorldMap />
    </article>
  );
}

export default ToughLove;
