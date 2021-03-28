import React from 'react';

import classNames from 'classnames';
import { MagnifierContainer, MagnifierPreview, MagnifierZoom } from 'react-image-magnifiers';

import './imagesMagnifiers.scss';

const ImagesMagnifiers = ({ img, largeImg = '' }) => (
  <MagnifierContainer className="imagesMagnifiers" inPlaceMinBreakpoint={1000}>
    <MagnifierPreview
      imageSrc={img}
      largeImageSrc={largeImg}
      className={classNames('imagesMagnifiers__small imagesMagnifiers__animation')}
    />
    <MagnifierZoom imageSrc={largeImg} className="imagesMagnifiers__zoom" />
  </MagnifierContainer>
);

export default ImagesMagnifiers;
