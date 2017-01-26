import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import Sticky from 'react-stickynode';
import classNames from 'classnames/bind';
import styles from './styles.scss';

import { throttle } from 'lodash';

import ProcessCommunications from '../ProcessCommunications';
import ProcessDeadEnd from '../ProcessDeadEnd';
import ProcessProgress from '../ProcessProgress';
import ProcessStep from '../ProcessStep';

class Process extends Component {
  constructor(props) {
    super(props);

    this.state = {
      process: null,
      progress: 0,
      progressBarActive: false,
    }

    this.calculateProgress = this.calculateProgress.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleProgress = throttle(this.handleProgress.bind(this), 15);
    this.setProcessType = this.setProcessType.bind(this);
  }

  setProcessType(type) {
    this.setState({ process: type });
  }

  handlePositionChange(currentPosition) {
    if (currentPosition === 'inside') {
      this.setState({ progressBarActive: true });
    } else if (currentPosition === 'above') {
      this.setState({ progressBarActive: true });
    } else {
      this.setState({ progressBarActive: false });
    }
  }

  handleProgress() {
    if (this.state.progressBarActive && this.state.process) {
      this.calculateProgress();
    }
  }

  calculateProgress() {
    const { top, height } = this.Main.getBoundingClientRect();
    if (top - (window.innerHeight * 0.3) <= 0) {
      const progress = (Math.abs(top - (window.innerHeight * 0.3)) / height) * 100 + (((Math.abs(top) + window.innerHeight) / height) * 15);
      if (progress > 100) {
        this.setState({ progress: 100 });
      } else {
        this.setState({ progress });
      }
    }
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

    // processStep must be declared here so the ref callback can refer to it
    let processFirstStep = null;

    function addActiveClass() {
      processFirstStep.classList.add('step-active');
    }

    function removeActiveClass() {
      processFirstStep.classList.remove('step-active');
    }

    return (
      <section onWheel={this.handleProgress} className={styles.Process}>
        <header className={styles.ProcessHeader}>
          <h2>Get involved</h2>
          <p className={styles.ProcessHeaderDescription}>This is how <span>you</span> can make the difference</p>
          <p>Follow the interactive process guiding you through all the necessary steps needed to bring a war criminal to justice through the ICC as an individual. You can either explore the process, start a case, or aid one.</p>
        </header>

        <ProcessProgress progress={this.state.progress} />

        <main ref={ ref => { this.Main = ref; } } className={styles.ProcessStart}>
          <Waypoint onPositionChange={({ currentPosition }) => this.handlePositionChange(currentPosition)} />
          <div className={styles.ProcessFirstStep} ref={ ref => { processFirstStep = ref; } }>
            <Waypoint topOffset="20%" bottomOffset="30%" onEnter={addActiveClass} onLeave={removeActiveClass} />
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

          <div className={styles.ProcessContinuation} id="process-continuation">
            { this.state.process === 'individual' &&
              <div className={styles.ProcessSteps}>
                <ProcessStep>
                  <h3 id="process-start">The process begins</h3>
                  <p>The Office of the Prosecutor, an internal division of the ICC, will examine all information as it is received, and see if the communications adhere to their standards.</p>
                  <ol>
                    <li><p>Does the evidence provide a credible basis for further investigation?</p></li>
                    <li><p>Is the evidence admissible before the Court, in light of the requirements relating to gravity and complementarity with national proceedings?</p></li>
                  </ol>
                  <p>The OTP must give consideration to the interests of justice.</p>
                </ProcessStep>

                <ProcessStep>
                  <h3>Information review</h3>
                  <p>To acquire permission for the start of an investigation, the Office of the Prosecutor submits a request to the Pre-Trial.</p>
                  <ol>
                    <li><p>Must be consistent with the object and purpose of the Rome Statute and its context.</p></li>
                    <li><p>Considers the requirements of international law to prosecute only the most serious crimes.</p></li>
                    <li><p>Justice is a precondition for meaningful peace. Meaning that the investigation should not disrupt the peace.</p></li>
                  </ol>
                </ProcessStep>

                <ProcessStep>
                  <h3>Start of the investigation</h3>
                  <p>The Office of The Prosecutor requests co-operation and help from other nations and international organisations. Investigators are sent to the locations where crimes were committed.</p>
                  <p>When the OTP has gathered enough evidence against a war criminal, it submits a request for arrest or summons to the pre-trial judges. The pre-trial phase of the process officially begins.</p>
                </ProcessStep>

                <p className={styles.ProcessMarker}>Pre-trial phase</p>
                <p className={styles.ProcessMarkerSub}><span>Your</span> job here is done. From here on out you have no influence on the proceedings.</p>

                <ProcessStep>
                  <h3>Start of pre-trial</h3>
                  <p>If the reasons for requesting the arrest or summons of an individual are sufficiently grounded, the pre-trial judges will issue an arrest warrant and a states party will arrest the criminal. The criminal will subsequently appear in court.</p>
                  <p>During the first initial appearance hearing, the pre-trial judges confirm the identity of the suspects and declare the charges of which the criminal is being accused. Practical matters such as the spoken language of the court are also established. During the second initial appearance hearing, the charges are confirmed and the victims are heard.</p>
                  <p>If the judges decide there is enough evidence against the criminal, the judges will summon the criminal to trial.</p>
                </ProcessStep>

                <p className={styles.ProcessMarker}>Trial phase</p>

                <ProcessStep>
                  <h3>Start of trial</h3>
                  <p>When the Trial starts, accusations are checked and the suspect is asked to confirm the information of the victims. After every prosecutor, including the Prosecution, Defence and the victims, is heard, the verdict follows in which the criminal is found to be either guilty or not guilty. The maximum sentence is 30 years. Only in extreme cases, life imprisonment can be demanded. Afterwards, the criminal has the right to appeal.</p>
                </ProcessStep>

                <p className={styles.ProcessMarker}>Appeals</p>

                <ProcessStep>
                  <h3>Start of appeals</h3>
                  <p>Both the Prosecutor and the Defence can appeal. The judges who adjudicate in appeal are always different from the judges during the Trial.</p>
                </ProcessStep>
              </div>
            }
            { this.state.process === 'country' &&
              <div className={styles.ProcessSteps}>
                <ProcessStep>
                  <p>bitches</p>
                </ProcessStep>
              </div>
            }
            { !this.state.process &&
              <div className={styles.ProcessNoChoice}>
                <p>Decide what to do you shall, my padawan.</p>
              </div>
            }

            { this.state.process && <ProcessCommunications /> }
          </div>
        </main>
      </section>
    );
  }
}

export default Process;
