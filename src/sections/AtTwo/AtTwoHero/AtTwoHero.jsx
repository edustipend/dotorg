import React from 'react';
import style from './AtTwoHero.module.css';
import Button from '../../../components/Button';

const header = {
  heroTitle: 'Edustipend is 2!!!',
  heroParagrah: "As part of our second anniversary celebration, we're giving away 22 laptops to 22 lucky winners!"
};

function AtTwoHero() {
  return (
    <div className={style.heroImage}>
      <div className={style.heroHeader}>
        <h1 className={style.heroTitle}>{header.heroTitle}</h1>
        <p className={style.heroParagraph}>{header.heroParagrah}</p>
        <>
          <Button size="large" type="secondary" label="How to win" />
        </>
      </div>
    </div>
  );
}

export default AtTwoHero;
