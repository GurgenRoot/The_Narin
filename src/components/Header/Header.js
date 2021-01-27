import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import cn from "classnames";
//style
import './Header.scss';
//components
import {MenuLinks} from "../MenuLinks/MenuLinks";
//img
import mobileBlackSmallLogo from '../../assets/blackSmallLogo.svg';
import mobileWhiteSmallLogo from '../../assets/narinSmallLogo.svg';
import desktopWhiteLogo from '../../assets/logo-slogan.svg';
import desktopBlackLogo from '../../assets/logo-slogan-black.svg';
import whiteHamburgerMenu from '../../assets/hamburger-menu-white.svg';
import blackHamburgerMenu from '../../assets/hamburger-menu-black.svg';
import closeHamburgerMenu from '../../assets/hamburger-menu-close.svg';

export const Header = ({isLogoWhite, setIsLogoWhite}) => {

    const [burgerMenuToggle, setBurgerMenuToggle] = useState(true)

    const userMonitorAvailWidth = window.innerWidth

    const isDesktopSize = userMonitorAvailWidth > 1024

    let logo = ''
    const isLogoWhiteHandler = () => {
        if (isDesktopSize) {
            return logo = isLogoWhite ? desktopWhiteLogo : desktopBlackLogo
        } else {
            return logo = isLogoWhite ? mobileWhiteSmallLogo : mobileBlackSmallLogo
        }
    }

    const hamburgerMenuSrc = isLogoWhite ? whiteHamburgerMenu : blackHamburgerMenu;

    const burgerMenuToggleHandler = burgerMenuToggle ? hamburgerMenuSrc : closeHamburgerMenu

    const setIsBurgerMenuWhiteHandler = () => {
        setBurgerMenuToggle(!burgerMenuToggle)
        setIsLogoWhite(!isLogoWhite)
    }
    return (
        <header className={cn('header', burgerMenuToggle ? 'header__bg--transparent' : 'header__bg--white')}>
            <div className="header__content">

                <NavLink to='/'>
                    <img src={isLogoWhiteHandler()} alt="Narin Logo"/>
                </NavLink>

                <div className="header__links">
                    <MenuLinks isLogoWhite={isLogoWhite}/>
                </div>

                <div className="header__burger">
                    <img
                        src={burgerMenuToggleHandler}
                        alt="hamburger-menu"
                        onClick={() => setIsBurgerMenuWhiteHandler()}
                    />

                    <div className="header__burger--links">
                        {!burgerMenuToggle && <MenuLinks isLogoWhite={isLogoWhite}/>}
                    </div>
                </div>

            </div>
        </header>
    );
};

