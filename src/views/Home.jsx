import { useContext,useEffect,useState } from "react";
import { UseApiContext } from "../context/ApiContext";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import heroSEctionFoto from '../assets/eventosFotos/heroSectionFoto.jpeg'
import SearchBar from '../components/SearchBar';
import boltIcon from '../assets/icons/bolt.svg'
import Carousel from '../components/Carousel'
import EllipsePurple from '../assets/fondos/EllipsePurple.png'
import calendarIcon from '../assets/icons/calendar.svg'
import SeeAllEventsButton from '../components/buttons/SeeAllEventsButton'
import Star from '../assets/fondos/StarBold.svg'
import star from '../assets/icons/star.svg'
import Footer from "../components/Footer";


export default function Home() {

    const { apiFetch } = useContext(UseApiContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user')) {
            apiFetch('getUser',localStorage.getItem('user')).then(data => console.log(data))
        }
    },[])

    return (
        <div>
            <Header type='inicio' btnColor='inicio' />
            {/* <HeroSection /> */}
            <div className='heroSection'>
                <img className='heroSectionBackground' src={heroSEctionFoto} alt="" />
                <div className='heroSection_titles'>
                    <h2>Encontrá tu</h2>
                    <h2>próxima aventura</h2>
                    <h3 className='font-mobile-16'>Viví experiencias únicas en eventos por toda la ciudad</h3>
                    <SearchBar />
                </div>
            </div>

            {/* <TrendSection /> */}

            <div className='trendSection'>
                <img src={EllipsePurple} alt="" className='TrendEllipsePurple' />
                <div className='trendSection_title'>
                    <img className='trendSection_icon' src={boltIcon} alt="" />
                    <h2>Eventos en tendencia</h2>
                </div>
                <div className='trendCardsSection'>
                    <Carousel type={'trendy'} />
                </div>
            </div>

            {/* <MonthlySection /> */}

            <div className='monthlySection'>
                <div className='monthlySection_title'>
                    <img className='monthlySection_icon' src={calendarIcon} alt="" />
                    <h2>Eventos del mes</h2>
                </div>
                <div className='monthlyCardsSection'>
                    <Carousel type={'monthly'} />
                </div>
                <SeeAllEventsButton />
            </div>

            {/* <YearSection /> */}

            <div className='yearSection'>
                <img src={Star} alt="" className='YearStar' />
                <div className='yearSection_title'>
                    <img className='yearSection_icon' src={calendarIcon} alt="" />
                    <h2>Eventos del año</h2>
                </div>
                <div className='yearCardsSection'>
                    <Carousel type={'yearly'} />
                </div>
                <SeeAllEventsButton />
            </div>

            {/* <FeaturedPublishersSection /> */}

            <div className='featuredSection'>
                <div className='featuredSection_title'>
                    <img className='featuredSection_icon' src={star} alt="" />
                    <h2>Publicadores destacados</h2>
                </div>
                <div className='featuredCardsSection'>
                    <Carousel type={''} />
                </div>
            </div>

            <Footer />
        </div>
    )
}