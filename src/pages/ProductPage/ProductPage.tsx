import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import ProductPageSlider from '../../components/ProductPageSlider';
import {
  ProductPageInformation,
  ProductPageIntroduction,
  ProductPagePackaging,
  ProductBuyInfo,
  ExamplePhotoToggle
} from './product_page_content';

import Footer from '../../components/Footer/Footer';
import PriceRequest from '../../components/PriceRequest/PriceRequest';
import PortaledComponent from '../../components/PortaledComponent';

import './productPage.scss';

import products from '../../data/products';
import collections from '../../data/collections';
import packagingBoxes from './db';

interface ProductPageType {
  backgroundPageScrollOn: () => void,
  backgroundPageScrollOff: () => void,
  setIsLogoWhite: Dispatch<SetStateAction<boolean>>,
  userDeviceScreenSize: number
}

const ProductPage: FC<ProductPageType> = ({
  backgroundPageScrollOn,
  backgroundPageScrollOff,
  setIsLogoWhite,
  userDeviceScreenSize
}) => {
  const [examplePhotoToggle, setExamplePhotoToggle] = useState(false);
  const [priceRequestToggle, setPriceRequestToggle] = useState(false);
  const [packagingType, setPackagingType] = useState(1);

  const handleOnChangeType = (type: any) => {
    setPackagingType(type);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
    backgroundPageScrollOn();
    return () => setPriceRequestToggle(false);
  }, []);

  const params: any = useParams();

  const collection = collections.filter(url => url.url === params.collectionUrl);

  const sliderId = collection[0].sliderItems[params.productId - 1].id;

  const [imageId, setImageId] = useState(0);

  const setImageIdIncrementHandler = () => {
    if (imageId >= products[sliderId].largeImages.length - 1) {
      setImageId(0);
    } else { setImageId(prevState => prevState + 1); }
  };

  const setImageIdDecrementHandler = () => {
    if (imageId <= 0) {
      setImageId(products[sliderId].largeImages.length - 1);
    } else { setImageId(prevState => prevState - 1); }
  };
  const middleImage: string = products[sliderId].middleImages[imageId];
  const largeImage: string = products[sliderId].middleImages[imageId];

  return (
    <div className="container">
      <Header isLogoWhite={false} setIsLogoWhite={setIsLogoWhite} />
      <div className="product-page">
        <div className="product-page__top">
          <ProductPageSlider
            smallImages={products[sliderId].smallImages}
            middleImage={middleImage}
            largeImage={largeImage}
            setImageId={setImageId}
            imageId={imageId}
            userDeviceScreenSize={userDeviceScreenSize}
            setImageIdIncrementHandler={setImageIdIncrementHandler}
            setImageIdDecrementHandler={setImageIdDecrementHandler}
          />
          <ProductPageInformation
            setPriceRequestToggle={setPriceRequestToggle}
            backgroundPageScrollOff={backgroundPageScrollOff}
          />
        </div>
        <ProductPageIntroduction />
        <ProductPagePackaging
          type={packagingType}
          onChangeType={handleOnChangeType}
          packagingBoxes={packagingBoxes}
          setExamplePhotoToggle={setExamplePhotoToggle}
          backgroundPageScrollOff={backgroundPageScrollOff}
        />
        <div className="product-page__buy--wrap">
          <ProductBuyInfo
            setPriceRequestToggle={setPriceRequestToggle}
            backgroundPageScrollOff={backgroundPageScrollOff}
          />
        </div>
        <Footer />
      </div>
      {examplePhotoToggle && (
        <PortaledComponent
          modal={(
            <ExamplePhotoToggle
              backgroundPageScrollOn={backgroundPageScrollOn}
              setExamplePhotoToggle={setExamplePhotoToggle}
            />
          )}
        />
      )}

      {priceRequestToggle && <PortaledComponent
        modal={<PriceRequest
          type={packagingType}
          onChangeType={handleOnChangeType}
          backgroundPageScrollOn={backgroundPageScrollOn}
          setPriceRequestToggle={setPriceRequestToggle}
          packagingBoxes={packagingBoxes}
        />}
      />}
    </div>
  );
};

export default ProductPage;
