import React, { useState, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // ваш объект i18n
import { Loader } from './components/Loader/Loader';
import { Suspense, lazy } from 'react';
import css from './App.module.css';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import LanguageSelector from './components/LanguageSelector/LanguageSelector.jsx';
import ContactIcons from './components/ContactIcons/ContactIcons.jsx';
import MenuModal from './components/MenuModal/MenuModal.jsx';
const CatalogCar = lazy(() => import('./Pages/CatalogCar/CatalogCar.jsx'));
const Home = lazy(() => import('./Pages/Home/Home.jsx'));
const FavouriteCar = lazy(() => import('./Pages/FavouriteCar/FavouriteCar.jsx'));
const About = lazy(() => import('./Pages/About/About.jsx'));
const Contacts = lazy(() => import('./Pages/Contacts/Contacts.jsx'));

const App = () => {
  const phoneNumber = '+380978556455';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const body = document.body;
    if (isMenuOpen) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);
  return (
    
    <I18nextProvider i18n={i18n}>
    <div>
      <header className={css.header}>
        <div className={css.iconContainer}>
      <div className={css.iconRent}></div>
      <div className={css.cars}>
    <p>C</p>
    <p>A</p>
    <p>R</p>
    <p>S</p>
    <p></p>
  </div>
  <div className={css.renta}>
    <p>R</p>
    <p>E</p>
    <p>N</p>
    <p>T</p>
    <p>A</p>
  </div>
      </div>
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
          <div className={css.wraperContactIcons}>
          <ContactIcons phoneNumber={phoneNumber}/>
          </div>
          
        <LanguageSelector className={css.languageSelector} />
        <button className={css.menu} onClick={toggleMenu}>Menu</button>
      {isMenuOpen && <MenuModal onCloseMenu={toggleMenu} />}
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