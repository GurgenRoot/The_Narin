import React, { FC } from 'react';
import './textarea.scss';

interface TTextareaProps {
  placeholder: string
}
const Textarea: FC<TTextareaProps> = ({ placeholder }) => <textarea className="textarea" placeholder={placeholder}></textarea>;

export default Textarea;
