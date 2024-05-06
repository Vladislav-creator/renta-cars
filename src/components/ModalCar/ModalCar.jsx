import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../redux/ModalCar/actions';
import { selectModalData } from '../../redux/ModalCar/selectors';
import  css from './ModalCar.module.css';
import { useTranslation } from 'react-i18next';
const phoneNumber = '+380978556455';

const ModalCar = () => {
  const { t } = useTranslation();
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
          <p className={css.graySmallContent}>{sity} {t('Ucraine')} id: {modalData.id} {t('Year')} {modalData.year} Type {modalData.type}</p>
          <p className={css.graySmallContent}>{t('Fuel_Consumption')}: {modalData.fuelConsumption}{t('Engine_Size')}  {modalData.engineSize} </p>
          </div>
           <div  className={css.descriptionCarContent}>{modalData.description}</div>
           <p  className={css.subtitle}>{t('Accessories_and_functionalities')}</p>
           <div className={css.wrapperGraySmallContent}>
           <p  className={css.graySmallContent}>{modalData.accessories}</p>
           <p className={css.graySmallContent}>{modalData.functionalities}</p>
           </div>
           <p  className={css.subtitle}>{t('Rental_Conditions')}</p>
           <div className={css.mainWrapperRentalConditions}>
           <div className={css.wrapperRentalConditions}>
           <div className={css.rentalConditions}> {t('Minimum_age')}: <span className="color-blue"> 25</span></div>
           <div className={css.rentalConditions}>{t("Valid_driver's_license")}</div>
           </div>
           <div className={css.wrapperRentalConditions}>
           <div className={css.rentalConditions}>{t('Security_deposite_required')}</div>
           <div className={css.rentalConditions}>{t('Mileage')}: <span className="color-blue">{mileage}</span></div>
           <div className={css.rentalConditions}>{t('Price')}: <span className="color-blue">{newPrice}$</span></div>
           </div>
           </div> 
           <button className={css.buttonCall} onClick={handleCallButtonClick}>{t('Rental_car')}</button>
             
           </div>
          <button className={css.closeButton} onClick={handleCloseModal}></button>
        </div>
        
        </div>
      </div>
    );
  };
  
  export default ModalCar;

