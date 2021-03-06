import React, { FC } from 'react';
import './thankYouPopUp.scss';
import closeImg from '../../assets/close.svg';

interface ThankYouPopUpType {
  setContactToggle: (contactToggle: boolean) => void,
  backgroundPageScrollOn: () => void
}

const ThankYouPopUp: FC<ThankYouPopUpType> = ({ setContactToggle, backgroundPageScrollOn }) => (
  <div className="thanks-popup">
    <div className="title thanks-popup__header">
      <h1 className="thanks-popup__title">THANK YOU!</h1>
      <img
        role="presentation"
        src={closeImg}
        alt="close"
        className="thanks-popup__close"
        onClick={() => {
          setContactToggle(false);
          backgroundPageScrollOn();
        }}
      />
    </div>
    <div className="description">
      <div className="thanks-popup__description">We heard you and will get back to you very soon.</div>
    </div>
  </div>
);

export default ThankYouPopUp;
