import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './styles.scss';

function Modal(props) {
  return (
    <ReactCSSTransitionGroup
      transitionName="modal"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      { props.open &&
        <section key="modal" className={styles.Modal}>
          <button
            className={styles.ModalClose}
            onClick={() => props.close() }
          >&times;</button>
          <div className={styles.ModalWindow}>
            <header>
              <h3>{props.title}</h3>
            </header>
            <div className={styles.ModalContent}>
              {props.children}
            </div>
          </div>
        </section>
      }
    </ReactCSSTransitionGroup>
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node,
  close: PropTypes.func,
}

export default Modal;
