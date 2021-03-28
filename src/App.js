import React, {Suspense, useState, useEffect} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage";
import Preloader from './assets/preloader.svg';
import {ProductPage} from "./pages/productPage/productPage";

export const App = () => {
 const [userDeviceScreenSize, setUserDeviceScreenSize] = useState(window.screen.width)
    
 useEffect(() => {
    const onResizeHandler = () => {
        setUserDeviceScreenSize(window.screen.width)
    } 
    window.addEventListener('resize', onResizeHandler )
    
    return () => window.removeEventListener('resize', onResizeHandler)
 }, [])   

    const [isLogoWhite, setIsLogoWhite] = useState(true)
    const scrollOff = () => {
        const html = document.querySelector('html')
        html.style.scrollBehavior = 'unset'
            console.log(html)
        const yPosition = window.pageYOffset
        window.onscroll = () => {
            window.scrollTo(0, yPosition)
        };
    }

    const scrollOn = () => {
        window.onscroll = (e) => {
            return
        };
    }

    const backgroundPageScrollOff = () => {
        window.addEventListener('click', scrollOff)
        console.log('scroll off')
    }

    const backgroundPageScrollOn = () => {
        const html = document.querySelector('html')
        html.style.scrollBehavior = 'smooth'
        window.removeEventListener('click', scrollOff)
        window.addEventListener('click', scrollOn)
        setTimeout(() => {
            window.removeEventListener('click', scrollOn)
        }, 1000)
    }

        return (
            <BrowserRouter>
                <div className="container">
                    <Switch>
                        <Route path={'/'} exact render={() => {
                            return (
                                <HomePage
                                    isLogoWhite={isLogoWhite}
                                    setIsLogoWhite={setIsLogoWhite}
                                    backgroundPageScrollOn={backgroundPageScrollOn}
                                    backgroundPageScrollOff={backgroundPageScrollOff}
                                    userDeviceScreenSize={userDeviceScreenSize}
                                />
                            )
                        }}/>
                        <Route path='/:carouselUrl/:productId' render={() => {
                            return (
                                <Suspense fallback={() => <img src={Preloader} alt="...Loading"/>}>
                                    <ProductPage
                                        backgroundPageScrollOn={backgroundPageScrollOn}
                                        backgroundPageScrollOff={backgroundPageScrollOff}
                                        userDeviceScreenSize={userDeviceScreenSize}
                                        setIsLogoWhite={setIsLogoWhite}
                                    />
                                </Suspense>
                            )
                        }}/>
                        {/*<Redirect to="/"/>*/}
                    </Switch>
                </div>
            </BrowserRouter>
        );
}

