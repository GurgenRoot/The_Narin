import React from 'react';

import closeBtn from '../../../assets/whiteCloseBtn.svg';
import RadioBtn from '../../../components/RadioBtn';

const ProductPagePackaging = ({
  type,
  onChangeType,
  packagingBoxes,
  setExamplePhotoToggle,
  backgroundPageScrollOff
}) => (
  <div className="product-page__packaging">
    <h1 className="title">
      <div className="product-page__packaging--title">
        PACKAGING
      </div>
    </h1>
    <div className="product-page__packaging--items">
      {packagingBoxes.map(i => (
        <div key={i.id}>
          <div className="product-page__packaging--item">
            <div role="presentation" className="description product-page__radio" onClick={() => onChangeType(i.id)}>
              <RadioBtn title={i.title} selected={type === i.id} value={i.id} />
            </div>
            <div className="description">
              <div className="product-page__packaging--description">{i.description}</div>
            </div>
            <div className="product-page__packaging--iframe">
              <iframe title="unique title" src={i.videoSrc} className="product-page__iframe"> </iframe>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="product-page__packaging--footer">
      <div className="description product-page__packaging--info">All packages includes the product story color print</div>
      <button
        className="product-page__packaging--btn"
        onClick={() => {
          backgroundPageScrollOff();
          setExamplePhotoToggle(true);
        }}
      >Show example</button>
    </div>
  </div>
);

export default ProductPagePackaging;
