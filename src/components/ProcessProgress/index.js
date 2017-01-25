import React from 'react';
import styles from './styles.scss';

function ProcessProgress(props) {
  return (
    <aside className={styles.ProcessProgress}>
      <progress max="100" value="10"></progress>
    </aside>
  );
}

export default ProcessProgress;
