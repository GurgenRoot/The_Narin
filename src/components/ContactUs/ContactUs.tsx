import React, { FC } from 'react';
import './contactUs.scss';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';

interface TContactUsProps {
  setContactToggle: (contactToggle: boolean) => void,
  backgroundPageScrollOff: () => void
}

const ContactUs: FC<TContactUsProps> = ({ setContactToggle, backgroundPageScrollOff }) => (
  <section className="contact-us" id="contact-us">
    <h1 className="title">CONTACT US</h1>
    <div className="description contact-us__description">We are always happy hearing from you. Feel free to contact us at info@narinbags.com </div>
    <div className="contact-us__social">
      <div className="description">Or write us directly on Facebook or Instagram</div>
      <img src={Facebook} alt="facebook" className="contact-us__social--facebook" />
      <img src={Instagram} alt="instagram" />
    </div>
    <button
      className="btn contact-us__btn"
      onClick={() => {
        setContactToggle(true);
        backgroundPageScrollOff();
      }}
    >Contact us</button>
  </section>
);

export default ContactUs;
