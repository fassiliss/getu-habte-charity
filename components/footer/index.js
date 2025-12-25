import React from "react";
import Link from "next/link";
import Logo from "/images/logo2.png";
import Image from "next/image";

const Footer = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <footer className="wpo-site-footer">
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <Image src={Logo} alt="Getu Habte's Charity" />
                </div>
                <p>
                  Feeding hope and building futures for children in Webe
                  Wachile, Ethiopia.
                </p>
                <ul>
                  <li>
                    <Link href="https://facebook.com" target="_blank">
                      <i className="ti-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://instagram.com" target="_blank">
                      <i className="ti-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Quick Links</h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/cause">
                      Programs
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/event">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>Contact Us</h3>
                </div>
                <div className="contact-ft">
                  <p>Have questions? We'd love to hear from you.</p>
                  <ul>
                    <li>
                      <i className="fi flaticon-mail"></i>habteg2@yahoo.com
                    </li>
                    <li>
                      <i className="fi flaticon-phone-call"></i>615-351-7055
                    </li>
                    <li>
                      <i className="fi flaticon-location"></i>Webe Wachile,
                      Ethiopia
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Our Programs</h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} href="/cause">
                      📚 School Supplies
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/cause">
                      🛏️ Girls Hostel
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/cause">
                      🏫 Build Classrooms
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/donate">
                      💝 Make a Donation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">
                {" "}
                &copy; 2025 Getu Habte's Charity. All Rights Reserved. Made with
                ❤️ for children in Ethiopia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
