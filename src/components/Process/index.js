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
import Modal from '../Modal';

class Process extends Component {
  constructor(props) {
    super(props);

    this.state = {
      process: null,
      progress: 0,
      progressBarActive: false,
      modalOpen: false,
      modal: {
        title: '',
        children: '',
      }
    }

    this.closeModal = this.closeModal.bind(this);
    this.calculateProgress = this.calculateProgress.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleProgress = throttle(this.handleProgress.bind(this), 15);
    this.openModal = this.openModal.bind(this);
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

  openModal(type) {
    if (type === 'country') {
      const children = (
        <div>
          <p>If you live in the Netherlands, you can find information on starting an official petition at <a href="https://www.tweedekamer.nl/hoe_werkt_het/uw_mening_telt/petitie">tweedekamer.nl</a>.</p>
          <p>To pull this off, you will need to gather a great amount of signatures. Be prepared to campaign.</p>
          <p>When you don't live in the Netherlands, please let us know. We'll add your country to the list once we find out how to start petitions.</p>
        </div>
      );
      this.setState({
        modalOpen: true,
        modal: {
          title: 'You can start a petition',
          children,
        }
      });
    } else if (type === 'individual-start') {
      const children = (
        <div>
          <p>You can send an email to the <a href="mailto:otp.informationdesk@icc-cpi.int">Office of the Prosecutor</a> in which you explain what you have been through.</p>
          <p>He will send you a form back, depending on the crime you reported, and whether that crime is already under investigation or not.</p>
        </div>
      );

      this.setState({
        modalOpen: true,
        modal: {
          title: 'You can help the ICC',
          children,
        }
      });
    } else if (type === 'individual-during') {
      const children = (
        <div>
          <p>You can send an email to the <a href="mailto:otp.informationdesk@icc-cpi.int">Office of the Prosecutor</a> in which you explain what you have been through.</p>
          <p>He will send you a form back, depending on the crime you reported, and whether that crime is already under investigation or not.</p>
        </div>
      );

      this.setState({
        modalOpen: true,
        modal: {
          title: 'You can help the ICC',
          children,
        }
      });
    }
  }

  closeModal() {
    this.setState({ modalOpen: false });
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

            <div className={styles.processFirstStepIcon}>
              <svg width="31" height="44" viewBox="0 0 31 44"><path fillRule="evenodd" d="M19.5555556,0 L3.27316033,0 C1.46544379,0 0,1.46395874 0,3.27120435 L0,40.7287957 C0,42.535432 1.45187841,44 3.25505793,44 L27.7079051,44 C29.505624,44 30.962963,42.5481216 30.962963,40.7449421 L30.962963,13.037037 L22.8244608,13.037037 C21.0190943,13.037037 19.5555556,11.592034 19.5555556,9.78087187 L19.5555556,0 L19.5555556,0 Z M4.88888889,11.4074074 L4.88888889,13.037037 L13.037037,13.037037 L13.037037,11.4074074 L4.88888889,11.4074074 L4.88888889,11.4074074 Z M4.88888889,6.51851852 L4.88888889,8.14814815 L16.2962963,8.14814815 L16.2962963,6.51851852 L4.88888889,6.51851852 L4.88888889,6.51851852 Z M4.88888889,16.2962963 L4.88888889,17.9259259 L26.0740741,17.9259259 L26.0740741,16.2962963 L4.88888889,16.2962963 L4.88888889,16.2962963 Z M4.88888889,37.4814815 L4.88888889,39.1111111 L26.0740741,39.1111111 L26.0740741,37.4814815 L4.88888889,37.4814815 L4.88888889,37.4814815 Z M21.1851852,0 L21.1851852,9.77300405 C21.1851852,10.6756601 21.9201077,11.4074074 22.7997864,11.4074074 L30.962963,11.4074074 L21.1851852,0 L21.1851852,0 Z M13.037037,22.8148148 L13.037037,24.4444444 L26.0740741,24.4444444 L26.0740741,22.8148148 L13.037037,22.8148148 L13.037037,22.8148148 Z M6.51851852,22.8148148 L6.51851852,24.4444444 L8.14814815,24.4444444 L8.14814815,22.8148148 L6.51851852,22.8148148 L6.51851852,22.8148148 Z M6.51851852,30.962963 L6.51851852,32.5925926 L8.14814815,32.5925926 L8.14814815,30.962963 L6.51851852,30.962963 L6.51851852,30.962963 Z M4.88888889,26.0740741 L9.77777778,26.0740741 L9.77777778,21.1851852 L4.88888889,21.1851852 L4.88888889,26.0740741 Z M13.037037,30.962963 L13.037037,32.5925926 L26.0740741,32.5925926 L26.0740741,30.962963 L13.037037,30.962963 L13.037037,30.962963 Z M4.88888889,29.3333333 L4.88888889,34.2222222 L9.77777778,34.2222222 L9.77777778,29.3333333 L4.88888889,29.3333333 L4.88888889,29.3333333 Z"/></svg>
            </div>

            <div className={styles.ProcessChoices}>
              <div className={styles.ProcessChoiceContainer}>
                <button className={countryButtonClass} onClick={() => this.setProcessType('country')}>
                  <div className={styles.ProcessChoiceBox}></div>
                  <div className={styles.ProcessChoiceText}>
                    <p>Get your government to submit a case by a petition.</p>
                    <p>You will need to collect a significant amount of signatures. Then you might be able to strong arm your government intro starting an investigation.</p>
                  </div>
                </button>
                <button
                  className={styles.ProcessCTAButton}
                  onClick={() => this.openModal('country')}
                >I want to start a petition</button>
              </div>

              <div className={styles.ProcessChoiceContainer}>
                <button className={individualButtonClass} onClick={() => this.setProcessType('individual')}>
                  <div className={styles.ProcessChoiceBox}></div>
                  <div className={styles.ProcessChoiceText}>
                    <p>Submit evidence as a witness or victim. This is also possible when you know someone who is one of either.</p>
                    <p>The ICC will send you a form, depending on the crime you reported, which you are required to fill in and send back.</p>
                  </div>
                </button>
                <button
                  className={styles.ProcessCTAButton}
                  onClick={() => this.openModal('individual-start')}
                >I want to send information</button>
              </div>
            </div>
          </div>

          <div className={styles.ProcessContinuation} id="process-continuation">
            { this.state.process === 'individual' &&
              <div className={styles.ProcessSteps}>
                <ProcessStep>
                  <h3 id="process-start">The process begins</h3>

                  <div className={styles.ProcessStepIcon}>
                    <svg width="59" height="59" viewBox="0 0 59 59"><title>Proces begins</title><path d="M56.54 35.617c-1.668-1.599-2.572-3.823-2.572-6.117s.904-4.449 2.572-6.117c.278-.278.556-.487.904-.765.486-.347.626-.973.486-1.529-.556-2.016-1.39-3.962-2.363-5.77a1.412 1.412 0 0 0-1.39-.695c-.487.07-.834.07-1.182.07-4.796 0-8.689-3.893-8.689-8.62 0-.347 0-.764.07-1.181a1.412 1.412 0 0 0-.696-1.39c-1.807-.974-3.753-1.808-5.769-2.364-.556-.139-1.182.07-1.53.487-.277.347-.555.695-.764.903-1.668 1.599-3.823 2.503-6.117 2.503s-4.518-.904-6.117-2.503c-.278-.278-.487-.556-.765-.903-.347-.487-.973-.626-1.529-.487-2.016.626-3.962 1.39-5.77 2.363a1.412 1.412 0 0 0-.695 1.39c.07.487.07.835.07 1.182 0 4.797-3.893 8.62-8.69 8.62-.347 0-.764 0-1.18-.07a1.412 1.412 0 0 0-1.391.696c-.973 1.807-1.807 3.753-2.363 5.769-.14.556 0 1.182.486 1.53.417.277.695.555.904.764 3.406 3.337 3.406 8.828 0 12.234-.278.278-.556.487-.904.765-.486.347-.626.973-.486 1.529.625 2.016 1.39 3.962 2.363 5.77.278.486.834.764 1.39.695.487-.07.834-.07 1.182-.07 4.796 0 8.689 3.893 8.689 8.62 0 .347 0 .764-.07 1.181-.07.556.209 1.113.696 1.39 1.807.974 3.753 1.808 5.769 2.364.556.139 1.182 0 1.53-.487.277-.347.555-.695.764-.903 1.668-1.599 3.823-2.503 6.117-2.503s4.518.904 6.117 2.503c.278.278.487.556.765.903.278.348.695.556 1.112.556.139 0 .278 0 .417-.069 2.016-.626 3.962-1.39 5.77-2.363.486-.278.764-.835.695-1.39-.07-.487-.07-.835-.07-1.182 0-4.797 3.893-8.62 8.69-8.62.347 0 .764 0 1.18.07a1.412 1.412 0 0 0 1.391-.696c.973-1.807 1.807-3.753 2.363-5.769.14-.556 0-1.182-.486-1.53-.348-.277-.695-.486-.904-.764zM29.5 12.957c-9.106 0-16.544 7.437-16.544 16.543 0 9.106 7.438 16.544 16.544 16.544 9.106 0 16.544-7.438 16.544-16.544 0-9.106-7.438-16.544-16.544-16.544z"/></svg>
                  </div>

                  <p>The Office of the Prosecutor, an internal division of the ICC, will examine all information as it is received, and see if the communications adhere to their standards.</p>
                  <ol>
                    <li><p>Does the evidence provide a credible basis for further investigation?</p></li>
                    <li><p>Is the evidence admissible before the Court, in light of the requirements relating to gravity and complementarity with national proceedings?</p></li>
                  </ol>
                  <p>The OTP must give consideration to the interests of justice.</p>
                </ProcessStep>

                <ProcessStep>
                  <h3>Information review</h3>

                  <div className={styles.ProcessStepIcon}>
                    <svg width="46" height="46" viewBox="0 0 46 46"><path d="M28.479 32.572a17.316 17.316 0 0 1-10.084 3.219C8.788 35.79 1 28.003 1 18.395 1 8.788 8.788 1 18.395 1c9.608 0 17.396 7.788 17.396 17.395 0 3.76-1.192 7.24-3.22 10.084l11.43 11.43a2.852 2.852 0 0 1 0 4.044l-.048.048a2.863 2.863 0 0 1-4.045 0l-11.43-11.43zm-10.084-.874c7.347 0 13.303-5.956 13.303-13.303 0-7.346-5.956-13.302-13.303-13.302-7.346 0-13.302 5.956-13.302 13.302 0 7.347 5.956 13.303 13.302 13.303z" /></svg>
                  </div>

                  <p>To acquire permission for the start of an investigation, the Office of the Prosecutor submits a request to the Pre-Trial.</p>
                  <ol>
                    <li><p>Must be consistent with the object and purpose of the Rome Statute and its context.</p></li>
                    <li><p>Considers the requirements of international law to prosecute only the most serious crimes.</p></li>
                    <li><p>Justice is a precondition for meaningful peace. Meaning that the investigation should not disrupt the peace.</p></li>
                  </ol>
                </ProcessStep>

                <ProcessStep>
                  <h3>Start of the investigation</h3>
                  <div className={styles.ProcessStepIcon}>
                    <svg width="38" height="45" viewBox="0 0 38 45">
                      <defs>
                        <path id="a" d="M10.5147059,9.49019608 L5.87343059,10.2348918 C5.54089412,10.2832918 5.31256,10.5879271 5.36067529,10.9204635 C5.38886118,11.1089388 5.50929176,11.2772 5.68125412,11.36916 C13.9693271,15.0202282 23.4115976,15.0202282 31.7036565,11.36916 C32.00032,11.2128565 32.1122094,10.8521341 31.9601765,10.5557553 C31.8679318,10.3832235 31.6996706,10.2633624 31.5111953,10.2348918 L27.122549,9.49019608 C26.5653796,6.98535373 25.3270988,3.10927294 23.8241365,1.03319765 C23.1750071,0.127548235 21.9123365,-0.0728847059 21.0106729,0.576529412 C20.9468988,0.624644706 20.8865412,0.676461176 20.8304541,0.728562353 C19.6201694,1.84290118 17.7604706,1.84290118 16.5538871,0.728562353 C15.7322259,-0.0247694118 14.4618682,0.0313176471 13.7085365,0.845007059 C13.6564353,0.90508 13.6043341,0.965152941 13.5562188,1.03319765 C12.0532565,3.10927294 11.0718753,6.98535373 10.5147059,9.49019608 Z"/>
                        <mask id="b" width="28.674" height="15.912" x="-1" y="-1">
                          <rect width="28.674" height="15.912" x="4.354" y="-.804" fill="white"/>
                          <use fill="black" xlinkHref="#a"/>
                        </mask>
                      </defs>
                      <g fill="none" fillRule="evenodd" transform="translate(0 1)">
                        <path fill="#FFFFFF" d="M31.4068323 28.206789C31.4068323 28.206789 27.6705421 27.0869533 25.6840181 25.8246308 25.5264131 25.723645 25.379315 25.6226592 25.2469268 25.5223651 25.188788 25.4580385 25.0052657 25.3314604 24.9478275 25.2629838 24.7502958 25.1246471 24.6508295 24.9939189 24.461003 24.7497546 24.1675074 27.5434645 23.0313501 32.8922535 23.0313501 32.8922535 22.2461268 31.6140223 21.5463604 30.7335091 20.9488622 30.1234442 20.6749796 31.0648256 20.3821845 31.6942576 20.0998964 32.1092677 21.0301163 35.3664057 21.4588021 42.8628722 21.5015305 43.6313327 25.2119035 43.2910243 31.8481264 42.4416369 36.2827821 40.4910892 36.2827821 40.4910892 37.1905871 40.2745923 37.2277119 38.1919331 37.2277119 38.1919331 36.9005938 34.0985497 34.0987264 30.0023996 34.0987264 30.0030913 33.2966919 28.9247566 31.4068323 28.206789zM23.2358865 23.6859452C23.2975275 23.54 23.3542654 23.3982049 23.3997957 23.2681684 23.3801826 23.104931 23.3689752 22.9375436 23.3675742 22.7646227L23.3661733 22.5993103 23.4719438 22.4727323C23.5763134 22.3496126 23.6799824 22.2237262 23.7787483 22.0964564L23.8431912 22.0148377C23.8719104 21.9774868 23.8985281 21.9387525 23.9265468 21.9007099 24.5702758 21.0354138 25.0991283 20.0677485 25.454265 19.0910913L25.4885879 18.997714 25.5586345 18.9285456C26.0552655 18.4388337 26.4047985 17.2090203 26.4965597 16.7781014L26.5147718 16.7206917C26.9602687 15.4839615 26.7732441 14.9880243 26.6730773 14.8317039L26.5567998 14.6539412 26.6247451 14.4526613C26.6730773 14.3157079 27.7517963 11.0537282 26.2689079 8.58095943L26.2177739 8.45092292C26.1981608 8.36031237 25.6588013 6.17805071 22.9704095 5.17510953L22.8954596 5.13775862C21.659836 4.39074037 19.8890558 4.22266126 18.6149066 4.24687018L18.6149066 4.25171197C17.340057 4.22681136 15.5699772 4.39558215 14.3343537 5.14260041L14.2594037 5.17995132C11.5717124 6.18289249 11.0323529 8.36446247 11.0120394 8.45507302L10.9588039 8.58580122C9.47591559 11.0578783 10.5546345 14.3205497 10.6029668 14.457503L10.670912 14.658783 10.5546345 14.8365456C10.4530669 14.9935578 10.2667427 15.4894949 10.7129401 16.7262252L10.7311522 16.7836349C10.8229134 17.2152454 11.1717458 18.4443671 11.6690773 18.9347708L11.7384235 19.0039391 11.7734469 19.0973164C12.1439938 20.1161663 12.7022659 21.1274077 13.3845206 22.0203712L13.4489636 22.1012982C13.5484299 22.228568 13.650698 22.355146 13.7557681 22.4782657L13.8615386 22.6041521 13.8601376 22.7687728C13.8587367 22.9416937 13.8475292 23.1097728 13.8272157 23.2730101 14.3175425 24.6632941 15.6932594 27.0357688 18.0895565 28.0622272 18.2569681 28.134854 18.4327852 28.1991805 18.6142062 28.2565903L18.6142062 28.2510568C18.7956271 28.1929554 18.9721447 28.1286288 19.1388558 28.0573854 21.3096026 27.1284544 22.6404896 25.0949047 23.2358865 23.6859452zM14.1956613 32.8970953C14.1956613 32.8970953 13.059504 27.548998 12.7660084 24.755288 12.5768824 25.000144 12.4781165 25.1294888 12.2798844 25.2678256 12.2224461 25.3363022 12.0389238 25.4628803 11.9807851 25.5285903 11.8483968 25.6281927 11.7019993 25.7284868 11.5436937 25.8301643 9.55716975 27.0931785 5.82087955 28.2116308 5.82087955 28.2116308 3.93031951 28.9309817 3.12898543 30.0086247 3.12898543 30.0086247.327118021 34.1040832 0 38.1974665 0 38.1974665.0371247432 40.2815091.944929785 40.4973144.944929785 40.4973144 5.3781845 42.4478621 12.0151079 43.2965578 15.7254809 43.6361744 15.7682093 42.8684057 16.1968951 35.3726308 17.127115 32.1148012 16.8441264 31.7004828 16.5513313 31.070359 16.2781492 30.1289777 15.67925 30.7390426 14.9808846 31.6202475 14.1956613 32.8970953z"/>
                        <use fill="#FFFFFF" xlinkHref="#a"/>
                        <use stroke="#1A1A1A" strokeWidth="2" mask="url(#b)" xlinkHref="#a"/>
                      </g>
                    </svg>
                  </div>
                  <p>The Office of The Prosecutor requests co-operation and help from other nations and international organisations. Investigators are sent to the locations where crimes were committed.</p>
                  <p>When the OTP has gathered enough evidence against a war criminal, it submits a request for arrest or summons to the pre-trial judges. The pre-trial phase of the process officially begins.</p>
                </ProcessStep>

                <p className={styles.ProcessMarker}>Pre-trial phase</p>
                <p className={styles.ProcessMarkerSub}><span>Your</span> job here is done. From here on out you have no influence on the proceedings.</p>

                <ProcessStep>
                  <h3>Start of pre-trial</h3>

                  <div className={styles.ProcessStepIcon}>
                    <svg width="46" height="45" viewBox="0 0 46 45"><g fill="#FFF" fillRule="evenodd"><path d="M18.168 10.367l-.817-.817a.94.94 0 0 1 0-1.328l6.718-6.718a.94.94 0 0 1 1.327 0l.818.818a.94.94 0 0 1 0 1.327l-6.718 6.718a.94.94 0 0 1-1.328 0zM33.188 25.387l-.818-.817a.94.94 0 0 1 0-1.328l6.719-6.718a.94.94 0 0 1 1.327 0l.818.817a.94.94 0 0 1 0 1.328l-6.718 6.718a.94.94 0 0 1-1.328 0z"/><path d="M39.089 15.195l-.945-.945a.753.753 0 0 0-1.067-.007.76.76 0 0 1-1.08.007l-7.51-7.51a.752.752 0 0 1-.006-1.065.76.76 0 0 0 .007-1.08l-.945-.945a.94.94 0 0 0-1.328 0l-6.718 6.718a.94.94 0 0 0 0 1.328l.945.945a.752.752 0 0 0 1.066.007.76.76 0 0 1 1.08-.007l1.21 1.21a1.322 1.322 0 0 1 0 1.87L17.76 21.76l-1.072-1.073a1.517 1.517 0 1 0-2.146 2.145l1.073 1.073L8.2 31.321a3.886 3.886 0 0 1-1.805 1.021l-2.204.551a3.886 3.886 0 0 0-1.805 1.022l-.247.247a3.887 3.887 0 0 0 0 5.495l.943.943a3.886 3.886 0 0 0 5.494 0l.246-.247a3.886 3.886 0 0 0 1.022-1.804l.551-2.204a3.886 3.886 0 0 1 1.022-1.805l7.415-7.415 1.073 1.072a1.517 1.517 0 1 0 2.145-2.145l-1.072-1.073 6.038-6.038a1.322 1.322 0 0 1 1.87 0l1.21 1.21a.753.753 0 0 1 .007 1.067.76.76 0 0 0-.007 1.08l.946.945a.94.94 0 0 0 1.327 0l6.719-6.719a.939.939 0 0 0 .002-1.329zM45 44.772H29.069a4.551 4.551 0 0 1 4.552-4.551h6.827A4.551 4.551 0 0 1 45 44.772z"/><path d="M41.966 40.22h-9.863a.758.758 0 1 1 0-1.517h9.863a.758.758 0 1 1 0 1.518z"/></g></svg>
                  </div>

                  <p>If the reasons for requesting the arrest or summons of an individual are sufficiently grounded, the pre-trial judges will issue an arrest warrant and a states party will arrest the criminal. The criminal will subsequently appear in court.</p>
                  <p>During the first initial appearance hearing, the pre-trial judges confirm the identity of the suspects and declare the charges of which the criminal is being accused. Practical matters such as the spoken language of the court are also established. During the second initial appearance hearing, the charges are confirmed and the victims are heard.</p>
                  <p>If the judges decide there is enough evidence against the criminal, the judges will summon the criminal to trial.</p>
                </ProcessStep>

                <p className={styles.ProcessMarker}>Trial phase</p>

                <ProcessStep>
                  <h3>Start of trial</h3>

                  <div className={styles.ProcessStepIcon}>
                    <svg width="49" height="46" viewBox="0 0 49 46"><g transform="translate(1 1)" fill="#FFF" fillRule="evenodd"><path d="M37.322 34.395c-5.245 0-9.513-3.611-9.513-8.05 0-.404.327-.732.732-.732h17.563c.404 0 .732.328.732.732 0 4.439-4.268 8.05-9.514 8.05zm-8-7.318c.446 3.289 3.864 5.854 8 5.854 4.137 0 7.554-2.565 8-5.854h-16zM.731 27.077a.732.732 0 0 1-.657-1.052L8.25 9.194a.732.732 0 0 1 1.317.64L1.39 26.664a.732.732 0 0 1-.659.412z"/><path d="M18.296 27.077a.732.732 0 0 1-.659-.412L9.461 9.833a.732.732 0 0 1 1.316-.64l8.177 16.832a.732.732 0 0 1-.658 1.052zM28.54 27.077a.732.732 0 0 1-.657-1.052l8.176-16.831a.732.732 0 0 1 1.316.64L29.2 26.664a.732.732 0 0 1-.66.412z"/><path d="M46.105 27.077a.732.732 0 0 1-.66-.412L37.27 9.833a.732.732 0 0 1 1.317-.64l8.176 16.832a.732.732 0 0 1-.657 1.052zM8.05 8.39a.729.729 0 0 1-.336-.08A6.59 6.59 0 0 1 6.08 7.113L4.605 5.64A.732.732 0 1 1 5.64 4.605L7.114 6.08a5.11 5.11 0 0 0 1.272.93.732.732 0 0 1-.337 1.382zM10.976 9.038a.731.731 0 0 1-.029-1.463 5.084 5.084 0 0 0 1.981-.49l7.982-3.78a.731.731 0 1 1 .625 1.324l-7.98 3.78a6.535 6.535 0 0 1-2.579.629zM38.787 8.39a.732.732 0 0 1-.337-1.381 5.106 5.106 0 0 0 1.272-.93l1.474-1.474A.732.732 0 1 1 42.23 5.64l-1.474 1.474a6.582 6.582 0 0 1-1.635 1.195.73.73 0 0 1-.335.082zM35.86 9.038h-.031a6.543 6.543 0 0 1-2.549-.63l-7.98-3.78a.732.732 0 1 1 .626-1.322l7.981 3.78c.625.296 1.292.46 1.982.489a.732.732 0 0 1-.03 1.463zM21.954 38.054V4.681h2.928v33.373"/><path d="M23.418 37.322a5.861 5.861 0 0 0-5.854 5.855.732.732 0 1 0 1.463 0h8.782a.732.732 0 1 0 1.463 0 5.861 5.861 0 0 0-5.854-5.855z"/><path d="M32.2 43.909H14.636a.732.732 0 1 1 0-1.464H32.2a.732.732 0 1 1 0 1.464zM18.295 25.613H.732a.732.732 0 0 0-.732.732c0 4.439 4.268 8.05 9.514 8.05 5.245 0 9.513-3.611 9.513-8.05a.732.732 0 0 0-.732-.732z"/><path d="M.732 25.613a.732.732 0 0 0-.732.732c0 4.439 4.268 8.05 9.514 8.05v-8.782H.732zM46.104 25.613H28.541a.732.732 0 0 0-.732.732c0 4.439 4.268 8.05 9.513 8.05 5.246 0 9.514-3.611 9.514-8.05a.732.732 0 0 0-.732-.732z"/><path d="M28.54 25.613a.732.732 0 0 0-.731.732c0 4.439 4.268 8.05 9.513 8.05v-8.782h-8.781z"/><circle cx="9.514" cy="8.05" r="2.195"/><ellipse cx="37.322" cy="8.05" rx="2.195" ry="2.195"/><circle cx="23.418" cy="2.927" r="2.927"/><circle cx="23.418" cy="2.927" r="1.464"/></g></svg>
                  </div>

                  <p>When the Trial starts, accusations are checked and the suspect is asked to confirm the information of the victims. After every prosecutor, including the Prosecution, Defence and the victims, is heard, the verdict follows in which the criminal is found to be either guilty or not guilty. The maximum sentence is 30 years. Only in extreme cases, life imprisonment can be demanded. Afterwards, the criminal has the right to appeal.</p>
                </ProcessStep>

                <p className={styles.ProcessMarker}>Appeals</p>

                <ProcessStep>
                  <h3>Start of appeals</h3>

                  <div className={styles.ProcessStepIcon}>
                    <svg width="49" height="41" viewBox="0 0 49 41"><g fill="none" fillRule="evenodd"><path fill="#1A1A1A" d="M5.976 17.14h37.63v19.589H5.977z"/><g fill="#F4F4F4"><path d="M47.697 38.362H1.886v-1.633c0-.45.366-.816.818-.816H46.88c.451 0 .818.366.818.816v1.633zM46.88 17.957H2.703a.817.817 0 0 1-.818-.817v-1.632h45.811v1.632c0 .451-.366.817-.818.817z"/></g><g fill="#FFF"><path d="M47.697 39.994H1.886a.817.817 0 0 1-.818-.816v-.816c0-.451.366-.817.818-.817h45.812c.451 0 .818.366.818.817v.816c0 .45-.367.816-.819.816zM47.697 16.324H1.886a.817.817 0 0 1-.818-.816v-1.15c0-.298.162-.572.423-.715L24 1.25a1.64 1.64 0 0 1 1.581 0l22.51 12.392c.261.143.423.417.423.714v1.151c0 .45-.366.816-.818.816z"/></g><path d="M6.794 19.589H3.522a.817.817 0 0 1-.818-.816v-.816h4.908v.816c0 .45-.366.816-.818.816z" fill="#F4F4F4"/><path fill="#FFF" d="M3.522 19.589h3.272v16.324H3.522z"/><g fill="#F4F4F4"><path d="M3.522 34.28h3.272c.452 0 .818.366.818.817v.816H2.704v-.816c0-.45.366-.816.818-.816zM26.428 19.589h-3.272a.817.817 0 0 1-.819-.816v-.816h4.909v.816c0 .45-.366.816-.818.816z"/></g><path fill="#FFF" d="M23.156 19.589h3.272v16.324h-3.272z"/><g fill="#F4F4F4"><path d="M23.156 34.28h3.272c.452 0 .818.366.818.817v.816h-4.909v-.816c0-.45.367-.816.819-.816zM19.883 19.589h-3.272a.817.817 0 0 1-.818-.816v-.816H20.7v.816c0 .45-.366.816-.818.816z"/></g><path fill="#FFF" d="M16.61 19.589h3.273v16.324H16.61z"/><g fill="#F4F4F4"><path d="M16.611 34.28h3.272c.452 0 .818.366.818.817v.816h-4.908v-.816c0-.45.366-.816.818-.816zM13.339 19.589h-3.272a.817.817 0 0 1-.819-.816v-.816h4.909v.816c0 .45-.366.816-.818.816z"/></g><path fill="#FFF" d="M10.067 19.589h3.272v16.324h-3.272z"/><g fill="#F4F4F4"><path d="M10.066 34.28h3.273c.451 0 .818.366.818.817v.816H9.248v-.816c0-.45.367-.816.818-.816zM32.972 19.589H29.7a.817.817 0 0 1-.818-.816v-.816h4.908v.816c0 .45-.366.816-.818.816z"/></g><path fill="#FFF" d="M29.7 19.589h3.272v16.324H29.7z"/><g fill="#F4F4F4"><path d="M29.7 34.28h3.272c.452 0 .818.366.818.817v.816h-4.908v-.816c0-.45.366-.816.818-.816zM46.061 19.589H42.79a.817.817 0 0 1-.818-.816v-.816h4.908v.816c0 .45-.366.816-.818.816z"/></g><path fill="#FFF" d="M42.789 19.589h3.272v16.324h-3.272z"/><g fill="#F4F4F4"><path d="M42.79 34.28h3.271c.452 0 .818.366.818.817v.816h-4.908v-.816c0-.45.366-.816.818-.816zM39.517 19.589h-3.272a.817.817 0 0 1-.818-.816v-.816h4.908v.816c0 .45-.366.816-.818.816z"/></g><path fill="#FFF" d="M36.245 19.589h3.272v16.324h-3.272z"/><path d="M36.245 34.28h3.272c.452 0 .818.366.818.817v.816h-4.909v-.816c0-.45.367-.816.819-.816zM24.792 4.545l15.467 8.514H9.324l15.468-8.514" fill="#F4F4F4"/></g></svg>
                  </div>

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

            { this.state.process && <ProcessCommunications openModal={this.openModal} /> }
          </div>
        </main>

        <Modal
          open={this.state.modalOpen}
          close={this.closeModal}
          title={this.state.modal.title}>{this.state.modal.children}</Modal>
      </section>
    );
  }
}

export default Process;
