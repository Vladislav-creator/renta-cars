import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './MenuModal.module.css'; // Подключите файл стилей для меню
import { useTranslation } from 'react-i18next';
const MenuModal = ( { onCloseMenu }) => {
  const { t } = useTranslation();
    const handleClose = () => {
        onCloseMenu();
      };
    
      const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
          onCloseMenu();
        }
      };
    
      return (
        <div className={css.modalBackdrop} onClick={handleBackdropClick}>
          <div className={css.modal} >
            <button className={css.closeButton} onClick={handleClose}>
        </button>
      <div className={css.menuItems}>
        <NavLink className={css.menuLink} to="/" onClick={onCloseMenu}>
        {t('Home')}
        </NavLink>
        <NavLink className={css.menuLink} to="/catalog" onClick={onCloseMenu}>
        {t('Catalog')}
        </NavLink>
        <NavLink className={css.menuLink} to="/favorites" onClick={onCloseMenu}>
        {t('Favourites')} 
        </NavLink>
        <NavLink className={css.menuLink} to="/about" onClick={onCloseMenu}>
        {t('AboutUs')}
        </NavLink>
        <NavLink className={css.menuLink} to="/contacts" onClick={onCloseMenu}>
        {t('Contacts')}
        </NavLink>
      </div>
    </div>
    </div>
  );
};

export default MenuModal;