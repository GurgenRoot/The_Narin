/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Hammer from 'react-hammerjs';
import classnames from 'classnames';

import ImagesMagnifiers from '../ImagesMagnifiers/ImagesMagnifiers';

import LeftArrow from '../../assets/left-arrow.svg';
import RightArrow from '../../assets/right-arrow.svg';

const ProductPageMobileSlider = ({
  middleImage,
  setImageIdIncrementHandler,
  setImageIdDecrementHandler,
  smallImages,
  setImageId,
  imageId,
  swipeSliderLeftHandler,
  swipeSliderRightHandler,
}) => (
  <>
    <div className="product-page-slider">
      <div>
        <Hammer
          onSwipeLeft={() => setImageIdIncrementHandler()}
          onSwipeRight={() => setImageIdDecrementHandler()}
        >
          <div className="product-page__slider--curs">
            <div className="product-page__slider--arrows">
              <img
                role="presentation"
                className="product-page__slider--left-arrow"
                src={LeftArrow}
                alt="Left Arrow"
                onClick={() => setImageIdDecrementHandler()}
              />

              <img
                role="presentation"
                className="product-page__slider--right-arrow"
                src={RightArrow}
                alt="Right Arrow"
                onClick={() => setImageIdIncrementHandler()}
              />
            </div>
            <ImagesMagnifiers img={`/images/middle/${middleImage}`} />
          </div>
        </Hammer>
      </div>
      <div className="mobile-mini-images">
        {smallImages.map((img, index) => (
          <div
            role="presentation"
            key={index}
            style={{ background: `url('/images/small/${img}') no-repeat center center / cover` }}
            className={classnames('product-page-miniImages', index === imageId && 'product-page-miniImages__active')}
            onClick={() => setImageId(index)}
          >
          </div>
        ))}
      </div>
    </div>
  </>
);

export default ProductPageMobileSlider;
