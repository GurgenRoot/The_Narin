import React from 'react';

export const HeaderMenuLogo = ({isDesktopSize, isLogoWhiteHandler}) => {
    return (
        <div className="header-menu__logos">
            {
                isDesktopSize
                    ? <div className="header-menu__logos--desktop">
                        {isLogoWhiteHandler()}
                    </div>
                    : <div className="header-menu__logos--mobile">
                        {isLogoWhiteHandler()}
                    </div>
            }
        </div>
    );
};
