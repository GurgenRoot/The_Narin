import React from 'react';
import {NavLink} from "react-router-dom";

export const MenuLinks = ({isLogoWhite}) => {
    return (
        <div className='menu'>
            <nav className="menu__items" style={isLogoWhite ? {color: '#fff'} : {color: '#070707'}}>
                <NavLink
                    to='/about-us'
                    className="menu__item"

                    // onClick={() => smoothScroll(689, color)}
                    target={isLogoWhite ? "_blank" : "_self"}
                >
                    About us
                </NavLink>

                <NavLink
                    to='/our-works'
                    className="menu__item"
                    target={isLogoWhite ? "_blank" : "_self"}
                >
                    Our works
                </NavLink>

                <NavLink
                    to='/contact-us'
                    className="menu__item"
                    target={isLogoWhite ? "_blank" : "_self"}
                >
                    Contact us
                </NavLink>
            </nav>
        </div>
    );
};

