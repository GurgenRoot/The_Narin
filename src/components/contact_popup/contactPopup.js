import React, {useState} from 'react';
import closeImg from '../../assets/blackCloseBtn.svg'
import {Textarea} from "../textarea/textarea";
import {ThankYouPopUp} from "../thankYou_popUp/thankYouPopUp";

export const ContactPopup = ({setContactToggle}) => {

    const [thankYouPopUpToggle, setThankYouPopUpToggle] = useState(false)
    return (
        <div className='page-bg'>
            {
                thankYouPopUpToggle
                    ? <ThankYouPopUp setContactToggle={setContactToggle}/>
                    : <section className='contacting-component'>
                        <div className='title contacting-component__header'>
                            <div className="contacting-component__title">
                                CONTACTING NARIN
                            </div>
                            <div className='contacting-component__close'>
                                <img src={closeImg} alt="close"
                                     onClick={() => {
                                         setContactToggle(false)
                                     }}
                                />
                            </div>
                        </div>
                        <div className='description'>
                            <div className='contacting-component__description'>Doing business with us is always a good
                                idea.
                            </div>
                        </div>
                        <div className='contacting-component__label'>
                            <label htmlFor="contacting-input" className='description'>Your email address*</label>
                        </div>
                        <input type="text" id='contacting-input' className='input contacting-component__input'
                               placeholder='Enter your email address*'/>
                        <div className='contacting-component__textarea'>
                            <Textarea placeholder='Your text here'/>
                        </div>
                        <button className='btn contacting-component__btn'
                                onClick={() => {
                                    setThankYouPopUpToggle(true)
                                }}>Submit
                        </button>
                    </section>
            }
        </div>

    )
}