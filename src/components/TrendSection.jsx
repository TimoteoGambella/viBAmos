import React from 'react'
import boltIcon from '../assets/icons/bolt.svg'
import '../styles/components/trendSection.scss'
import Carousel from './Carousel'


const TrendSection = () => {
  return (
    <div className='trendSection'>
      <div className='trendSection_title'>
        <img className='trendSection_icon' src={boltIcon} alt="" />
        <h2>Eventos en tendencia</h2>
      </div>
      <div className='trendCardsSection'>
        <Carousel />
      </div>
    </div>
  )
}

export default TrendSection