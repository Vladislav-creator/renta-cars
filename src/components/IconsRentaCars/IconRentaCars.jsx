import css from './IconRentaCars.module.css';

const IconRentaCars = () =>{
   
    return (
        <div className={css.iconContainer}>
        <div className={css.iconRent}></div>
        <div className={css.cars}>
      <p>C</p>
      <p>A</p>
      <p>R</p>
      <p>S</p>
      <p></p>
    </div>
    <div className={css.renta}>
      <p>R</p>
      <p>E</p>
      <p>N</p>
      <p>T</p>
      <p>A</p>
    </div>
        </div>
    );
}
export default IconRentaCars;