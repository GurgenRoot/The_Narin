import React, {useState} from 'react';
import Hammer from 'react-hammerjs';
import './ProductPageSlider.scss';
import LeftArrow from '../../assets/left-arrow.svg';
import RightArrow from '../../assets/right-arrow.svg';
import img1 from '../../assets/productPageSliderImgs/luxuryBag.jpg';
import img2 from '../../assets/productPageSliderImgs/unnamed (6).jpg';
import img3 from '../../assets/productPageSliderImgs/unnamed (10).jpg';
import img4 from '../../assets/productPageSliderImgs/unnamed (11).jpg';
import img5 from '../../assets/productPageSliderImgs/unnamed (15).jpg';
import {ImagesMagnifiers} from '../ImagesMagnifiers/ImagesMagnifiers';

export const ProductPageSlider = () => {
  const [id, setId] = useState(0);
  const t = [
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
      <div>
        {
          t.map(img => {
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
    </div>

  );
};

// <>
//   <div className='product-page__slider'>
//
//     <div className="product-page__slides">
//       {t.map(item => {
//         return (
//           <div onClick={() => setId(item.id)}
//                key={item.id}
//                style={{background: `url('${item.img}') no-repeat center center / cover`}}
//                className='product-page__slides--images'
//           >
//           </div>
//         );
//       })}
//     </div>
//   </div>
// </>

// <div className='product-page__slider--arrows'>
//   <img
//     src={LeftArrow}
//     alt="Left Arrow"
//     onClick={() => swipeSliderLeftHandler()}
//   />
//
//   <img
//     src={RightArrow}
//     alt="Right Arrow"
//     onClick={() => swipeSliderRightHandler()}
//   />
// </div>

//
// <div className='product-page__slide--item prod-slide-animation'
//      style={id === i.id ? {
//        zIndex: '9',
//        display: 'block',
//      } : {display: 'none'}}
// >
//
// </div>