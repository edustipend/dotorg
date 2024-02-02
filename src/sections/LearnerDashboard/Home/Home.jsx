import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import styles from './Home.module.css';
import hand from '../../../assets/waving hand.png';
import { Quote, TestId, back, constants, submissionTableHead, submitted, tableHead } from './internals/constants';
import { tab } from './internals/constants';
import Button from '../../../components/Button';
import Table from '../../../components/Table';
import ActionBanner from '../../../components/ActionBanner';
import { PageCopy, tooltipContent } from './constants';
import useResendVerification from '../../../hooks/useResendVerification';
import { setHasApplied, setNewApplication } from '../../../store/reducers/ApplicationReducer';
import { isApplicationWindowClosed } from '../../../utils';
import CheckPreviousApplication from '../../../utils/CheckPreviousApplication';
import { APPLICATION_HISTORY, EDIT_APPLICATION, ONE_CLICK_APPLY, authorizedPost } from '../../../services/ApiClient';
import { Step2Application } from '../../../components/ApplicationSteps/Step2Application/Step2Application';
import {
  benefits,
  category,
  futureHelp,
  reason,
  reset,
  setApplicationId,
  setDisableTextbox,
  steps
} from '../../../store/reducers/ApplicationReducer';
import { hasCurrentApplication } from '../../../utils/hasCurrentApplication';
import { toastNotifications } from '../../../components/ApplicationSteps/Step5Application/Internals/constants';
import { ModalContext } from '../../../context/ModalContext';
import { UseModal } from '../../../components/Modal/UseModal';
import NewApplication from '../../../components/ApplicationSteps/Step5Application/Internals/NewApplication';
const { ONE_CLICK, ERROR } = toastNotifications;

export const Home = () => {
  const [currentTable, setCurrentTable] = useState(0);
  const [applicationTable, setApplicationTable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [singleEntry, setSingleEntry] = useState([]);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');
  const [prompt, setPrompt] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);
  const { name, userId, isVerified } = useSelector((state) => state.user);
  const {
    stipendCategory,
    reasonForRequest,
    stepsTakenToEaseProblem,
    potentialBenefits,
    futureHelpFromUser,
    applicationId,
    viewBtnLabel,
    disableOneClickCTA
  } = useSelector((state) => state.application);
  const { newApplicationModal, handleNewApplicationModal } = useContext(ModalContext);
  const { handleResendVerification, isLoading } = useResendVerification();
  const [first] = name.split(' ');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isWindowClosed = isApplicationWindowClosed();
  const Category = stipendCategory.split('/')[0].toLowerCase();
  const { dashboard } = constants;
  const applicationInfo = {
    userId,
    stipendCategory: Category,
    reasonForRequest: reasonForRequest,
    stepsTakenToEaseProblem: stepsTakenToEaseProblem,
    potentialBenefits: potentialBenefits,
    futureHelpFromUser: futureHelpFromUser
  };
  const handleMouseOver = () => {
    setShowTooltip(disableOneClickCTA);
  };

  const getUserData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await authorizedPost(APPLICATION_HISTORY, {
        userId
      });
      if (response.success) {
        const sortedData = response?.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setData(sortedData);
        dispatch(setHasApplied(hasCurrentApplication(sortedData)));
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, [dispatch, userId]);

  const handleOneClick = (id) => {
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

  const handleSubmitOneClick = async () => {
    const RE_USE_APPLICATION = viewBtnLabel === PageCopy.RE_USE_APPLICATION;
    let timeout = 0;
    if (!isVerified) {
      timeout = 650;
      toast.error(ONE_CLICK.error, {
        duration: 600
      });
    }
    const PAYLOAD = RE_USE_APPLICATION
      ? { ...applicationInfo, parentApplication: applicationId }
      : { ...applicationInfo, applicationId: applicationId };

    const ROUTE = RE_USE_APPLICATION ? ONE_CLICK_APPLY : EDIT_APPLICATION;

    const MSG = RE_USE_APPLICATION ? ONE_CLICK.loading : ONE_CLICK.editing;

    setTimeout(() => {
      setIsSubmitting(true);
      toast.loading(MSG, { id: ONE_CLICK.id });
    }, timeout);

    try {
      const res = await authorizedPost(ROUTE, PAYLOAD);
      if (res.success) {
        setIsSuccess(res?.success);
        setMessage(res?.message || ONE_CLICK.message);
        if (!isVerified) {
          handleResendVerification();
          setPrompt(constants.PROMPT);
        }
      } else {
        setIsSuccess(false);
        setMessage(res?.message || ERROR.message);
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage(error.message || ERROR.message);
    } finally {
      getUserData();
      toast.dismiss(ONE_CLICK.id);
      setIsSubmitting(false);
      dispatch(reset());
      handleNewApplicationModal();
      setApplicationTable(!applicationTable);
    }
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
      const hasApplied = CheckPreviousApplication(data?.[0]);
      return !hasApplied && !isWindowClosed;
    }
  };

  useEffect(() => {
    getUserData();
    dispatch(reset());
    dispatch(setDisableTextbox(true));
  }, [getUserData, dispatch]);

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
              <button className={`${styles.tab} ${styles.backBtn}`} onClick={() => setApplicationTable((prev) => !prev)}>
                {back}
              </button>
            </div>
            <Table entries={singleEntry} tableHead={submissionTableHead} />
            <Step2Application />
          </section>
          <div className={styles.btnContainer}>
            <Button
              disabled={disableOneClickCTA}
              label={viewBtnLabel}
              type="secondary"
              effectAlt
              isLoading={isSubmitting}
              loaderSize={'small'}
              loaderVariant={'neutral'}
              onClick={handleSubmitOneClick}
              onMouseOver={handleMouseOver}
              onMouseOut={() => setShowTooltip(false)}
            />
            {showTooltip && <span className={styles.content}>{isWindowClosed ? tooltipContent.WINDOW_CLOSED : tooltipContent.HAS_SUBMITTED}</span>}
          </div>
        </>
      )}
      {applicationTable > 0 && (
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
      <UseModal isActive={newApplicationModal}>
        <NewApplication isSuccess={isSuccess} message={message} prompt={prompt} />
      </UseModal>
    </div>
  );
};
