import React from 'react'
import filterIcon from '../assets/icons/filter.svg'

const SearchBar = () => {
  return (
    <div className='searchBar'>
      <i className='searchIcon'></i>
      <input className="searchInput" type="text" placeholder='¿Qué querés hacer hoy?' />
      <div>
        <img src={filterIcon} alt="" />
      </div>
    </div>
  )
}

export default SearchBar