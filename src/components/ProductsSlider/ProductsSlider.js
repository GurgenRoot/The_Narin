import React, {useEffect, useState} from 'react';
import Hammer from "react-hammerjs";
import rightArrow from '../../assets/Mini Imgs/right-arrow.svg'
import leftArrow from '../../assets/Mini Imgs/left-arrow.svg'
import {NavLink} from "react-router-dom";
import './ProductsSlider.scss'
export const ProductSlider = ({collections}) => {

    console.log(collections, 'collections')
    const deviceScreenWidth = window.screen.width
    const [translateX, setTranslateX] = useState(() => 0)
    const [mr, setMr] = useState(0)
    const id = deviceScreenWidth > 991 ? Math.floor(11 / 3) * 10 : Math.floor(11 / 11) * 10
    
    const sliderImages = collections.map(i => i.sliderItems)[0]

    const handleSwipeLeft = () => {
        if(deviceScreenWidth > 1300) {
            if (translateX > 60) return
            setTranslateX((prevState) => prevState + id)
            setMr(() => mr + 132) 
        }else if (deviceScreenWidth > 991) {
            if (translateX > 60) return
            setTranslateX((prevState) => prevState + id)
            setMr(() => mr + 97)
        } else {
              if (translateX > 90) return
              setTranslateX((prevState) => prevState + id)
              setMr(() => mr + 32) 
        }
    }

    const handleSwipeRight = () => {
            if (translateX <= 0) return

            if(deviceScreenWidth > 1300) {
                setTranslateX((prevState) => prevState - id)
                setMr(() => mr - 132) 
            }else if (deviceScreenWidth > 991) {
                setTranslateX((prevState) => prevState - id)
                setMr(() => mr - 97)
            } else {
                setTranslateX((prevState) => prevState - id)
                setMr(() => mr - 32) 
            }
    }

    return (
        <div className='product-slider'>
            {
                collections.map(i => {
                    return(
                        <div key={i.id}>
                            <h1 className='title product-slider__title'>{i.sliderTitle}</h1>
                            <div className='description product-slider__name'>Season {i.seasonName}</div>
                            <div className='product-slider__wrapper'>
                                <div className='product-slider__arrow'>
                                    <div className="product-slider__arrow--left">
                                        {translateX > 0
                                            ? <img
                                                src={leftArrow} alt="left arrow"
                                                onClick={ (event) => {
                                                    handleSwipeRight()
                                                }}
                                            />
                                            : null
                                        }
                                    </div>
                                    <div className="product-slider__arrow--right">
                                        <img
                                            src={rightArrow} alt="right arrow"
                                            onClick={(event) => {
                                                handleSwipeLeft()
                                            }}
                                        />
                                    </div>

                                </div>
                                <div className="product-slider__wrap" style={{transform: `translateX(calc(${-translateX}% + ${mr}px))`}}>
                                {sliderImages.map(item => {
                                    return (
                                        <Hammer onSwipeLeft={() => {
                                            handleSwipeLeft()
                                        }}
                                                onSwipeRight={() => {
                                                    handleSwipeRight()
                                                }} key={item.id}>
                                            <div className="product-slider__item">
                                                
                                                <NavLink to={`/product-item/${collections.id - 1}/${collections.url}/${item.id}`}
                                                         aria-label={collections.id}>
                                                    <div style={{transform: `translateX(0%`}}
                                                         className='product-slider__content'
                                                         id={item.id}
                                                    >
                                                        <img
                                                            src={item.img[0]}
                                                            alt="bags" className='product-slider__item--img product-slider__item--firstImg'
                                                        />
                                                        <img
                                                            src={item.img[1]}
                                                            alt="bags" className='product-slider__item--img product-slider__item--secondImg'
                                                        />
                                                        <div className='description'>
                                                            <div className='product-slider__item--description'>{item.name}{item.id}</div>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                                
                                            </div>
                                        </Hammer>
                                    )
                                })}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};
