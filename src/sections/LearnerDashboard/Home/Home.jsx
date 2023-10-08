import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import { Quote, TestId, constants, submissionTableHead, submitted, tableHead } from './internals/constants';
import hand from '../../../assets/waving hand.png';
import { tab } from './internals/constants';
import Button from '../../../components/Button';
import Table from '../../../components/Table';
import { getData, postData } from '../../../services/ApiClient';
import { useDispatch, useSelector } from 'react-redux';
import { Step2Application } from '../../../components/ApplicationSteps/Step2Application/Step2Application';
import { benefits, category, futureHelp, reason, setActiveStep, steps } from '../../../store/reducers/ApplicationReducer';
import { isApplicationWindowClosed } from '../../../utils';
const { dashboard } = constants;

export const Home = () => {
  const [currentTable, setCurrentTable] = useState(0);
  const [applicationTable, setApplicationTable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const isWindowClosed = isApplicationWindowClosed();
  const { name, id, email } = useSelector((state) => state.user);
  const [first] = name.split(' ');
  const { stipendCategory, reasonForRequest, stepsTakenToEaseProblem, potentialBenefits, futureHelpFromUser } = useSelector(
    (state) => state.application
  );
  const Category = stipendCategory.split('/')[0].toLowerCase();

  const applicationInfo = {
    userId: id,
    email: email,
    stipendCategory: Category,
    reasonForRequest: reasonForRequest,
    stepsTakenToEaseProblem: stepsTakenToEaseProblem,
    potentialBenefits: potentialBenefits,
    futureHelpFromUser: futureHelpFromUser
  };

  const getUserData = useCallback(async () => {
    try {
      const response = await getData(`user/application-history/search?id=${id}`);
      setData(response.message);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const getSubmittedData = useCallback(async () => {
    try {
      const response = await getData(`user/one-click-apply/${email}`);
      const { stipendCategory, reasonForRequest, stepsTakenToEaseProblem, potentialBenefits, futureHelpFromUser } = response.message;

      const categoryData =
        stipendCategory === 'laptop'
          ? 'Laptop/Learning Device'
          : stipendCategory === 'course'
          ? 'Course/Certification Fees'
          : stipendCategory === 'data'
          ? 'Data/Internet Subscription'
          : 'Laptop/Learning Device';

      dispatch(category(categoryData));
      dispatch(reason(reasonForRequest));
      dispatch(steps(stepsTakenToEaseProblem));
      dispatch(benefits(potentialBenefits));
      dispatch(futureHelp(futureHelpFromUser));
    } catch (error) {
      console.log(error);
    }
  }, [email, dispatch]);

  const handleOneClick = () => {
    setApplicationTable(!applicationTable);
    getSubmittedData();
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await postData(`user/request-stipend`, applicationInfo);
      console.log(res);
      if (res.success) {
        setApplicationTable(true);
      } else {
        setError(res.message);
      }
    } catch (error) {
      console.log(error.message, 'ERROR');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewRequest = () => {
    dispatch(setActiveStep(1));
    nav('/application');
  };

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <div className={styles.Main} data-testid={TestId.HOME}>
      <section className={styles.greet}>
        <div className={styles.userContainer}>
          <p className={styles.dashboard}>{dashboard}</p>
          <div className={styles.waveSection}>
            <p className={styles.hello} data-testid={TestId.USER}>
              Hello, {first}
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
                return <Table entries={data} tableHead={tableHead} oneClickApply={handleOneClick} />;
              case 1:
                return <Table entries={data} tableHead={tableHead} oneClickApply={handleOneClick} />;
              default:
                return <Table entries={data} tableHead={tableHead} oneClickApply={handleOneClick} />;
            }
          })()}
        </section>
      )}
      {!applicationTable && (
        <>
          <section className={styles.table}>
            <div className={styles.tabs}>
              <button className={styles.tab}>{submitted}</button>
            </div>
            <Table entries={data} tableHead={submissionTableHead} />
            <Step2Application />
          </section>
          <div className={styles.buttonContainer}>
            <Button label="Back" type="plain" onClick={() => setApplicationTable((prev) => !prev)} />
            <Button
              disabled={isWindowClosed}
              label="Submit Application"
              type="secondary"
              effectAlt
              isLoading={isLoading}
              loaderSize={'small'}
              loaderVariant={'neutral'}
              onClick={handleSubmit}
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
        </>
      )}
      {applicationTable && (
        <div className={styles.buttonContainer}>
          <Button disabled={isWindowClosed} label="New Stipend Application" type="secondary" effectAlt onClick={handleNewRequest} />
        </div>
      )}
    </div>
  );
};
