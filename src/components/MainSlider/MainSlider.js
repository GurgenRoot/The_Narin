import React, {useState, useEffect} from "react";
import Hammer from "react-hammerjs";
import cn from 'classnames'
import './MainSlider.scss'
//components
import {MainSliderArrow} from "./MainSliderArrow";
import {MainSliderDots} from "./MainSliderDots";

//images
import Img1 from '../../assets/photo_2020-07-11_01-19-25.jpg';
import Img2 from '../../assets/photo_2020-07-11_01-19-30.jpg';
import Img3 from '../../assets/photo_2020-07-11_01-19-31.jpg';
import Img4 from '../../assets/photo_2020-07-11_01-19-37.jpg';

export const MainSlider = React.memo(() => {

        const sliderImages = [
            {id: 0, img: Img1},
            {id: 1, img: Img2},
            {id: 2, img: Img3},
            {id: 3, img: Img4}
        ]
        const [currentImageId, setCurrentImageId] = useState(0)

    const [opacity, setOpacity] = useState(['main-slider__hideAnimations', 'main-slider__animations'])

        const [imageInTimerId, setImageInTimerId] = useState(0)

        const [timerToggle, setTimerToggle] = useState(true)

        const [userMonitorAvailWidth, setUserMonitorAvailWidth] = useState(window.innerWidth);


        const nextSlide = () => {
            setTimerToggle(() => false)
            sliderImages.push(sliderImages.shift())
            console.log(currentImageId)
            if (currentImageId + 2 > sliderImages.length) {
                return setCurrentImageId(0)
            }else return setCurrentImageId(currentImageId + 1 )
        }

        const prevSlide = () => {
            if (currentImageId < 1) {
                setCurrentImageId(() => sliderImages.length - 1)
            } else setCurrentImageId(() => currentImageId - 1)
        }

        // useEffect(() => {
        //     if (userMonitorAvailWidth > 960 && timerToggle) {
        //         setTimeout(() => {
        //             setImageInTimerId(imageInTimerId + 1)
        //             nextSlide()
        //         }, 10000)
        //     }
        // }, [imageInTimerId])


        return (
            <div className='main-slider'>
                {sliderImages.map(i => {
                    return(
                        <Hammer
                            onSwipeLeft={() => nextSlide(i.id)}
                            onSwipeRight={() => prevSlide(i.id)}
                            key={i.id}
                        >
                            <div>
                                <img src={i.img} alt="slider img" className={cn('main-slider__img', currentImageId === i.id ? opacity[1] : opacity[0])}/>
                                <MainSliderArrow nextSlide={nextSlide} prevSlide={prevSlide} setTimerToggle={setTimerToggle}/>
                                <MainSliderDots
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


