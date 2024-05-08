// import React, { useState } from 'react';
// import css from './LanguageSelector.module.css';
// import { useTranslation } from 'react-i18next';
// import usaFlag from '../Images/usa.svg';
// import uaFlag from '../Images/ua.svg';
// import ruFlag from '../Images/ru.svg';

// const LanguageSelector = () => {
//   const { i18n } = useTranslation();

//   const [activeLanguage, setActiveLanguage] = useState(i18n.language);

//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang);
//     setActiveLanguage(lang);
//   };

//   return (
//     <div className={css.languageSelector}>
//       <button onClick={() => changeLanguage('en')} className={activeLanguage === 'en' ? css.activ : ''}>
//         <img src={usaFlag} alt="English" />
//       </button>
//       <button onClick={() => changeLanguage('ru')} className={activeLanguage === 'ru' ? css.activ : ''}>
//         <img src={ruFlag} alt="Russian" />
//       </button>
//       <button onClick={() => changeLanguage('uk')} className={activeLanguage === 'uk' ? css.activ : ''}>
//         <img src={uaFlag} alt="Ukrainian" />
//       </button>
//     </div>
//   );
// };

// export default LanguageSelector;


//2вариант
// import React, { useState, useEffect } from 'react';
// import css from './LanguageSelector.module.css';
// import { useTranslation } from 'react-i18next';
// import usaFlag from '../Images/usa.svg';
// import uaFlag from '../Images/ua.svg';
// import ruFlag from '../Images/ru.svg';

// const LanguageSelector = () => {
//   const { i18n } = useTranslation();
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1240);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1240);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang);
//   };

//   return (
//     <div className={css.languageSelector}>
//       {isMobile ? (
//         <select value={i18n.language} onChange={(e) => changeLanguage(e.target.value)} className={css.select}>
//           <option value="en">En</option>
//           <option value="ru">Ru</option>
//           <option value="uk">Uk</option>
//         </select>
//       ) : (
//         <div className={css.languageSelector}>
//           <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? css.activ : ''}>
//             <img src={usaFlag} alt="English" />
//           </button>
//           <button onClick={() => changeLanguage('ru')} className={i18n.language === 'ru' ? css.activ : ''}>
//             <img src={ruFlag} alt="Russian" />
//           </button>
//           <button onClick={() => changeLanguage('uk')} className={i18n.language === 'uk' ? css.activ : ''}>
//             <img src={uaFlag} alt="Ukrainian" />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LanguageSelector;

//3вариант 
// import React from 'react';
// import css from './LanguageSelector.module.css';
// import { useTranslation } from 'react-i18next';
// import usaFlag from '../Images/usa.svg';
// import uaFlag from '../Images/ua.svg';
// import ruFlag from '../Images/ru.svg';
// import Select from 'react-select';
// const LanguageSelector = ({ changeLanguage }) => { // Переменная LanguageSelector объявлена как функциональный компонент с пропсом changeLanguage
//   const { i18n } = useTranslation(); // Используем хук useTranslation для доступа к объекту i18n
//   const options = [
//     { value: 'en',  icon: usaFlag },
//     { value: 'ru',  icon: ruFlag },
//     { value: 'uk',  icon: uaFlag }
//   ];
  
//   const handleChange = (selectedOption) => {
//     changeLanguage(selectedOption.value);
//   };

//   return (
//     <div className={css.languageSelector}>
//      <Select
//         options={options}
//         value={options.find(option => option.value === i18n.language)}
//         onChange={handleChange}
//         getOptionLabel={(option) => (
//           <div>
//             <img src={option.icon} alt={option.label} /> {option.label}
//           </div>
//         )}
//         getOptionValue={(option) => option.value}
//       />
//     </div>
//   );
// };

// export default LanguageSelector;

//4вариант

import React, { useState } from "react";
import ReactFlagsSelect from 'react-flags-select';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState("UA");
  console.log(selected);
  const handleChangeLanguage = (code) => {
    i18n.changeLanguage(code);
    setSelected(code);
  };
  return (
    <div>
      <ReactFlagsSelect
        countries={['US', 'RU', 'UA']} // Список стран, для которых нужно показать флаги
        selectedSize={24} // Размер выбранного флага
        selected={selected}
        showSelectedLabel={false}
        onSelect={handleChangeLanguage}
      />
    </div>
  );
};

export default LanguageSelector;