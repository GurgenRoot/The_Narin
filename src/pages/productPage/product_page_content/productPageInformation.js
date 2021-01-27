import React, {useState} from "react";
import facebook from "../../../assets/facebook.svg";
import instagram from "../../../assets/instagram.svg";

export const ProductPageInformation = ({setPriceRequestToggle, priceRequestToggle, backgroundPageScrollOff}) => {

    const [productInformation, setProductInformation] = useState([
        {id: 1, description: 'Product weight', descriptionValue: '1kg'},
        {id: 2, description: 'Shipping total weight', descriptionValue: '1.5kg'},
        {id: 3, description: 'Product dimension', descriptionValue: '52 x 14 x 52cm'},
        {id: 4, description: 'Materials', descriptionValue: 'Leather'},
        {id: 5, description: 'Min. stripe length', descriptionValue: '20cm'},
        {id: 6, description: 'Max. stripe length', descriptionValue: '30cm'}
    ])


    return(
        <section className='product-page__information'>
            <div>
                <h1 className='title'>YERVANDUNI COAT OF ARMS</h1>
                <div className='description'>
                    <div className='product-page__information--season'>Season "Lesser Armenia"</div>
                    <div>- Each product is limited from 3 to 9 pieces.</div>
                    <div>- We spend around 11 hours of handwork per product.</div>
                    <div>- Unique serial number could be found inside of the bag.</div>
                </div>
            </div>

            <h1 className='title'>
                <div className='product-page__information--title'>PRODUCT INFORMATION</div>
            </h1>
            <div>
                {
                    productInformation.map(i => {
                        return (
                            <div key={i.id} className='product-page__information--wrap description'>
                                <div>
                                    <div className='product-page__information--description'>{i.description}</div>
                                </div>
                                <div>
                                    <div className='product-page__information--value'>{i.descriptionValue}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button className='btn product-page__information--btn' onClick={() => {
                setPriceRequestToggle(() => true)
                backgroundPageScrollOff()
            }}>Request the price</button>
            <div className='product-page__social'>
                <div className='social'>
                    <div className='description'>
                        <div className="product-page__social--description">Or write us directly via Facebook or Instagram </div>
                    </div>
                    <div className='social__img'>
                        <img src={facebook} alt="facebook" className='social__img--facebook'/>
                        <img src={instagram} alt="instagram"/>
                    </div>
                </div>
            </div>
        </section>
    )
}