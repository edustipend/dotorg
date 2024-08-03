import Header from '../../../components/Header';
import referralPageCopy, { TestId } from '../constants';
import { LeaderboardTable } from './LeaderboardTable';
import styles from './Leaderboard.module.css';
import { useState } from 'react';
const { leaderboardTitle, options } = referralPageCopy;

export const Leaderboard = () => {
  const [referralType, setReferralType] = useState(options[0].value);
  const handleOptionChange = (e) => {
    const referralType = e.target.value;
    setReferralType(referralType);
  };

  return (
    <div className={styles.leaderboard} data-testid={TestId.LEADERBOARD}>
      <Header className={styles.header} size="medium" dataTest={TestId.LEADERBOARD_HEADER}>
        {leaderboardTitle}
      </Header>
      <div className={styles.filter}>
        <h1 className={styles.filterTitle}>View by:</h1>
        <select className={styles.select} onChange={(e) => handleOptionChange(e)}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
      <LeaderboardTable referralType={referralType} />
    </div>
  );
};
