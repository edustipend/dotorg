import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { Quote, TestId, constants, submissionTableHead, submitted, tableHead } from './internals/constants';
import hand from '../../../assets/waving hand.png';
import { tab } from './internals/constants';
import Button from '../../../components/Button';
import Table from '../../../components/Table';
import { APPLICATION_HISTORY, authorizedPost } from '../../../services/ApiClient';
import { useDispatch, useSelector } from 'react-redux';
import ActionBanner from '../../../components/ActionBanner';
import { PageCopy } from './constants';
import useResendVerification from '../../../hooks/useResendVerification';
import { useNavigate } from 'react-router-dom';
import { setNewApplication, reset } from '../../../store/reducers/ApplicationReducer';
import { isApplicationWindowClosed } from '../../../utils';
import CheckPreviousApplication from '../../../utils/CheckPreviousApplication';
const { dashboard } = constants;

export const Home = () => {
  const [currentTable, setCurrentTable] = useState(0);
  const [applicationTable, setApplicationTable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [singleEntry, setSingleEntry] = useState([]);
  const [data, setData] = useState([]);
  const { name, userId, isVerified } = useSelector((state) => state.user);
  const { handleResendVerification, isLoading } = useResendVerification();
  const [first] = name.split(' ');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOneClick = (id) => {
    setApplicationTable(!applicationTable);
    setSingleEntry(data?.filter((entry) => entry._id === id));
  };

  const handleNewApplication = () => {
    dispatch(reset());
    dispatch(setNewApplication(true));
    navigate('/application');
  };

  /**
   * This function enables the new application button if the
   * application window is open and the user has not applied for the month.
   * @returns true || false
   */
  const handleEnableButton = () => {
    if (data) {
      const hasApplied = CheckPreviousApplication(data?.[data.length - 1]);
      return !hasApplied && !isApplicationWindowClosed();
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      try {
        const response = await authorizedPost(APPLICATION_HISTORY, {
          userId
        });
        if (response.success) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getUserData();
  }, [userId]);

  return (
    <div className={styles.Main} data-testid={TestId.HOME}>
      <section className={styles.greet}>
        <div className={styles.userContainer}>
          <p className={styles.dashboard}>{dashboard}</p>
          <div className={styles.waveSection}>
            <p className={styles.hello} data-testid={TestId.USER}>
              Hello, {first || name}
            </p>
            <div className={`${styles.imgContainer} ${styles.imgAlt}`}>
              <img src={hand} alt="hand" className={styles.img} />
            </div>
          </div>
        </div>
      </section>
      {isVerified ? (
        <section className={styles.quote}>
          {/**Placeholder quote*/}
          <p className={styles.quoteText} data-testid={TestId.QUOTE}>
            "{Quote.content}" - <i className={styles.italic}>{Quote.author}</i>
          </p>
        </section>
      ) : (
        <ActionBanner
          dataTest={TestId.VERIFY_BANNER}
          buttonLabel={isLoading ? PageCopy.VERIFYING : PageCopy.VERIFY_BUTTON_LABEL}
          className={styles.verifyBanner}
          handleCTAClick={handleResendVerification}
          text={PageCopy.VERIFY_TEXT}
          isLoading={isLoading}
        />
      )}

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
          {loading ? (
            <p>Loading...</p>
          ) : (
            (() => {
              switch (currentTable) {
                case 0:
                  return <Table entries={data} tableHead={tableHead} oneClickApply={handleOneClick} />;
                case 1:
                  return <Table entries={data} tableHead={tableHead} oneClickApply={handleOneClick} />;
                default:
                  return <Table entries={data} tableHead={tableHead} oneClickApply={handleOneClick} />;
              }
            })()
          )}
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
      {data.length > 0 && (
        <div className={styles.buttonContainer}>
          <Button
            disabled={!handleEnableButton()}
            isLoading={isLoading}
            loaderSize="small"
            loaderVariant="neutral"
            onClick={handleNewApplication}
            label="New Stipend Application"
            type="secondary"
            effectAlt
          />
        </div>
      )}
    </div>
  );
};
