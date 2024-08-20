import React from 'react'
import iemail from '../../Kimassets/images/icon-email.svg'
import iphone from '../../Kimassets/images/icon-phone.svg'
import ilocation from '../../Kimassets/images/icon-location.svg'
import logo from '../../Kimassets/images/logo-2.png'
import { NavLink } from 'react-router-dom'
import post1 from '../../Kimassets/images/post-1.jpg';
import post2 from '../../Kimassets/images/post-2.jpg';
import post3 from '../../Kimassets/images/post-3.jpg';
import useDynamicStyleSheetboostrap from '../../Kimassets/useDynamicStyleSheetboostrap';
import { useState, useEffect } from 'react';

function Footer() {
  useDynamicStyleSheetboostrap('/Kimassets/css/bootstrap.min.css', true);
  useDynamicStyleSheetboostrap('/Kimassets/css/all.min.css', true);
  useDynamicStyleSheetboostrap('/Kimassets/css/animate.css', true);
  useDynamicStyleSheetboostrap('/Kimassets/css/custom.css', true);
  useDynamicStyleSheetboostrap('/Kimassets/css/magnific-popup.css', true);
  useDynamicStyleSheetboostrap('/Kimassets/css/swiper-bundle.min.css', true);
  useDynamicStyleSheetboostrap('/Kimassets/css/slicknav.min.css', true);
  const [show, setShow] = useState(false);
  return (
    <footer class="main-footer">
      {/*  Footer Contact Start */}
      <div class="footer-contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              {/*  Footer Contact Box Start */}
              <div class="footer-contact-box wow fadeInUp" data-wow-delay="0.25s">
                <div class="contact-icon-box">
                  <img src={iemail} alt="" />
                </div>

                <div class="footer-contact-info">
                  <h3>Support & Email</h3>
                  <p>info@domainname.com</p>
                </div>
              </div>
              {/*  Footer Contact Box End */}
            </div>

            <div class="col-lg-4">
              {/*  Footer Contact Box Start */}
              <div class="footer-contact-box wow fadeInUp" data-wow-delay="0.5s">
                <div class="contact-icon-box">
                  <img src={iphone} alt="" />
                </div>

                <div class="footer-contact-info">
                  <h3>Customer Support</h3>
                  <p>+01 547 547 5478</p>
                </div>
              </div>
              {/*  Footer Contact Box End */}
            </div>

            <div class="col-lg-4">
              {/*  Footer Contact Box Start */}
              <div class="footer-contact-box wow fadeInUp" data-wow-delay="0.75s">
                <div class="contact-icon-box">
                  <img src={ilocation} alt="" />
                </div>

                <div class="footer-contact-info">
                  <h3>Our Location</h3>
                  <p>Street no, City, Country 123456</p>
                </div>
              </div>
              {/*  Footer Contact Box End */}
            </div>
          </div>
        </div>
      </div>
      {/*  Footer Contact End */}

      <div class="container">
        <div class="row">
          <div class="col-md-12">
            {/*  Mega Footer Start */}
            <div class="mega-footer">
              <div class="row">
                <div class="col-lg-3 col-md-4 mb-sm-5">
                  {/*  Footer About Start */}
                  <div class="footer-about">
                    <figure>
                      <img src={logo} alt="" style={{ width: '150px !important', height: '40px' }} />
                    </figure>
                    <p>
                      Welcome to Kimiko Energy! Invest in the future of solar energy with our innovative plans tailored to your financial goals.
                    </p>
                  </div>
                </div>

                <div class="col-lg-3 col-md-4 mb-sm-5">
                  {/*  Footer Links Start */}
                  <div class="footer-links">
                    <h2>Quick Links</h2>
                    <ul>
                      <li >
                        <NavLink to={'/'} className="nav-item">Home</NavLink>
                      </li>
                      <li >
                        <NavLink to={'/Kim/aboutUs'} className="nav-item">About us</NavLink>
                      </li>
                      <li >
                        <NavLink to={'/Kim/services'} className="nav-item">services</NavLink>
                      </li>
                      <li >
                        <NavLink to={'/Kim/Project'} className="nav-item">Our Project</NavLink>
                      </li>
                      <li >
                        <NavLink to={'/Kim/blog'} className="nav-item">Blog</NavLink>
                      </li>
                      <li >
                        <NavLink to={'/Kim/Contact'} className="nav-item">Contact</NavLink>
                      </li>
                      <li class="nav-item highlighted-menu">
                        <NavLink to={'/auth'} className="nav-item">Login / Register</NavLink>
                      </li>
                    </ul>
                  </div>
                  {/*  Footer Links End */}
                </div>

                <div class="col-lg-3 col-md-4 mb-sm-5">
                  {/*  Footer Links Start */}
                  <div class="footer-links">
                    <h2>Contact Us</h2>
                    <ul class="list-unstyled">
                      <li style={{ color: 'white' }}><strong style={{ color: 'white' }}>Address:</strong> 123, Lorem Ipsum Street, City, Country, 123456</li>
                      <li style={{ color: 'white' }}><strong style={{ color: 'white' }}>Phone:</strong> (+0) 123 456 789</li>
                      <li style={{ color: 'white' }}><strong style={{ color: 'white' }}>Email:</strong> Info.kimikoenergy.biz</li>
                    </ul>
                  </div>
                  {/*  Footer Links End */}
                </div>

                <div class="col-lg-3 col-md-12 mb-sm-5">
                  {/*  Footer Links Start */}
                  <div class="footer-links">
                    <h2>Our Gallery</h2>
                    <div className="social-media-grid">
                      <div className="gallery-section">
                        <div className="container" >
                          <div style={{ width: '100%', }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', }}>
                              <img src={post1} alt="" style={{ width: '48%', marginBottom: '10px', borderRadius: '5px' }} />
                              <img src={post2} alt="" style={{ width: '48%', marginBottom: '10px', borderRadius: '5px' }} />
                              <img src={post3} alt="" style={{ width: '48%', marginBottom: '10px', borderRadius: '5px' }} />
                              <img src={post1} alt="" style={{ width: '48%', marginBottom: '10px', borderRadius: '5px' }} />
                              <img src={post2} alt="" style={{ width: '48%', marginBottom: '10px', borderRadius: '5px' }} />
                              <img src={post3} alt="" style={{ width: '48%', marginBottom: '10px', borderRadius: '5px' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-copyright">
              <div class="row">
                <div class="col-md-12">
                  <div class="footer-copyright-text">
                    <p>Copyright © 2024 Kimiko. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer