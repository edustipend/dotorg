import { getFormattedDate, getFormattedTime } from '../../../../utils/dateTimeUtils/dateTimeUtil';
import styles from './DesktopTable.module.css';
import PropTypes from 'prop-types';
import { applicationStatus } from '../constants';
import { Edit_Icon, Eye_Icon, Menu_Icon } from '../../../../assets/index';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveStep, setEditMode } from '../../../../store/reducers/ApplicationReducer';
import { isApplicationWindowClosed } from '../../../../utils';
import toast from 'react-hot-toast';
import { hasCurrentApplication } from '../../../../utils/hasCurrentApplication';
const { APPROVED, IN_VIEW, RECEIVED, DENIED } = applicationStatus;

export const DesktopTable = ({ entries, tableHead, oneClickApply }) => {
  const lastItem = entries?.length - 1;
  const [singleAppId, setSingleAppId] = useState(null);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const isWindowClosed = isApplicationWindowClosed();
  const { isVerified } = useSelector((state) => state.user);
  const [disabled, setDisabled] = useState(true);

  const handleShowMenu = (id, app) => {
    singleAppId === id ? setSingleAppId(null) : setSingleAppId(id);
    // Disable the edit button if the application is in previous month or window is closed
    setDisabled(!hasCurrentApplication([app]) || isWindowClosed);
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
                      itm?.status === `${APPROVED}`
                        ? 'approved bold_weight'
                        : itm?.status === `${IN_VIEW}`
                        ? 'in_view bold_weight'
                        : itm?.status === `${RECEIVED}`
                        ? 'in_view bold_weight'
                        : itm?.status === `${DENIED}`
                        ? 'denied bold_weight'
                        : ''
                    }>
                    {itm?.status}
                  </span>
                </td>
                <td>{getFormattedDate(itm?.createdAt)}</td>
                <td>{getFormattedTime(itm?.createdAt)}</td>
                {tableHead[5] && (
                  <td className={idx === lastItem ? `${styles.lastColumn}` : undefined}>
                    <button className={styles.btn} onClick={() => handleShowMenu(itm?._id, itm)}>
                      <img src={Menu_Icon} alt="menu" />
                    </button>
                    <div className={singleAppId === itm?._id ? styles.actionContainer : styles.hide}>
                      <button className={styles.view} onClick={() => handleView(itm?._id)}>
                        <img src={Eye_Icon} alt="view" />
                        <p>View Application</p>
                      </button>
                      <button className={styles.edit} onClick={() => handleEdit(itm?._id)} disabled={disabled}>
                        <img src={Edit_Icon} alt="view" />
                        <p>Edit Application</p>
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
