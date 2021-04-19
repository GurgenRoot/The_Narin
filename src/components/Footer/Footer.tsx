import React from 'react';
import './footer.scss';

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="description">© narin {currentYear}. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
