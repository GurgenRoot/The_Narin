import React, {useEffect, useState} from "react";
import './productPage.scss'
import {Header} from "../../components/Header/Header";
import {ProductPageSlider} from "../../components/ProductPageSlider/ProductPageSlider";
import {ProductPageInformation} from "./product_page_content/productPageInformation";
import {ProductPageIntroduction} from "./product_page_content/productPageIntroduction";
import {ProductPagePackaging} from "./product_page_content/productPagePackaging";
import {ProductBuyInfo} from "./product_page_content/productBuyInfo";
import {Footer} from "../../components/Footer/Footer";
import {PriceRequest} from "../../components/PriceRequest/PriceRequest";
import {ExamplePhotoToggle} from "./product_page_content/ExamplePhotoToggle";

export const ProductPage = ({backgroundPageScrollOn, backgroundPageScrollOff, setIsLogoWhite}) => {

    useEffect( () => {
        window.scrollTo({top: 0})
        backgroundPageScrollOn()
    },[])

    const [examplePhotoToggle, setExamplePhotoToggle] = useState(false)

    const [priceRequestToggle, setPriceRequestToggle] = useState(false)

    const [packagingBoxes, setPackagingBoxes] = useState([
        {
            id: 1,
            selected: true,
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
    ])
    return (
        <>
            <div className='container'>
                <Header isLogoWhite={false} setIsLogoWhite={setIsLogoWhite}/>
                <div className='product-page'>
                    <div className="product-page__top">
                        <ProductPageSlider />
                        <ProductPageInformation
                            setPriceRequestToggle={setPriceRequestToggle}
                            priceRequestToggle={priceRequestToggle}
                            backgroundPageScrollOff={backgroundPageScrollOff}
                        />
                    </div>
                    <ProductPageIntroduction/>
                    <ProductPagePackaging packagingBoxes={packagingBoxes} setExamplePhotoToggle={setExamplePhotoToggle}/>
                    <div className="product-page__buy--wrap">
                        <ProductBuyInfo
                            setPriceRequestToggle={setPriceRequestToggle}
                            backgroundPageScrollOff={backgroundPageScrollOff}
                        />
                    </div>
                    <Footer/>
                </div>

            </div>
            {
                examplePhotoToggle && <ExamplePhotoToggle setExamplePhotoToggle={setExamplePhotoToggle} />
            }
            {
                priceRequestToggle && <PriceRequest
                    backgroundPageScrollOn={backgroundPageScrollOn}
                    setPriceRequestToggle={setPriceRequestToggle}
                    packagingBoxes={packagingBoxes}
                />
            }
        </>
    )
}