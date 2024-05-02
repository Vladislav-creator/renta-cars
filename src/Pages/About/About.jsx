import css from './About.module.css';
import Photo1 from '../../components/Images/rent-car1.jpg';
import { useTranslation } from 'react-i18next';
import OurTeam from '../../components/OurTeam/OurTeam.jsx';
const About = () => {
    const { t } = useTranslation(); 
    return (
        <div className="container">
        <h1 className="car-title">{t('titleAbout')}</h1>
        <div className={css.wrapperAbout}>
        <div className={css.about}>  <p className={css.indentedParagraph}>{t('About')} </p> </div>
        <div className={css.photo}>
         <img src={Photo1} alt='rent-car1' width='100%'/>
         </div>
        </div>
        
        <OurTeam/>
        </div>
    )
}
export default About;