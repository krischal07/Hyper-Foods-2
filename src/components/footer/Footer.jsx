import React, {useContext} from 'react';
import './Footer.css';
import footerlogo from "../../assets/hyperlogo.png";
import myContext from '../../context/data/myContext';

const Footer = () => {
  const context = useContext(myContext);
  const {mode} = context;
  return (
    <div className='footer-main'>
      <div className='footer-logo'>
        <img src={footerlogo} alt='Logo' className='footer-logo-img' />
      </div>
      <div className='footer-links'>
        <a href='#home' className='footer-link'>Home</a>
        <a href='#contact' className='footer-link'>Contact</a>
        <a href='#team' className='footer-link'>Team</a>
      </div>
      <div className='footer-social'>
        <a href='https://www.facebook.com/people/Hyper-Solutions/61569946473799/' target='_blank' rel='noopener noreferrer'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' alt='Facebook' className='footer-icon' />
        </a>
        <a href='https://www.instagram.com/nepal.hyper/' target='_blank' rel='noopener noreferrer'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' alt='Instagram' className='footer-icon' />
        </a>
        <a href='https://www.linkedin.com/company/hyper-nepal' target='_blank' rel='noopener noreferrer'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg' alt='LinkedIn' className='footer-icon' />
        </a>
      </div>
      <div className='footer-copyright'>
        <h4>{new Date().getFullYear()} | © All Rights Reserved</h4>
      </div>
      <div className='footer-contact'>
        <div className='contact-item'>
          <h5><i className="fas fa-envelope"></i>  <a href="mailto:info@hypersolutions.com">solutionhyperit@gmail.com</a></h5>
        </div>
        <div className='contact-item'>
          <h5><i className="fas fa-phone"></i>  +977 980 000 0000</h5>
        </div>
        <div className='contact-item'>
          <h5><i className="fas fa-globe"></i> <a href="https://www.hypernepal.com">www.hypernepal.com</a></h5>
        </div>
      </div>

    </div>
  );
};

export default Footer;

// import React from "react";

// const Footer = () => {
//   return <div>Footer</div>;
// };

// export default Footer;
