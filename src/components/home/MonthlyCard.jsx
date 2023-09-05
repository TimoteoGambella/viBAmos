import React from 'react'

const MonthlyCard = () => {
  return (
    <div className='monthlyCard'>
      <div className='monthlyCard__header'>
        <div>
          <i></i>
        </div>
        <span>9 de julio</span>
      </div>
      <div className='monthlyCard__info'>
        <div className='monthlyCard__infoHeader'>
          <h5><i className='monthlyCard__infoHeader--iconOne'></i> Comida y bar</h5>
          <span><i className='monthlyCard__infoHeader--iconTwo'></i> 12:00hs</span>
        </div>
        <div className='monthlyCard__infoBody'>
          <h3>Happy Hour en Nápoles</h3>
          <span><i className='monthlyCard__infoBody--iconOne'></i> Villa Crespo, Av. Corrientes 5444</span>
          <span><i className='monthlyCard__infoBody--iconTwo'></i> Entrada gratuita</span>
        </div>
      </div>
    </div>
  )
}

export default MonthlyCard