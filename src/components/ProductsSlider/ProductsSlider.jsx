import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hammer from 'react-hammerjs';
import classnames from 'classnames';

import rightArrow from '../../assets/Mini Imgs/right-arrow.svg';
import leftArrow from '../../assets/Mini Imgs/left-arrow.svg';

import './ProductsSlider.scss';

const ProductSlider = ({ collection, userDeviceScreenSize }) => {
  const [translateX, setTranslateX] = useState(() => 0);
  const [mr, setMr] = useState(0);

  const margin = userDeviceScreenSize > 1280 ? 32 : 18;

  const sliderImages = collection.sliderItems;

  const desktop = userDeviceScreenSize - 668;

  const mobile = userDeviceScreenSize - 323;

  const sz = userDeviceScreenSize > 668 ? desktop : mobile;
  const percent = sz / 307;

  const totalPercent = percent * 100;

  const tP = 100 - totalPercent;

  const sliderLengthValue = collection.sliderItems.length;

  const [sliderLength, setSliderLength] = useState(sliderLengthValue * 100);

  const handleSwipeLeft = () => {
    if (userDeviceScreenSize < 668) {
      if (sliderLength === 200) {
        setSliderLength(() => sliderLength - tP);
        setTranslateX(() => translateX + tP);
        setMr(() => mr - margin * 2);
      } else {
        if ((
          sliderLength === 100 && userDeviceScreenSize > 980)
          || (sliderLength < 200 && userDeviceScreenSize < 980)
        ) {
          return;
        }
        setSliderLength(() => sliderLength - 100);
        setTranslateX(() => translateX + 100);
        setMr(() => mr - margin);
      }
    }

    if (userDeviceScreenSize < 975) {
      if (sliderLength <= 100) { return; }

      if (userDeviceScreenSize > 668) {
        if (sliderLength === 300) {
          setSliderLength(() => sliderLength - tP);
          setTranslateX(() => translateX + tP);
          setMr(() => mr - margin);
        } else {
          if ((
            sliderLength === 100 && userDeviceScreenSize > 980)
            || (sliderLength < 300 && userDeviceScreenSize < 980)
          ) {
            return;
          }
          setSliderLength(() => sliderLength - 200);
          setTranslateX(() => translateX + 200);
          setMr(() => mr - margin * 2);
        }
      }
    } else {
      if (sliderLength === 300) { return; }

      if (sliderLength <= 500) {
        setSliderLength(() => sliderLength - 200);
        setTranslateX(() => translateX + 200);
        setMr(() => mr - margin * 2);
      }

      if (sliderLength > 500) {
        setSliderLength(() => sliderLength - 300);
        setTranslateX(() => translateX + 300);
        setMr(() => mr - margin * 3);
      }
    }
  };

  const handleSwipeRight = () => {
    if (sliderLength >= 1100) { return; }
    if (userDeviceScreenSize < 668) {
      if (sliderLength < 200) {
        setSliderLength(() => sliderLength + tP);
        setTranslateX(() => translateX - tP);
        setMr(() => mr + margin * 2);
      } else {
        setSliderLength(() => sliderLength + 100);
        setTranslateX(() => translateX - 100);
        setMr(() => mr + margin);
      }
    }

    if (userDeviceScreenSize < 975) {
      if (userDeviceScreenSize > 668) {
        if (sliderLength < 300) {
          setSliderLength(() => sliderLength + tP);
          setTranslateX(() => translateX - tP);
          setMr(() => mr + margin);
        } else {
          setSliderLength(() => sliderLength + 200);
          setTranslateX(() => translateX - 200);
          setMr(() => mr + margin * 2);
        }
      }
    } else {
      if (sliderLength === 900) {
        setSliderLength(() => sliderLength + 200);
        setTranslateX(() => translateX - 200);
        setMr(() => mr + margin * 2);
      }
      if (sliderLength !== 900) {
        setSliderLength(() => sliderLength + 300);
        setTranslateX(() => translateX - 300);
        setMr(() => mr + margin * 3);
      }
    }
  };

  return (
    <div className="product-slider">

      <div>
        <h1 className="title product-slider__title">{collection.sliderTitle}</h1>
        <div className="description product-slider__name">Season {collection.seasonName}</div>
        <div className="product-slider__wrapper">
          <div className="product-slider__arrow">
            <div className="product-slider__arrow--left">
              {translateX > 0
                ? <img
                    role="presentation"
                    src={leftArrow}
                    alt="left arrow"
                    onClick={(event) => {
                      handleSwipeRight();
                    }}
                />
                : null}
            </div>
            <div className="product-slider__arrow--right">
              <img
                role="presentation"
                src={rightArrow}
                alt="right arrow"
                onClick={(event) => {
                  handleSwipeLeft();
                }}
              />
            </div>

          </div>
          <div className="product-slider__wrap">
            {sliderImages.map(item => (
              <Hammer
                onSwipeLeft={() => {
                  handleSwipeLeft();
                }}
                onSwipeRight={() => {
                  handleSwipeRight();
                }}
                key={item.id}
              >
                <div className="product-slider__item">

                  <NavLink
                    to={`/${collection.url}/${item.id}`}
                    aria-label={collection.id}
                  >
                    <div
                      style={{ transform: `translateX(calc(${-translateX}% + ${mr}px))` }}
                      className={classnames('product-slider__content')}
                      id={item.id}
                    >
                      <img
                        src={item.img[0]}
                        alt="bags"
                        className="product-slider__item--img product-slider__item--firstImg"
                      />
                      <img
                        src={item.img[1]}
                        alt="bags"
                        className="product-slider__item--img product-slider__item--secondImg"
                      />
                      <div className="description">
                        <div className="product-slider__item--description">{item.name}{item.id}</div>
                      </div>
                    </div>
                  </NavLink>

                </div>
              </Hammer>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductSlider;
