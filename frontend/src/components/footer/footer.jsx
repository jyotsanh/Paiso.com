import React from 'react';
import './footer.css';
import logo from '../../assets/logo2.png'

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="footer-subscribe">
        <h3>Unlock Exclusive Financial Benefits</h3>
        <div className="subscribe-container">
          <input type="email" placeholder="Enter Your Email" />
          <button>Subscribe</button>
        </div>
      </div> */}

      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Paiso Logo" />
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Maitidevi, Kathmandu, Nepal</p>
          <p>+977-1223459046, +977-3456789090</p>
          <p>info.paisa@gmail.com</p>
        </div>

        <div className="footer-support">
          <h4>Support</h4>
          <p>Privacy Policy</p>
          <p>Terms and conditions</p>
        </div>
      </div>

      <div className="footer-copyright">
        <p>Copyright © 2024 Paiso.com | Powered by Paiso.com</p>
      </div>
    </footer>
  );
};

export default Footer;
