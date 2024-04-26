import { ADD_FAVORITE_CAR, REMOVE_FAVORITE_CAR } from './actions';
const initialState = {
  favoriteCars: [], // Начальное состояние с пустым массивом
};

const favoriteCarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_CAR:
      return {
        ...state,
        favoriteCars: [...state.favoriteCars, action.payload], // Добавляем новую машину в массив
      };
    case REMOVE_FAVORITE_CAR:
      return {
        ...state,
        favoriteCars: state.favoriteCars.filter(
          car => car.id !== action.payload.id
        ), // Удаляем машину из массива по идентификатору
      };
    default:
      return state;
  }
};
export default favoriteCarsReducer;
