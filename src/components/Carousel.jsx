import React from 'react'
import TrendCard from './TrendCard'
import '../styles/components/carousel.scss'

const Carousel = () => {
  return (
    <div className='carouselSection'>
      <TrendCard />
      <TrendCard />
      <TrendCard />
    </div>
  )
}

export default Carousel