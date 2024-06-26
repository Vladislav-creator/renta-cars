import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/FavouriteCars/selectors.jsx';
import CarItem from '../../components/CarItem/CarItem.jsx';
import { Loader } from '../../components/Loader/Loader'; 
import css from './FavouriteCar.module.css';
import { useTranslation } from 'react-i18next';
import Photo from '../../components/Images/car-no-search.jpg';
const FavouriteCar = () => {
  const favoriteArray = useSelector(selectFavorites);
  const [loading, setLoading] = useState(true); // Начальное состояние загрузки - true
  const { t } = useTranslation();
  useEffect(() => {
    // Здесь можно добавить логику реальной загрузки данных
    // Например, запрос к серверу или получение данных из локального хранилища

    // Предположим, что данные загружены успешно
    setLoading(false); // Устанавливаем состояние загрузки в false после фактической загрузки данных
  }, []); // useEffect вызывается только при монтировании компонента

  return (
    <div className="container">
      <h1 className="title">{t('Favorite')}</h1>
      <div className={css.imageGrid}>
        {loading ? (
          <Loader /> // Показываем Loader только во время фактической загрузки данных
        ) : favoriteArray.length > 0 ? (
          favoriteArray.map(car => (
            <CarItem key={car.id} car={car} />
          ))
        ) : (
          <div className={css.noImgWrapper}> 
          <h2 className={css.noImg}>{t('No_favorite_cars_yet')}</h2>
          <img className={css.ImgCarPicture}src={Photo} alt="renta car's" />
          </div>
        )}
      </div>
    </div>
  );
};

export default FavouriteCar;