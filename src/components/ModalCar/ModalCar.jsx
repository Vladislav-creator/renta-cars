import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../redux/ModalCar/actions';
import { selectModalData } from '../../redux/ModalCar/selectors';
import  css from './ModalCar.module.css';

const phoneNumber = '+380978556455';

const ModalCar = () => {
    const dispatch = useDispatch();
    const modalData = useSelector(selectModalData);
    let sity = modalData.address.split(' ')[3].replace(/,\s*$/, '');
    let mileage = modalData.mileage.toLocaleString('en-US');
    let newPrice = modalData.rentalPrice.replace("$", '')

    const handleCallButtonClick = () => {
      window.location.href = 'tel:' + phoneNumber;
    };

    const handleCloseModal = useCallback(() => {
        dispatch(closeModal());
      }, [dispatch]);
    
      useEffect(() => {
        document.body.classList.add('modal-open')
        const handleKeyDown = (event) => {
          if (event.key === 'Escape') {
            handleCloseModal();
          }
        };
    
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
          document.body.classList.remove('modal-open');
        };
      }, [handleCloseModal]); 
    return (
      <div className={css.modalOverlay}  onClick={handleCloseModal}>
         <div className={css.hystmodalWrap}>
         
        <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
          <img className={css.imageCar} src={modalData.img} alt={`${modalData.make} ${modalData.model}`} />
          <div className={css.allDescriptionCarContent}>
          <h1 className={css.titleContent}>{modalData.make} <span className="color-blue">{modalData.model}</span>, {modalData.year}</h1>
          <div className={css.wrapperGraySmallContent}>
          <p className={css.graySmallContent}>{sity} Ucraine id: {modalData.id} Year {modalData.year} Type {modalData.type}</p>
          <p className={css.graySmallContent}>Fuel Consumption: {modalData.fuelConsumption} Engine Size {modalData.engineSize} </p>
          </div>
           <div  className={css.descriptionCarContent}>{modalData.description}</div>
           <p  className={css.subtitle}>Accessories and functionalities:</p>
           <div className={css.wrapperGraySmallContent}>
           <p  className={css.graySmallContent}>{modalData.accessories}</p>
           <p className={css.graySmallContent}>{modalData.functionalities}</p>
           </div>
           <p  className={css.subtitle}>Rental Conditions:</p>
           <div className={css.mainWrapperRentalConditions}>
           <div className={css.wrapperRentalConditions}>
           <div className={css.rentalConditions}>Minimum age: <span className="color-blue"> 25</span></div>
           <div className={css.rentalConditions}>Valid driver's license</div>
           </div>
           <div className={css.wrapperRentalConditions}>
           <div className={css.rentalConditions}>Security deposite required</div>
           <div className={css.rentalConditions}>Mileage: <span className="color-blue">{mileage}</span></div>
           <div className={css.rentalConditions}>Price: <span className="color-blue">{newPrice}$</span></div>
           </div>
           </div>
           <button className={css.buttonCall} onClick={handleCallButtonClick}>Rental car</button>
             
           </div>
          <button className={css.closeButton} onClick={handleCloseModal}></button>
        </div>
        
        </div>
      </div>
    );
  };
  
  export default ModalCar;

// import React, { useEffect, useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { closeModal } from '../../redux/ModalCar/actions';
// import { selectModalData } from '../../redux/ModalCar/selectors';
// import css from './ModalCar.module.css';
// import { useMediaQuery } from 'react-responsive';

// const phoneNumber = '+380978556455';

// const ModalCar = () => {
//     const dispatch = useDispatch();
//     const modalData = useSelector(selectModalData);
//     let sity = modalData.address.split(' ')[3].replace(/,\s*$/, '');
//     let mileage = modalData.mileage.toLocaleString('en-US');
//     let newPrice = modalData.rentalPrice.replace("$", '');

//     const isTouchDevice = useMediaQuery({ query: '(pointer: coarse)' }); // Определяем, является ли устройство сенсорным

//     const handleCallButtonClick = () => {
//         window.location.href = 'tel:' + phoneNumber;
//     };

//     const handleCloseModal = useCallback(() => {
//         dispatch(closeModal());
//     }, [dispatch]);

//     useEffect(() => {
//         document.body.classList.add('modal-open');
//         const handleKeyDown = (event) => {
//             if (event.key === 'Escape') {
//                 handleCloseModal();
//             }
//         };

//         document.addEventListener('keydown', handleKeyDown);

//         // Запретить прокрутку для сенсорных устройств
//         if (isTouchDevice) {
//             document.body.style.overflow = 'hidden';
//             document.body.addEventListener('touchmove', preventDefault);
//         } else {
//             // Запретить прокрутку для несенсорных устройств
//             document.body.style.overflow = 'hidden';
//         }

//         return () => {
//             document.removeEventListener('keydown', handleKeyDown);
//             document.body.classList.remove('modal-open');
//             document.body.style.overflow = 'auto'; // Восстановить прокрутку при закрытии модального окна
//             document.body.removeEventListener('touchmove', preventDefault); // Восстановить тачмув
//         };
//     }, [handleCloseModal, isTouchDevice]);

//     const preventDefault = (event) => {
//         event.preventDefault();
//     };

//     return (
//         <div className={css.modalOverlay} onClick={handleCloseModal}>
//             <div className={css.hystmodalWrap}>

//                 <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
//                     <img className={css.imageCar} src={modalData.img} alt={`${modalData.make} ${modalData.model}`} />
//                     <div className={css.allDescriptionCarContent}>
//                         <h1 className={css.titleContent}>{modalData.make} <span className="color-blue">{modalData.model}</span>, {modalData.year}</h1>
//                         <div className={css.wrapperGraySmallContent}>
//                             <p className={css.graySmallContent}>{sity} Ucraine id: {modalData.id} Year {modalData.year} Type {modalData.type}</p>
//                             <p className={css.graySmallContent}>Fuel Consumption: {modalData.fuelConsumption} Engine Size {modalData.engineSize} </p>
//                         </div>
//                         <div className={css.descriptionCarContent}>{modalData.description}</div>
//                         <p className={css.subtitle}>Accessories and functionalities:</p>
//                         <div className={css.wrapperGraySmallContent}>
//                             <p className={css.graySmallContent}>{modalData.accessories}</p>
//                             <p className={css.graySmallContent}>{modalData.functionalities}</p>
//                         </div>
//                         <p className={css.subtitle}>Rental Conditions:</p>
//                         <div className={css.mainWrapperRentalConditions}>
//                             <div className={css.wrapperRentalConditions}>
//                                 <div className={css.rentalConditions}>Minimum age: <span className="color-blue"> 25</span></div>
//                                 <div className={css.rentalConditions}>Valid driver's license</div>
//                             </div>
//                             <div className={css.wrapperRentalConditions}>
//                                 <div className={css.rentalConditions}>Security deposite required</div>
//                                 <div className={css.rentalConditions}>Mileage: <span className="color-blue">{mileage}</span></div>
//                                 <div className={css.rentalConditions}>Price: <span className="color-blue">{newPrice}$</span></div>
//                             </div>
//                         </div>
//                         <button className={css.buttonCall} onClick={handleCallButtonClick}>Rental car</button>
//                     </div>
//                     <button className={css.closeButton} onClick={handleCloseModal}></button>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default ModalCar;