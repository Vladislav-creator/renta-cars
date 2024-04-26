import React, { useState, useEffect } from 'react';
import { getAllcar } from '../../services'; // Подставьте корректный путь к сервису API
import css from './Home.module.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import { useTranslation } from 'react-i18next';
const Home = () => {
  const [brandsString, setBrandsString] = useState('');
  const { t } = useTranslation();
  useEffect(() => {
    const fetchCarBrands = async () => {
      try {
        let brandsData = sessionStorage.getItem('carBrands');
        if (!brandsData) {
          const allCarsData = await getAllcar();
          brandsData = Array.from(new Set(allCarsData.map(car => car.make))).join(', ');
          sessionStorage.setItem('carBrands', brandsData);
        }
        setBrandsString(brandsData);
      } catch (error) {
        console.error('Error fetching car brands:', error);
      }
    };

    fetchCarBrands();
  }, []);

  return (
    <div className={css.wraperOverlay}>
      <HeroSection />
      <div className="container">
      <p className={css.indentedParagraph}>{t('Dear')}
        {brandsString && ` ${brandsString}`} {t('for')}
      </p>
      </div>
    </div>
  );
};

export default Home;