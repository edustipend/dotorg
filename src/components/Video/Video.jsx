import React from 'react';
import PropTypes from 'prop-types';
import styles from './Video.module.css';

const VideoPlayer = ({ src, isIFrame, width = '100%', height, controls = true, autoPlay = false, loop = false, muted = false }) => {
  return isIFrame ? (
    <div className={styles.videoContainer}>
      <iframe
        width={width}
        height={height}
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video"
        className={styles.iframe}></iframe>
    </div>
  ) : (
    <div className={styles.videoContainer}>
      <video width={width} height={height} controls={controls} autoPlay={autoPlay} loop={loop} muted={muted} className={styles.video}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isIFrame: PropTypes.bool.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool
};

export default VideoPlayer;
