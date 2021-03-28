import React from 'react';
import Hammer from 'react-hammerjs';
import classnames from 'classnames';

import ImagesMagnifiers from '../ImagesMagnifiers/ImagesMagnifiers';

import LeftArrow from '../../assets/left-arrow.svg';
import RightArrow from '../../assets/right-arrow.svg';
import Preloader from '../../assets/preloader.svg';

const ProductPageDesktopSlider = ({
  smallImages,
  largeImage,
  setImageId,
  imageId,
  setImageIdIncrementHandler,
  setImageIdDecrementHandler
}) => (
  <>
    <div>
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
    <div className="product-page-slider">
      <div>
        <Hammer
          onSwipeLeft={() => setImageIdIncrementHandler()}
          onSwipeRight={() => setImageIdDecrementHandler()}
        >
          <div className="product-page__slider--curs">
            { largeImage ?
              <div>
                <div className="product-page__slider--arrows">
                  <img
                    role="presentation"
                    src={LeftArrow}
                    className="product-page__slider--left-arrow"
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
                <ImagesMagnifiers
                  img={`/images/large/${largeImage}`}
                  secondImg={`/images/large/${largeImage}`}
                  largeImg={`/images/large/${largeImage}`}
                  secondLargeImg={`/images/large/${largeImage}`}
                  imageId={imageId}
                />
              </div>
              : <img src={Preloader} alt="preloader" className="preloader" />}
          </div>
        </Hammer>
      </div>
    </div>
  </>
);

export default ProductPageDesktopSlider;
