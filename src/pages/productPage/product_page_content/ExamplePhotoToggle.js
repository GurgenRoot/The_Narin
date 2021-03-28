import React, {useEffect} from './node_modules/react';

import img from '../../../assets/NoPath — копия (15).jpeg';
import close from '../../../assets/whiteCloseBtn.svg';

export const ExamplePhotoToggle = ({setExamplePhotoToggle, backgroundPageScrollOn}) => {
  useEffect(() => {
    document.addEventListener('keyup', setEscapeKeyHandler, false);
  }, []);

  const setEscapeKeyHandler = (e) => e.key === 'Escape' && backgroundPageScrollOnHandler();

  const backgroundPageScrollOnHandler = () => {
    setExamplePhotoToggle(false);
    backgroundPageScrollOn();
    document.removeEventListener('keyup', setEscapeKeyHandler, false);
    window.onscroll = (e) => {
      return // it's fix keypress bag
    };
  }

  return (
    <div className='page-bg' onClick={() => backgroundPageScrollOnHandler()}>
      <div className='product-page__example'>
        <div className='product-page__example--close'>
          <img src={close} alt="X" onClick={() => backgroundPageScrollOnHandler()}/>
        </div>
        <img src={img} alt="img" className='product-page__example--img' onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}/>
      </div>
    </div>
  );
};

