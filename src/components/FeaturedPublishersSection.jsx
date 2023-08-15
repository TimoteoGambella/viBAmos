import React from 'react'
import '../styles/components/featuredPublishersSection.scss'
import star from '../assets/icons/star.svg'
import Carousel from './Carousel'

const FeaturedPublishersSection = () => {
  return (
    <div className='featuredSection'>
      <div className='featuredSection_title'>
        <img className='featuredSection_icon' src={star} alt="" />
        <h2>Publicadores destacados</h2>
      </div>
      <div className='featuredCardsSection'>
        <Carousel type={''} />
      </div>
    </div>
  )
}

export default FeaturedPublishersSection