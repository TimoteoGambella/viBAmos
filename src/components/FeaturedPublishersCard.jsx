import React from 'react'
import '../styles/components/featuredPublishersCard.scss';

const FeaturedPublishersCard = () => {
  return (
    <div className='featuredCard'>
      <div className='featuredCard__header'>
        <div>
          <i></i>
        </div>
      </div>
      <div className='featuredCard__info'>
        <div className='featuredCard__infoBody'>
          <h3>Galpón B</h3>
          <span><i className='featuredCard__infoBody--iconOne'></i>Cochabamba 2536</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPublishersCard