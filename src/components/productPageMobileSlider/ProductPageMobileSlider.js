import React from 'react'
import Hammer from 'react-hammerjs';
import {ImagesMagnifiers} from '../ImagesMagnifiers/ImagesMagnifiers';

import LeftArrow from '../../assets/left-arrow.svg';
import RightArrow from '../../assets/right-arrow.svg';

export const ProductPageMobileSlider = ({middleImage, setImageIdIncrementHandler, setImageIdDecrementHandler, swipeSliderLeftHandler, swipeSliderRightHandler}) => {
    return (
        <>
            <div className='product-page-slider'>
              <div>
                <Hammer
                    onSwipeLeft={() => setImageIdIncrementHandler()}
                    onSwipeRight={() => setImageIdDecrementHandler()}
                >
                    <div className='product-page__slider--curs'>
                        <div className='product-page__slider--arrows'>
                            <img
                                className='product-page__slider--left-arrow'
                                src={LeftArrow}
                                alt="Left Arrow"
                                onClick={() => setImageIdDecrementHandler()}
                            />

                            <img
                                className='product-page__slider--right-arrow'
                                src={RightArrow}
                                alt="Right Arrow"
                                onClick={() => setImageIdIncrementHandler()}
                            />
                        </div>
                        <ImagesMagnifiers img={`/images/middle/${middleImage}`}/>
                    </div>
                </Hammer>
               </div>
            </div>
        </>
    )
}
