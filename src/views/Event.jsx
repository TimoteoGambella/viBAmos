import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedPublishersCard from '../components/home/FeaturedPublishersCard';
import image from '../assets/eventosFotos/foto1.jpg'
import yellowStar from '../assets/fondos/yellowStar.svg';
import greenHalfCircle from '../assets/fondos/GreenHalfCircle.svg';

const Event = () => {
  return (
    <div className='event'>
      <img src={yellowStar} alt="" className='EventYellowStar' />
      <img src={greenHalfCircle} alt="" className='EventGreenHalfCircle' />
      <Header />
      <button className='returnEventBtn'><i></i></button>
      <div className='event_status'>
        <span>Inicio - Eventos del mes - Happy...</span>
        <button className='eventLikeBtn'><i></i></button>
      </div>
      <div className='eventCarousel'>
        <img src={image} alt="" />
        <img src={image} alt="" />
        <img src={image} alt="" />
      </div>
      <div className='event_data'>
        <div className='event_data--fecha'>
          <span><i></i>Fecha</span>
          <h6>9 de julio</h6>
        </div>
        <div className='event_data--hora'>
          <span><i></i>Hora</span>
          <h6>12:00hs</h6>
        </div>
        <div className='event_data--precio'>
          <span><i></i>Precio</span>
          <h6>Entrada gratuita</h6>
        </div>
      </div>
      <div className='event_info'>
        <h2>Happy Hour en Nápoles</h2>
        <p>Vení y celebrá este jueves 9 de julio junto a nosotros. La pizzería con más renombre y tiempo en el barrio de Villa Crespo celebra 220 años desde su inauguración, donde venderemos todas nuestras pizzas con una rebaja del 40 %. No te lo podés perder, ¿qué esperas?</p>
      </div>
      <div className="event_location">
        <h3><i></i>Ubicación</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13399.713143996214!2d-68.8026173565392!3d-32.900064287992386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0fe0265c8317%3A0x6b6d0fa9c3ed2886!2sShopping%20Mendoza!5e0!3m2!1ses-419!2sar!4v1694640530724!5m2!1ses-419!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='event_publishers'>
        <h3><i></i>Publicadores</h3>
        <FeaturedPublishersCard />
      </div>
      <Footer noBackground='true' />
    </div>
  )
}

export default Event