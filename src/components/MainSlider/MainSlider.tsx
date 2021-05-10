import React, { useState, useEffect, FC, useCallback } from 'react';
import Hammer from 'react-hammerjs';
import cn from 'classnames';

import MainSliderArrow from './MainSliderArrow';
import MainSliderDots from './MainSliderDots';

import './mainSlider.scss';

import Img1 from '../../assets/photo_2020-07-11_01-19-25.jpg';
import Img2 from '../../assets/photo_2020-07-11_01-19-30.jpg';
import Img3 from '../../assets/photo_2020-07-11_01-19-31.jpg';
import Img4 from '../../assets/photo_2020-07-11_01-19-37.jpg';

interface TMainSliderProps {
  userDeviceScreenSize: number
}
export interface TSliderImages {
  id: number,
  img: string,
}

const sliderImages: TSliderImages[] = [
  { id: 0, img: Img1 },
  { id: 1, img: Img2 },
  { id: 2, img: Img3 },
  { id: 3, img: Img4 },
];

const MainSlider: FC<TMainSliderProps> = React.memo(({ userDeviceScreenSize }) => {
  const [currentImageId, setCurrentImageId] = useState(0);
  const [initialView, setInitialView] = useState(true);
  const [imageInTimerId, setImageInTimerId] = useState(0);
  const [timerToggle, setTimerToggle] = useState(false);

  const setCurrentImageIdWithDot = (id: number) => {
    if (initialView) {
      setInitialView(false);
    }
    setCurrentImageId(id);
  };

  const nextSlide = useCallback(() => {
    sliderImages.push(sliderImages.shift() as TSliderImages);
    if (initialView) {
      setInitialView(false);
    }
    if (currentImageId + 2 > sliderImages.length) {
      return setCurrentImageId(0);
    }
    return setCurrentImageId(currentImageId + 1);
  }, [currentImageId, initialView]);

  const prevSlide = () => {
    if (initialView) {
      setInitialView(false);
    }
    if (currentImageId < 1) {
      setCurrentImageId(() => sliderImages.length - 1);
    } else { setCurrentImageId(() => currentImageId - 1); }
  };

  useEffect(() => {
    if (userDeviceScreenSize > 960 && timerToggle) {
      setInterval(() => {
        setImageInTimerId(imageInTimerId + 1);
        nextSlide();
      }, 10000);
    }
  }, [imageInTimerId, nextSlide, timerToggle, userDeviceScreenSize]);

  const swipe = (evn: { deltaX: number; }) => {
    if (evn.deltaX < 0) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  return (
    <div className="main-slider">
      {sliderImages.map((i: TSliderImages, index: number) => (
        <Hammer
          onSwipe={swipe}
          key={i.id}
        >
          <div
            className={cn('main-slider__img', 'main-slider__item', {
              'main-slider__animations': currentImageId === i.id && !initialView,
              'main-slider__hideAnimations': currentImageId !== i.id,
            })}
            style={{
              zIndex: -index,
              backgroundImage: `url(${i.img})`,
            }}
          />
        </Hammer>
      ))}
      <>
        <div>
          <MainSliderArrow
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            setTimerToggle={setTimerToggle}
          />
          <MainSliderDots
            sliderImages={sliderImages}
            currentImageId={currentImageId}
            setCurrentImageId={setCurrentImageIdWithDot}
            setTimerToggle={setTimerToggle}
          />
        </div>
      </>
    </div>
  );
},
);

export default MainSlider;
