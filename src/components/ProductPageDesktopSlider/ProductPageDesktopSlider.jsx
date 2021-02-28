import React from 'react';
import {ImagesMagnifiers} from '../ImagesMagnifiers/ImagesMagnifiers';
import Hammer from 'react-hammerjs';

export const ProductPageDesktopSlider = ({img, swipeSliderRightHandler, swipeSliderLeftHandler, img1}) => {
    console.log(img1)
    return (
        <>
            <div>
               {img.map(img => {
                  return (
                    <div
                        key={img.id}
                        style={{background: `url('${img.img}') no-repeat center center / cover`}}
                        className='product-page-miniImages'
                    >
                    </div>
                  );
                })
                }
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
    );
}

