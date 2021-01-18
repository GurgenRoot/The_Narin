import React, {useState} from 'react';
import Hammer from "react-hammerjs";
import rightArrow from '../../assets/Mini Imgs/right-arrow.svg'
import leftArrow from '../../assets/Mini Imgs/left-arrow.svg'
import {NavLink} from "react-router-dom";
import {ProductsSliderArrow} from "./productsSliderArrow";

export const ProductSlider = ({collection}) => {
    const sliderLength = collection.sliderItems.length
    const deviceScreenWidth = window.screen.width
    const [translateX, setTranslateX] = useState(0)
    const [mr, setMr] = useState(0)
    const id = Math.floor(sliderLength / 3)
    const [sliderLengthValue, setSliderLengthValue] = useState(() => id)
    const [isSliderLengthOver, setIsSliderLengthOver] = useState(false)
    const [mobileSliderLength, setMobileSliderLength] = useState(1)
    const [currentItemId, setCurrentItemId] = useState(0)


    const handleSwipeLeft = (isSliderLengthOver) => {
        if (isSliderLengthOver || mobileSliderLength > sliderLength - 1) {

            if (deviceScreenWidth > 991) {
                setTranslateX(() => 0)
                setIsSliderLengthOver(false)
                setSliderLengthValue(id + 1)
                setMr(() => 0)
            }
            if (deviceScreenWidth < 991) {
                setTranslateX(() => 0)
                setMr(() => 0)
                setMobileSliderLength(() => 1)
            }
        } else {
            if (deviceScreenWidth > 1375) {
                setTranslateX(() => translateX - 300)
                setMr(() => mr + 97)
            } else if (deviceScreenWidth > 991) {
                setTranslateX(() => translateX - 300)
                setMr(() => mr + 54)
            } else {
                setTranslateX(() => translateX - 100)
                setMr(() => mr + 18)
            }
        }

        // укоротить этот код
    }
    const handleSwipeRight = () => {
        if (translateX + 1 <= 0) {
            if (deviceScreenWidth > 1375) {
                setTranslateX(() => translateX + 300)
                setMr(() => mr - 97)
            } else if (deviceScreenWidth > 991) {
                setTranslateX(() => translateX + 300)
                setMr(() => mr - 54)
            } else {
                setTranslateX(() => translateX + 100)
                setMr(() => mr - 18)
            }
        } else return

        // short this code
    }

    let handleTap

    const imageChangeHandler = () => setImageChange(() => !imageChange)
    const [imageChange, setImageChange] = useState(false)
    const [currentTargetItemId, setCurrentTargetItemId] = useState(null)

    return (
        <div className='product-slider'>
            <h1 className='title'>
                <div className='product-slider__title'>{collection.seasonName}</div>
            </h1>
            <div className='product-slider__wrapper'>
                <div className='product-slider__arrow'>
                    <div className="product-slider__arrow--left">
                        {translateX < 0
                            ? <img
                                src={leftArrow} alt="left arrow"
                                onClick={ (event) => {
                                    if (translateX + 1 <= 0) {
                                        setSliderLengthValue(sliderLengthValue - id)
                                        const isSliderLengthOver = sliderLengthValue > sliderLength && deviceScreenWidth > 991
                                        setIsSliderLengthOver(isSliderLengthOver)
                                        const isDesktopDevice = deviceScreenWidth > 991
                                        setMobileSliderLength(() => {
                                            if (isDesktopDevice === false) {
                                                return  mobileSliderLength - 1
                                            } else return mobileSliderLength
                                        })
                                        handleSwipeRight()
                                    } else return
                                }}
                            />
                            : null
                        }
                    </div>
                    <div className="product-slider__arrow--right">
                        <img
                            src={rightArrow} alt="right arrow"
                            onClick={(event) => {
                                setSliderLengthValue(sliderLengthValue + id)
                                const isDesktopDevice = deviceScreenWidth > 991
                                const isSliderLengthOver = sliderLength < sliderLengthValue && isDesktopDevice
                                setIsSliderLengthOver(isSliderLengthOver)
                                setMobileSliderLength(() => {
                                    if (isDesktopDevice === false) {
                                        return  mobileSliderLength + 1
                                    } else return mobileSliderLength
                                })
                                handleSwipeLeft(isSliderLengthOver)
                            }}
                        />
                    </div>

                </div>
                {collection.sliderItems.map(item => {
                    return (
                        <Hammer onTap={handleTap} onSwipeLeft={() => {
                            const itemId = item.id + 1
                            setCurrentItemId(() => itemId)
                            setMobileSliderLength(() => itemId)
                            handleSwipeLeft()
                        }}
                                onSwipeRight={() => {
                                    const itemId = item.id - 1
                                    setCurrentItemId(() => itemId)
                                    setMobileSliderLength(() => itemId)
                                    handleSwipeRight()
                                }} key={item.id}>
                            <div className="product-slider__item">
                                <NavLink to={`/product-item/${collection.id - 1}/${collection.url}/${item.id}`}
                                         aria-label={collection.id}>
                                    <div style={{transform: `translateX(calc(${translateX}% - ${mr}px)`}}
                                         className='product-slider__content'
                                         id={item.id}
                                         onMouseEnter={(e) => {
                                             const currentElementId = +e.currentTarget.id
                                             imageChangeHandler()
                                             return setCurrentTargetItemId(() => currentElementId)
                                             // укоротить этот код
                                         }}
                                         onMouseLeave={(e) => {
                                             const currentElementId = +e.currentTarget.id
                                             imageChangeHandler()
                                             return setCurrentTargetItemId(() => currentElementId)

                                             // short this code
                                         }}
                                    >
                                        <img
                                            src={imageChange && item.id === currentTargetItemId ? item.img[1] : item.img[0]}
                                            alt="bags" className='product-slider__item--img'/>
                                        <div className='description'>
                                            <div className='product-slider__description'>{item.name}{item.id}</div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </Hammer>
                    )
                })}
            </div>
        </div>
    )
}