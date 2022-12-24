import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Imam Ahasan</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#project" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/imamahasane"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-github-alt"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/imamahasane/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>

          <a
            href="https://www.facebook.com/imamahasane"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-facebook-f"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Imam Ahasan. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
