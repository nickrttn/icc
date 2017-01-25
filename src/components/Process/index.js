import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

import ProcessProgress from '../ProcessProgress';
import ProcessStep from '../ProcessStep';

class Process extends Component {
  constructor(props) {
    super(props);

    this.state = {
      process: null,
    }
  }

  setProcessType(type) {
    this.setState({ process: type });
  }

  render () {
    let cx = classNames.bind(styles);

    let countryButtonClass = cx({
      ProcessChoice: true,
      ProcessChoiceActive: this.state.process === 'country',
    });

    let individualButtonClass = cx({
      ProcessChoice: true,
      ProcessChoiceActive: this.state.process === 'individual',
    });

    return (
      <section className={styles.Process}>
        <header className={styles.ProcessHeader}>
          <h2>Get involved</h2>
          <p className={styles.ProcessHeaderDescription}>This is how <span>you</span> can make the difference</p>
          <p>Follow the interactive process guiding you through all the necessary steps needed to bring a war criminal to justice through the ICC as an individual. You can either explore the process, start a case, or aid one.</p>
        </header>

        <ProcessProgress />

        <main className={styles.ProcessSteps}>
          <div className={styles.ProcessFirstStep}>
            <h3>Choose your path</h3>

            <div className={styles.ProcessChoices}>
              <div className={styles.ProcessChoiceContainer}>
                <button className={countryButtonClass} onClick={() => this.setProcessType('country')}>
                  <div className={styles.ProcessChoiceBox}></div>
                  <div className={styles.ProcessChoiceText}>
                    <p>Get your government to submit a case by a petition.</p>
                    <p>You will need to collect a significant amount of signatures. Then you might be able to strong arm your government intro starting an investigation.</p>
                  </div>
                </button>
              </div>

              <div className={styles.ProcessChoiceContainer}>
                <button className={individualButtonClass} onClick={() => this.setProcessType('individual')}>
                  <div className={styles.ProcessChoiceBox}></div>
                  <div className={styles.ProcessChoiceText}>
                    <p>Submit evidence as a witness or victim. This is also possible when you know someone who is one of either.</p>
                    <p>The ICC will send you a form, depending on the crime you reported, which you are required to fill in and send back.</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          { this.state.process === 'individual' &&
            <ProcessStep>
              <p>get crackin'</p>
            </ProcessStep>
          }
          { this.state.process === 'country' &&
            <ProcessStep>
              <p>bitches</p>
            </ProcessStep>
          }
          { !this.state.process &&
            <div className={styles.ProcessNoChoice}>
              <p>Decide what to do you shall, my padawan.</p>
            </div>
          }
        </main>
      </section>
    );
  }
}

export default Process;
