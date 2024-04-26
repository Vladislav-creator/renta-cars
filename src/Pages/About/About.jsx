import css from './About.module.css';
import Photo1 from '../../components/Images/rent-car1.jpg';
const About = () => {
    
    return (
        <div className="container">
        <h1 className="car-title">About</h1>
        <div className={css.wrapperAbout}>
        <div className={css.about}>  <p className={css.indentedParagraph}>2 года назад наша компания открылась и сегодня мы одни из самых надежных  в своем сегменте рынка Киева .

Сегодня наш автопарк состоит из 36 автомобилей  «Среднего» и «Премиум» класса. Здесь вы найдете множество иномарок, которые хороши не только своими техническими характеристиками, но и превосходным состоянием. За рулем такой машины всегда приятно сидеть!

Команда Rent-Car1 – это молодые, активные люди, которые уже успели стать профессионалами в своем деле. И теперь они готовы показать вам превосходный сервис, отличное качество и доступные цены. </p> </div>
        <div>
         <img src={Photo1} alt='rent-car1' width='500px'/>
         </div>
        </div>
        </div>
    )
}
export default About;