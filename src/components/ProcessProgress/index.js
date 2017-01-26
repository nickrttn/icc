import React, { PropTypes } from 'react';
import Waypoint from 'react-waypoint';
import styles from './styles.scss';

function ProcessProgress(props) {
  const progressBarStyle = {
    borderImage: `linear-gradient(to bottom, #D0011B, #D0011B ${props.progress}%, #9b9b9b ${props.progress}%, #9b9b9b) 1 100%`,
  };

  return (
    <aside className={styles.ProcessProgress}>
      <div
        className={styles.ProgressBar} style={progressBarStyle}> </div>
    </aside>
  );
}

ProcessProgress.propTypes = {
  progress: PropTypes.number,
};

ProcessProgress.defaultProps = {
  progress: 10,
};

export default ProcessProgress;
