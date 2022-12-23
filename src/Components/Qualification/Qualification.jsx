import React, { useState } from 'react';
import './Qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  BSc in Computer Science & Engineering
                </h3>
                <span className="qualification__subtitle">
                  Daffodil International University
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2017 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">Online</span>

                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2022 - Present
                </div>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">ML</h3>
                <span className="qualification__subtitle">Daffodil International University</span>

                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2017 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}

            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UI / UX</h3>
                <span className="qualification__subtitle">Online</span>

                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2017 - 2021
                </div>
              </div>
            </div> */}
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Jr. IT Support Engineer
                </h3>
                <span className="qualification__subtitle">
                  Surma Garments Ltd
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2022 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Co-Founder</h3>
                <span className="qualification__subtitle">
                  Shopner Khoje Foundation
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2017 - Present
                </div>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">ML</h3>
                <span className="qualification__subtitle">Daffodil International University</span>

                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2017 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
