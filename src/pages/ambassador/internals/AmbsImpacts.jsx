import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import '../styles.css';
import arrow from '../../../assets/arrow.png';
import prevArrow from '../../../assets/prevArrow.png';
import nextArrow from '../../../assets/nextArrow.png';
import {
  profiles,
  DeborahImpactPhotos,
  BamideleImpactPhotos,
  LaughterImpactPhotos,
  samuelProfileLink
} from '../constant';

export const AmbsImpacts = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTimerPaused, setIsTimerPaused] = useState(false);

  const [currentProfile, setCurrentProfile] = useState(profiles[currentProfileIndex]);
  const [currentImpactPhotos, setCurrentImpactPhotos] = useState([]);

  const goToNextProfile = () => {
    setCurrentProfileIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTimerPaused) {
        goToNextProfile();
        setCurrentProfile(profiles[currentProfileIndex]);
        updateCurrentImpactPhotos(currentProfile);
      }
    }, 6000);

    updateCurrentImpactPhotos(currentProfile);

    return () => clearInterval(timer);
  }, [currentProfileIndex, currentProfile, isTimerPaused]);

  const openModal = () => {
    setIsModalOpen(true);
    setIsTimerPaused(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsTimerPaused(false);
  };

  const nextImage = () => {
    if (currentImageIndex < currentImpactPhotos.length - 1) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    }
  };

  const isPrevDisabled = currentImageIndex === 0;
  const isNextDisabled = currentImageIndex === currentImpactPhotos.length - 1;

  const updateCurrentImpactPhotos = (profile) => {
    if (profile) {
      switch (profile.name) {
        case 'Bamidele James':
          setCurrentImpactPhotos(BamideleImpactPhotos);
          break;
        case 'Deborah Akujobi':
          setCurrentImpactPhotos(DeborahImpactPhotos);
          break;
        case 'Laughter Atanda':
          setCurrentImpactPhotos(LaughterImpactPhotos);
          break;
        default:
          setCurrentImpactPhotos([]);
      }
    }
  };

  return (
    <div className="abs-main">
      <Header className="section-header-small" color="primary" size="small">
        MEET OUR INAUGURAL AMBASSADORS AND THEIR IMPACT PROJECTS
      </Header>
      <Header className="section-header-large " color="primary" size="medium">
        MEET OUR INAUGURAL AMBASSADORS AND THEIR IMPACT PROJECTS
      </Header>
      <div className="section-header-underline color-accent section-header-line">
        <div />
        <div />
      </div>
      <div className="ambsimpacts" id="ambsimpacts">
        <div className="absimage">
          <Text className="vertical-text" content="COHORT 1" />
          <div className="absimage-div">
            <img className="absimages" src={currentProfile.image} alt={currentProfile.name} />
          </div>
        </div>
        <div className="ambsimpacts-child">
          <Text className="abs-name" content={currentProfile.name} />

          <div>
            {currentProfile.description.map((text, index) => (
              <Text className="abs-desc" key={index} content={text} />
            ))}
          </div>
          <div className="project-photos-and-arrow">
            {currentProfile.name === 'Ekemini Samuel' ? (
              <a className="project-photos" href={samuelProfileLink} target="_blank" rel="noopener noreferrer">
                View impact project
              </a>
            ) : currentProfile.name === 'Ubon Udonkang' ? null : (
              <a className="project-photos" onClick={openModal}>
                View impact project photos
              </a>
            )}

            {currentProfile.name === 'Ubon Udonkang' ? null : <img src={arrow} alt="view-impact-project-photos-arrow" />}
          </div>
        </div>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <img className={`prevArrowNav ${isPrevDisabled ? 'disabled' : ''}`} onClick={prevImage} src={prevArrow} alt="prevArrow" />
              <div className="modal-content">
                {currentImpactPhotos.length > 0 ? (
                  <img className="impact-photos" src={currentImpactPhotos[currentImageIndex]} alt="impact-photos" />
                ) : (
                  <p>No impact photos available.</p>
                )}
              </div>
              <img className={`nextArrowNav ${isNextDisabled ? 'disabled' : ''}`} onClick={nextImage} src={nextArrow} alt="nextArrow" />
              <button className="close-button" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
