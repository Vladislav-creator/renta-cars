import React, { useState } from 'react';
import css from './HeroSection.module.css'; // Подключаем модуль CSS
import { useTranslation } from 'react-i18next';
const PASSWORD = process.env.REACT_APP_PASSWORD;

const HeroSection = () => {
  const [result, setResult] = useState("");
  const { t } = useTranslation();
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
    <div className={css.heroSection}>
      <div className={css.heroOverlay}>
        <h1 className={css.heroContent}>{t('Welcome')}<span className={css.rentaYellow}>{t('RENTA')}</span>{t('CARS')}</h1>
        <div className={css.heroContentForma}>
          <h2>{t('Find')}</h2>
          <form onSubmit={handleSubmit} className={css.forma}>
            <input type="text" name="name" placeholder="Input name" className={css.formInput} />
            <input type="text" name="phone" placeholder="Input phone" className={css.formInput} defaultValue="+380" />
            <button type="submit" className={css.buttonSend}>Send</button>
          </form>
        </div>
      </div>
      <div>{result}</div>
    </div>
  );
}

export default HeroSection;