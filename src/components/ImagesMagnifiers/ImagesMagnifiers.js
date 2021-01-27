import React from 'react';
import {MagnifierContainer, MagnifierPreview, MagnifierZoom} from 'react-image-magnifiers'
import img from '../../assets/ARMENIAN GENIUSES/arams-ballet-1.png'
import imgMagni from '../../assets/ARMENIAN GENIUSES/arams-ballet-1.png'
export const ImagesMagnifiers = () => {
    return (
        <div>
            <MagnifierContainer>
                <div className="example-class">
                    <MagnifierPreview imageSrc={img} style={{maxWidth: '500px', height: '500px'}}/>
                </div>
                <MagnifierZoom style={{ minHeight: "200px", width: '200px' }} imageSrc={img}/>
            </MagnifierContainer>
        </div>
    );
};

