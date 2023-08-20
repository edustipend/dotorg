import React, { useContext, useState } from 'react';
import styles from './SideBar.module.css';
import { SideBarData, TestId, quoteData } from './contants';
import { Link } from 'react-router-dom';
import Quote from '../Quote/index';
import { SidebarCtx } from '../../context/SidebarContext';

const SideBar = () => {
  const [isActive, setIsActive] = useState(1);

  const { showSidebar, setShowSidebar } = useContext(SidebarCtx);

  const handleClick = (id) => {
    setIsActive(id);
    setShowSidebar(!showSidebar);
  };

  return showSidebar ? (
    <div className={styles.main} data-testid={TestId.SIDE_BAR}>
      <div className={styles.container}>
        <ul className={styles.sidebarlist} data-testid={TestId.SIDE_BAR_LIST}>
          {SideBarData.map((item) => {
            return (
              <Link key={item.id} to={item.link} onClick={() => handleClick(item.id)}>
                <li className={`${styles.sidebarlist_row} ${isActive === item.id ? styles.active : styles.inactive}`}>
                  {isActive === item.id && <div className={styles.sidecolor}></div>}
                  <img className={styles.sidebaricon} src={item.icon} alt="icon" />
                  <div className={styles.sidebartitle}>{item.title}</div>
                </li>
              </Link>
            );
          })}
        </ul>
        <div className={styles.line}></div>
        <div className={styles.quotecontainer} data-testid={TestId.QUOTE_CONTAINER}>
          {quoteData.map((item) => {
            return (
              <div key={item.id} className={styles.quotemain}>
                <p className={styles.header}>{item.header}</p>
                <Quote className={styles.quote} content={item.quote} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <div className={`${styles.main} ${styles.hideSidebar}`} />
  );
};

export default SideBar;
