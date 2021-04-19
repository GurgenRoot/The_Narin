import React, { FC } from 'react';

import './radioBtn.scss';

interface TRadioBtnProps {
  title: string,
  selected: boolean,
  value: number
}

const RadioBtn: FC<TRadioBtnProps> = ({ title, selected, value }) => (
  <label className="radio">
    <input type="radio" name="video" className="radio__btn" checked={selected} value={value} />
    <span className="radio__clone" />
    <span className="radio__title">{title}</span>
  </label>
);

export default RadioBtn;
