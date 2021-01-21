import React from 'react';
import {HeaderMenu} from "./headerMenu";

export const Header = ({isLogoWhite, setIsLogoWhite}) => {
    console.log(isLogoWhite,'isLogoWhite')
    return (
        <header>
            <HeaderMenu isLogoWhite={isLogoWhite} setIsLogoWhite={setIsLogoWhite}/>
        </header>
    );
};

