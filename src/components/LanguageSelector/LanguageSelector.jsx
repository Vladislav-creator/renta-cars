import React, { useState, useEffect } from "react";
import ReactFlagsSelect from 'react-flags-select';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState("UA");

  useEffect(() => {
    const currentLanguage = i18n.language;
    if (currentLanguage.startsWith('en')) {
      setSelected('US');
    } else if (currentLanguage.startsWith('ru')) {
      setSelected('RU');
    } else if (currentLanguage.startsWith('uk')) {
      setSelected('UA');
    } else {
      i18n.changeLanguage('uk');
      setSelected('UA');
    }
  }, [i18n]);

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