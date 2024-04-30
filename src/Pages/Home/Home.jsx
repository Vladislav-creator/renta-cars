import React, { useState, useEffect } from 'react';
import hornSound from '../../Sound/new_message_tone-1.mp3';
import { getAllcar } from '../../services'; // Подставьте корректный путь к сервису API
import css from './Home.module.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import { useTranslation } from 'react-i18next';
const PASSWORD = process.env.REACT_APP_PASSWORD;
const Home = () => {
  const [audio] = useState(new Audio(hornSound));
  const handleButtonClick = () => {
    audio.play();
  };
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
  const [result, setResult] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");

    const formData = new FormData(e.target);
    formData.append("access_key", PASSWORD);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully");
        e.target.reset();
      } else {
        console.error("Error:", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error sending form data:", error);
      setResult("Error sending form data");
    }
  };
  return (
    <div className={css.wraperOverlay}>
      <HeroSection />
      <div className={css.container}>
      <p className={css.indentedParagraph}>{t('Dear')}
        {brandsString && ` ${brandsString}`} {t('for')}
      </p>
     
      <div className={css.heroContentForma}>
          <h3 className={css.titleFindCarForma}>{t('Find')}</h3>
          <form onSubmit={handleSubmit} className={css.forma}>
            <input type="text" name="name" placeholder="Input name" className={css.formInput} />
            <input type="text" name="phone" placeholder="Input phone" className={css.formInput} defaultValue="+380" />
            <button type="submit" className={css.buttonSend}>Send</button>
          </form>
          <div className={css.steeringWheel}>
          <button className={css.signal} onClick={handleButtonClick}></button>
          <div className={css.putMe}>
    <p>{t('p')}</p>
    <p>{t('u')}</p>
    <p>{t('t')}</p>
    <p>{t('m')}</p>
    <p>{t('e')}</p>
  </div>
        </div>
      </div>
      <div>{result}</div>
      </div>
    </div>
  );
};

export default Home;