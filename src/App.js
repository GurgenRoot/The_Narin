import React, {useMemo, Suspense, useState} from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage";
import Preloader from './assets/preloader.svg';
import {ProductPage} from "./pages/productPage/productPage";
import {ImagesMagnifiers} from "./components/ImagesMagnifiers/ImagesMagnifiers";

export const App = () => {

    const [isLogoWhite, setIsLogoWhite] = useState(true)
    const scrollOff = () => {
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
    }

    const backgroundPageScrollOn = () => {
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
                                />
                            )
                        }}/>
                        <Route path='/about' render={() => <ImagesMagnifiers/>}/>
                        <Route path='/product-item/:carouselId/:carouselUrl/:sliderItemId' render={() => {
                            return (
                                <Suspense fallback={() => <img src={Preloader} alt="...Loading"/>}>
                                    <ProductPage
                                        backgroundPageScrollOn={backgroundPageScrollOn}
                                        backgroundPageScrollOff={backgroundPageScrollOff}
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

