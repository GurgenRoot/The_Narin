import React, {useState} from 'react';

import { ProductPageDesktopSlider } from '../ProductPageDesktopSlider/ProductPageDesktopSlider';

import LeftArrow from '../../assets/left-arrow.svg';
import RightArrow from '../../assets/right-arrow.svg';
import img1 from '../../assets/productPageSliderImgs/luxuryBag.jpg';
import img2 from '../../assets/productPageSliderImgs/unnamed (6).jpg';
import img3 from '../../assets/productPageSliderImgs/unnamed (10).jpg';
import img4 from '../../assets/productPageSliderImgs/unnamed (11).jpg';
import img5 from '../../assets/productPageSliderImgs/unnamed (15).jpg';

import './ProductPageSlider.scss';

export const ProductPageSlider = () => {
  const [id, setId] = useState(0);
  const img = [
    {id: 0, img: img1},
    {id: 1, img: img2},
    {id: 2, img: img3},
    {id: 3, img: img4},
    {id: 4, img: img5},
  ];

  const swipeSliderLeftHandler = () => {
    if (id < 1) {
      setId(4);
    } else {
      setId(id - 1);
    }
  };

  const swipeSliderRightHandler = () => {
    if (id > 3) {
      setId(0);
    } else {
      setId(id + 1);
    }
  };

  return (

    <div className='product-page-slider-wrap'>
      <ProductPageDesktopSlider img={img} swipeSliderLeftHandler={swipeSliderLeftHandler} swipeSliderRightHandler={swipeSliderRightHandler} img1={img1}/>
    </div>

  );
};

