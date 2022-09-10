
import React from 'react'
import CountUp from 'react-countup';
import styles from './Stats.module.css'
function Stats() {
  return (
    <div className={styles.container}>
      <span className={styles.lowerSection}>
        <span className={styles.lowerSectionChildren}>
          <span className={styles.numberStats}>
            <CountUp end={250} duration={2.75} enableScrollSpy={true} />
          </span>
          <span className={styles.lowerSectionTitle}>
            VARIETIES OF COFFEE
          </span>
          

        </span>
        <span className={styles.lowerSectionChildren}>
          <span className={styles.numberStats}>
            <CountUp end={123} duration={2.75} enableScrollSpy={true} />
          </span>
          <span className={styles.lowerSectionTitle}>
            HOURS OF TESTING
          </span>
         

        </span >
        <span className={styles.lowerSectionChildren}>
          <span className={styles.numberStats}>
            <CountUp end={321} duration={2.75} enableScrollSpy={true} />
          </span>
          <span className={styles.lowerSectionTitle}>
            COFFEE MARKETS
          </span>
         

        </span>
        <span className={styles.lowerSectionChildren}>
          <span className={styles.numberStats}>
            <CountUp end={220} duration={2.75} enableScrollSpy={true}/>
          </span>
          <span className={styles.lowerSectionTitle}>
            COFFEE BRANDS
          </span>
         

        </span>

      </span>
    </div>
  )
}

export default Stats