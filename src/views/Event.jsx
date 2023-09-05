import React from 'react'
import Header from '../components/Header';
import Carousel from '../components/Carousel';

const Event = () => {
  return (
    <div className='event'>
      <Header />
      <button className='returnEventBtn'><i></i></button>
      <div className='event_status'>
        <div>
          <span>Inicio - Eventos del mes - Happy...</span>
          <button className='eventLikeBtn'><i></i></button>
        </div>
      </div>
      <div className='eventCarousel'>
        <Carousel />
      </div>
    </div>
  )
}

export default Event