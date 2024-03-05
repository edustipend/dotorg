import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { getFormattedDate, getFormattedTime } from '../../../../utils/dateTimeUtils/dateTimeUtil';
import styles from './DesktopTable.module.css';
import { applicationStatus, tooltipContent } from '../constants';
import { Edit_Icon, Eye_Icon } from '../../../../assets/index';
import {
  setActiveStep,
  setCurrentApplication,
  setDisableOneClickCTA,
  setDisableTextbox,
  setEditMode,
  setViewBtnLabel
} from '../../../../store/reducers/ApplicationReducer';
import { hasCurrentApplication } from '../../../../utils/hasCurrentApplication';
import { PageCopy } from '../../../../sections/LearnerDashboard/Home/constants';
import useApplicationWindowStatus from '../../../../hooks/useApplicationWindow';

const { APPROVED, IN_VIEW, RECEIVED, DENIED } = applicationStatus;

export const DesktopTable = ({ entries, tableHead, oneClickApply }) => {
  const lastItem = entries?.length - 1;
  const nav = useNavigate();
  const dispatch = useDispatch();
  const isWindowClosed = useApplicationWindowStatus();
  const { isVerified } = useSelector((state) => state.user);
  const { hasApplied } = useSelector((state) => state.application);
  const [activeApplication, setActiveApplication] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const handleMouseOver = (app) => {
    setActiveApplication(app?._id);
    setShowTooltip(handleDisable(app));
  };
  const handleDisable = (app) => {
    if (!isVerified) return true;
    return !hasCurrentApplication([app]) || isWindowClosed;
  };
  const handleView = (app) => {
    dispatch(setCurrentApplication(app));
    if (isWindowClosed) {
      // - They should see messaging that says your application is under review or whatever status and cannot be submitted.
      // - Text areas should be disabled.
      dispatch(setViewBtnLabel(PageCopy.REUSE_APPLICATION));
      dispatch(setDisableTextbox(true));
      dispatch(setDisableOneClickCTA(true));
      // return;
    } else {
      if (hasApplied) {
        const currentApp = hasCurrentApplication([app]);
        if (currentApp) {
          //   - Enable text areas by default.
          // - CTA above and below should read Save Changes
          dispatch(setViewBtnLabel(PageCopy.SAVE_CHANGES));
          dispatch(setDisableTextbox(false));
          dispatch(setDisableOneClickCTA(false));
        } else {
          //     - Disable text areas by default
          // - CTA above and below should read Reuse Application but buttons should be greyed out.
          // - Hover or mouseover the CTA should show tooltip that says You can't reuse this application because you have already applied this month
          dispatch(setViewBtnLabel(PageCopy.REUSE_APPLICATION));
          dispatch(setDisableTextbox(true));
          dispatch(setDisableOneClickCTA(true));
        }
      } else {
        // - CTA above and below should read Reuse Application
        // - When user clicks on the CTA, text areas should be enabled and CTA above and below should change to Submit Application
        dispatch(setViewBtnLabel(PageCopy.REUSE_APPLICATION));
        dispatch(setDisableTextbox(true));
        dispatch(setDisableOneClickCTA(false));
      }
    }
    oneClickApply(app?._id);
  };

  const handleEdit = (id) => {
    if (!isVerified) {
      return toast.error('Whoops! Verification needed for this action.');
    }
    dispatch(setEditMode(true));
    oneClickApply(id);
    dispatch(setActiveStep(1));
    nav('/application');
  };

  return (
    <section className={styles.Main}>
      <table className={styles.desktopTable}>
        <thead>
          <tr>
            {tableHead?.map((itm, idx) => {
              return (
                <th key={idx} className={styles.head}>
                  {itm}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {entries?.map((itm, idx) => {
            return (
              <tr key={idx}>
                <td className={idx === lastItem ? `${styles.firstColumn}` : undefined}>{idx + 1}</td>
                <td>{itm?.stipendCategory?.toUpperCase()}</td>
                <td>
                  <span
                    className={
                      isVerified
                        ? itm?.status === `${APPROVED}`
                          ? 'approved bold_weight'
                          : itm?.status === `${IN_VIEW}`
                          ? 'in_view bold_weight'
                          : itm?.status === `${RECEIVED}`
                          ? 'in_view bold_weight'
                          : itm?.status === `${DENIED}`
                          ? 'denied bold_weight'
                          : ''
                        : 'denied bold_weight'
                    }
                  >
                    {isVerified ? itm?.status : applicationStatus.VERIFY_NOW}
                  </span>
                </td>
                <td>{getFormattedDate(itm?.createdAt)}</td>
                <td>{getFormattedTime(itm?.createdAt)}</td>
                {tableHead[5] && (
                  <td className={idx === lastItem ? `${styles.lastColumn}` : undefined}>
                    <div className={styles.actionContainer}>
                      <button className={styles.view} onClick={() => handleView(itm)}>
                        <img src={Eye_Icon} alt="view" />
                        <p>View </p>
                      </button>
                      <div className={styles.line} />
                      <button
                        className={styles.edit}
                        onClick={() => handleEdit(itm?._id)}
                        disabled={handleDisable(itm)}
                        onMouseOver={() => handleMouseOver(itm)}
                        onMouseOut={() => setShowTooltip(false)}
                      >
                        <img src={Edit_Icon} alt="view" />
                        <p>Edit application </p>
                        {activeApplication === itm?._id && showTooltip && (
                          <span className={styles.content}>{!isVerified ? tooltipContent.UNVERIFIED_USER : tooltipContent.VERIFIED_USER}</span>
                        )}
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

DesktopTable.propTypes = {
  entries: PropTypes.array,
  tableHead: PropTypes.array,
  oneClickApply: PropTypes.func
};
DesktopTable.defaultProps = {
  entries: [],
  tableHead: []
};
