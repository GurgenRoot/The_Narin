import React from 'react';
import './PriceRequest.scss';
import PriceRequestImg from '../../assets/yervanduni.jpg'
import closeImg from '../../assets/close.svg'
import {Textarea} from "../Textarea/Textarea";
import {RadioBtn} from "../RadioBtn/RadioBtn";

export const PriceRequest = ({type, onChangeType, setPriceRequestToggle, packagingBoxes, backgroundPageScrollOn}) => (
    
      <div className="page-bg price-bg">  
      <div className='price-request'>
            <h1 className='title'>
                <div className='price-request__title align-center'>
                    <div className='price-request__close'>
                        <span>PRICE REQUEST</span>
                        <img src={closeImg} alt="X" className='price-request__close--btn' onClick={() => {
                            setPriceRequestToggle(false)
                            backgroundPageScrollOn()
                        }}/>
                    </div>
                </div>
            </h1>
            <div className='price-request__content'>
                <div className='price-request__content--mobile'>
                    <div style={{backgroundImage: `url(${PriceRequestImg})`}} className='price-request__img'> </div>
                    <div>
                        <h1 className='title'>
                            <div className='price-request__title--mobile'>YERVANDUNI COAT OF ARMS</div>
                        </h1>
                        <div className='description price-request__description'>
                            <div className='price-request__info'>Season "Lesser Armenia"</div>
                        </div>
                        <div className='description price-request__cost'>
                            Our product costs are starting from 340$
                        </div>

                        <div className='price-request__packaging'>
                            <div className='title'>
                                <div className='price-request__title--mobile'>
                                    <div className='price-request__packaging--title'>PREFERRED PACKAGING</div>

                                    {packagingBoxes.map(i => {
                                        return (
                                            <div className='price-request__packaging--btn' onClick={() => onChangeType(i.id)}>
                                              <RadioBtn title={i.title} selected={type === i.id} value={i.id} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='price-request__form'>
                <div className='title'>
                    <div className='price-request__form--title'>
                        COMPLIMENTARY SHIPPING FOR ALL ORDERS
                    </div>
                </div>
                <div className='price-request__form--wrap'>
                    <div className='price-request__form--inputs price-request__form--email'>
                        <label htmlFor="contacting-input">Your email address*</label>
                        <input type="text" id='contacting-input' className='input price-request__form--input'
                               placeholder='Enter your email address*'/>
                    </div>
                    <div className='price-request__form--inputs price-request__form--country'>
                        <label htmlFor="contacting-input--country">Country*</label>
                        <input type="text" id='contacting-input--country'
                               className='input price-request__form--input'
                               placeholder='USA'/>
                    </div>
                </div>
                <div className='price-request__textarea'>
                    <Textarea placeholder='Your message (optional)'/>
                </div>
                <div className='price-request__form--description'>We will get back to you in less than a day</div>
                <div className='price-request__form--btn'>
                    <button className='btn price-request__btn' onClick={() => {
                        setPriceRequestToggle(false)
                        backgroundPageScrollOn()
                    }}>Request the price
                    </button>
                </div>
            </div>
        </div>  
        </div>  
    
);
