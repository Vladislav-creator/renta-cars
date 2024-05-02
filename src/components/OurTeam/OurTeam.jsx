import css from './OurTeam.module.css';
import { useTranslation } from 'react-i18next';
const OurTeam = () => {
  const { t } = useTranslation();
  return (
<section>
<div className={css.container}>
  <h2 className={css.sectionTitle}>{t('Team')}</h2>
  <ul class={css.sectionList}>
    <li class={css.employeesListItem}>
      <img
        srcSet={`
        ${require('./images/our_team/TeamCard1a.jpg')} 1x,
        ${require('./images/our_team/TeamCard1a@2x.jpg')} 2x
      `}
        alt={t('MarkForAlt')} 
        width="264"
        height="260"
      />
      <div>
        <h3>{t('Mark')}</h3>
        <p>{t('Director')}</p>
        </div>
        </li>
    <li class={css.employeesListItem}>
      <img
       srcSet={`
       ${require('./images/our_team/TeamCard2a.jpg')} 1x,
       ${require('./images/our_team/TeamCard2a@2x.jpg')} 2x
     `}
        alt={t('IvanForAlt')}
        width="264"
        height="260"
      />
      <div>
        <h3>{t('Ivan')}</h3>
        <p>{t('Account')}</p>
        </div>
        </li> 
    <li class={css.employeesListItem}>
      <img
      srcSet={`
      ${require('./images/our_team/TeamCard3a.jpg')} 1x,
      ${require('./images/our_team/TeamCard3a@2x.jpg')} 2x
    `}
        alt={t('CamilaForAlt')}
        width="264"
        height="260"
      />
      <div>
        <h3>{t('Camila')}</h3>
        <p>{t('Accountant')}</p>
        </div>
    </li>
    <li class={css.employeesListItem}>
      <img
      srcSet={`
      ${require('./images/our_team/TeamCard4a.jpg')} 1x,
      ${require('./images/our_team/TeamCard4a@2x.jpg')} 2x
    `}
        alt={t('VadimForAlt')}
        width="264"
        height="260"
      />
      <div>
        <h3>{t('Vadim')}</h3>
        <p>{t('Lawyer')}</p>
        </div>
    </li>
  </ul>
</div>
</section>
  )
}
export default OurTeam;