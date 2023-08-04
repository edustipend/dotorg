import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Button from '../../../../components/Button';
import { BTN, TestId } from '../../constants';
import Note from '../Note';
import styles from './MobileTimeline.module.css';

export const MobileTimeline = ({ timelines }) => {
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
  const [note, setNote] = useState(timelines.slice(currentNoteIndex, 1));

  const nextHandler = () => {
    setCurrentNoteIndex((prev) => (prev === timelines.length - 1 ? 0 : prev + 1));
  };

  const prevHandler = () => {
    setCurrentNoteIndex((prev) => (prev === 0 ? timelines.length - 1 : prev - 1));
  };

  useEffect(() => {
    setNote(timelines.slice(currentNoteIndex, currentNoteIndex + 1));
    // console.log(note);
  }, [timelines, currentNoteIndex]);

  return (
    <div className={styles.container} data-testid={TestId.MOBILE_ID}>
      <div className={styles.note}>
        <Note
          key={currentNoteIndex}
          index={currentNoteIndex}
          userName={note[0].userName}
          userProfile={note[0].userProfile}
          content={note[0].content}
        />
        ;
      </div>
      <div className={styles.btnContainer}>
        <div className={styles.effect}>
          <Button className={[`${styles.prev} ${styles.btn}`].join(' ')} label={BTN.PREV} onClick={prevHandler} type={BTN.PLAIN} />
        </div>
        <div className={styles.pagination}>
          <span className={styles.num}>{currentNoteIndex + 1}</span>
          {'/'}
          <span className={styles.num}>{timelines.length}</span>
        </div>
        <div className={styles.effect}>
          <Button className={[`${styles.next} ${styles.btn}`].join(' ')} label={BTN.NEXT} onClick={nextHandler} type={BTN.PLAIN} />
        </div>
      </div>
    </div>
  );
};

MobileTimeline.propTypes = {
  timelines: PropTypes.array
};
