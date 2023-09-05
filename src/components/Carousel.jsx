import React from 'react'
import TrendCard from './home/TrendCard'
import MonthlyCard from './home/MonthlyCard'
import YearCard from './home/YearCard'
import FeaturedPublishersCard from './home/FeaturedPublishersCard'

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
          (type === 'yearly')
            ?
            <div className='carouselSectionYearly'>
              <YearCard />
              <YearCard />
              <YearCard />
            </div>
            :
            <div className='carouselSectionPublishers'>
              <FeaturedPublishersCard />
              <FeaturedPublishersCard />
              <FeaturedPublishersCard />
            </div>
      }
    </>
  )
}

export default Carousel