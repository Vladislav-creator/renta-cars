
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
  const dispatch = useDispatch();
 // console.log('openModal prop:', openModal);

  const favoriteArray = useSelector(selectFavorites);
  useEffect(() => {
    setIsFavorite(favoriteArray.some(favoriteCar => favoriteCar.id === car.id));
  }, [favoriteArray, car.id]);

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
  const toggleFavoriteClick = () => {
    handleToggleFavorite();
  };

  const toggleFavoriteTouch = () => {
    handleToggleFavorite();
  };
  return (
    <div className={css.carItem}>
      <img className={css.imageItem} src={car.img} alt={`${car.make} ${car.model}`} />
      {/* <button onClick={toggleFavoriteClick} onTouchEnd={toggleFavoriteTouch} className={css.heart}>
        <span className={css.heartIcon} style={{ color: isFavorite ? '#ff0000' : '#ffffff' }}>
          &#10084;
        </span>
      </button> */}
      <button onClick={toggleFavoriteClick} onTouchEnd={toggleFavoriteTouch} className={css.heart}>
  <span className={css.heartIcon} style={{ fill: isFavorite ? '#ff0000' : '#ffffff' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <path d="M10 18.35l-1.45-1.32C4.4 13.36 1 10.25 1 6.5 1 3.42 3.42 1 6.5 1c1.74 0 3.41.81 4.5 2.09C11.09 1.81 12.76 1 14.5 1 17.58 1 20 3.42 20 6.5c0 3.75-3.4 6.86-8.55 10.54L10 18.35z"/>
    </svg>
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

