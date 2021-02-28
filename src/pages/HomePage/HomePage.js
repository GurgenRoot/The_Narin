import React, {useEffect, useState} from 'react';

import Header from "../../components/Header";
import About from "../../components/About";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import ContactPopup from "../../components/ContactPopup";
import MainSlider from "../../components/MainSlider";
import { PortaledComponent } from '../../components/portaledComponent/portaledComponent';
import ProductSlider from "../../components/ProductsSlider";

import Img1 from "../../assets/photo_2020-07-11_01-19-25.jpg";
import Img2 from "../../assets/photo_2020-07-11_01-19-30.jpg";
import Img3 from "../../assets/photo_2020-07-11_01-19-31.jpg";
import Img4 from "../../assets/photo_2020-07-11_01-19-37.jpg";

import './HomePage.scss'

import {collections} from "./HomePageData";
import {seasons} from "./db.json";


export const HomePage = ({isLogoWhite, setIsLogoWhite, backgroundPageScrollOn, backgroundPageScrollOff}) => {
    const [timerToggle, setTimerToggle] = useState(true)

    useEffect( () => {
        window.scrollTo({top: 0})

        window.onscroll = (e) => {
            return // it's fix scrollOff bag after priceRequest goBack function
        };
    },[])

    const sliderImages = [
        {id: 0, img: Img1},
        {id: 1, img: Img2},
        {id: 2, img: Img3},
        {id: 3, img: Img4} // slider images может быть в useMemo
    ]

    const [contactToggle, setContactToggle]  = useState(false)

    const patterns = [collections[0]]
    const lands = [collections[1]]
    const geniuses = [collections[2]]

    return (
        <div className='home-page'>
            <Header isLogoWhite={isLogoWhite} setIsLogoWhite={setIsLogoWhite}/>
            <MainSlider sliderImages={sliderImages} timerToggle={timerToggle} setTimerToggle={setTimerToggle}/>
            <About/>
            <ProductSlider collections={patterns}/>
            <ProductSlider collections={lands}/>
            <ProductSlider collections={geniuses}/>
            <ContactUs setContactToggle={setContactToggle} backgroundPageScrollOff={backgroundPageScrollOff}/>
            <Footer/>
            {
                contactToggle && <PortaledComponent modal={<ContactPopup setContactToggle={setContactToggle} backgroundPageScrollOn={backgroundPageScrollOn} />}/>
            }
        </div>
    )
}



