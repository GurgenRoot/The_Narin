import { createPortal } from 'react-dom'

export const PortaledComponent = ({modal}) => createPortal(modal, document.querySelector('#portal'))
