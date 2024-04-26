import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/ModalCar/actions';
import { selectModalState } from '../../redux/ModalCar/selectors';
import ModalCar from './ModalCar.jsx';
const withModal = (WrappedComponent) => {
    return (props) => {
      const dispatch = useDispatch();
      const isModalOpen = useSelector(selectModalState);
  
      const handleOpenModal = (car) => {
        dispatch(openModal(car));
      };
  
      return (
        <>
          {isModalOpen && <ModalCar />}
          <WrappedComponent {...props} openModal={handleOpenModal} />
      </>
    );
  };
};

export default withModal;