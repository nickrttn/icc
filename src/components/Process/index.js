import React, { Component } from 'react';
import styles from './styles.scss';

import ProcessProgress from '../ProcessProgress';
import ProcessStep from '../ProcessStep';

class Process extends Component {

  render () {
    return (
      <section className={styles.Process}>
        <header className={styles.ProcessHeader}>
          <h2>Get involved</h2>
          <p className={styles.ProcessHeaderDescription}>This is how <span>you</span> can make the difference</p>
          <p>Follow the interactive process guiding you through all the necessary steps needed to bring a war criminal to justice through the ICC as an individual. You can either explore the process, start a case, or aid one.</p>
        </header>
        <ProcessProgress />
        <main></main>
      </section>
    );
  }
}

export default Process;
