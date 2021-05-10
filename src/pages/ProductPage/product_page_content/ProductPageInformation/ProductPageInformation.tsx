import React, { FC } from 'react';

import productInformation from './db';

import type { TProductInformation } from './db';

import facebook from '../../../../assets/facebook.svg';
import instagram from '../../../../assets/instagram.svg';

import './productPageInformation.scss';

interface TProductPageInformationProps {
  setPriceRequestToggle: (priceRequestToggle: boolean) => void,
  backgroundPageScrollOff: () => void
}

const ProductPageInformation: FC<TProductPageInformationProps> = ({
  setPriceRequestToggle,
  backgroundPageScrollOff
}) => (
  <section className="product-page__information">
    <div>
      <h1 className="title">YERVANDUNI COAT OF ARMS</h1>
      <div className="description">
        <div className="product-page__information--season">Season &ldquo;Lesser Armenia&rdquo;</div>
        <div>- Each product is limited from 3 to 9 pieces.</div>
        <div>- We spend around 11 hours of handwork per product.</div>
        <div>- Unique serial number could be found inside of the bag.</div>
      </div>
    </div>

    <h1 className="title">
      <div className="product-page__information--title">PRODUCT INFORMATION</div>
    </h1>
    <div>
      {
        productInformation.map((i: TProductInformation) => (
          <div key={i.id} className="product-page__information--wrap description">
            <div>
              <div className="product-page__information--description">{i.description}</div>
            </div>
            <div>
              <div className="product-page__information--value">{i.descriptionValue}</div>
            </div>
          </div>
        ))
      }
    </div>
    <button
      className="btn product-page__information--btn"
      onClick={() => {
        setPriceRequestToggle(true);
        backgroundPageScrollOff();
      }}
    >Request the price
    </button>
    <div className="product-page__social">
      <div className="social">
        <div className="description">
          <div className="product-page__social--description">Or write us directly via Facebook or Instagram</div>
        </div>
        <div className="social__img">
          <img src={facebook} alt="facebook" className="social__img--facebook" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </div>
  </section>
);

export default ProductPageInformation;
