import React from 'react';
import {HeaderMenu} from "./headerMenu";

export const Header = ({isLogoWhite, setIsLogoWhite}) => {

    return (
        <header>
            <HeaderMenu isLogoWhite={isLogoWhite} setIsLogoWhite={setIsLogoWhite}/>
        </header>
    );
};

