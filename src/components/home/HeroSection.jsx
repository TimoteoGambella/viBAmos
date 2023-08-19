import React from 'react'
import '../../styles/components/heroSection.scss';
import heroSEctionFoto from '../../assets/eventosFotos/heroSectionFoto.jpeg';
import SearchBar from '../SearchBar';

const HeroSection = () => {
  return (
    <div className='heroSection'>
      <img className='heroSectionBackground' src={heroSEctionFoto} alt="" />
      <div className='heroSection_titles'>
        <h2>Encontrá tu</h2>
        <h2>próxima aventura</h2>
        <h3 className='font-mobile-16'>Viví experiencias únicas en eventos por toda la ciudad</h3>
        <SearchBar />
      </div>
    </div>
  )
}

export default HeroSection