import css from './HeroSection.module.css'; 
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  

  return (
    <div className={css.heroSection}>
      <div className={css.heroOverlay}>
        <h1 className={css.heroTitle}>{t('Welcome')}<span className={css.rentaYellow}>{t('RENTA')}</span>{t('CARS')}</h1>
    </div>
    </div>
  );
}

export default HeroSection;