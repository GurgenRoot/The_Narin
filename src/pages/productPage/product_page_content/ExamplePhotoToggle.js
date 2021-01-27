import React from 'react';

import img from '../../../assets/NoPath — копия (15).jpeg'
import close from '../../../assets/whiteCloseBtn.svg'

export const ExamplePhotoToggle = ({setExamplePhotoToggle}) => {
    return (
        <div className='page-bg'>
            <div className='product-page__example'>
                <div className='product-page__example--close'>
                    <img src={close} alt="X" onClick={() => setExamplePhotoToggle(false)}/>
                </div>
                <img src={img} alt="img" className='product-page__example--img'/>
            </div>
        </div>
    );
};

