import React from 'react'
import Footer from '../../Kimassets/component/Footer'
import Header from '../../Kimassets/component/Header'
import post1Image from '../../Kimassets/images/post-1.jpg';
import post2Image from '../../Kimassets/images/post-2.jpg';
import post3Image from '../../Kimassets/images/post-3.jpg';
import story from '../../Kimassets/images/our-story.jpg';
import iconRightImage from '../../Kimassets/images/icon-right-2.svg';
import cta from '../../Kimassets/images/cta-image.jpg';
import iconcta from '../../Kimassets/images/icon-cta-phone.svg';
import useDynamicStyleSheetboostrap from '../../Kimassets/useDynamicStyleSheetboostrap';
import { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';

function Blog() {
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
                      Our Blog
                    </h1>
                    <nav className="wow fadeInUp" style={{ animationDelay: '0.25s', animationName: 'fadeInUp' }}>
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">Home /</a>
                        </li>
                        <p style={{ color: '#89EA5F' }}> {" "}Blog</p>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="latest-post-layout3">
            <div className="container">
              <div className="row align-items-center section-title-row">
                <div className="col-lg-6">
                  <div className="section-title">
                    <h3 className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                      Recent Articles
                    </h3>
                    <h2 className="text-anime">
                      Our Latest Blog
                    </h2>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="section-description wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4">
                  <div className="post-item3 wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                    <div className="post-featured-image">
                      <figure className="image-anime">
                        <a href="#"><img src={post1Image} alt="Post 1" /></a>
                      </figure>
                      <div className="blog-read-more">
                        <a href="#"><img src={iconRightImage} alt="Read more" /></a>
                      </div>
                    </div>
                    <div className="post-body">
                      <h2><a href="#">Exploring the Latest Innovations in Solar Technology</a></h2>
                      <p>Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="post-item3 wow fadeInUp" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}>
                    <div className="post-featured-image">
                      <figure className="image-anime">
                        <a href="#"><img src={post2Image} alt="Post 2" /></a>
                      </figure>
                      <div className="blog-read-more">
                        <a href="#"><img src={iconRightImage} alt="Read more" /></a>
                      </div>
                    </div>
                    <div className="post-body">
                      <h2><a href="#">Exploring the Latest Innovations in Solar Technology</a></h2>
                      <p>Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="post-item3 wow fadeInUp" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInUp' }}>
                    <div className="post-featured-image">
                      <figure className="image-anime">
                        <a href="#"><img src={post3Image} alt="Post 3" /></a>
                      </figure>
                      <div className="blog-read-more">
                        <a href="#"><img src={iconRightImage} alt="Read more" /></a>
                      </div>
                    </div>
                    <div className="post-body">
                      <h2><a href="#">Exploring the Latest Innovations in Solar Technology</a></h2>
                      <p>Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="our-story">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-12">
                  <div className="our-story-content">
                    <div className="section-title">
                      <h3 className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>Our Story</h3>

                      <h2 className="text-anime">
                        Save The Planet by using
                        Renewable Energy.
                      </h2>
                    </div>

                    <div className="our-story-body wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                      <ul>
                        <li>Satisfaction Value Provide for Money Solutions.</li>
                        <li>Protective Business Accounting Management.</li>
                        <li>Inventory Management Tracking System.</li>
                        <li>We Have been Maintaining the Plant with Trees.</li>
                      </ul>

                      <a href="#" className="btn-default">Contact Now</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-7">
                  <div className="our-story-image">
                    <figure className="image-anime reveal" style={{ transform: 'translate(0px, 0px)', opacity: 1, visibility: 'inherit' }}>
                      <img src={story} alt="" style={{ transform: 'translate(0px, 0px)' }} />
                    </figure>
                  </div>
                </div>

                <div className="col-lg-3 col-md-5">
                  <div className="story-counter-box">
                    <div className="story-counter-item">
                      <h3><span className="counter">1000</span>+</h3>
                      <p>Active Status Clients</p>
                    </div>

                    <div className="story-counter-item">
                      <h3><span className="counter">800</span>+</h3>
                      <p>Conservation of Energy</p>
                    </div>

                    <div className="story-counter-item">
                      <h3><span className="counter">700</span>+</h3>
                      <p>Successive prize 2 Year</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="infobar">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="cta-box">
                    <div class="row align-items-center">
                      <div class="col-lg-4">
                        <div class="cta-image">
                          <figure class="image-anime">
                            <img src={cta} alt="" />
                          </figure>
                        </div>
                      </div>
                      <div class="col-lg-8">
                        <div class="cta-content">
                          <div class="phone-icon">
                            <figure>
                              <img src={iconcta} alt="" />
                            </figure>
                          </div>
                          <h3 class="text-anime">Have Questions? <span>Call Us</span> 800-001-658</h3>
                          <p class="wow fadeInUp" data-wow-delay="0.25s">
                            Enjoy significant returns while supporting renewable energy. Whether you're new or experienced, our options ensure profits and sustainability. Join us to power a brighter, greener future!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Blog