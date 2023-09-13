import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import MonthlyCard from '../components/home/MonthlyCard';
import EllipsePurpleHalf from '../assets/fondos/EllipsePurpleHalf.svg'
import RectangleOrange from '../assets/fondos/RectangleOrange.png'
import polygonYellow8Points from '../assets/fondos/polygonYellow8Points.svg'

const MonthlyEvents = () => {
  return (
    <div className='monthlyEvents'>
      <img src={EllipsePurpleHalf} alt="" className='EllipsePurpleHalf' />
      <img src={RectangleOrange} alt="" className='RectangleOrange' />
      <img src={polygonYellow8Points} alt="" className='polygonYellow8Points' />
      <Header />
      <button className='returnEventBtn'><i></i></button>
      <div className='monthlyEvents_status'>
        <span>Inicio - Eventos del mes</span>
      </div>
      <SearchBar />
      <div className='monthlyEventsContainer'>
        <MonthlyCard />
        <MonthlyCard />
        <MonthlyCard />
        <MonthlyCard />
        <button className='btnVerMasMonthlyEvents'>Ver más</button>
      </div>


      <Footer noBackground='true' />
    </div>
  )
}

export default MonthlyEvents