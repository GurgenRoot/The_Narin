import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

import Preloader from './assets/preloader.svg';

const App = () => {
  const [userDeviceScreenSize, setUserDeviceScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const onResizeHandler = () => {
      setUserDeviceScreenSize(window.innerWidth);
    };
    window.addEventListener('resize', onResizeHandler);

    return () => window.removeEventListener('resize', onResizeHandler);
  }, []);

  const [isLogoWhite, setIsLogoWhite] = useState(true);
  const scrollOff = () => {
    const html = document.querySelector('html') as HTMLHtmlElement | null;
    // @ts-ignore
    html.style.scrollBehavior = 'unset';
    const yPosition = window.pageYOffset;
    window.onscroll = () => {
      window.scrollTo(0, yPosition);
    };
  };

  const scrollOn = () => {
    window.onscroll = () => {

    };
  };

  const backgroundPageScrollOff = () => {
    window.addEventListener('click', scrollOff);
  };

  const backgroundPageScrollOn = () => {
    const html: HTMLHtmlElement | null = document.querySelector('html');
    // @ts-ignore
    html.style.scrollBehavior = 'smooth';
    window.removeEventListener('click', scrollOff);
    window.addEventListener('click', scrollOn);
    setTimeout(() => {
      window.removeEventListener('click', scrollOn);
    }, 1000);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                isLogoWhite={isLogoWhite}
                setIsLogoWhite={setIsLogoWhite}
                backgroundPageScrollOn={backgroundPageScrollOn}
                backgroundPageScrollOff={backgroundPageScrollOff}
                userDeviceScreenSize={userDeviceScreenSize}
              />
            )}
          />
          <Route
            path="/:collectionUrl/:productId"
            render={() => (
              <Suspense fallback={() => <img src={Preloader} alt="...Loading" />}>
                <ProductPage
                  backgroundPageScrollOn={backgroundPageScrollOn}
                  backgroundPageScrollOff={backgroundPageScrollOff}
                  userDeviceScreenSize={userDeviceScreenSize}
                  setIsLogoWhite={setIsLogoWhite}
                />
              </Suspense>
            )}
          />
          {/* <Redirect to="/"/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
