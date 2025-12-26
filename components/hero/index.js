import React from "react";
import Link from "next/link";
import Clients from "./client";
import Image from "next/image";

import hero1 from "/images/slider/right-img2.png";
import hero2 from "/images/slider/s.png";
import hero3 from "/images/slider/right-img.png";

const Hero = () => {
  return (
    <section className="wpo-hero-section-1">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col col-xs-6 col-lg-6">
            <div className="wpo-hero-section-text">
              <div className="wpo-hero-title-top">
                <span>Help Children in Ethiopia</span>
              </div>
              <div className="wpo-hero-title">
                <h2>Feed the Kids, Build Their Future</h2>
              </div>
              <div className="wpo-hero-subtitle">
                <p>
                  <p>
                    Every child deserves the chance to learn, grow, and dream.
                    We provide school supplies, uniforms, and support to
                    students in Webe Wachile district, Ethiopia.
                  </p>
                </p>
              </div>
              <div className="btns">
                <Link href="/donate" className="btn theme-btn-s2">
                  Donate Now
                </Link>
                <Link
                  href="/about"
                  className="btn theme-btn"
                  style={{ marginLeft: "15px" }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-vec">
              <div className="right-items-wrap">
                <div className="right-item">
                  <div className="r-img">
                    <Image src={hero1} alt="Children in Ethiopia" />
                  </div>
                  <div className="wpo-happy-client">
                    <Clients />
                  </div>
                </div>
                <div className="right-item">
                  <div className="wpo-total-project">
                    <div className="wpo-total-project-wrap">
                      <div className="wpo-total-project-icon">
                        <i className="fi flaticon-salary"></i>
                      </div>
                      <div className="wpo-total-project-text">
                        <h3>100+</h3>
                        <p>Kids Helped</p>
                      </div>
                    </div>
                    <div className="project-shape">
                      <Image src={hero2} alt="" />
                    </div>
                  </div>
                  <div className="r-img">
                    <Image src={hero3} alt="Education support" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
