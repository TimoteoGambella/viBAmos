import React from 'react'
import '../styles/components/carousel.scss'
import TrendCard from './TrendCard'
import MonthlyCard from './MonthlyCard'

const Carousel = ({ type }) => {
  return (
    <>
      {(type === 'trendy')
        ?
        <div className='carouselSectionTrendy'>
          <TrendCard />
          <TrendCard />
          <TrendCard />
        </div>
        :
        (type === 'monthly')
          ?
          <div className='carouselSectionMonthly'>
            <MonthlyCard />
            <MonthlyCard />
            <MonthlyCard />
          </div>
          :
          <div className='carouselSection'>
            <TrendCard />
            <TrendCard />
            <TrendCard />
          </div>
      }
    </>
  )
}

export default Carousel