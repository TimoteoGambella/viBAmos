import React from 'react'
import Carousel from '../Carousel'
import '../../styles/components/yearSection.scss'
import calendarIcon from '../../assets/icons/calendar.svg'
import SeeAllEventsButton from '../buttons/SeeAllEventsButton'
import Star from '../../assets/fondos/StarBold.svg'

const YearSection = () => {
  return (
    <div className='yearSection'>
      <img src={Star} alt="" className='YearStar' />
      <div className='yearSection_title'>
        <img className='yearSection_icon' src={calendarIcon} alt="" />
        <h2>Eventos del año</h2>
      </div>
      <div className='yearCardsSection'>
        <Carousel type={'yearly'} />
      </div>
      <SeeAllEventsButton />
    </div>
  )
}

export default YearSection