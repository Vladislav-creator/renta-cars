import css from './OurTeam.module.css'
const OurTeam = () => {
  return (
<section>
<div className={css.container}>
  <h2 className={css.sectionTitle}>Our Team</h2>
  <ul class={css.sectionList}>
    <li class={css.employeesListItem}>
      <img
        srcSet={`
        ${require('./images/our_team/TeamCard1a.jpg')} 1x,
        ${require('./images/our_team/TeamCard1a@2x.jpg')} 2x
      `}
        alt="Mark Guerrero - Product Designer"
        width="264"
        height="260"
      />
      <div class="employees-text-content">
        <h3 class="subtitle-our_team">Mark Guerrero</h3>
        <p class="text-description">Product Designer</p>
        </div>
        </li>
    <li class={css.employeesListItem}>
      <img
       srcSet={`
       ${require('./images/our_team/TeamCard2a.jpg')} 1x,
       ${require('./images/our_team/TeamCard2a@2x.jpg')} 2x
     `}
        alt="Tom Ford - Frontend Developer"
        width="264"
        height="260"
      />
      <div class="employees-text-content">
        <h3 class="subtitle-our_team">Tom Ford</h3>
        <p class="text-description">Frontend Developer</p>
        </div>
        </li> 
    <li class={css.employeesListItem}>
      <img
      srcSet={`
      ${require('./images/our_team/TeamCard3a.jpg')} 1x,
      ${require('./images/our_team/TeamCard3a@2x.jpg')} 2x
    `}
        alt="Camila Garsia - Marketing"
        width="264"
        height="260"
      />
      <div class="employees-text-content">
        <h3 class="subtitle-our_team">Camila Garcia</h3>
        <p class="text-description">Marketing</p>
        </div>
    </li>
    <li class={css.employeesListItem}>
      <img
      srcSet={`
      ${require('./images/our_team/TeamCard4a.jpg')} 1x,
      ${require('./images/our_team/TeamCard4a@2x.jpg')} 2x
    `}
        alt="Daniel Wilson - UI Designer"
        width="264"
        height="260"
      />
      <div class="employees-text-content">
        <h3 class="subtitle-our_team">Daniel Wilson</h3>
        <p class="text-description">UI Designer</p>
        </div>
    </li>
  </ul>
</div>
</section>
  )
}
export default OurTeam;