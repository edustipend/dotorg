import React from 'react';
import styles from './Card.module.css';
import PropTypes from 'prop-types';

const Card = ({ itm = null, offset = 0 }) => {
  let active = offset === 0 ? true : null;
  const { id, name, status, testimonial, socials, image } = itm;
  return (
    <div key={id} className={styles.card} data-active={active} style={{ '--offset': offset, '--skew': offset === 0 ? 0 : offset > 0 ? 1 : -1 }}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            <img src={image} alt={status} className={styles.imgPerson} />
          </div>
          <span className={styles.testimonial}>{testimonial}</span>
        </div>
        <div>
          <div className={styles.hr} />
          <div className={styles.bottom}>
            <p className={styles.name}>
              {name},<span className={styles.status}>{status}</span>
            </p>
            <div className={styles.socialsContainer}>
              {socials.map((itm) => {
                const { id, media, img, link } = itm;
                return (
                  <a key={id} href={link}>
                    <img src={img} alt={media} className={styles.socialMedia} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  itm: PropTypes.object,
  offset: PropTypes.number
};
