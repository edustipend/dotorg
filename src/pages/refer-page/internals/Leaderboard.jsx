import Header from '../../../components/Header';
import referralPageCopy, { TestId } from '../constants';
import { LeaderboardTable } from './LeaderboardTable';
import styles from './Leaderboard.module.css';
import { useState } from 'react';
const { leaderboardTitle, tabs } = referralPageCopy;

export const Leaderboard = () => {
  const [referralType, setReferralType] = useState(tabs[1].value);
  const handleSwitch = (type) => {
    setReferralType(type);
  };

  return (
    <div className={styles.leaderboard} data-testid={TestId.LEADERBOARD}>
      <Header className={styles.header} size="medium" dataTest={TestId.LEADERBOARD_HEADER}>
        {leaderboardTitle}
      </Header>
      <div className={styles.tabs}>
        {tabs.map((option) => (
          <button
            className={`${styles.tab} ${referralType === option.value ? styles.activeTab : ''}`}
            key={option.value}
            onClick={() => handleSwitch(option.value)}>
            {option.title}
          </button>
        ))}
      </div>
      <LeaderboardTable referralType={referralType} />
    </div>
  );
};
