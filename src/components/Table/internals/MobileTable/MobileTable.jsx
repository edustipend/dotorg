import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MobileTable.module.css';
import arrowleft from '../../../../assets/arrow-left.svg';
import arrowright from '../../../../assets/arrow-right.svg';
import { getFormattedDate, getFormattedTime } from '../../../../utils/dateTimeUtils/dateTimeUtil';
import { applicationStatus, tooltipContent } from '../constants';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isApplicationWindowClosed } from '../../../../utils';
import { setActiveStep, setEditMode } from '../../../../store/reducers/ApplicationReducer';
import toast from 'react-hot-toast';
import { hasCurrentApplication } from '../../../../utils/hasCurrentApplication';
const { APPROVED, IN_VIEW, RECEIVED, DENIED } = applicationStatus;

export const MobileTable = ({ entries, tableHead, oneClickApply }) => {
  const [entry, setEntry] = useState(0);
  const [count, setCount] = useState(1);
  const currentEntry = entries[entry];
  const nav = useNavigate();
  const dispatch = useDispatch();
  const isWindowClosed = isApplicationWindowClosed();
  const { isVerified } = useSelector((state) => state.user);
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

  const handleView = (id) => {
    oneClickApply(id);
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
  const handleArrowLeft = () => {
    setEntry((prev) => prev - 1);
    setCount((prev) => prev - 1);
  };
  const handleArrowRight = () => {
    setEntry((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div className={styles.Main}>
      <table className={styles.mobileTable}>
        <thead>
          <tr>
            <th className={styles.head}>{tableHead[0]}</th>
            <th className={styles.row}>
              <div className={styles.entryNav}>
                <button
                  disabled={entry === 0 ? true : false}
                  className={entry === 0 ? `${styles.disabled} ${styles.leftArrow}` : `${styles.leftArrow}`}
                  onClick={handleArrowLeft}>
                  <img src={arrowleft} alt="arrowleft" className={styles.arrow_img} />
                </button>
                <span className={styles.id}>{count}</span>
                <button
                  disabled={entry + 1 === entries.length ? true : false}
                  className={entry + 1 === entries.length ? `${styles.disabled} ${styles.rightArrow}` : `${styles.rightArrow}`}
                  onClick={handleArrowRight}>
                  <img src={arrowright} alt="arrowright" className={styles.arrow_img} />
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`${styles.head} ${styles.headAlt}`}>{tableHead[1]}</td>
            <td className={`${styles.row} ${styles.rowAlt}`}>{currentEntry && currentEntry.stipendCategory?.toUpperCase()}</td>
          </tr>
          <tr>
            <td className={`${styles.head} ${styles.headAlt}`}>{tableHead[2]}</td>
            <td className={`${styles.row} ${styles.rowAlt}`}>
              <span
                className={
                  currentEntry?.status === `${APPROVED}`
                    ? 'approved bold_weight'
                    : currentEntry?.status === `${IN_VIEW}`
                    ? 'in_view bold_weight'
                    : currentEntry?.status === `${RECEIVED}`
                    ? 'in_view bold_weight'
                    : currentEntry?.status === `${DENIED}`
                    ? 'denied bold_weight'
                    : ''
                }>
                {currentEntry?.status}
              </span>
            </td>
          </tr>
          <tr>
            <td className={`${styles.head} ${styles.headAlt}`}>{tableHead[3]}</td>
            <td className={`${styles.row} ${styles.rowAlt}`}>{getFormattedDate(currentEntry?.createdAt)}</td>
          </tr>
          <tr>
            <td className={`${styles.head} ${styles.headAlt}`}>{tableHead[4]}</td>
            <td className={`${styles.row} ${styles.rowAlt}`}>{getFormattedTime(currentEntry?.createdAt)}</td>
          </tr>
          {tableHead[5] && (
            <tr>
              <td className={`${styles.head} ${styles.headAlt} ${styles.row1}`}>{tableHead[5]}</td>
              <td className={`${styles.row} ${styles.rowAlt} ${styles.row2}`}>
                <div className={styles.actionContainer}>
                  <button className={styles.view} onClick={() => handleView(currentEntry?._id)}>
                    <p>View </p>
                  </button>
                  <div className={styles.line} />
                  <button
                    className={styles.edit}
                    onClick={() => handleEdit(currentEntry?._id)}
                    disabled={handleDisable(currentEntry)}
                    onMouseOver={() => handleMouseOver(currentEntry)}
                    onMouseOut={() => setShowTooltip(false)}>
                    <p>Edit </p>
                    {activeApplication === currentEntry?._id && showTooltip && (
                      <span className={styles.content}>{!isVerified ? tooltipContent.UNVERIFIED_USER : tooltipContent.VERIFIED_USER}</span>
                    )}
                  </button>
                  <span className={styles.content}>{!isVerified ? tooltipContent.UNVERIFIED_USER : tooltipContent.VERIFIED_USER}</span>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

MobileTable.propTypes = {
  entries: PropTypes.array,
  tableHead: PropTypes.array,
  oneClickApply: PropTypes.func
};
MobileTable.defaultProps = {
  entries: [],
  tableHead: []
};
