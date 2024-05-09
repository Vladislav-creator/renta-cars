import React from 'react';
import css from './ContactIcons.module.css';
import { FaPhone, FaViber, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const ContactIcons = ({ phoneNumber }) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleIconClick = (platform) => {
    let link = '';
    switch (platform) {
      case 'viber':
        link = `viber://chat?number=${phoneNumber}`;
        break;
      case 'telegram':
        link = `https://t.me/your-telegram-id`;
        break;
      case 'whatsapp':
        link = `https://wa.me/your-whatsapp-number`;
        break;
      default:
        break;
    }
    window.open(link, '_blank');
  };

  return (
    <div className={css.iconContainer}>
      <div className={css.iconContainer}>
        <FaPhone onClick={handleCall} className={css.icon + ' ' + css.phoneIcon} />
        <button onClick={handleCall} className={css.numberPhone}>{phoneNumber}</button>
      </div>
      {/* Используем медиа-запрос для скрытия иконок ниже 900px */}
      <div className={window.innerWidth < 1104 ? css.hiddenIcons : ''}>
        <FaViber onClick={() => handleIconClick('viber')} className={css.icon + ' ' + css.viberIcon} />
        <FaTelegram onClick={() => handleIconClick('telegram')} className={css.icon + ' ' + css.telegramIcon} />
        <FaWhatsapp onClick={() => handleIconClick('whatsapp')} className={css.icon + ' ' + css.whatsappIcon} />
      </div>
    </div>
  );
};

export default ContactIcons;