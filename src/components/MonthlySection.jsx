import React from 'react'
import calendarIcon from '../assets/icons/calendar.svg'
import '../styles/components/monthlySection.scss'
import Carousel from './Carousel'
import SeeAllEventsButton from './buttons/SeeAllEventsButton'


const TrendSection = () => {
  return (
    <div className='monthlySection'>
      <div className='monthlySection_title'>
        <img className='monthlySection_icon' src={calendarIcon} alt="" />
        <h2>Eventos del mes</h2>
      </div>
      <div className='monthlyCardsSection'>
        <Carousel type={'monthly'} />
      </div>
      <SeeAllEventsButton />
    </div>
  )
}

export default TrendSection