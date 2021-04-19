import { FC } from 'react';

import ProductPageDesktopSlider from '../ProductPageDesktopSlider';
import ProductPageMobileSlider from '../ProductPageMobileSlider';

import './productPageSlider.scss';

interface TProductPageSliderProps {
  smallImages: Array<string>,
  largeImage: string,
  middleImage: string,
  imageId: number,
  setImageId: (index: number) => void,
  setImageIdDecrementHandler: () => void,
  setImageIdIncrementHandler: () => void,
  userDeviceScreenSize: number
}

const ProductPageSlider: FC<TProductPageSliderProps> = ({
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
          smallImages={smallImages}
          imageId={imageId}
          setImageId={setImageId}
          setImageIdIncrementHandler={setImageIdIncrementHandler}
          setImageIdDecrementHandler={setImageIdDecrementHandler}
      />}
  </div>
);

export default ProductPageSlider;
