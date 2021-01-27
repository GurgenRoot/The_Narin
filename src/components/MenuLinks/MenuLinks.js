import React from 'react';
import './Menu.scss'
import {NavLink} from "react-router-dom";

export const MenuLinks = ({isLogoWhite}) => {
    return (
        <div className='menu'>
            <nav className="menu__items" style={isLogoWhite ? {color: '#fff'} : {color: '#070707'}}>
                <a
                    href='/about'
                    className="menu__item"

                    onClick={() => console.log()}
                    target={!isLogoWhite ? "_blank" : "_self"}
                >
                    About us
                </a>

                <a
                    href='/our-works'
                    className="menu__item"
                    target={!isLogoWhite ? "_blank" : "_self"}
                >
                    Our works
                </a>

                <a
                    href='/contact-us'
                    className="menu__item"
                    target={!isLogoWhite ? "_blank" : "_self"}
                >
                    Contact us
                </a>
            </nav>
        </div>
    );
};

