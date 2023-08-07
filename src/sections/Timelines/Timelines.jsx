import Button from '../../components/Button';
import Header from '../../components/Header';
import styles from './Timelines.module.css';
import { BTN, HEAD_TEXT, BACK, TestId, mockData } from './constants';
import { BackArrow } from '../../assets';
import Note from './internals/Note';
import { useState } from 'react';
import { MobileTimeline } from './internals/MobileTimelines/MobileTimeline';

export const Timelines = () => {
  const [notes, setNotes] = useState(mockData.slice(0, 6));
  const [loadMore, setLoadMore] = useState(false);

  const readMoreHandler = () => {
    setNotes(mockData.slice(0));
    setLoadMore(!loadMore);
  };
  const backHandler = () => {
    setNotes(mockData.slice(0, 6));
    setLoadMore(!loadMore);
  };

  return (
    <div className={styles.container} data-testid={TestId.TIMELINE_ID}>
      <Header className={styles.headText}>{HEAD_TEXT}</Header>
      <div className={styles.notes} data-testid={TestId.NOTES_CONTAINER_ID}>
        {notes.map((note, index) => {
          return <Note key={index} index={index} userName={note.userName} userProfile={note.userProfile} content={note.content} />;
        })}
      </div>
      <div className={styles.btnContainer}>
        <Button
          className={[`${styles.back} ${styles.btn}`].join(' ')}
          dataTest={TestId.BACK_ID}
          disabled={!loadMore}
          icon={BackArrow}
          iconPosition={BACK}
          label={BTN.BACK}
          onClick={backHandler}
          type={BTN.PLAIN}
        />
        <Button className={styles.btn} dataTest={TestId.READ_MORE_ID} disabled={loadMore} label={BTN.MORE} onClick={readMoreHandler} type={BTN.SEC} />
      </div>
      <MobileTimeline timelines={mockData} />
    </div>
  );
};
