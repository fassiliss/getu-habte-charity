import React from "react";
import Link from "next/link";
import abimg from "/images/about.jpg";
import shape from "/images/ab-shape-2.png";
import Image from "next/image";

const About = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <section className="wpo-about-section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="wpo-about-wrap">
              <div className="wpo-about-img">
                <Image src={abimg} alt="Children in Yabelo, Ethiopia" />
                <div className="wpo-ab-shape-1">
                  <div className="s-s1"></div>
                  <div className="s-s2"></div>
                </div>
                <div className="wpo-ab-shape-2">
                  <Image src={shape} alt="" />
                </div>
                <div className="wpo-total-raised">
                  <div className="wpo-total-raised-wrap">
                    <div className="wpo-total-raised-icon">
                      <i className="fi flaticon-wallet-filled-money-tool"></i>
                    </div>
                    <div className="wpo-total-raised-text">
                      <ul>
                        <li>
                          Kids Helped<span>100+</span>
                        </li>
                      </ul>
                      <div className="progress-section">
                        <div className="process">
                          <div className="progress">
                            <div className="progress-bar">
                              <div className="progress-value"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="wpo-about-text">
              <span>About Getu Habte</span>
              <h2>Feeding Hope, Building Futures in Ethiopia</h2>
              <p>
                Getu Habte (ጌቱ ሀብቴ) is a nonprofit organization dedicated to
                helping children in Yabelo, Ethiopia. We believe every child
                deserves access to nutritious food and quality education.
                Through our programs, we provide meals, school supplies, and
                support to give children the opportunity to thrive.
              </p>
              <ul>
                <li>🍽️ Providing daily meals to children in need</li>
                <li>📚 Back to school supplies and educational support</li>
                <li>❤️ Building a brighter future for the next generation</li>
              </ul>
              <Link
                onClick={ClickHandler}
                className="theme-btn-s2"
                href="/about"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
