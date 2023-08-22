import React, { useState } from 'react';
import styles from './Home.module.css';
import { constants } from './internals/constants';
import folder from '../../../assets/folder.png';
import hand from '../../../assets/waving hand.png';
import { tab } from './internals/constants';
import RecentApplication from './internals/RecentApplication';
import ApplicationHistory from './internals/ApplicationHistory';
import Button from '../../../components/Button';
const { dashboard, username } = constants;

export const Home = () => {
  const [currentTable, setCurrentTable] = useState(0);
  return (
    <div className={styles.Main}>
      <section className={styles.greet}>
        <div className={styles.imgContainer1}>
          <img src={folder} alt="folder" className={styles.img} />
        </div>
        <div className={styles.userContainer}>
          <p className={styles.dashboard}>{dashboard}</p>
          <div className={styles.waveSection}>
            <p className={styles.hello}>Hello, {username}</p>
            <div className={`${styles.imgContainer} ${styles.imgAlt}`}>
              <img src={hand} alt="hand" className={styles.img} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.quote}>
        {/**Placeholder quote*/}
        <p className={styles.quoteText}>
          "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this." -{' '}
          <i className={styles.italic}>Chantal Sutherland</i>
        </p>
      </section>
      <section className={styles.table}>
        <div className={styles.tabs}>
          {tab.map((itm, idx) => {
            return (
              <button
                key={idx}
                className={currentTable === idx ? `${styles.tab}` : `${styles.tab} ${styles.tabAlt}`}
                onClick={() => setCurrentTable(idx)}
              >
                {itm}
              </button>
            );
          })}
        </div>
        {(() => {
          switch (currentTable) {
            case 0:
              return <RecentApplication />;
            case 1:
              return <ApplicationHistory />;
            default:
              return <RecentApplication />;
          }
        })()}
      </section>
      <div className={styles.buttonContainer}>
        <Button disabled={true} label="New Stipend Application" type="secondary" effectAlt />
      </div>
    </div>
  );
};
