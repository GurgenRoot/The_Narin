// import React from "react";
// import leftArrow from "../../assets/Mini Imgs/left-arrow.svg";
// import rightArrow from "../../assets/Mini Imgs/right-arrow.svg";
//
//  const ProductsSliderArrow = () => {
//     return(
//         <div className='product-slider__arrow'>
//             <div className="product-slider__arrow--left">
//                 {translateX < 0
//                     ? <img
//                         src={leftArrow} alt="left arrow"
//                         onClick={ (event) => {
//                             if (translateX + 1 <= 0) {
//                                 setSliderLengthValue(sliderLengthValue - id)
//                                 const isSliderLengthOver = sliderLengthValue > sliderLength && deviceScreenWidth > 991
//                                 setIsSliderLengthOver(isSliderLengthOver)
//                                 const isDesktopDevice = deviceScreenWidth > 991
//                                 setMobileSliderLength(() => {
//                                     if (isDesktopDevice === false) {
//                                         return  mobileSliderLength - 1
//                                     } else return mobileSliderLength
//                                 })
//                                 handleSwipeRight()
//                             } else return
//                         }}
//                     />
//                     : null
//                 }
//             </div>
//             <div className="product-slider__arrow--right">
//                 <img
//                     src={rightArrow} alt="right arrow"
//                     onClick={(event) => {
//                         setSliderLengthValue(sliderLengthValue + id)
//                         const isDesktopDevice = deviceScreenWidth > 991
//                         const isSliderLengthOver = sliderLength < sliderLengthValue && isDesktopDevice
//                         setIsSliderLengthOver(isSliderLengthOver)
//                         setMobileSliderLength(() => {
//                             if (isDesktopDevice === false) {
//                                 return  mobileSliderLength + 1
//                             } else return mobileSliderLength
//                         })
//                         handleSwipeLeft(isSliderLengthOver)
//                     }}
//                 />
//             </div>
//
//         </div>
//     )
// }