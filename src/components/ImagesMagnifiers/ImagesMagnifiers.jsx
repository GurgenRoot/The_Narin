import React, { useState } from 'react';
import classNames from 'classnames';
import {MagnifierContainer, MagnifierPreview, MagnifierZoom} from 'react-image-magnifiers'
import img from '../../assets/ARMENIAN GENIUSES/arams-ballet-1.png'
import img2 from '../../assets/test1.jpg'
import imgMagni from '../../assets/ARMENIAN GENIUSES/arams-ballet-1.png'

import user from './user.png'

import './imagesMagnifiers.scss';

export const ImagesMagnifiers = ({img, largeImg}) => {

    const [selectedLabelToggle, setSelectedLabelToggl] = useState(true)
    return (
        <MagnifierContainer className='imagesMagnifiers'  inPlaceMinBreakpoint={1000}>
              <MagnifierPreview
                imageSrc={img}
                largeImageSrc={largeImg}
                className='imagesMagnifiers__small'
              />
            <MagnifierZoom imageSrc={largeImg} className='imagesMagnifiers__zoom' />
        </MagnifierContainer>
    );
};

