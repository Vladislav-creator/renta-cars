import { OPEN_MODAL, CLOSE_MODAL } from './actions';

const initialState = {
  isModalOpen: false,
  modalData: null, // Детальная информация о машине для отображения в модальном окне
};

const modalCarReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        modalData: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        modalData: null, // Сбрасываем детальную информацию при закрытии модального окна
      };
    default:
      return state;
  }
};

export default modalCarReducer;