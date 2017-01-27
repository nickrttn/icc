import React from 'react';

import styles from './styles.scss';

function Preface() {
  return (
    <section className={styles.Preface}>
      <h1 className={styles.h0}>The ICC steps in</h1>
      <h2>When a country can not or will not convict its own <span>war criminals</span></h2>
      <p>The ICC is the International Criminal Court. They exist to convict the war criminals that have perpetrated the most egregious crimes.</p>
      <p>The Rome Statute is the leading treaty for the trying of these serious crimes. It includes every crime and the process and evidence regulations. The Rome Statue has been approved by 60 nations since 2002.</p>
      <a className={styles.button} href="./data/Rome_Statute_English.pdf" target="_blank">Download Rome Statute (PDF)</a>
    </section>
  );
}

export default Preface;
