import React from "react";
import Link from "next/link";
import abimg from "/images/ab.png";
import Image from "next/image";

const AboutS2 = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <section className="wpo-about-section-s2 section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="wpo-about-wrap">
              <div className="wpo-about-img">
                <Image src={abimg} alt="Students in Webe Wachile, Ethiopia" />
                <div className="wpo-total-raised">
                  <div className="wpo-total-raised-wrap">
                    <div className="wpo-total-raised-icon">
                      <i className="fi flaticon-wallet-filled-money-tool"></i>
                    </div>
                    <div className="wpo-total-raised-text">
                      <ul>
                        <li>
                          Students Helped<span>100+</span>
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
                <div className="round-ball-1"></div>
                <div className="round-ball-2"></div>
                <div className="round-ball-3"></div>
                <div className="round-ball-4"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="wpo-about-text">
              <span>About Getu Habte (ጌቱ ሀብቴ)</span>
              <h2>Every Child Deserves the Chance to Learn, Grow, and Dream</h2>
              <p>
                Our organization was founded on a simple belief: every child
                deserves the chance to learn, grow, and dream—no matter where
                they are born.
              </p>
              <p>
                The story began with our founder, who grew up in Ethiopia and
                has always carried a heart for servant leadership. Before coming
                to the United States, he worked as a school teacher, pouring
                into students with the hope of giving them a brighter future.
              </p>
              <p>
                In 2022, during a visit back home, he saw firsthand the
                challenges facing students in Webe Wachile district. Classrooms
                were overcrowded, resources were scarce, and children were doing
                their best to learn in difficult conditions. When community
                members asked if he could help, he knew this was the beginning
                of something bigger.
              </p>
              <ul>
                <li>
                  📚 Providing school supplies and uniforms to Pre-K and KG
                  students
                </li>
                <li>
                  🛏️ In 2025, furnished hostel near Moyale with beds, mattresses
                  & sheets for 42 girls
                </li>
                <li>
                  🏫 Supporting 100+ children annually with a stable place to
                  study
                </li>
                <li>
                  ❤️ Building classrooms, empowering futures, changing lives
                </li>
              </ul>
              <Link
                onClick={ClickHandler}
                className="theme-btn-s2"
                href="/donate"
              >
                Support Our Mission
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutS2;
