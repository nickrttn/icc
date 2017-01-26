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

import afghanistan from './icons/countries/Afghanistan.svg';
import burundi from './icons/countries/Burundi.svg';
import colombia from './icons/countries/Colombia.svg';
import gabon from './icons/countries/Gabon.svg';
import guinea from './icons/countries/Guinea.svg';
import iraq from './icons/countries/Iraq.svg';
import nigeria from './icons/countries/Nigeria.svg';
import palestine from './icons/countries/Palestine.svg';
import ukraine from './icons/countries/Ukraine.svg';

function WarCrimes() {
  Tabs.setUseDefaultStyles(false);

  return (
    <section className={styles.WarCrimes}>
      <h2 className={styles.WarCrimesTitle}>The crimes the ICC handles</h2>

      <Tabs className={styles.WarCrimesTabs}>
        <TabList className={styles.WarCrimesTabList}>
          <Tab className={styles.button}>Genocide</Tab>
          <Tab className={styles.button}>Crimes against humanity</Tab>
          <Tab className={styles.button}>War crimes</Tab>
        </TabList>

        <TabPanel className={styles.WarCrimesTab}>
          <h3>Genocide</h3>
          <p>According to article 6 of the the Rome Statute, <em>genocide</em> are acts committed with the intent to destroy, in whole or in part, a national, ethnical, racial or religious group.</p>
          <h4>Genocide according to the Rome Statute</h4>
          <ol className={styles.IconList}>
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
              <p>Inflicting conditions of life on a group calculated to bring about its physical destruction in whole or in part</p>
            </li>
            <li>
              <p>Imposing measures intended to prevent births</p>
            </li>
            <li>
              <p>Forcibly transferring children of a group to another group</p>
            </li>
          </ol>
          <h4>The ICC currently investigates genocide cases in these countries</h4>
          <ul className={styles.CountryList}>
            <li className={styles.CountryListItemInvestigation}>
              <svg width="80" height="61" viewBox="0 0 80 61">
                <title>Afghanistan</title>
                <path d="M5.485 20.347l5.26 2.382 3.88-.81 1.118-2.875 4.077-.98 2.893-1.912 1.052-5.169 4.34-1.273.789-2.278 2.433 1.723 1.578.222h2.827l3.88 1.385 1.578.774 3.748-2.048 1.775 1.219 1.644-2.94 3.09.11.79-.946.526-2.627L54.999 2l2.761 1.518-.526 2.017 1.513.28-.46 5.445 2.038 2.15 1.841-1.378 2.236-.607 3.222-2.936 3.55.5h5.327l.92 1.884-3.025.718-2.564 1.158-5.918.77-5.59 1.319-2.958 2.79 1.183 2.72.592 3.136-2.564 2.636.197 2.408-1.38 2.238-4.932-.16 2.038 4.08-3.288 1.581-2.17 3.672.263 3.699-2.038 1.659-1.907-.518-3.945.777-.526 1.653h-3.88l-2.827 3.396-.198 5.107-6.707 2.486-3.55-.557-1.053 1.316-3.09-.76-5.195.912-8.614-3.042 4.669-5.411-.395-3.86-3.945-1.033-.394-3.841L2 37.004l2.236-3.375L2 32.73l1.38-4.521z" strokeWidth="2" stroke="#979797" fill="none" fillRule="evenodd" />
              </svg>
              <p>Afghanistan</p>
            </li>
            <li className={styles.CountryListItemInvestigation}>
              <svg width="51" height="61" viewBox="0 0 51 61">
                <title>Burundi</title>
                <path d="M11.468 59.109L9.775 27.012 3 14.958l16.26 2.047L27.39 2l14.226 1.591 1.355 10.458 5.759 6.14.338 8.643-6.774 5.46-10.162 13.885-9.824 9.793z" strokeWidth="2" stroke="#9B9B9B" fill="none" fillRule="evenodd"/>
              </svg>
              <p>Burundi</p>
            </li>
            <li>
              <svg width="46" height="60" viewBox="0 0 46 60">
                <title>Colombia</title>
                <path d="M15.28 44.035l-1.47-.811-1.644-1.13-.95.55-2.898-.464-.821-1.478-.649.058-3.372-1.914L3 37.773l1.297-.26-.173-1.683.822-1.248 1.643-.203 1.427-2.148 1.297-1.772-1.21-.814.604-1.977-.735-3.114.692-.903-.519-2.887-1.383-1.81.432-1.667 1.124.263.606-1.024-.779-2.021.433-.499 1.73.118 2.55-2.407 1.384-.382.043-1.117.649-2.916 1.945-1.594 2.119-.089.26-.709 2.68.296 2.638-1.745 1.34-.77L27.56 1l1.21.208.866.92-.649 1.185-2.162.562-.865 1.744-1.34.975-.951 1.298-.433 2.444-.95 2.027 1.772.206.432 1.584.735.762.26 1.377-.39 1.258.13.731.822.263.821 1.198 4.367-.321 1.946.438 2.378 2.947 1.384-.38 2.464.176 1.903-.38 1.21.584-.605 1.835-.778 1.136-.26 2.444.692 2.267.951 1.017.13.755-1.73 1.684 1.255.754.864 1.19 1.038 3.364-.605.435-.692-2-.908-1.074-1.124 1.16-6.616-.087.044 2.146 1.989.348-.13 1.304-.692-.376-1.902.58v2.463l1.513 1.218.519 1.942-.087 1.48-1.513 9.318-1.686-1.802-1.038-.087 2.205-3.455-2.594-1.596-2.032.29-1.254-.58-1.86.899-2.507-.435-2.033-3.568-1.556-.87-1.081-1.594-2.248-1.594z" strokeWidth="2" stroke="#9B9B9B" fill="none" fillRule="evenodd"/>
              </svg>
              <p>Colombia</p>
            </li>
            <li className={styles.CountryListItemInvestigation}>
              <svg width="55" height="61" viewBox="0 0 55 61">
                <title>Gabon</title>
                <path d="M22.791 59.109l-9.356-9.155-5.89-7.442L2 33.138l.231-3.021 2.08-2.865 2.194-6.583 1.732-6.738 3.12-.542 13.167.077-.116-10.846 4.39-.62 5.428 1.24L39.656 2l1.039.543-.578 3.952 2.541 4.648 6.7-.697 2.31 1.781-3.927 10.533 4.274 5.343.924 7.049-1.155 6.043-2.773 4.262-7.97-.388-4.85-4.34-.694 4.03-6.122 1.086-3.119 2.325 3.466 5.972z" strokeWidth="2" stroke="#979797" fill="none" fillRule="evenodd"/>
              </svg>
              <p>Gabon</p>
            </li>
            <li>
              <svg width="82" height="61" viewBox="0 0 82 61">
                <title>Guinea</title>
                <path d="M73.363 55.064l-2.99-.276-2.175 4.32h-2.99l-2.04-2.297.68-4.322-4.486-6.63-2.854 1.198-2.175.276-2.99.553.135-3.87-1.767-2.86.408-3.138-2.31-4.528-2.991-3.885h-8.564l-2.446 2.036-2.855.277-1.903 2.312-1.223 2.957-5.71 4.8-4.621-6.463-4.214-4.16-2.718-1.48-2.583-2.13-1.223-4.726-1.632-2.412L2 18.852l4.758-5.297 3.262.186 2.854-1.86h2.311l1.631-1.49-.815-3.54 1.087-1.212L17.36 2l5.03.093L30.136 4.8l2.311-.28.816-1.213 5.845.84 1.495-.56.68 3.917h1.63l2.72-1.398 1.766.373 2.99 2.702 4.623.931 2.854-2.422 3.534-1.398 2.583-1.585 2.039.28L68.47 7.41l1.223 2.98 4.35 4.56-2.175 2.787-.408 3.528 2.31-1.021 1.224 1.299-.544 3.153 3.263 3.15-2.04.833-.95 3.7 2.446 4.437 2.719 8.673-3.942 1.29-1.088 1.474.816 2.118-.544 4.692z" strokeWidth="2" stroke="#9B9B9B" fill="none" fillRule="evenodd"/>
              </svg>
              <p>Guinea</p>
            </li>
            <li className={styles.CountryListItemInvestigation}>
              <svg width="61" height="61" viewBox="0 0 61 61">
                <title>Iraq</title>
                <path d="M40.168 12.125l3.744 2.124.44 4.105-2.863 2.46-1.32 5.425 3.963 6.55 7.046 3.745 2.936 5.17-.88 4.897h1.834v3.55l3.23 3.472-3.45-.284-3.817-.568-4.257 6.338-10.716-.507-16.222-13.38-8.588-4.735-6.9-1.857L2 30.32l12.772-7.234 2.128-8.473-.514-5.23 3.157-1.776 2.936-4.493L24.974 2l6.68.928 2.055 1.852 2.716-1.234z" strokeWidth="2" stroke="#9B9B9B" fill="none" fillRule="evenodd"/>
              </svg>
              <p>Iraq</p>
            </li>
            <li>
              <svg width="73" height="61" viewBox="0 0 73 61">
                <title>Nigeria</title>
                <path d="M35.865 55.997l-6.09 2.108-2.228-.3-2.228 1.304-4.604-.15-3.12-3.664-1.93-4.22-4.16-3.873-4.38.05H2l.371-9.527-.148-3.74 1.04-3.746 1.856-1.825 2.822-3.654-.668-1.627 1.188-2.391-1.337-3.517.223-1.99.446-5.322 1.633-2.41.817-3.495 1.56-1.287L18.041 2l5.793 2.265 2.228 2.262 2.97.103 2.748-1.49 7.055 3.132 2.971-.153 3.416-2.568 3.416.205 1.708-.873 3.12.36 4.53 1.746 4.53-3.341 1.337.206 4.01 6.572 1.04-.103 2.302 2.355-.594 1.125-.372 1.942-4.901 4.64-1.485 3.816-.817 3.047-1.263 1.318-1.188 4.154-3.12 2.428-.89 3.032-1.337 2.372-.52 2.42-4.01 2.015-3.268-2.418-2.228.1-3.416 3.426-1.708.05-2.748 5.684z" strokeWidth="2" stroke="#9B9B9B" fill="none" fillRule="evenodd"/>
              </svg>
              <p>Nigeria</p>
            </li>
            <li>
              <svg width="30" height="61" viewBox="0 0 30 61">
                <title>Palestine</title>
                <path d="M27.665 8.66v29.428L21.38 52.525 2 59.109l1.571-12.766 10.476-6.602-9.952-5.372L12.475 2z" strokeWidth="2" stroke="#9B9B9B" fill="none" fillRule="evenodd"/>
              </svg>
              <p>Palestine</p>
            </li>
            <li>
              <svg width="89" height="61" viewBox="0 0 89 61">
                <title>Ukraine</title>
                <path d="M48.041 3.854l1.755.264 1.21-1.72 1.452.398 4.9-.796 3.025 4.42-1.21 1.504.424 2.406 3.812.324 1.633 3.286-.06 1.472 5.99 2.61 3.63-1.143 2.964 3.418 2.783-.063 6.957 2.386.06 2.184-1.935 3.775 1.089 3.918-.787 2.368-4.598.544-2.42 1.928-.12 3.112-3.812.595-3.146 2.254-4.477.355-4.054 2.532.242 4.26 2.36 1.621 4.84-.404-.968 2.421-5.143 1.148-6.474 3.878-2.601-1.364L56.39 54.6l-5.203-1.956.847-1.272 4.538-2.264-1.392-1.576-7.38-1.758-.303-2.535-4.417.827-1.754 3.817-3.63 4.991-2.178-1.154-2.239 1.097-2.118-1.271 1.21-.695.848-2.384 1.27-2.165-.363-1.234 1.029-.53.484.942 2.783.177 1.27-.47-.907-.708.363-1.003-1.694-1.778-.666-2.922-1.754-1.139.363-2.41-2.178-1.878-1.937-.304-3.509-2.196-3.146.673-1.089 1.097h-2.057l-1.15 1.64-3.508.666-1.634 1.087-2.178-1.692-3.085-.061-2.904-.789-2.057 1.516-.303-1.88L2 31.155l.908-2.884 1.33-1.915 1.03.433-1.211-3.231 4.296-6.171 2.36-.827.483-2.107-2.36-6.595 2.3-.326L13.737 5.5l3.63-.198 4.78.592 5.324 1.833 3.751.196 1.755 1.042 1.815-1.304 1.21 1.76 4.295-.326 1.876.715.302-3.85 1.452-1.645z" strokeWidth="2" stroke="#9B9B9B" fill="none" fillRule="evenodd"/>
              </svg>
              <p>Ukraine</p>
            </li>
          </ul>
        </TabPanel>

        <TabPanel className={styles.WarCrimesTab}>
          <h3>Crimes against humanity</h3>
          <p>According to article 7 of the Rome Statute, ‘crime against humanity’ means any of the following acts when committed as part of a widespread or systematic attack directed against any civilian population.</p>
          <h4>The ICC currently investigates genocide cases in these countries</h4>

          <ol className={styles.IconList}>
            <li>
              <img src={torture} alt="Icon of a person on the electric chair" />
              <p>Torture</p>
            </li>
            <li>
              <img src={forcedPregnancy} alt="Icon of a pregnant woman" />
              <p>Forced pregnancy</p>
            </li>
            <li>
              <img src={extermination} alt="Icon of a skull" />
              <p>Extermination</p>
            </li>
            <li>
              <p>Enslavement</p>
            </li>
            <li>
              <p>The crime of apartheid</p>
            </li>
            <li>
              <p>The crime of apartheid</p>
            </li>
          </ol>

          <ul className={styles.CountryList}>
            <li className={styles.CountryListItemInvestigation}>
              <svg width="80" height="61" viewBox="0 0 80 61">
                <title>Afghanistan</title>
                <path d="M5.485 20.347l5.26 2.382 3.88-.81 1.118-2.875 4.077-.98 2.893-1.912 1.052-5.169 4.34-1.273.789-2.278 2.433 1.723 1.578.222h2.827l3.88 1.385 1.578.774 3.748-2.048 1.775 1.219 1.644-2.94 3.09.11.79-.946.526-2.627L54.999 2l2.761 1.518-.526 2.017 1.513.28-.46 5.445 2.038 2.15 1.841-1.378 2.236-.607 3.222-2.936 3.55.5h5.327l.92 1.884-3.025.718-2.564 1.158-5.918.77-5.59 1.319-2.958 2.79 1.183 2.72.592 3.136-2.564 2.636.197 2.408-1.38 2.238-4.932-.16 2.038 4.08-3.288 1.581-2.17 3.672.263 3.699-2.038 1.659-1.907-.518-3.945.777-.526 1.653h-3.88l-2.827 3.396-.198 5.107-6.707 2.486-3.55-.557-1.053 1.316-3.09-.76-5.195.912-8.614-3.042 4.669-5.411-.395-3.86-3.945-1.033-.394-3.841L2 37.004l2.236-3.375L2 32.73l1.38-4.521z" strokeWidth="2" stroke="#979797" fill="none" fillRule="evenodd" />
              </svg>
              <p>Afghanistan</p>
            </li>
            <li>
              <svg width="51" height="61" viewBox="0 0 51 61">
                <title>Burundi</title>
                <path d="M11.468 59.109L9.775 27.012 3 14.958l16.26 2.047L27.39 2l14.226 1.591 1.355 10.458 5.759 6.14.338 8.643-6.774 5.46-10.162 13.885-9.824 9.793z" strokeWidth="2" stroke="#9B9B9B" fill="none" fillRule="evenodd"/>
              </svg>
              <p>Burundi</p>
            </li>
            <li className={styles.CountryListItemInvestigation}>
              <svg width="46" height="60" viewBox="0 0 46 60">
                <title>Colombia</title>
                <path d="M15.28 44.035l-1.47-.811-1.644-1.13-.95.55-2.898-.464-.821-1.478-.649.058-3.372-1.914L3 37.773l1.297-.26-.173-1.683.822-1.248 1.643-.203 1.427-2.148 1.297-1.772-1.21-.814.604-1.977-.735-3.114.692-.903-.519-2.887-1.383-1.81.432-1.667 1.124.263.606-1.024-.779-2.021.433-.499 1.73.118 2.55-2.407 1.384-.382.043-1.117.649-2.916 1.945-1.594 2.119-.089.26-.709 2.68.296 2.638-1.745 1.34-.77L27.56 1l1.21.208.866.92-.649 1.185-2.162.562-.865 1.744-1.34.975-.951 1.298-.433 2.444-.95 2.027 1.772.206.432 1.584.735.762.26 1.377-.39 1.258.13.731.822.263.821 1.198 4.367-.321 1.946.438 2.378 2.947 1.384-.38 2.464.176 1.903-.38 1.21.584-.605 1.835-.778 1.136-.26 2.444.692 2.267.951 1.017.13.755-1.73 1.684 1.255.754.864 1.19 1.038 3.364-.605.435-.692-2-.908-1.074-1.124 1.16-6.616-.087.044 2.146 1.989.348-.13 1.304-.692-.376-1.902.58v2.463l1.513 1.218.519 1.942-.087 1.48-1.513 9.318-1.686-1.802-1.038-.087 2.205-3.455-2.594-1.596-2.032.29-1.254-.58-1.86.899-2.507-.435-2.033-3.568-1.556-.87-1.081-1.594-2.248-1.594z" strokeWidth="2" stroke="#9B9B9B" fill="none" fillRule="evenodd"/>
              </svg>
              <p>Colombia</p>
            </li>
            <li>
              <svg width="55" height="61" viewBox="0 0 55 61">
                <title>Gabon</title>
                <path d="M22.791 59.109l-9.356-9.155-5.89-7.442L2 33.138l.231-3.021 2.08-2.865 2.194-6.583 1.732-6.738 3.12-.542 13.167.077-.116-10.846 4.39-.62 5.428 1.24L39.656 2l1.039.543-.578 3.952 2.541 4.648 6.7-.697 2.31 1.781-3.927 10.533 4.274 5.343.924 7.049-1.155 6.043-2.773 4.262-7.97-.388-4.85-4.34-.694 4.03-6.122 1.086-3.119 2.325 3.466 5.972z" strokeWidth="2" stroke="#979797" fill="none" fillRule="evenodd"/>
              </svg>
              <p>Gabon</p>
            </li>
            <li>
              <svg width="82" height="61" viewBox="0 0 82 61">
                <title>Guinea</title>
                <path d="M73.363 55.064l-2.99-.276-2.175 4.32h-2.99l-2.04-2.297.68-4.322-4.486-6.63-2.854 1.198-2.175.276-2.99.553.135-3.87-1.767-2.86.408-3.138-2.31-4.528-2.991-3.885h-8.564l-2.446 2.036-2.855.277-1.903 2.312-1.223 2.957-5.71 4.8-4.621-6.463-4.214-4.16-2.718-1.48-2.583-2.13-1.223-4.726-1.632-2.412L2 18.852l4.758-5.297 3.262.186 2.854-1.86h2.311l1.631-1.49-.815-3.54 1.087-1.212L17.36 2l5.03.093L30.136 4.8l2.311-.28.816-1.213 5.845.84 1.495-.56.68 3.917h1.63l2.72-1.398 1.766.373 2.99 2.702 4.623.931 2.854-2.422 3.534-1.398 2.583-1.585 2.039.28L68.47 7.41l1.223 2.98 4.35 4.56-2.175 2.787-.408 3.528 2.31-1.021 1.224 1.299-.544 3.153 3.263 3.15-2.04.833-.95 3.7 2.446 4.437 2.719 8.673-3.942 1.29-1.088 1.474.816 2.118-.544 4.692z" strokeWidth="2" stroke="#9B9B9B" fill="none" fillRule="evenodd"/>
              </svg>
              <p>Guinea</p>
            </li>
            <li className={styles.CountryListItemInvestigation}>
              <svg width="61" height="61" viewBox="0 0 61 61">
                <title>Iraq</title>
                <path d="M40.168 12.125l3.744 2.124.44 4.105-2.863 2.46-1.32 5.425 3.963 6.55 7.046 3.745 2.936 5.17-.88 4.897h1.834v3.55l3.23 3.472-3.45-.284-3.817-.568-4.257 6.338-10.716-.507-16.222-13.38-8.588-4.735-6.9-1.857L2 30.32l12.772-7.234 2.128-8.473-.514-5.23 3.157-1.776 2.936-4.493L24.974 2l6.68.928 2.055 1.852 2.716-1.234z" strokeWidth="2" stroke="#9B9B9B" fill="none" fillRule="evenodd"/>
              </svg>
              <p>Iraq</p>
            </li>
            <li className={styles.CountryListItemInvestigation}>
              <svg width="73" height="61" viewBox="0 0 73 61">
                <title>Nigeria</title>
                <path d="M35.865 55.997l-6.09 2.108-2.228-.3-2.228 1.304-4.604-.15-3.12-3.664-1.93-4.22-4.16-3.873-4.38.05H2l.371-9.527-.148-3.74 1.04-3.746 1.856-1.825 2.822-3.654-.668-1.627 1.188-2.391-1.337-3.517.223-1.99.446-5.322 1.633-2.41.817-3.495 1.56-1.287L18.041 2l5.793 2.265 2.228 2.262 2.97.103 2.748-1.49 7.055 3.132 2.971-.153 3.416-2.568 3.416.205 1.708-.873 3.12.36 4.53 1.746 4.53-3.341 1.337.206 4.01 6.572 1.04-.103 2.302 2.355-.594 1.125-.372 1.942-4.901 4.64-1.485 3.816-.817 3.047-1.263 1.318-1.188 4.154-3.12 2.428-.89 3.032-1.337 2.372-.52 2.42-4.01 2.015-3.268-2.418-2.228.1-3.416 3.426-1.708.05-2.748 5.684z" strokeWidth="2" stroke="#9B9B9B" fill="none" fillRule="evenodd"/>
              </svg>
              <p>Nigeria</p>
            </li>
            <li>
              <svg width="30" height="61" viewBox="0 0 30 61">
                <title>Palestine</title>
                <path d="M27.665 8.66v29.428L21.38 52.525 2 59.109l1.571-12.766 10.476-6.602-9.952-5.372L12.475 2z" strokeWidth="2" stroke="#9B9B9B" fill="none" fillRule="evenodd"/>
              </svg>
              <p>Palestine</p>
            </li>
            <li>
              <svg width="89" height="61" viewBox="0 0 89 61">
                <title>Ukraine</title>
                <path d="M48.041 3.854l1.755.264 1.21-1.72 1.452.398 4.9-.796 3.025 4.42-1.21 1.504.424 2.406 3.812.324 1.633 3.286-.06 1.472 5.99 2.61 3.63-1.143 2.964 3.418 2.783-.063 6.957 2.386.06 2.184-1.935 3.775 1.089 3.918-.787 2.368-4.598.544-2.42 1.928-.12 3.112-3.812.595-3.146 2.254-4.477.355-4.054 2.532.242 4.26 2.36 1.621 4.84-.404-.968 2.421-5.143 1.148-6.474 3.878-2.601-1.364L56.39 54.6l-5.203-1.956.847-1.272 4.538-2.264-1.392-1.576-7.38-1.758-.303-2.535-4.417.827-1.754 3.817-3.63 4.991-2.178-1.154-2.239 1.097-2.118-1.271 1.21-.695.848-2.384 1.27-2.165-.363-1.234 1.029-.53.484.942 2.783.177 1.27-.47-.907-.708.363-1.003-1.694-1.778-.666-2.922-1.754-1.139.363-2.41-2.178-1.878-1.937-.304-3.509-2.196-3.146.673-1.089 1.097h-2.057l-1.15 1.64-3.508.666-1.634 1.087-2.178-1.692-3.085-.061-2.904-.789-2.057 1.516-.303-1.88L2 31.155l.908-2.884 1.33-1.915 1.03.433-1.211-3.231 4.296-6.171 2.36-.827.483-2.107-2.36-6.595 2.3-.326L13.737 5.5l3.63-.198 4.78.592 5.324 1.833 3.751.196 1.755 1.042 1.815-1.304 1.21 1.76 4.295-.326 1.876.715.302-3.85 1.452-1.645z" strokeWidth="2" stroke="#9B9B9B" fill="none" fillRule="evenodd"/>
              </svg>
              <p>Ukraine</p>
            </li>
          </ul>
        </TabPanel>

        <TabPanel className={styles.WarCrimesTab}>
          <h3>War crimes</h3>
        </TabPanel>
      </Tabs>
    </section>
  );
}

export default WarCrimes;
