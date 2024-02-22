import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { COLLECTION_NAME, SURVEY_OPTIONS, SurveyOptionsId, TestId, Text } from './constants';
import styles from './SurveyBox.module.css';
import BadOptionImage from '../../assets/analytics/bad.png';
import BlehOptionImage from '../../assets/analytics/bleh.png';
import GoodOptionImage from '../../assets/analytics/good.png';
import Button from '../Button';
import initFirebaseApp from '../../firebaseConfig';

const app = initFirebaseApp();
const db = getFirestore(app);

const OPTIONS_ICON_MAP = {
  [SurveyOptionsId.BAD]: BadOptionImage,
  [SurveyOptionsId.BLEH]: BlehOptionImage,
  [SurveyOptionsId.GOOD]: GoodOptionImage
};

export const SurveyBox = ({ onClose, onSuccess, show }) => {
  const [rating, setRating] = useState(-1);
  const [showComments, setShowComments] = useState(false);
  const [showSurvey, setShowSurvey] = useState(show);
  const [commentsContent, setCommentsContent] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setShowSurvey(false);
        setSuccess(false);
      }, 3000);
    }
  }, [success]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setShowSurvey(false);
  };

  const handleSubmit = async () => {
    const payload = {
      rating,
      comments: commentsContent,
      timestamp: new Date()
    };

    const docRef = await addDoc(collection(db, COLLECTION_NAME), payload);

    if (docRef && docRef.id) {
      setSuccess(true);
      onSuccess();
      console.log('Feedback submitted with ID: ', docRef.id);
    } else {
      setShowSurvey(false);
    }
  };

  const handleSelectOption = (id) => {
    setRating(id);
    setShowComments(true);
  };

  return success ? (
    <aside className={styles['survey-container']}>
      <p data-testid={TestId.SURVEY_SUCCESS_TEST_ID}>{Text.SURVEY_SUCCESS}</p>
      <button onClick={handleClose}>x</button>
    </aside>
  ) : showSurvey ? (
    <aside className={styles['survey-container']}>
      <p data-testid={TestId.SURVEY_TITLE_TEST_ID}>{Text.SURVEY_TITLE}</p>
      <button onClick={handleClose}>x</button>
      <div className={styles['survey-options-container']}>
        {SURVEY_OPTIONS.map((option) => (
          <div
            role="button"
            key={option.id}
            onClick={() => {
              handleSelectOption(option.rating);
            }}
          >
            <img className={rating === option.rating ? styles['option-selected'] : ''} alt={option.id} src={OPTIONS_ICON_MAP[option.id]} />
          </div>
        ))}
      </div>
      {showComments && (
        <div className={styles['survey-comments-area-container']}>
          <textarea
            className={styles['survey-comments-area']}
            placeholder={Text.SURVEY_BODY_PLACEHOLDER}
            maxLength={400}
            onChange={(e) => setCommentsContent(e.target.value)}
            value={commentsContent}
          />
          <Button label="Send feedback" size="small" className={styles['survey-submit-cta']} onClick={handleSubmit} />
        </div>
      )}
    </aside>
  ) : (
    <></>
  );
};

SurveyBox.propTypes = {
  onClose: PropTypes.func,
  onSuccess: PropTypes.func,
  show: PropTypes.bool
};

SurveyBox.defaultProps = {
  onClose: () => {},
  onSuccess: () => {},
  show: true
};
