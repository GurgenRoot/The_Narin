import { FC } from 'react';
import { createPortal } from 'react-dom';

interface TPortaledComponentProps {
  modal: any
}
// @ts-ignore
const PortaledComponent: FC<TPortaledComponentProps> = ({ modal }) => createPortal(modal, document.querySelector('#portal'));

export default PortaledComponent;
