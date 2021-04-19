import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import './header.scss';

import MenuLinks from '../MenuLinks/MenuLinks';

import mobileBlackSmallLogo from '../../assets/blackSmallLogo.svg';
import mobileWhiteSmallLogo from '../../assets/narinSmallLogo.svg';
import desktopWhiteLogo from '../../assets/logo-slogan.svg';
import desktopBlackLogo from '../../assets/logo-slogan-black.svg';
import whiteHamburgerMenu from '../../assets/hamburger-menu-white.svg';
import blackHamburgerMenu from '../../assets/hamburger-menu-black.svg';
import closeHamburgerMenu from '../../assets/hamburger-menu-close.svg';

interface THeaderProps {
  isLogoWhite: boolean,
  setIsLogoWhite: (isLogoWhite: boolean) => void
}

const Header: FC<THeaderProps> = ({ isLogoWhite, setIsLogoWhite }) => {
  const [burgerMenuToggle, setBurgerMenuToggle] = useState(true);

  const userMonitorAvailWidth: number = window.innerWidth;

  const isDesktopSize: boolean = userMonitorAvailWidth > 1024;

  const isLogoWhiteHandler = () => {
    if (isDesktopSize) {
      return isLogoWhite ? desktopWhiteLogo : desktopBlackLogo;
    }
    return isLogoWhite ? mobileWhiteSmallLogo : mobileBlackSmallLogo;
  };

  const hamburgerMenuSrc: string = isLogoWhite ? whiteHamburgerMenu : blackHamburgerMenu;

  const burgerMenuToggleHandler: string = burgerMenuToggle ? hamburgerMenuSrc : closeHamburgerMenu;

  const setIsBurgerMenuWhiteHandler = () => {
    setBurgerMenuToggle(!burgerMenuToggle);
    setIsLogoWhite(!isLogoWhite);
  };
  return (
    <header className={cn('header', burgerMenuToggle ? 'header__bg--transparent' : 'header__bg--white')}>
      <div className="header__content">

        <NavLink to="/">
          <img src={isLogoWhiteHandler()} alt="Narin Logo" />
        </NavLink>

        <div className="header__links">
          <MenuLinks isLogoWhite={isLogoWhite} />
        </div>

        <div className="header__burger">
          <img
            role="presentation"
            src={burgerMenuToggleHandler}
            alt="hamburger-menu"
            onClick={() => setIsBurgerMenuWhiteHandler()}
          />

          <div className="header__burger--links">
            {!burgerMenuToggle && <MenuLinks isLogoWhite={isLogoWhite} />}
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
