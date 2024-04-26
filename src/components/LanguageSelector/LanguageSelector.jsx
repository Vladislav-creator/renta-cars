import React, { useState } from 'react';
import css from './LanguageSelector.module.css';
import { useTranslation } from 'react-i18next';
import usaFlag from '../Images/usa.svg';
import uaFlag from '../Images/ua.svg';
import ruFlag from '../Images/ru.svg';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const [activeLanguage, setActiveLanguage] = useState(i18n.language);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setActiveLanguage(lang);
  };

  return (
    <div className={css.languageSelector}>
      <button onClick={() => changeLanguage('en')} className={activeLanguage === 'en' ? css.activ : ''}>
        <img src={usaFlag} alt="English" />
      </button>
      <button onClick={() => changeLanguage('ru')} className={activeLanguage === 'ru' ? css.activ : ''}>
        <img src={ruFlag} alt="Russian" />
      </button>
      <button onClick={() => changeLanguage('uk')} className={activeLanguage === 'uk' ? css.activ : ''}>
        <img src={uaFlag} alt="Ukrainian" />
      </button>
    </div>
  );
};

export default LanguageSelector;