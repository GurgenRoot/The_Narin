import React from 'react';

const MainSliderDots = ({ sliderImages, currentImageId, setCurrentImageId, setTimerToggle }) => (
  <ul className="main-slider__dots">
    {sliderImages.map(i => (
      <li
        className={i.id === currentImageId
          ? 'main-slider__dot main-slider__dot--active'
          : 'main-slider__dot'}
        role="presentation"
        key={i.id}
        onClick={() => {
          setCurrentImageId(() => i.id);
          setTimerToggle(false);
        }}
      />
    ))}
  </ul>
);

export default MainSliderDots;
