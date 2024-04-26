
 export const ADD_FAVORITE_CAR = 'ADD_FAVORITE_CAR';
 export const REMOVE_FAVORITE_CAR = 'REMOVE_FAVORITE_CAR';
export const addFavoriteCar = (car) => {
    console.log('Adding to favorites:', car);
    return { type: 'ADD_FAVORITE_CAR', payload: car };
  };
  
  export const removeFavoriteCar = (car) => {
    console.log('Removing from favorites:', car);
    return { type: 'REMOVE_FAVORITE_CAR', payload: car };
  };


// export const ADD_FAVORITE_CAR = 'ADD_FAVORITE_CAR';
// export const REMOVE_FAVORITE_CAR = 'REMOVE_FAVORITE_CAR';

// export const addFavoriteCar = (car) => ({
//   type: ADD_FAVORITE_CAR,
//   payload: car,
// });

// export const removeFavoriteCar = (car) => ({
//   type: REMOVE_FAVORITE_CAR,
//   payload: car,
// });