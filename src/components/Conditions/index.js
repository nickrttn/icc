import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { feature } from 'topojson';
import { geoPath, geoMercator } from 'd3-geo';

import styles from './styles.scss';

import countryStatus from './countryStatus.json';
import geoData from './geo-countries.json';

function Conditions() {
  Tabs.setUseDefaultStyles(false);

  let featureCollection = getFeatureCollection();
  let path = getPath();

  function getFeatureCollection() {
    // Convert the TopoJSON to a GeoJSON FeatureCollection
    let featureCollection = feature(geoData, geoData.objects.geoCountries);

    // Only include the Features that actually do have a geometry (some were removed in simplification)
    featureCollection.features = featureCollection.features.filter(country => country.geometry);

    featureCollection.features = featureCollection.features.map(feature => {
      countryStatus.forEach(country => {
        if (feature.properties.ADMIN === country.state) {
          feature.properties = {
            name: feature.properties.ADMIN,
            status: country.statute,
            securityCouncil: country.securityCouncil || false,
          };
        }
      });

      return feature;
    });

    return featureCollection;
  }

  function renderFeatureCollection(type) {
    // Render a collection of svg paths from the FeatureCollection
    const features = featureCollection.features.map(country => {
      let fill;

      const status = country.properties.status;
      const secCouncil = country.properties.securityCouncil;

      if (type === 'statute') {
        fill = status === 'signed' ? '#9b9b9b' : status === 'ratified' ? '#0C99E7' : status === 'unsigned' ? '#D0011B' : '#fff';
      } else if (type === 'council') {
        fill = secCouncil ? '#0c99e7' : '#9b9b9b';
      }

      return (
        <path key={country.properties.name} d={path(country)} fill={fill} />
      )
    });

    return features;
  }

  function getPath() {
    const projection = geoMercator()
      .fitExtent([[20, 20], [961, 620]], featureCollection)
      .rotate([-11, 0, 0]);

    return geoPath(projection);
  }

  function filterCountryStatus() {}

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
          <h4>Countries that signed or ratified the Rome Statute</h4>
          <div className={styles.ConditionsLegend}>
            <span>Unsigned</span> <span>Signed</span> <span>Ratified</span> <span>Unknown</span>
          </div>
          <svg viewBox="0 0 961 620">
            { renderFeatureCollection('statute') }
          </svg>
        </TabPanel>

        <TabPanel className={styles.ConditionsTab}>
          <p>If the country in which the crime has taken place has not approved the Rome Statute, but the criminal was born in a country that has, the criminal can still be tried.</p>
        </TabPanel>

        <TabPanel className={styles.ConditionsTab}>
          <p>The Security Council is among the 6 most important bodies of the United Nations and is responsible for the preservation of international peace and security. Among other things, they control the launching of peace operations, international sanctions and admission of military actions.</p>
          <h4>Members of the UN Security Council</h4>
          <div className={styles.ConditionsLegendSecurity}>
            <span>Member</span> <span>Non-member</span>
          </div>
          <svg viewBox="0 0 961 620">
            { renderFeatureCollection('council') }
          </svg>
        </TabPanel>

        <TabPanel className={styles.ConditionsTab}>
          <p>As an individual you can submit evidence for existing and non-existing cases.</p>
          <p>The process for doing so is long and arduous. Success is never guaranteed. Check out the process below to learn more.</p>
        </TabPanel>

      </Tabs>
    </section>
  );
}
export default Conditions;
