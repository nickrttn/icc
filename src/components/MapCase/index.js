/* eslint react/prefer-stateless-function:0 */
import React from 'react';
import styles from './styles.scss';

import Case from '../Case';
import WorldMap from '../WorldMap';

class MapCase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      case: '',
    };

    this.saveCaseToState = this.saveCaseToState.bind(this);
  }

  saveCaseToState(...args) {
    this.setState({ case: args[0] });
  }

  render() {
    return (
      <section className={styles.mapcase}>
        <WorldMap setClosestCase={this.saveCaseToState} />
        <Case case={this.state.case} />
      </section>
    );
  }
}

export default MapCase;
