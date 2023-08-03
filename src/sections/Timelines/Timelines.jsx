import Button from '../../components/Button';
import Header from '../../components/Header';
import styles from './Timelines.module.css';
import { BTN, HEAD_TEXT, BACK, TestId, data } from './constants';
import { BackArrow } from '../../assets';
import Note from './internals/Note';
import { useState } from 'react';

export const Timelines = () => {
  const [notes, setNotes] = useState(data.slice(0, 6));
  const [loadMore, setLoadMore] = useState(false);

  const readMoreHandler = () => {
    setNotes(data.slice(0));
    setLoadMore(!loadMore);
  };
  const backHandler = () => {
    setNotes(data.slice(0, 6));
    setLoadMore(!loadMore);
  };

  return (
    <div className={styles.container} data-testid={TestId.TIMELINE_ID}>
      <Header className={styles.headText}>{HEAD_TEXT}</Header>
      <div className={styles.notes}>
        {notes.map((note, index) => {
          return <Note key={index} index={index} />;
        })}
      </div>
      <div className={styles.btnContainer}>
        <Button
          className={[`${styles.back} ${styles.btn}`].join(' ')}
          disabled={!loadMore}
          icon={BackArrow}
          iconPosition={BACK}
          label={BTN.BACK}
          onClick={backHandler}
          type={BTN.PLAIN}
        />
        <Button className={styles.btn} disabled={loadMore} label={BTN.MORE} onClick={readMoreHandler} type={BTN.SEC} />
      </div>
    </div>
  );
};
