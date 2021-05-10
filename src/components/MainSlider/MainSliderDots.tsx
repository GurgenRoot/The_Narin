import React, { FC } from 'react';
import type { TSliderImages } from './MainSlider';

interface TMainSliderDotsProps {
  sliderImages: Array<TSliderImages>,
  currentImageId: number,
  setCurrentImageId: (id: number) => void,
  setTimerToggle: (timerToggle: boolean) => void
}

const MainSliderDots: FC<TMainSliderDotsProps> = ({ sliderImages, currentImageId, setCurrentImageId,
  setTimerToggle }) => (
    <ul className="main-slider__dots">
      {sliderImages.map((i: TSliderImages) => (
        <li
          className={i.id === currentImageId
            ? 'main-slider__dot main-slider__dot--active'
            : 'main-slider__dot'}
          role="presentation"
          key={i.id}
          onClick={() => {
            setCurrentImageId(i.id);
            setTimerToggle(false);
          }}
        />
      ))}
    </ul>
);

export default MainSliderDots;
