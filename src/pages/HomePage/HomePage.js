import React, {useEffect, useState} from 'react';
//components
import Header from "../../components/Header";
import About from "../../components/About";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import ContactPopup from "../../components/ContactPopup";
import MainSlider from "../../components/MainSlider";

    //img
import LesserArmenia from "../../assets/Archived Season/lesser-armenia-1.jpg";
import MelodiesOfTheLegacy from "../../assets/Archived Season/melodies-of-the-legacy-1.jpg";
import TheLastBastion from "../../assets/Archived Season/the-last-bastion-1.jpg";
//style
import './HomePage.scss'
import Img1 from "../../assets/photo_2020-07-11_01-19-25.jpg";
import Img2 from "../../assets/photo_2020-07-11_01-19-30.jpg";
import Img3 from "../../assets/photo_2020-07-11_01-19-31.jpg";
import Img4 from "../../assets/photo_2020-07-11_01-19-37.jpg";
import ProductSlider from "../../components/ProductsSlider";
import {collections} from "./HomePageData";

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
    console.log(patterns,lands,geniuses, collections)
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
                contactToggle && <ContactPopup setContactToggle={setContactToggle} backgroundPageScrollOn={backgroundPageScrollOn}/>
            }
        </div>
    )
}



