import React from 'react';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="description">© narin {currentYear}. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
