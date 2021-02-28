import React from 'react';

import './RadioBtn.scss'

export const RadioBtn = ({title, selected, value}) => (
    <label className='radio'>
        <input type="radio" name='video' className='radio__btn' checked={selected} value={value}/>
        <span className='radio__clone' />
        <span className='radio__title'>{title}</span>
    </label>
);
