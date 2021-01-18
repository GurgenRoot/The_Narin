import React, {useState} from 'react';
import mobileBlackSmallLogo from '../../assets/blackSmallLogo.svg';
import mobileWhiteSmallLogo from '../../assets/narinSmallLogo.svg';
import desktopWhiteLogo from '../../assets/logo-slogan.svg';
import desktopBlackLogo from '../../assets/logo-slogan-black.svg'
import {MenuLinks} from "../menu/menuLinks";
import {HeaderMenuLogo} from "./headerMenuLogos";
import {BurgerMenu} from "../burger_menu/burgerMenu";
import {NavLink} from "react-router-dom";

export const HeaderMenu = ({isLogoWhite, setIsLogoWhite}) => {

    const [burgerMenuToggle, setBurgerMenuToggle] = useState(true)

    const [userMonitorAvailWidth, setUserMonitorAvailWidth] = useState(window.innerWidth);

    const isDesktopSize = userMonitorAvailWidth > 1024 && true
    const isLogoWhiteHandler = () => {
        if (isDesktopSize) {
            return isLogoWhite  ? <NavLink to='/'><img src={desktopWhiteLogo} alt="Narin Logo"/></NavLink>
                                : <NavLink to='/'><img src={desktopBlackLogo} alt="Narin Logo"/></NavLink>
        } else {
            return isLogoWhite  ? <NavLink to='/'><img src={mobileWhiteSmallLogo} alt="Narin Logo"/></NavLink>
                                : <NavLink to='/'><img src={mobileBlackSmallLogo} alt="Narin Logo"/></NavLink>
        }
    }

    return (
        <div className='header-menu' style={burgerMenuToggle ? {backgroundColor: "transparent"} : {backgroundColor: '#fff'}}>
            <div className="header-menu__content">
                <HeaderMenuLogo
                    isDesktopSize={isDesktopSize}
                    isLogoWhiteHandler={isLogoWhiteHandler}
                />

                <div className="header-menu__links">
                    <MenuLinks isLogoWhite={isLogoWhite}/>
                </div>

                <div className="header-menu__burger">
                    <BurgerMenu
                        isLogoWhite={isLogoWhite}
                        setIsLogoWhite={setIsLogoWhite}
                        burgerMenuToggle={burgerMenuToggle}
                        setBurgerMenuToggle={setBurgerMenuToggle}
                    />
                    <div className="header-menu__burger--links">
                        {!burgerMenuToggle && <MenuLinks isLogoWhite={isLogoWhite}/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

