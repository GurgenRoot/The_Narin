import React from 'react';
import './ThankYouPopUp.scss';
import closeImg from '../../assets/close.svg';

export const ThankYouPopUp = ({setContactToggle}) => {
    return (
        <div>
            <div className='thanks-popup'>
                <div className='title thanks-popup__header'>
                    <h1 className='thanks-popup__title'>THANK YOU!</h1>
                    <img src={closeImg} alt="close" className='thanks-popup__close' onClick={() => {
                        setContactToggle(false)
                    }}/>
                </div>
                <div className='description'>
                    <div className='thanks-popup__description'>We heard you and will get back to you very soon.</div>
                </div>
            </div>
        </div>
    );
};

