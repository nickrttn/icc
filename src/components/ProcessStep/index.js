import React, { PropTypes } from 'react';
import styles from './styles.scss';

function ProcessStep(props) {

  return (
    <div className={styles.ProcessStep}>
      {props.children}
    </div>
  );
}

ProcessStep.propTypes = {
  children: PropTypes.node,
};

export default ProcessStep;
