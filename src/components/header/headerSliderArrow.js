import React from 'react';
import leftArrow from "../../assets/bigSliderLeftArrow.svg";
import rightArrow from "../../assets/bigSliderRightArrow.svg";

export const HeaderSliderArrow = ({prevSlide, nextSlide, setTimerToggle}) => {
    return (
        <>
            <div className='header-slider__arrows'>
                <img src={leftArrow}
                     alt="left arrow"
                     className='header-slider__arrows--item'
                     onClick={() => {
                         prevSlide()
                         setTimerToggle(false)
                     }}/>
                <div className='header-slider__arrows--text'>
                    <div>
                        There are many variations of passages
                    </div>
                </div>
                <img src={rightArrow}
                     alt="right arrow"
                     className='header-slider__arrows--item'
                     onClick={() => {
                         nextSlide()
                         setTimerToggle(false)
                     }}
                />
            </div>
        </>
    );
};
