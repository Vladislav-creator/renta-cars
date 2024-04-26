 export const OPEN_MODAL = 'OPEN_MODAL';
 export const CLOSE_MODAL = 'CLOSE_MODAL';

// export const openModal = (carDetails) => ({
//   type: OPEN_MODAL,
//   payload: carDetails,
// });

// export const closeModal = () => ({
//   type: CLOSE_MODAL,
// });

export const openModal = (carDetails) => {
    const action = {
      type: OPEN_MODAL,
      payload: carDetails,
    };
    //console.log("Вызван экшен openModal:", action);
    return action;
  };
  
  export const closeModal = () => {
    const action = {
      type: CLOSE_MODAL,
    };
    //console.log("Вызван экшен closeModal:", action);
    return action;
  };