import React, {useState, useEffect} from "react";
import Hammer from "react-hammerjs";
import './headerSlider.scss'

//components
import {HeaderSliderArrow} from "./headerSliderArrow";
import {HeaderSliderDots} from "./headerSliderDots";

//images
import Img1 from '../../assets/photo_2020-07-11_01-19-25.jpg';
import Img2 from '../../assets/photo_2020-07-11_01-19-30.jpg';
import Img3 from '../../assets/photo_2020-07-11_01-19-31.jpg';
import Img4 from '../../assets/photo_2020-07-11_01-19-37.jpg';

export const HeaderSlider = React.memo(() => {

        const sliderImages = [
            {id: 0, color: Img1},
            {id: 1, color: Img2},
            {id: 2, color: Img3},
            {id: 3, color: Img4}
        ]
        const [currentImageId, setCurrentImageId] = useState(0)

        const [imageInTimerId, setImageInTimerId] = useState(0)

        const [timerToggle, setTimerToggle] = useState(true)

        const [userMonitorAvailWidth, setUserMonitorAvailWidth] = useState(window.innerWidth);


        const nextSlide = () => {
            if (currentImageId > sliderImages.length-2) {
                setCurrentImageId( 0)
            } else setCurrentImageId( currentImageId + 1)
        }

        const prevSlide = () => {
            if (currentImageId < 1) {
                setCurrentImageId(() => sliderImages.length - 1)
            } else setCurrentImageId(() => currentImageId - 1)
        }

        useEffect(() => {
            if (userMonitorAvailWidth > 960 && timerToggle) {
                setTimeout(() => {
                    setImageInTimerId(imageInTimerId + 1)
                    nextSlide()
                }, 9000)
            }
        }, [imageInTimerId])


    return (
        <div className='header-slider'>
            {sliderImages.map(i => {
                return(
                    <Hammer
                        onSwipeLeft={() => nextSlide(i.id)}
                        onSwipeRight={() => prevSlide(i.id)}
                        key={i.id}
                    >
                        <div
                            style={i.id === currentImageId ? {
                                display: 'block',
                                background: `url(${i.color}) 50%/cover no-repeat`
                            }: null}
                            className='header-slider__item header-slider__animations'
                        >
                            <HeaderSliderArrow nextSlide={nextSlide} prevSlide={prevSlide} setTimerToggle={setTimerToggle}/>
                            <HeaderSliderDots
                                sliderImages={sliderImages}
                                currentImageId={currentImageId}
                                setCurrentImageId={setCurrentImageId}
                                setTimerToggle={setTimerToggle}
                            />
                        </div>
                    </Hammer>
                )
            })}
        </div>
    )
}
)
