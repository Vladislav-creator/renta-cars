import React, { useState, useEffect } from 'react';
import hornSound from '../../Sound/new_message_tone-1.mp3';
import { getAllcar } from '../../services'; // Подставьте корректный путь к сервису API
import css from './Home.module.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import { useTranslation } from 'react-i18next';
import {W3} from '../../w3form/w3.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const formData = new FormData(e.target);
    

    const name = formData.get('name');
    const phone = formData.get('phone');
    const phoneValue = phone === "+380" ? "" : phone;

    if (!name.trim() || !phoneValue.trim()) {
      // Если хотя бы одно поле не заполнено, выдаем сообщение об ошибке
      toast.error("Please fill in all fields");
      return;
    }
    formData.append("access_key", W3);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form submitted successfully"); // Уведомление об успешной отправке формы
        e.target.reset();
      } else {
        toast.error(data.message); // Уведомление об ошибке при отправке формы
      }
    } catch (error) {
      toast.error("Error sending form data"); // Уведомление о других ошибках
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
      <ToastContainer position="top-right" autoClose={5000} /> 
      </div>
    </div>
  );
};

export default Home;