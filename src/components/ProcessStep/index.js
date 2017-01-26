import React, { PropTypes } from 'react';
import Waypoint from 'react-waypoint';
import styles from './styles.scss';

function ProcessStep(props) {
  // processStep must be declared here so the ref callback can refer to it
  let processStep = null;

  function addActiveClass() {
    processStep.classList.add('step-active');
  }

  function removeActiveClass() {
    processStep.classList.remove('step-active');
  }

  return (
    <div className={styles.ProcessStep} ref={ ref => { processStep = ref; } }>
      <Waypoint topOffset="20%" bottomOffset="30%" onEnter={addActiveClass} onLeave={removeActiveClass} />
      {props.children}
    </div>
  );
}

ProcessStep.propTypes = {
  children: PropTypes.node,
};

export default ProcessStep;
