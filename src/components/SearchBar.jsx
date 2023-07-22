import React from 'react'
import '../styles/components/searchBar.scss'

const SearchBar = () => {
  return (
    <div className='searchBar'>
      <i className='searchIcon'></i>
      <input className="searchInput" type="text" />
    </div>
  )
}

export default SearchBar