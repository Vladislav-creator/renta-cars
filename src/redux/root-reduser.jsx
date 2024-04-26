import { combineReducers } from 'redux';
import favoriteCarsReducer from './FavouriteCars/favoriteCarsReducer'; // Предполагается, что у вас есть отдельный редьюсер для выбранных машин
import modalCarReducer from './ModalCar/modalCarReducer';
const rootReducer = combineReducers({
  favoriteCars: favoriteCarsReducer,
  modalCar: modalCarReducer,
  // Другие редьюсеры, если они есть
});

export default rootReducer;
