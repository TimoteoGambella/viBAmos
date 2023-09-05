import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import profile from '../assets/fondos/profile.jpeg'
import Carousel from '../components/Carousel'
import blueRectangle from '../assets/fondos/polygonBlueFull.svg'

const Profile = () => {
  return (
    <div className='profile'>
      <img className='blueRectangle' src={blueRectangle} alt="" />
      <Header />
      <button className='returnProfileBtn'><i></i>Perfil</button>
      <div className='profile_info'>
        <img src={profile} alt="" />
        <div>
          <h4>María Milagros</h4>
          <span>mmm227@gmail.com</span>
        </div>
      </div>
      <div className='editProfileBtnContainer'>
        <button className='editProfileBtn'>Editar perfil <i></i></button>
      </div>
      <div className='profile_preferences'>
        <h3>Preferencias</h3>
        <div>
          <span>Eventos diurnos</span>
          <span>Eventos nocturnos</span>
          <span>Comida y bar</span>
          <span>Música</span>
          <span>Arte</span>
          <span>Al aire libre</span>
        </div>
      </div>
      <div className='profile_saveEvents'>
        <h3>Eventos guardados</h3>
        <div className='profile_carouselContainer'>
          <Carousel type={'monthly'} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile