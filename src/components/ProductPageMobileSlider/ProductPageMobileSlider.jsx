import React from 'react';
import Hammer from 'react-hammerjs';
import ImagesMagnifiers from '../ImagesMagnifiers/ImagesMagnifiers';

const ProductPageMobileSlider = ({
  img,
  setId,
  swipeSliderRightHandler,
  swipeSliderLeftHandler,
  img1
}) => (
  <>
    <div className="product-page__slider">
      <div className="product-page__slides">
        {img.map(item => (
          <div
            role="presentation"
            onClick={() => setId(item.id)}
            key={item.id}
            style={{ background: `url('${item.img}') no-repeat center center / cover` }}
            className="product-page__slides--images"
          >
          </div>
        ))}
      </div>
    </div>
    <div className="product-page-slider">
      <div>
        <Hammer
          onSwipeLeft={() => swipeSliderRightHandler()}
          onSwipeRight={() => swipeSliderLeftHandler()}
        >
          <div>
            <ImagesMagnifiers img={img1} largeImg={img1} />
          </div>
        </Hammer>
      </div>
    </div>
  </>
);

export default ProductPageMobileSlider;
