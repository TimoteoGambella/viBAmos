import React from 'react'
import boltIcon from '../assets/icons/calendar.svg'
import '../styles/components/monthlySection.scss'
import Carousel from './Carousel'


const TrendSection = () => {
  return (
    <div className='monthlySection'>
      <div className='monthlySection_title'>
        <img className='monthlySection_icon' src={boltIcon} alt="" />
        <h2>Eventos del mes</h2>
      </div>
      <div className='monthlyCardsSection'>
        <Carousel type={'monthly'} />
      </div>
    </div>
  )
}

export default TrendSection