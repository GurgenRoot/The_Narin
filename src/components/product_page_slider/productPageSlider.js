import React, {useState} from 'react'
import Hammer from "react-hammerjs";

import LeftArrow from '../../assets/left-arrow.svg'
import RightArrow from '../../assets/right-arrow.svg'

export const ProductPageSlider = () => {
    const [id, setId] = useState(0)
    const t = [
        {index: 0, color: '#e4e4e4'},
        {index: 1, color: 'skyBlue'},
        {index: 2, color: 'pink'},
        {index: 3, color: '#f8f8f8'},
        {index: 4, color: 'orange'}
    ]

    const swipeSliderLeftHandler = () => {
        if (id < 1) {
            setId(4)
        } else {
            setId(id - 1)
        }
    }

    const swipeSliderRightHandler = () => {
        if (id > 3) {
            setId(0)
        } else {
            setId(id + 1)
        }
    }

    return (

        <div className='product-page__slider'>

            <div className="product-page__slides">
                {t.map(item => {
                    return (
                        <div onClick={() => setId(item.index)}
                             key={item.index}
                             style={{backgroundColor: `${item.color}`}}
                             className='product-page__slides--images'
                        >
                        </div>
                    )
                })}
            </div>

            <div className='product-page__slide'>
                {t.map(i => {
                    return (
                        <Hammer onSwipeLeft={() => swipeSliderRightHandler()}
                                onSwipeRight={() => swipeSliderLeftHandler()} key={i.index}>
                            <div className='product-page__slide--item' style={id === i.index ? {
                                zIndex: '9',
                                backgroundColor: `${i.color}`
                            } : {display: 'none'}}>
                                <div className='product-page__slider--arrows'>
                                    <img
                                        src={LeftArrow}
                                        alt="Left Arrow"
                                        onClick={() => swipeSliderLeftHandler()}
                                    />

                                    <img
                                        src={RightArrow}
                                        alt="Right Arrow"
                                        onClick={() => swipeSliderRightHandler()}
                                    />
                                </div>
                            </div>
                        </Hammer>
                    )
                })}

            </div>

        </div>
    )
}