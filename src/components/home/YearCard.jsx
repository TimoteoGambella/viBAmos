import React from 'react'
import '../../styles/components/yearCard.scss'

const YearCard = () => {
  return (
    <div className='yearlyCard'>
      <div className='yearlyCard__header'>
        <div>
          <i></i>
        </div>
        <span>9 de julio</span>
      </div>
      <div className='yearlyCard__info'>
        <div className='yearlyCard__infoHeader'>
          <h5><i className='yearlyCard__infoHeader--iconOne'></i>Arte</h5>
          <span><i className='yearlyCard__infoHeader--iconTwo'></i> 15:00hs</span>
        </div>
        <div className='yearlyCard__infoBody'>
          <h3>Noche sensorial</h3>
          <span><i className='yearlyCard__infoBody--iconOne'></i>Borges 1974, CABA</span>
          <span><i className='yearlyCard__infoBody--iconTwo'></i>Desde aprox. $2000</span>
        </div>
      </div>
    </div>
  )
}

export default YearCard