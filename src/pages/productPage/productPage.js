import React, {useEffect, useState} from "react";

import {Header} from "../../components/Header/Header";
import {ProductPageSlider} from "../../components/ProductPageSlider/ProductPageSlider";
import {ProductPageInformation} from "./product_page_content/ProductPageInformation/productPageInformation";
import {ProductPageIntroduction} from "./product_page_content/productPageIntroduction";
import {ProductPagePackaging} from "./product_page_content/productPagePackaging";
import {ProductBuyInfo} from "./product_page_content/productBuyInfo";
import {Footer} from "../../components/Footer/Footer";
import {PriceRequest} from "../../components/PriceRequest/PriceRequest";
import {ExamplePhotoToggle} from "./product_page_content/ExamplePhotoToggle";
import { PortaledComponent } from "../../components/portaledComponent/portaledComponent";

import './productPage.scss'
import { ProductPageMobileSlider } from "../../components/ProductPageMobileSlider/ProductPageMobileSlider";

const packagingBoxes = [
    {
        id: 1,
        title: 'Standard',
        description: 'Elegant, high-quality, and eco-friendly box with durable magnets on the lid that provide a tight and safe seal, securing your bag inside.',
        videoSrc: "https://www.youtube.com/embed/08EgUyjSy7E"
    },
    {
        id: 2,
        title: 'Wooden Box',
        description: 'Crafted from Armenian wood this box is for the ones who want to make great impression.',
        videoSrc: "https://www.youtube.com/embed/TkTAb5yOHLs"
    },
    {
        id: 3,
        title: 'Wooden Box - Special Edition',
        description: 'Any name or message of your choice will be engraved on the front of the box.',
        videoSrc: "https://www.youtube.com/embed/jAh73Cnryjc"
    }
];

export const ProductPage = ({backgroundPageScrollOn, backgroundPageScrollOff, setIsLogoWhite}) => {
    const [examplePhotoToggle, setExamplePhotoToggle] = useState(false);
    const [priceRequestToggle, setPriceRequestToggle] = useState(false);
    const [packagingType, setPackagingType] = useState(1);

    const handleOnChangeType = (type) => {
        setPackagingType(type);
    }

    useEffect( () => {
        window.scrollTo({top: 0})
        backgroundPageScrollOn();
        console.log(packagingType);
        return () => setPriceRequestToggle(false);
    },[])

    return (
            <div className='container'>
                <Header isLogoWhite={false} setIsLogoWhite={setIsLogoWhite}/>
                <div className='product-page'>
                    <div className='product-page__top'>
                        {/*isMobile ? <ProductPageSliderMobile /> : <ProductPageSlider />*/}

                        <ProductPageSlider/>                        
                        <ProductPageInformation
                            setPriceRequestToggle={setPriceRequestToggle}
                            priceRequestToggle={priceRequestToggle}
                            backgroundPageScrollOff={backgroundPageScrollOff}
                        />
                    </div>
                    <ProductPageIntroduction/>
                    <ProductPagePackaging
                      type={packagingType}
                      onChangeType={handleOnChangeType}
                      packagingBoxes={packagingBoxes}
                      setExamplePhotoToggle={setExamplePhotoToggle}
                      backgroundPageScrollOff={backgroundPageScrollOff}
                    />
                    <div className="product-page__buy--wrap">
                        <ProductBuyInfo
                            setPriceRequestToggle={setPriceRequestToggle}
                            backgroundPageScrollOff={backgroundPageScrollOff}
                        />
                    </div>
                    <Footer/>
                </div>
            {
                examplePhotoToggle && <PortaledComponent modal={<ExamplePhotoToggle backgroundPageScrollOn={backgroundPageScrollOn} setExamplePhotoToggle={setExamplePhotoToggle}/>}/>
            }

            {
                priceRequestToggle && <PortaledComponent modal={<PriceRequest
                    type={packagingType}
                    onChangeType={handleOnChangeType}
                    backgroundPageScrollOn={backgroundPageScrollOn}
                    setPriceRequestToggle={setPriceRequestToggle}
                    packagingBoxes={packagingBoxes}
                />} />
            }

            </div>
    )
}