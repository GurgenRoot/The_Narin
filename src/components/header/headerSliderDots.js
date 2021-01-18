import React from 'react';

export const HeaderSliderDots = ({sliderImages, currentImageId, setCurrentImageId, setTimerToggle}) => {
    return (
        <>
            <ul className="header-slider__dots">
                {sliderImages.map(i => <li
                    className={i.id === currentImageId
                        ? "header-slider__dot header-slider__dot--active"
                        : "header-slider__dot"
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
