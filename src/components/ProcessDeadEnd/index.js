import React, { PropTypes } from 'react';
import styles from './styles.scss';

function ProcessDeadEnd(props) {
  return (
    <section className={styles.ProcessDeadEnd}>
      <span>&times;</span>
      <div className={styles.ProcessDeadEndContent}>
        <h4>Possible dead end</h4>
        {props.children}
      </div>
    </section>
  );
}

ProcessDeadEnd.propTypes = {
  children: PropTypes.node,
}

export default ProcessDeadEnd;
