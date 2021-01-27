import React from 'react';

export const MainSliderDots = ({sliderImages, currentImageId, setCurrentImageId, setTimerToggle}) => {
    return (
        <>
            <ul className="main-slider__dots">
                {sliderImages.map(i => <li
                    className={i.id === currentImageId
                        ? "main-slider__dot main-slider__dot--active"
                        : "main-slider__dot"
                    }
                    key={i.id}
                    onClick={() => {
                        setCurrentImageId(() => i.id)
                        setTimerToggle(false)
                    }}
                >
                </li>)}
            </ul>
        </>
    );
};
