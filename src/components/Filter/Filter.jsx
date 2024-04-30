import React, { useState } from 'react';
import css from './Filter.module.css';
const Filter = ({ onFilter, onReset, carMakes, rentalPrices, allCars }) => {
  const [make, setMake] = useState('');
  const [price, setPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (make || price || mileageFrom || mileageTo) {
      onFilter({ make, price, mileageFrom, mileageTo });
    }
  };

  const handleReset = () => {
    setMake('');
    setPrice('');
    setMileageFrom('');
    setMileageTo('');
    onReset(); // Вызываем функцию сброса из пропсов для фильтра
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'make':
        setMake(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'mileageFrom':
        setMileageFrom(value);
        break;
      case 'mileageTo':
        setMileageTo(value);
        break;
      default:
        break;
    }
  };

  return (
    <form className={css.formSearch} onSubmit={handleSubmit}>
      <select className={css.formSelect} name="make" value={make} onChange={handleInputChange}>
        <option value="">Car Brand</option>
        {carMakes.map(make => (
          <option key={make} value={make}>{make}</option>
        ))}
      </select>
      <select className={css.formSelect} name="price" value={price} onChange={handleInputChange}>
        <option value="">Price</option>
        {rentalPrices.map(price => (
          <option key={price} value={price}>{price}</option>
        ))}
      </select>
      <input 
        type="text" 
        name="mileageFrom" 
        placeholder="Mileage From" 
        value={mileageFrom} 
        onChange={handleInputChange} 
      />
      <input 
        type="text" 
        name="mileageTo" 
        placeholder="Mileage To" 
        value={mileageTo} 
        onChange={handleInputChange} 
      />
      <button type="submit">Search</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
};

export default Filter;