import React from 'react';
import closeBtn from "../../../assets/whiteCloseBtn.svg";
import {RadioBtn} from "../../../components/RadioBtn/RadioBtn";

export const ProductPagePackaging = ({packagingBoxes, setExamplePhotoToggle}) => {
    return (
        <div className='product-page__packaging'>
            <h1 className='title'>
                <div className="product-page__packaging--title">
                    PACKAGING
                </div>
            </h1>
            <div className='product-page__packaging--items'>
                {
                    packagingBoxes.map(i => {
                        return (
                            <div key={i.id}>
                                <div className='product-page__packaging--item'>
                                    <div className='description product-page__radio'>
                                        <RadioBtn title={i.title} selected={i.selected}/>
                                    </div>
                                    <div className='description'>
                                        <div className='product-page__packaging--description'>{i.description}</div>
                                    </div>
                                    <div className='product-page__packaging--iframe'>
                                        <iframe src={i.videoSrc} className='product-page__iframe'> </iframe>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='product-page__packaging--footer'>
                <div className='description product-page__packaging--info'>All packages includes the product story color print</div>
                <button className='product-page__packaging--btn' onClick={() => {
                    setExamplePhotoToggle(true)
                }}>Show example</button>


            </div>
        </div>
    );
};