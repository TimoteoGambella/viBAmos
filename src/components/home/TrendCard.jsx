import React from 'react'
import '../../styles/components/cards/trendCard.scss'
import cardBackground from '../../assets/eventosFotos/sliderFoto.jpeg'

const TrendCard = () => {
  return (
    <div className='trendCard'>
      <img src={cardBackground} alt="" />
      <h3>Buenos Aires celebra Colombia</h3>
      <button>
        <i></i>
        <span>23 de julio del 2023</span>
      </button>
    </div>
  )
}

export default TrendCard