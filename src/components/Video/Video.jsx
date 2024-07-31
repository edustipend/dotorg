import React from 'react';
import PropTypes from 'prop-types';
import styles from './Video.module.css';

const VideoPlayer = ({ src, isIFrame, width = '100%', height, controls = true, autoPlay = false, loop = false, muted = false }) => {
  return isIFrame ? (
    <div className={styles.videoContainer}>
      <iframe
        width={width}
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        className={styles.iframe}
        allowfullscreen
      ></iframe>
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
