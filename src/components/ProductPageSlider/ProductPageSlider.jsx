import ProductPageDesktopSlider from '../ProductPageDesktopSlider/ProductPageDesktopSlider';
import ProductPageMobileSlider from '../ProductPageMobileSlider';

import './ProductPageSlider.scss';

const ProductPageSlider = ({
  smallImages,
  largeImage,
  middleImage,
  imageId,
  setImageId,
  setImageIdDecrementHandler,
  setImageIdIncrementHandler,
  userDeviceScreenSize
}) => (
  <div className="product-page-slider-wrap">
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
      />}
  </div>
);

export default ProductPageSlider;
