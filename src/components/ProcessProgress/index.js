import React, { PropTypes } from 'react';
import styles from './styles.scss';

function ProcessProgress(props) {
  return (
    <aside className={styles.ProcessProgress}>
      <progress max="100" value={`${props.progress}`}></progress>
    </aside>
  );
}

ProcessProgress.propTypes = {
  progress: PropTypes.number,
};

ProcessProgress.defaultProps = {
  progress: 0,
};

export default ProcessProgress;
