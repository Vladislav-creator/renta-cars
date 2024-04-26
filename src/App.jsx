import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // ваш объект i18n
import { useState } from 'react';
import hornSound from './Sound/6a9eda36651d8d7.mp3';
import { Loader } from './components/Loader/Loader';
import { Suspense, lazy } from 'react';
import css from './App.module.css';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import LanguageSelector from './components/LanguageSelector/LanguageSelector.jsx';
import { useTranslation } from 'react-i18next';
const CatalogCar = lazy(() => import('./Pages/CatalogCar/CatalogCar.jsx'));
const Home = lazy(() => import('./Pages/Home/Home.jsx'));
const FavouriteCar = lazy(() => import('./Pages/FavouriteCar/FavouriteCar.jsx'));
const About = lazy(() => import('./Pages/About/About.jsx'));
const Contacts = lazy(() => import('./Pages/Contacts/Contacts.jsx'));

const App = () => {
  const { t } = useTranslation();
 

  const [audio] = useState(new Audio(hornSound));

  const handleButtonClick = () => {
    audio.play();
  };

  return (
    
    <I18nextProvider i18n={i18n}>
    <div>
      <header className={css.header}>
      <div className={css.iconRent}></div>
        <NavLink className="header-link" to="/">
          Home
        </NavLink>
        <NavLink className="header-link" to="/catalog">
        Catalog 
        </NavLink>
        <NavLink className="header-link" to="/favorites">
        Favourites 
        </NavLink>
        <NavLink className="header-link" to="/about">
        About 
        </NavLink>
        <NavLink className="header-link" to="/contacts">
        Contacts 
        </NavLink>
        <div className={css.wraperRightHeader}>
        <LanguageSelector className={css.languageSelector} />


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
      </header>
      <main>
      <div className={css.pageContainer}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<CatalogCar />} />
            <Route path="/favorites" element={<FavouriteCar />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        </div>
      </main>
    </div>
    </I18nextProvider>
    
  );
};
export default App;