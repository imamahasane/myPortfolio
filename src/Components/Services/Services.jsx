import React from 'react';

import './Services.css'

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What am I Offering</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product <br /> Designer
            </h3>
          </div>

          <span className="services__button">
            View More <i className="uil uil-arrow-right"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Service with more than 1 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    I Develop The User Interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">Web Page Development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    I Create UX Element Interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    I Position Your Company Brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    Design and Mockups of Products for Companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              UI/UX <br /> Designer
            </h3>
          </div>

          <span className="services__button">
            View More <i className="uil uil-arrow-right"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">
                Service with more than 1 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    I Develop The User Interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">Web Page Development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    I Create UX Element Interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    I Position Your Company Brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    Design and Mockups of Products for Companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Visual <br /> Designer
            </h3>
          </div>

          <span className="services__button">
            View More <i className="uil uil-arrow-right"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Service with more than 1 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    I Develop The User Interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">Web Page Development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    I Create UX Element Interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    I Position Your Company Brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    Design and Mockups of Products for Companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
