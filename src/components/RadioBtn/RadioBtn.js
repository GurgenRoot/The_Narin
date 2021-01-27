import React from 'react';
import './RadioBtn.scss'
export const RadioBtn = ({title, selected}) => {
    return (
        <label className='radio'>
            <input type="radio" name='video' className='radio__btn' defaultChecked={selected}/>
            <span className='radio__clone' />
            <span className='radio__title'>{title}</span>
        </label>
    );
};

