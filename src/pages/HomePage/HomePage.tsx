import React, { useEffect, useState, FC, Dispatch, SetStateAction } from 'react';

import Header from '../../components/Header';
import About from '../../components/About';
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';
import ContactPopup from '../../components/ContactPopup';
import MainSlider from '../../components/MainSlider';
import PortaledComponent from '../../components/PortaledComponent';
import ProductSlider from '../../components/ProductsSlider';

import './homePage.scss';

import collections from '../../data/collections';
import { CollectionsType } from '../../types/types';

interface THomePageProps {
  isLogoWhite: boolean;
  setIsLogoWhite: Dispatch<SetStateAction<boolean>>;
  backgroundPageScrollOn: () => void;
  backgroundPageScrollOff: () => void;
  userDeviceScreenSize: number;
}

const HomePage: FC<THomePageProps> = (
  { isLogoWhite,
    setIsLogoWhite,
    backgroundPageScrollOn,
    backgroundPageScrollOff,
    userDeviceScreenSize }) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });

    window.onscroll = () => {
      // it's fix scrollOff bag after priceRequest goBack function
    };
  }, []);

  const [contactToggle, setContactToggle] = useState(false);

  return (
    <div className="home-page">
      <Header isLogoWhite={isLogoWhite} setIsLogoWhite={setIsLogoWhite} />
      <MainSlider userDeviceScreenSize={userDeviceScreenSize} />
      <About />
      {collections.map((collection: CollectionsType) => (
        <ProductSlider
          key={collection.id}
          collection={collection}
          userDeviceScreenSize={userDeviceScreenSize}
        />
      ))}

      <ContactUs
        setContactToggle={setContactToggle}
        backgroundPageScrollOff={backgroundPageScrollOff}
      />
      <Footer />
      {contactToggle && (
        <PortaledComponent
          modal={(
            <ContactPopup
              setContactToggle={setContactToggle}
              backgroundPageScrollOn={backgroundPageScrollOn}
            />
          )}
        />
      )}
    </div>
  );
};

export default HomePage;
