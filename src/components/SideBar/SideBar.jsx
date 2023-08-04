import React, { useState } from 'react';
import styles from './SideBar.module.css';
import { SideBarData, quoteData } from './contants';
import { Link } from 'react-router-dom';
import Quote from '../Quote/index';

const SideBar = () => {
  const [isActive, setItActive] = useState(1);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <ul className={styles.sidebarlist}>
          {SideBarData.map((item) => {
            return (
              <Link key={item.id} to={item.link} onClick={() => setItActive(item.id)}>
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
        <div className={styles.quotecontainer}>
          {quoteData.map((item) => {
            return (
              <div key={item.id} className={styles.quotemain}>
                <p className={styles.boldquote}>{item.boldquote}</p>
                <Quote className={styles.quote} content={item.quote} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
