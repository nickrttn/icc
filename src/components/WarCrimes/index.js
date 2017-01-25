import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import styles from './styles.scss';

// SVG's
import bombing from './icons/crimes/bombing.svg';
import childAbuse from './icons/crimes/child-abuse.svg';
import childSoldiers from './icons/crimes/child-soldiers.svg';
import extermination from './icons/crimes/extermination.svg';
import forcedPregnancy from './icons/crimes/forced-pregnancy.svg';
import hostage from './icons/crimes/hostage.svg';
import killing from './icons/crimes/killing.svg';
import mentalHarm from './icons/crimes/mental-harm.svg';
import torture from './icons/crimes/torture.svg';

function WarCrimes() {
  Tabs.setUseDefaultStyles(false);

  return (
    <section className={styles.WarCrimes}>
      <h2 className={styles.WarCrimesTitle}>The crimes the ICC handles</h2>

      <Tabs
        onSelect={this.handleSelect}
        selectedIndex={0}
        className={styles.WarCrimesTabs}
      >
        <TabList className={styles.WarCrimesTabList}>
          <Tab>Genocide</Tab>
          <Tab>Crimes against humanity</Tab>
          <Tab>War crimes</Tab>
        </TabList>

        <TabPanel className={styles.WarCrimesTab}>
          <h3>Genocide</h3>
          <p>According to article 6 of the the Rome Statute, <em>genocide</em> are acts committed with the intent to destroy, in whole or in part, a national, ethnical, racial or religious group.</p>
          <ul className={styles.IconList}>
            <li>
              <img src={killing} alt="Icon of a war criminal shooting another person" />
              <p>Murder</p>
            </li>
            <li>
              <img src={mentalHarm} alt="Icon of a war criminal shouting at a bound person" />
              <p>Mental Harm</p>
            </li>
            <li>
              <img src={childAbuse} alt="Icon of a war criminal beating a bound child" />
              <p>Child abuse</p>
            </li>
            <li>
              <p>Killing members of the group</p>
            </li>
            <li>
              <p>Causing serious bodily or mental harm</p>
            </li>
            <li>
              <p>Deliberately inflicting on the group conditions of life calculated to bring about its physical destruction in whole or in part</p>
            </li>
            <li>
              <p>Imposing measures intended to prevent births</p>
            </li>
            <li>
              <p>Forcibly transferring children of the group to another group</p>
            </li>
          </ul>
        </TabPanel>

        <TabPanel className={styles.WarCrimesTab}>
          <h3>Crimes against humanity</h3>
        </TabPanel>

        <TabPanel className={styles.WarCrimesTab}>
          <h3>War crimes</h3>
        </TabPanel>
      </Tabs>
    </section>
  )
}

export default WarCrimes;
