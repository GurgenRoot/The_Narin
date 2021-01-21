import React from 'react';
import './RadioBtn.scss'
export const RadioBtn = ({title}) => {
    return (
        <label className='radio'>
            <input type="radio" name='video' className='radio__btn'/>
            <span className='radio__clone'> </span>
            <span className='radio__title'>{title}</span>
        </label>
    );
};

