import React from 'react';
import leftArrow from "../../assets/bigSliderLeftArrow.svg";
import rightArrow from "../../assets/bigSliderRightArrow.svg";

export const MainSliderArrow = ({prevSlide, nextSlide, setTimerToggle}) => {
    return (
        <>
            <div className='main-slider__arrows'>
                <img src={leftArrow}
                     alt="left arrow"
                     className='main-slider__arrows--item'
                     onClick={() => {
                         prevSlide()
                         setTimerToggle(false)
                     }}/>
                <div className='main-slider__arrows--text'>
                    <div>
                        There are many variations of passages
                    </div>
                </div>
                <img src={rightArrow}
                     alt="right arrow"
                     className='main-slider__arrows--item'
                     onClick={() => {
                         nextSlide()
                         setTimerToggle(false)
                     }}
                />
            </div>
        </>
    );
};
