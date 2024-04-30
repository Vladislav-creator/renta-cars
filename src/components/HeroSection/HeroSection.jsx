 //import React, { useState } from 'react';
import css from './HeroSection.module.css'; 
import { useTranslation } from 'react-i18next';
// import hornSound from '../../Sound/new_message_tone-1.mp3';

const HeroSection = () => {
  const { t } = useTranslation();
  // const [audio] = useState(new Audio(hornSound));
  // const handleButtonClick = () => {
  //   audio.play();
  // };

  return (
    <div className={css.heroSection}>
      <div className={css.heroOverlay}>
        <h1 className={css.heroTitle}>{t('Welcome')}<span className={css.rentaYellow}>{t('RENTA')}</span>{t('CARS')}</h1>
        {/* <div className={css.steeringWheel}>
          <button className={css.signal} onClick={handleButtonClick}></button>
          <div className={css.putMe}>
    <p>{t('p')}</p>
    <p>{t('u')}</p>
    <p>{t('t')}</p>
    <p>{t('m')}</p>
    <p>{t('e')}</p>
  </div>
        </div> */}
    </div>
    </div>
  );
}

export default HeroSection;