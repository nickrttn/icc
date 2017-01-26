import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import styles from './styles.scss';

function Conditions() {
  Tabs.setUseDefaultStyles(false);

  return (
    <section className={styles.Conditions}>
      <h2 className={styles.WarCrimesTitle}>The crimes the ICC handles</h2>

      <Tabs>
        <TabList>
          <Tab className={styles.button}>Committed in a country that signed the Rome Statute</Tab>
          <Tab className={styles.button}>Committed by a person, born in a country that signed Rome Statute</Tab>
          <Tab className={styles.button}>Referred to ICC by UN Security Council</Tab>
          <Tab className={styles.button}>Referred to ICC by individual</Tab>
        </TabList>

        <TabPanel className={styles.ConditionsTab}>
          <p>The crime has to have been committed from 2002 onward in a country that has signed and approved the Rome Statute. The country is required to have made attempts to try the criminal itself.</p>
          <h4>Commitment to Rome Statute</h4>
        </TabPanel>

        <TabPanel className={styles.ConditionsTab}>
          <p>If the country in which the crime has taken place has not approved the Rome Statute, but the criminal was born in a country that has, the criminal can still be tried.</p>
          <h4>Commitment to Rome Statute</h4>
        </TabPanel>

        <TabPanel className={styles.ConditionsTab}>
          <p>The Security Council is among the 6 most important bodies of the United Nations and is responsible for the preservation of international peace and security. Among other things, they control the launching of peace operations, international sanctions and admission of military actions.</p>
          <h4>Members of Security Council</h4>
        </TabPanel>

        <TabPanel className={styles.ConditionsTab}>
          <p>As an individual you can submit evidence for existing and non-existing cases.</p>
          <h4>Commitment to Rome Statute</h4>
        </TabPanel>

      </Tabs>
    </section>
  );
}
export default Conditions;
