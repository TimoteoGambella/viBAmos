import { useContext,useEffect,useState } from "react";
import { UseApiContext } from "../context/ApiContext";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import HeroSection from "../components/home/HeroSection";
import TrendSection from "../components/home/TrendSection";
import MonthlySection from "../components/home/MonthlySection";
import YearSection from "../components/home/YearSection";
import FeaturedPublishersSection from "../components/home/FeaturedPublishersSection";
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
            <Header />
            <HeroSection />
            <TrendSection />
            <MonthlySection />
            <YearSection />
            <FeaturedPublishersSection />
            <Footer />
        </div>
    )
}