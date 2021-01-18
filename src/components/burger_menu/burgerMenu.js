import React from "react";

export const BurgerMenu = ({burgerMenuToggle, setBurgerMenuToggle, isLogoWhite, setIsLogoWhite}) => {

    return (
        <div onClick={() => setIsLogoWhite(!isLogoWhite)}>
            {
                burgerMenuToggle
                    ? <div className="header-menu__lines"
                           onClick={() => setBurgerMenuToggle(!burgerMenuToggle)}
                      >
                        <div className="header-menu__lines--first-line" style={isLogoWhite ? {border: '1px solid #fff'} : {border: '1px solid #070707'}}> </div>
                        <div className="header-menu__lines--second-line" style={isLogoWhite ? {border: '1px solid #fff'} : {border: '1px solid #070707'}}> </div>
                        <div className="header-menu__lines--third-line" style={isLogoWhite ? {border: '1px solid #fff'} : {border: '1px solid #070707'}}> </div>
                    </div>

                    : <div
                        className="header-menu__lines"
                        onClick={() => setBurgerMenuToggle(!burgerMenuToggle)}
                      >
                        <div className="header-menu__lines--close-first"> </div>
                        <div className="header-menu__lines--close-second"> </div>
                        <div className="header-menu__lines--close-third"> </div>
                    </div>
            }
        </div>
    )
}