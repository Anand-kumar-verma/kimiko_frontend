import React from 'react'
import Header from '../../Kimassets/component/Header'
import Footer from '../../Kimassets/component/Footer'
import locationImg from '../../Kimassets/images/location-img.jpg';
import emailImg from '../../Kimassets/images/email-img.jpg';
import phoneImg from '../../Kimassets/images/phone-img.jpg';
import followImg from '../../Kimassets/images/follow-img.jpg';
import iconLocation from '../../Kimassets/images/icon-location.svg';
import iconMail from '../../Kimassets/images/icon-mail.svg';
import iconPhone from '../../Kimassets/images/icon-phone.svg';
import iconFollow from '../../Kimassets/images/icon-follow.svg';
import useDynamicStyleSheetboostrap from '../../Kimassets/useDynamicStyleSheetboostrap';
import { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';

function ContactUs() {
  useDynamicStyleSheetboostrap('/Kimassets/css/bootstrap.min.css', true);
  useDynamicStyleSheetboostrap('/Kimassets/css/all.min.css', true);
  useDynamicStyleSheetboostrap('/Kimassets/css/animate.css', true);
  useDynamicStyleSheetboostrap('/Kimassets/css/custom.css', true);
  useDynamicStyleSheetboostrap('/Kimassets/css/magnific-popup.css', true);
  useDynamicStyleSheetboostrap('/Kimassets/css/swiper-bundle.min.css', true);
  useDynamicStyleSheetboostrap('/Kimassets/css/slicknav.min.css', true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {show ? (
        <>
          <Header />
          <div
            className="page-header parallaxie"
            style={{
              backgroundImage: 'url(https://demo.awaikenthemes.com/html-preview/solor/html/images/header-banner.jpg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center -1.62px',
              padding: '222px 0px 70px',
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-header-box">
                    <h1 className="text-anime">
                      Contact us
                    </h1>
                    <nav className="wow fadeInUp" style={{ animationDelay: '0.25s', animationName: 'fadeInUp' }}>
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">Home /</a>
                        </li>
                        <p style={{ color: '#89EA5F' }}> {" "} Contact us</p>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Section Start */}
          <div className="contact-information">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  {/* Section Title Start */}
                  <div className="section-title">
                    <h3 className="wow fadeInUp">Contact Details</h3>
                    <h2 className="text-anime">Happy to Answer All Your Questions</h2>
                  </div>
                  {/* Section Title End */}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  {/* Contact Info Item Start */}
                  <div className="contact-info-item wow fadeInUp" data-wow-delay="0.25s">
                    <div className="contact-image">
                      <figure className="image-anime">
                        <img src={locationImg} alt="Location" />
                      </figure>
                    </div>

                    <div className="contact-info-content">
                      <h3>Our Addresses:</h3>
                      <p>123, Lorem Ipsum, Street no, City, Country 123456</p>
                    </div>

                    <div className="contact-icon">
                      <img src={iconLocation} alt="Location Icon" />
                    </div>
                  </div>
                  {/* Contact Info Item End */}
                </div>

                <div className="col-lg-3 col-md-6">
                  {/* Contact Info Item Start */}
                  <div className="contact-info-item wow fadeInUp" data-wow-delay="0.5s">
                    <div className="contact-image">
                      <figure className="image-anime">
                        <img src={emailImg} alt="Email" />
                      </figure>
                    </div>

                    <div className="contact-info-content">
                      <h3>Emails:</h3>
                      <p>info@domainname.com<br /> sales@domainname.com</p>
                    </div>

                    <div className="contact-icon">
                      <img src={iconMail} alt="Mail Icon" />
                    </div>
                  </div>
                  {/* Contact Info Item End */}
                </div>

                <div className="col-lg-3 col-md-6">
                  {/* Contact Info Item Start */}
                  <div className="contact-info-item wow fadeInUp" data-wow-delay="0.75s">
                    <div className="contact-image">
                      <figure className="image-anime">
                        <img src={phoneImg} alt="Phone" />
                      </figure>
                    </div>

                    <div className="contact-info-content">
                      <h3>Phones:</h3>
                      <p>(+0) 123 456 789<br /> (+1) 456 123 789</p>
                    </div>

                    <div className="contact-icon">
                      <img src={iconPhone} alt="Phone Icon" />
                    </div>
                  </div>
                  {/* Contact Info Item End */}
                </div>

                <div className="col-lg-3 col-md-6">
                  {/* Contact Info Item Start */}
                  <div className="contact-info-item wow fadeInUp" data-wow-delay="1.0s">
                    <div className="contact-image">
                      <figure className="image-anime">
                        <img src={followImg} alt="Follow Us" />
                      </figure>
                    </div>

                    <div className="contact-info-content">
                      <h3>Follow Us:</h3>
                      {/* <ul>
                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                      </ul> */}
                    </div>

                    <div className="contact-icon">
                      <img src={iconFollow} alt="Follow Icon" />
                    </div>
                  </div>
                  {/* Contact Info Item End */}
                </div>
              </div>
            </div>
          </div>
          {/* Contact Information Section End */}

          {/* Google Map & Contact Form Section Start */}
          <div className="google-map-form">
            <div className="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56481.31329163797!2d-82.30112043759952!3d27.776444959332093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sUnited%20States%20solar!5e0!3m2!1sen!2sin!4v1706008331370!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              />
            </div>

            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-6">
                  <div className="contact-form-box">
                    {/* Section Title Start */}
                    <div className="section-title">
                      <h3 className="wow fadeInUp">Contact Now</h3>
                      <h2 className="text-anime">Get In Touch With Us</h2>
                    </div>
                    {/* Section Title End */}

                    {/* Contact Form start */}
                    <div className="contact-form wow fadeInUp" data-wow-delay="0.75s">
                      <form id="contactForm" action="#" method="POST" data-toggle="validator">
                        <div className="row">
                          <div className="form-group col-md-6 mb-4">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              id="name"
                              placeholder="Name"
                              required
                            />
                            <div className="help-block with-errors"></div>
                          </div>

                          <div className="form-group col-md-6 mb-4">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              id="email"
                              placeholder="Email"
                              required
                            />
                            <div className="help-block with-errors"></div>
                          </div>

                          <div className="form-group col-md-6 mb-4">
                            <input
                              type="text"
                              name="phone"
                              className="form-control"
                              id="phone"
                              placeholder="Phone"
                              required
                            />
                            <div className="help-block with-errors"></div>
                          </div>

                          <div className="form-group col-md-6 mb-4">
                            <input
                              type="text"
                              name="subject"
                              className="form-control"
                              id="subject"
                              placeholder="Subject"
                              required
                            />
                            <div className="help-block with-errors"></div>
                          </div>

                          <div className="form-group col-md-12 mb-4">
                            <textarea
                              name="msg"
                              className="form-control"
                              id="msg"
                              rows="4"
                              placeholder="Write a Message"
                              required
                            ></textarea>
                            <div className="help-block with-errors"></div>
                          </div>

                          <div className="col-md-12 text-center">
                            <button type="submit" className="btn-default">Submit Now</button>
                            <div id="msgSubmit" className="h3 text-left hidden"></div>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* Contact Form end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Google Map & Contact Form Section End */}

          {/* Footer Ticker Start */}
          <div className="footer-ticker">
            <div className="scrolling-ticker">
              <div className="scrolling-ticker-box">
                <div className="scrolling-content">
                  <span>Generate Your Own Power</span>
                  <span>Reap the Returns</span>
                  <span>Heal the World</span>
                  <span>Efficiency & Power</span>
                  <span>24*7 Support</span>
                </div>

                <div className="scrolling-content">
                  <span>Generate Your Own Power</span>
                  <span>Reap the Returns</span>
                  <span>Heal the World</span>
                  <span>Efficiency & Power</span>
                  <span>24*7 Support</span>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <Box sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <CircularProgress sx={{ color: '#89EA5F' }} />
          </Box>
        </>

      )}
    </>
  )
}

export default ContactUs