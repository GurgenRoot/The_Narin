import React from 'react';
import Facebook from '../../../assets/facebook.svg';
import Instagram from '../../../assets/instagram.svg';

const ProductBuyInfo = ({ setPriceRequestToggle, backgroundPageScrollOff }) => (
  <div className="product-page__buy">
    <h1 className="title">WHERE TO BUY</h1>
    <div className="description product-page__buy--description">We ship worldwide via DHL (3-7 days)</div>
    <button
      className="btn product-page__buy--btn"
      onClick={() => {
        setPriceRequestToggle(true);
        backgroundPageScrollOff();
      }}
    >Request the price</button>
    <div className="product-page__buy--social">
      <div className="description product-page__buy--text">Or write us directly on Facebook or Instagram</div>
      <div className="social">
        <div className="social__img product-page__buy--social">
          <img src={Facebook} alt="facebook" className="social__img--facebook" />
          <img src={Instagram} alt="instagram" />
        </div>
      </div>
    </div>
  </div>
);

export default ProductBuyInfo;
