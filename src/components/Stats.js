import React from 'react'
import StatStyles from '../Styles/Stats.module.css';
const Stats = () => {
  return (
    <div id="stats" className={StatStyles.main}>
      <div className={StatStyles.card}>
        <div className={StatStyles.cardItems}>
            <div className={StatStyles.hiddenNumber}>890</div>
            <div className={StatStyles.cardItem}>
            <div className={StatStyles.number}>890</div>
            </div>
            <div className={StatStyles.cardItem}>
              <div className={StatStyles.para}>Delivered Packages</div>
            </div>
        </div>
      <div className={StatStyles.cardItems}>
          <div className={StatStyles.hiddenNumber}>137</div>
          <div className={StatStyles.cardItem}>
            <div className={StatStyles.number}>137</div>
          </div>
          <div className={StatStyles.cardItem}>
            <div className={StatStyles.para}>Countries Covered</div>
          </div>
      </div> 
      <div className={StatStyles.cardItems}>
      <div className={StatStyles.hiddenNumber}>740</div>
          <div className={StatStyles.cardItem}>
            <div className={StatStyles.number}>740</div>
          </div>
          <div className={StatStyles.cardItem}>
            <div className={StatStyles.para}>Tons of Goods</div>
          </div>
      </div>
      <div className={StatStyles.cardItems}>
          <div className={StatStyles.hiddenNumber}>600</div>
          <div className={StatStyles.cardItem}>
            <div className={StatStyles.number}>600</div>
          </div>
          <div className={StatStyles.cardItem}>
            <div className={StatStyles.para}>Statisfied Clients</div>
          </div>
      </div> 
    </div>
    </div>
  )
}

export default Stats;
