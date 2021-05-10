import { FC, ReactElement } from 'react';
import { createPortal } from 'react-dom';

type TPortaledComponentProps = {
  modal: ReactElement;
}

const PortaledComponent: FC<TPortaledComponentProps> = ({ modal }) => {
  const portalElement = document.querySelector('#portal');
  return (portalElement && createPortal(modal, portalElement)) || null;
};

export default PortaledComponent;
