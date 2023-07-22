import React from 'react'
import '../styles/components/heroSection.scss';
import heroSEctionFoto from '../assets/eventosFotos/heroSectionFoto.jpeg';
import SearchBar from './SearchBar';

const HeroSection = () => {
  return (
    <div className='heroSection'>
      <img src={heroSEctionFoto} alt="" />
      <div className='heroSection_titles'>
        <h1>Encontrá tu próxima aventura </h1>
        <h3 className='font-mobile-16'>Viví experiencias únicas en eventos por toda la ciudad</h3>
        <SearchBar />
      </div>
    </div>
  )
}

export default HeroSection