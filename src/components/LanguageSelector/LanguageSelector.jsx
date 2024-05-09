import React, { useState } from "react";
import ReactFlagsSelect from 'react-flags-select';
import { useTranslation } from 'react-i18next';
// import css from './LanguageSelector.module.css'
const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState("UA");
  
  const handleChangeLanguage = (code) => {
    i18n.changeLanguage(code);
    setSelected(code);
  };
  return (
    <div >
      <ReactFlagsSelect 
        countries={['US', 'RU', 'UA']}
        selectedSize={24} 
        selected={selected}
        showSelectedLabel={false}
        customLabels={{ US: "en", RU: "ru", UA: "uk" }}
        onSelect={handleChangeLanguage}
      />
    </div>
  );
};

export default LanguageSelector;