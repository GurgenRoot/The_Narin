import { createPortal } from 'react-dom';

const PortaledComponent = ({ modal }) => createPortal(modal, document.querySelector('#portal'));

export default PortaledComponent;
