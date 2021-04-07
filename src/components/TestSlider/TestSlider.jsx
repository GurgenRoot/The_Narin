import React, { useState } from 'react';

import './testSlider.scss';

const TestSlider = ({ userDeviceScreenSize }) => {
  const value = 2;
  const [translateValue, setTranslateValue] = useState(0);
  const setTranslateValueHandler = () => {
    setTranslateValue((prevState) => prevState + userDeviceScreenSize);
    console.log(translateValue);
  };
  return (
    <div className="slider-wrap">
      <div
        role="presentation"
        onClick={() => setTranslateValueHandler()}
      >
        <div style={{ transform: `translateX(${-translateValue}px)` }} className="slider-container">
          <div className="slider-item">1</div>
          <div className="slider-item">{value}</div>
          <div className="slider-item">3</div>
          <div className="slider-item">4</div>
          <div className="slider-item">5</div>
          <div className="slider-item">6</div>
          <div className="slider-item">7</div>
          <div className="slider-item">8</div>
          <div className="slider-item">9</div>
          <div className="slider-item">10</div>
          <div className="slider-item">11</div>
        </div>
      </div>
    </div>
  );
};

export default TestSlider;
