 import css from './Contacts.module.css';
 import Photo1 from '../../components/Images/office-rent-car1.jpg';
import MapWithMarker from '../../components/MapWithMarker/MapWithMarker.jsx';
import AddressIcon from '../../components/Images/address.svg';
import PhoneIcon from '../../components/Images/phone.svg';
import EmailIcon from '../../components/Images/email.svg';
import ClockIcon from '../../components/Images/clock.svg';

const Contacts = () => {
    
    return (
        <div className="container">
        <h1 className="car-title">Contacts</h1>
        <div className={css.wrapperContacts}>
          
        <div className={css.contacts}>  
         <address>
      <span className={css.spanBlock}><p className={css.indentedParagraph}> Киев</p></span> 
      <span className={css.spanBlockA} ><i className={css.fasA}><img src={AddressIcon} alt="Address-Icon" /></i>ул. Радистов 34ж </span> 
      <span className={css.spanBlock}><i className={css.fas}><img src={EmailIcon} alt="Email-Icon" /></i><a className={css.linkPhone} href="mailto:valdisbeketov@gmail.com">valdisbeketov@gmail.com</a></span>  
      <span className={css.spanBlock}>
  <i className={css.fas}><img src={PhoneIcon} alt="Phone-Icon" /></i>
  <a className={css.linkPhone} href="tel:+380978556455">+380978556455</a>
</span>
<span className={css.spanBlockB}>
  <a  className={css.linkPhone} href="tel:+380936433965">+380936433965</a>
</span>
      <span className={css.spanBlock}>
        <div className={css.wrapperClock}>
  <i className={css.fas}>
    <img src={ClockIcon} alt="Clock-Icon" />
  </i>
  Пн - Cб: 8:00 - 20:00
  </div></span>
  <span className={css.spanBlockB}><p>Вс: 10:00 - 17:00</p></span>
  </address> 
  </div>

        <div className={css.photo}>
         <img src={Photo1} alt='rent-car1' width='100%'/>
         </div>

         <div className={css.map}>
        <div style={{ width: '100%', height: '100%', aspectRatio: '1 / 1' }}>
         <MapWithMarker />
         </div>
         </div>
        </div>
        </div>
    )
}
export default Contacts ;