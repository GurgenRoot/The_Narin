import { ProductPageDesktopSlider } from '../ProductPageDesktopSlider/ProductPageDesktopSlider';
import ProductPageMobileSlider from '../productPageMobileSlider';

import './ProductPageSlider.scss';

export const ProductPageSlider = ({smallImages, largeImage, middleImage,imageId,setImageId ,setImageIdDecrementHandler, setImageIdIncrementHandler, userDeviceScreenSize }) => {
  // const largeImage = false
  return (

    <div className='product-page-slider-wrap'>
      {userDeviceScreenSize > 1279 
        ? <ProductPageDesktopSlider 
            smallImages={smallImages}
            largeImage={largeImage}
            imageId={imageId}
            setImageId={setImageId}
            setImageIdIncrementHandler={setImageIdIncrementHandler}
            setImageIdDecrementHandler={setImageIdDecrementHandler}
          />
        : <ProductPageMobileSlider
            middleImage={middleImage}
            setImageIdIncrementHandler={setImageIdIncrementHandler}
            setImageIdDecrementHandler={setImageIdDecrementHandler}
          />
    }
      
    </div>

  );
};

