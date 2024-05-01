import HeartIcon from './HeartIcon.jsx';
import functionSearchDetails  from '../HelpersFunction/functionSearchDetails';
import phrases from 'components/HelpersFunction/phrases';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteCar, removeFavoriteCar } from '../../redux/FavouriteCars/actions';
import css from './CarItem.module.css';
import { selectFavorites } from '../../redux/FavouriteCars/selectors';
import withModal from '../ModalCar/withModal.js';

const CarItem = ({ car, openModal }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const dispatch = useDispatch();
 
  const favoriteArray = useSelector(selectFavorites);
  useEffect(() => {
    setIsFavorite(favoriteArray.some(favoriteCar => favoriteCar.id === car.id));
  }, [favoriteArray, car.id]);
  useEffect(() => {
    // Определение типа устройства
    const onTouchStart = () => setIsTouchDevice(true);
  
    window.addEventListener('touchstart', onTouchStart);
  
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
    };
  }, []);

  const handleToggleFavorite = () => {
    setIsFavorite(prevIsFavorite => !prevIsFavorite);
    if (!isFavorite) {
      dispatch(addFavoriteCar(car));
    } else {
      dispatch(removeFavoriteCar(car));
    }
  };
  let sity = car.address.split(' ')[3].replace(/,\s*$/, '');
  let type = car.type.slice(0, 1) + car.type.slice(1).toLowerCase();
  function findCarModel(car) {
    // Проверяем, присутствует ли число в свойстве model
    const hasNumber = /\d/.test(car.model);
  
    // Определяем переменную carmod в зависимости от наличия числа в свойстве model
    let carmod;
    if (hasNumber) {
      carmod = car.make;
    } else {
      carmod = car.model;
    }
  
    return carmod;
  }
  const handleClick = () => {
    // Обработчик для кликов (десктопные устройства)
    if (!isTouchDevice) handleToggleFavorite();
  };

  const handleTouchStart = () => {
    // Обработчик для касаний (мобильные устройства и планшеты)
    if (isTouchDevice) handleToggleFavorite();
  };
  return (
    <div className={css.carItem}>
      <img className={css.imageItem} src={car.img} alt={`${car.make} ${car.model}`} />
      <button onClick={handleClick} onTouchStart={handleTouchStart} className={css.heart}>
  <span>
  <HeartIcon fill={isFavorite ? '#ff0000' : '#ffffff'} />
  </span>
</button>
      {/* <span className={css.heartIconUnder}>
          &#10084;
        </span> */}
      <div className={css.allDescriptionCarContents}>
        <div className={css.wraperTitleItemContentPrice}>
          <div><h2 className={css.titleItemContent}>{car.make} <span>{car.model}</span>, {car.year}</h2></div>
          <p className={css.titleItemContent}>{car.rentalPrice}</p>
          </div>
          <div className={css.wraperInfoItemContent}>
          <p className={css.infoItemContent}>{sity} | Ucraine | {car.rentalCompany} | {car.class}</p>
          <p className={css.infoItemContent}>{type} | {findCarModel(car)} | {car.mileage} | {functionSearchDetails(car,phrases)}</p>
          </div>
          </div>
      <button className={css.buttonModal} onClick={() => openModal(car)}>
        Learn more
      </button>
    </div>
  );
};

export default withModal(CarItem);

