import React from 'react'
import '../styles/components/carousel.scss'
import TrendCard from './TrendCard'
import MonthlyCard from './MonthlyCard'
import YearCard from './YearCard'
import FeaturedPublishersCard from './FeaturedPublishersCard'

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