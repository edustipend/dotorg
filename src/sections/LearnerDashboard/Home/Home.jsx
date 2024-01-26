import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { Quote, TestId, back, constants, submissionTableHead, submitted, tableHead } from './internals/constants';
import hand from '../../../assets/waving hand.png';
import { tab } from './internals/constants';
import Button from '../../../components/Button';
import Table from '../../../components/Table';
import { APPLICATION_HISTORY, authorizedPost } from '../../../services/ApiClient';
import { useDispatch, useSelector } from 'react-redux';
import ActionBanner from '../../../components/ActionBanner';
import { PageCopy } from './constants';
import useResendVerification from '../../../hooks/useResendVerification';
import { Step2Application } from '../../../components/ApplicationSteps/Step2Application/Step2Application';
import { benefits, category, futureHelp, reason, reset, setApplicationId, steps } from '../../../store/reducers/ApplicationReducer';
import toast from 'react-hot-toast';
import { isApplicationWindowClosed } from '../../../utils';
import { hasApplied } from '../../../utils/hasApplied';
import { useNavigate } from 'react-router-dom';

const { dashboard } = constants;

export const Home = () => {
  const [currentTable, setCurrentTable] = useState(0);
  const [applicationTable, setApplicationTable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [singleEntry, setSingleEntry] = useState([]);
  const [data, setData] = useState([]);
  const [isApplied, setIsApplied] = useState(false);
  const nav = useNavigate();
  const isWindowClosed = isApplicationWindowClosed();
  const { name, userId, isVerified } = useSelector((state) => state.user);
  const { stipendCategory, reasonForRequest, stepsTakenToEaseProblem, potentialBenefits, futureHelpFromUser } = useSelector(
    (state) => state.application
  );

  const { handleResendVerification, isLoading, setShowBanner, showBanner } = useResendVerification();

  const dispatch = useDispatch();
  const [first] = name.split(' ');

  const Category = stipendCategory.split('/')[0].toLowerCase();

  const applicationInfo = {
    userId,
    stipendCategory: Category,
    reasonForRequest: reasonForRequest,
    stepsTakenToEaseProblem: stepsTakenToEaseProblem,
    potentialBenefits: potentialBenefits,
    futureHelpFromUser: futureHelpFromUser
  };

  const handleOneClick = (id) => {
    if (!isVerified) {
      toast.error("You're not a verified user");
      setShowBanner(!isVerified);
      console.log(showBanner);
      return;
    }
    setApplicationTable(!applicationTable);
    const filteredData = data.filter((entry) => entry._id === id);
    setSingleEntry(filteredData);

    const { _id, stipendCategory, reasonForRequest, stepsTakenToEaseProblem, potentialBenefits, futureHelpFromUser } = filteredData[0];
    const categoryData =
      stipendCategory === 'laptop'
        ? 'Laptop/Learning Device'
        : stipendCategory === 'course'
        ? 'Course/Certification Fees'
        : stipendCategory === 'data'
        ? 'Data/Internet Subscription'
        : 'Laptop/Learning Device';
    dispatch(setApplicationId(_id));
    dispatch(category(categoryData));
    dispatch(reason(reasonForRequest));
    dispatch(steps(stepsTakenToEaseProblem));
    dispatch(benefits(potentialBenefits));
    dispatch(futureHelp(futureHelpFromUser));

    setApplicationTable(!applicationTable);
  };

  const handleNewApplication = () => {
    dispatch(reset());
    nav('/application');
  };

  const handleSubmitOneClick = async () => {
    console.log(applicationInfo);
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
          setIsApplied(hasApplied(response.data));
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
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
            <div>
              <div className={styles.skeleton} />
              <div className={styles.skeleton} />
              <div className={styles.skeleton} />
            </div>
          ) : (
            (() => {
              switch (currentTable) {
                case 0:
                  return <Table entries={data?.slice(0, 1)} tableHead={tableHead} oneClickApply={handleOneClick} />;
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
        <>
          <section className={styles.table}>
            <div className={styles.tabs}>
              <button className={styles.tab}>{submitted}</button>
              <button className={`${styles.tab} ${styles.tabAlt}`} onClick={() => setApplicationTable((prev) => !prev)}>
                {back}
              </button>
            </div>
            <Table entries={singleEntry} tableHead={submissionTableHead} />
            <Step2Application />
          </section>
          <div className={styles.buttonContainer}>
            <Button
              disabled={isWindowClosed || isApplied}
              label="Submit Application"
              type="secondary"
              effectAlt
              isLoading={isLoading}
              loaderSize={'small'}
              loaderVariant={'neutral'}
              onClick={handleSubmitOneClick}
            />
          </div>
        </>
      )}
      {applicationTable && (
        <div className={styles.buttonContainer}>
          <Button disabled={isWindowClosed || isApplied} label="New Stipend Application" type="secondary" effectAlt onClick={handleNewApplication} />
        </div>
      )}
    </div>
  );
};
