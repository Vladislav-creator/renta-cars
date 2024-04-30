import React, { useState, useEffect, useCallback} from 'react';
import css from './CatalogCar.module.css';
import Filter from '../../components/Filter/Filter.jsx';
import { getAllcarPages, getAllcar } from '../../services';
import CarItem from '../../components/CarItem/CarItem.jsx';
import { Loader } from '../../components/Loader/Loader';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton'; // Импортируем компонент кнопки

export default function CatalogCar() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const [carMakes, setCarMakes] = useState([]);
  const [rentalPrices, setRentalPrices] = useState([]);
  const [allCars, setAllCars] = useState([]);


  const fetchAllCars = useCallback(async () => {
    try {
      const allCarsData = await getAllcar();
      setAllCars(allCarsData);
      const makes = [...new Set(allCarsData.map(item => item.make))];
      const prices = [...new Set(allCarsData.map(item => item.rentalPrice))];
      setCarMakes(makes);
      setRentalPrices(prices);
      
    } catch (error) {
      console.error('Error fetching all cars:', error);
    }
  }, []);

  useEffect(() => {
    fetchAllCars();
  }, [fetchAllCars]);


  useEffect(() => {
    
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedData = await getAllcarPages(page);
        if (page === 1) {
          setData(fetchedData);
          sessionStorage.setItem('data', JSON.stringify(fetchedData)); // Сохраняем текущие данные в локальное хранилище
        } else {
          setData(prevData => {
            const updatedData = [...prevData, ...fetchedData];
            console.log(updatedData);
            sessionStorage.setItem('data', JSON.stringify(updatedData)); // Обновляем данные в локальном хранилище
            setShowButton(updatedData.length < allCars.length );
            return updatedData;
          });
        }
       
        setShowButton(fetchedData.length >= 12 );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, [page, allCars]);

  const handleLoadMore = useCallback(() => {
    if (!loading && showButton) {
      setPage(prevPage => prevPage + 1);
    }
  }, [loading, showButton]);

  const handleFilter = useCallback(async (filters) => {
    const isFilterSet = Object.values(filters).some(value => value !== '');
    if (!isFilterSet) {
      return;
    }
    setLoading(true);
    try {
      const filteredData = allCars.filter(item => {
        let makeMatch = true;
        let priceMatch = true;
        let mileageMatch = true;

        if (filters.make) {
          makeMatch = item.make === filters.make;
        }

        if (filters.price) {
          priceMatch = item.rentalPrice === filters.price;
        }

        if (filters.mileageFrom && filters.mileageTo) {
          const mileage = parseInt(item.mileage);
          mileageMatch = mileage >= parseInt(filters.mileageFrom) && mileage <= parseInt(filters.mileageTo);
        }

        return makeMatch && priceMatch && mileageMatch;
      });

      setData(filteredData);
      setShowButton(filteredData.length >= 12);
    } catch (error) {
      console.error('Error filtering data:', error);
    }
    setLoading(false);
  }, [allCars]);

  const handleResetData = () => {
    // Логика сброса данных и получения актуального массива из localStorage //
    const currentDataString = sessionStorage.getItem('data');
    if (currentDataString) {
      const currentData = JSON.parse(currentDataString);
      setData(currentData);
      setShowButton(currentData.length < allCars.length);
    }
    
  };
  const handleScrollToTop = () => {
    // Логика для подъема на верх массива на первую страницу
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Плавный скролл наверх
  };
  return (
    <div className={css.container}>
      <Filter onFilter={handleFilter} onReset={handleResetData} carMakes={carMakes} rentalPrices={rentalPrices} />
      <div className={css.imageGrid}>
        {data.map(item => (
         
          <CarItem key={item.id} car={item} />
        ))}
      </div>
      {loading && <Loader />}
      {showButton && (
        <button className={css.buttonLoadMore} onClick={handleLoadMore} disabled={loading}>
          Load More
        </button>
      )}
      
      {!loading && (
  <ScrollToTopButton onClick={handleScrollToTop} />
)}
     
    </div>
  );
}


