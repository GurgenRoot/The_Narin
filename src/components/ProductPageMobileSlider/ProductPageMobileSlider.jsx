import React from 'react';
import {ImagesMagnifiers} from '../ImagesMagnifiers/ImagesMagnifiers';
import Hammer from 'react-hammerjs';

export const ProductPageMobileSlider = ({img, setId, swipeSliderRightHandler, swipeSliderLeftHandler, img1}) => (
    <>
      <div className='product-page__slider'>
        <div className="product-page__slides">
            {img.map(item => {
              return (
                <div onClick={() => setId(item.id)}
                 key={item.id}
                 style={{background: `url('${item.img}') no-repeat center center / cover`}}
                 className='product-page__slides--images'
                >
                </div>
              );
            })}
        </div>
      </div>
      <div className='product-page-slider'>
              <div>
                <Hammer
                    onSwipeLeft={() => swipeSliderRightHandler()}
                    onSwipeRight={() => swipeSliderLeftHandler()}
                >
                <div>
                    <ImagesMagnifiers img={img1} largeImg={img1}/>
                </div>
                </Hammer>
                </div>
            </div>
    </>
)

        


