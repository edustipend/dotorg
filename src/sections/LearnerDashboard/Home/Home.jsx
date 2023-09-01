import React, { useCallback, useEffect, useState } from 'react';
import styles from './Home.module.css';
import { Quote, TestId, constants, history, recent, submissionTableHead, submitted, tableHead } from './internals/constants';
import hand from '../../../assets/waving hand.png';
import { tab } from './internals/constants';
import Button from '../../../components/Button';
import Table from '../../../components/Table';
import { getData } from '../../../services/ApiClient';
const { dashboard, username } = constants;

export const Home = () => {
  const [currentTable, setCurrentTable] = useState(0);
  const [applicationTable, setApplicationTable] = useState(true);
  const [singleEntry, setSingleEntry] = useState(history);

  const handleOneClick = (id) => {
    setApplicationTable(!applicationTable);
    const active = currentTable === 0 ? recent : history;
    setSingleEntry(active.filter((entry) => entry.id === id));
  };

  const getUserData = useCallback(async () => {
    try {
      // TODO: Fetch users data
      const response = await getData('/user/application-history/search?id=${userId}');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className={styles.Main} data-testid={TestId.HOME}>
      <section className={styles.greet}>
        <div className={styles.userContainer}>
          <p className={styles.dashboard}>{dashboard}</p>
          <div className={styles.waveSection}>
            <p className={styles.hello} data-testid={TestId.USER}>
              Hello, {username}
            </p>
            <div className={`${styles.imgContainer} ${styles.imgAlt}`}>
              <img src={hand} alt="hand" className={styles.img} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.quote}>
        {/**Placeholder quote*/}
        <p className={styles.quoteText} data-testid={TestId.QUOTE}>
          "{Quote.content}" - <i className={styles.italic}>{Quote.author}</i>
        </p>
      </section>
      {applicationTable && (
        <section className={styles.table} data-testid={TestId.TABLE}>
          <div className={styles.tabs}>
            {tab.map((itm, idx) => {
              return (
                <button
                  key={idx}
                  className={currentTable === idx ? `${styles.tab}` : `${styles.tab} ${styles.tabAlt}`}
                  onClick={() => setCurrentTable(idx)}>
                  {itm}
                </button>
              );
            })}
          </div>
          {(() => {
            switch (currentTable) {
              case 0:
                return <Table entries={recent} tableHead={tableHead} oneClickApply={handleOneClick} />;
              case 1:
                return <Table entries={history} tableHead={tableHead} oneClickApply={handleOneClick} />;
              default:
                return <Table entries={recent} tableHead={tableHead} oneClickApply={handleOneClick} />;
            }
          })()}
        </section>
      )}
      {!applicationTable && (
        <section className={styles.table}>
          <div className={styles.tabs}>
            <button className={styles.tab}>{submitted}</button>
          </div>
          <Table entries={singleEntry} tableHead={submissionTableHead} />
        </section>
      )}
      <div className={styles.buttonContainer}>
        <Button disabled={true} label="New Stipend Application" type="secondary" effectAlt />
      </div>
    </div>
  );
};
