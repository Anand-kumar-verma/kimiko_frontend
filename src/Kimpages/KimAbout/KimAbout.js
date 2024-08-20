import React from 'react'
import about1 from '../../Kimassets/images/about-1.jpg';
import about2 from '../../Kimassets/images/about-2.jpg';
import w1 from '../../Kimassets/images/why-renewable-1.jpg';
import w2 from '../../Kimassets/images/why-renewable-2.jpg';
import story from '../../Kimassets/images/our-story.jpg';
import Header from '../../Kimassets/component/Header'
import Footer from '../../Kimassets/component/Footer'
import star from '../../Kimassets/images/icon-star-yellow.svg';
import auther1 from '../../Kimassets/images/about-1.jpg';
import auther2 from '../../Kimassets/images/author-2.jpg';
import auther3 from '../../Kimassets/images/author-3.jpg';
import service1Image from '../../Kimassets/images/service-1.jpg';
import service2Image from '../../Kimassets/images/service-2.jpg';
import service3Image from '../../Kimassets/images/service-3.jpg';
import service4Image from '../../Kimassets/images/service-4.jpg';
import service5Image from '../../Kimassets/images/service-5.jpg';
import service6Image from '../../Kimassets/images/service-6.jpg';
import iconService1Image from '../../Kimassets/images/icon-service-1.svg';
import iconService2Image from '../../Kimassets/images/icon-service-2.svg';
import iconService3Image from '../../Kimassets/images/icon-service-3.svg';
import iconService4Image from '../../Kimassets/images/icon-service-4.svg';
import iconService5Image from '../../Kimassets/images/icon-service-5.svg';
import iconService6Image from '../../Kimassets/images/icon-service-6.svg';
import cta from '../../Kimassets/images/cta-image.jpg';
import iconcta from '../../Kimassets/images/icon-cta-phone.svg';
import useDynamicStyleSheetboostrap from '../../Kimassets/useDynamicStyleSheetboostrap';
import { useState, useEffect } from 'react';



import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, CircularProgress } from '@mui/material';


function About() {
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
                    <h1 class="text-anime">  About us</h1>

                    <nav className="wow fadeInUp" style={{ animationDelay: '0.25s', animationName: 'fadeInUp' }}>
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="/">Home /</a>
                        </li>
                        <p style={{ color: '#89EA5F' }}> {" "}  About Us</p>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-services">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="service-item wow fadeInUp" data-wow-delay="0.25s" style={{ visibility: 'visible', animationDelay: '0.25s', animationName: 'fadeInUp' }}>
                    <a href="#" className="service-box-link"></a>
                    <div className="service-image">
                      <figure>
                        <img src={service1Image} alt="Solar Maintenance" />
                      </figure>
                      <div className="service-icon">
                        <img src={iconService1Image} alt="Solar Maintenance Icon" />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Solar Maintenance</h3>
                      <p>Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="service-item wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                    <a href="#" className="service-box-link"></a>
                    <div className="service-image">
                      <figure>
                        <img src={service2Image} alt="Energy Saving Devices" />
                      </figure>
                      <div className="service-icon">
                        <img src={iconService2Image} alt="Energy Saving Devices Icon" />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Energy Saving Devices</h3>
                      <p>Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="service-item wow fadeInUp" data-wow-delay="0.75s" style={{ visibility: 'visible', animationDelay: '0.75s', animationName: 'fadeInUp' }}>
                    <a href="#" className="service-box-link"></a>
                    <div className="service-image">
                      <figure>
                        <img src={service3Image} alt="Solar Solutions" />
                      </figure>
                      <div className="service-icon">
                        <img src={iconService3Image} alt="Solar Solutions Icon" />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Solar Solutions</h3>
                      <p>Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="service-item wow fadeInUp" data-wow-delay="1.0s" style={{ visibility: 'visible', animationDelay: '1s', animationName: 'fadeInUp' }}>
                    <a href="#" className="service-box-link"></a>
                    <div className="service-image">
                      <figure>
                        <img src={service4Image} alt="Solar PV Systems" />
                      </figure>
                      <div className="service-icon">
                        <img src={iconService4Image} alt="Solar PV Systems Icon" />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Solar PV Systems</h3>
                      <p>Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="service-item wow fadeInUp" data-wow-delay="1.25s" style={{ visibility: 'visible', animationDelay: '1.25s', animationName: 'fadeInUp' }}>
                    <a href="#" className="service-box-link"></a>
                    <div className="service-image">
                      <figure>
                        <img src={service5Image} alt="Hybrid Energy" />
                      </figure>
                      <div className="service-icon">
                        <img src={iconService5Image} alt="Hybrid Energy Icon" />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Hybrid Energy</h3>
                      <p>Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="service-item wow fadeInUp" data-wow-delay="1.5s" style={{ visibility: 'visible', animationDelay: '1.5s', animationName: 'fadeInUp' }}>
                    <a href="#" className="service-box-link"></a>
                    <div className="service-image">
                      <figure>
                        <img src={service6Image} alt="Renewable Energy" />
                      </figure>
                      <div className="service-icon">
                        <img src={iconService6Image} alt="Renewable Energy Icon" />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Renewable Energy</h3>
                      <p>Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="about-us">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="about-image">
                    <div class="about-img-1">
                      <figure class="reveal image-anime">
                        <img src={about1} alt="" />
                      </figure>
                    </div>
                    <div class="about-img-2">
                      <figure class="reveal image-anime">
                        <img src={about2} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="section-title">
                    <h3 class="wow fadeInUp">About Us</h3>
                    <h2 class="text-anime">About Green Energy Solar</h2>
                  </div>
                  <div class="about-content wow fadeInUp" data-wow-delay="0.25s">
                    <p>
                      The Kimiko Energy sector plays a crucial role in shaping a sustainable future by harnessing solar power. Investing in this sector not only promotes environmental stewardship by reducing carbon footprints but also drives economic growth through job creation and technological advancements.
                    </p>
                    <p>Kimiko Energy ensures energy security, reduces dependence on fossil fuels, and offers profitable investment opportunities, making it vital for both ecological balance and financial prosperity</p>
                    <ul>
                      <li>Solar Inverter Setup</li>
                      <li>Battery Storage Solutions</li>
                      <li>Solar Material Financing</li>
                      <li>24 X 7 Call & Chat Support</li>
                    </ul>
                    <a href="#" class="btn-default">More About</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="why-renewable">
            <div className="container">
              <div className="row align-items-center section-title-row">
                <div className="col-lg-6">
                  <div className="section-title">
                    <h3 className="wow fadeInUp">Why Renewable Energy?</h3>
                    <h2 class="text-anime">Why do you have to use Solar
                      Panels?</h2>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="section-description wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="why-renewable-left">
                    <div className="why-renewable-img-1">
                      <figure className="image-anime reveal">
                        <img src={w1} alt="" />
                      </figure>
                      <p>Environmentally Friendly</p>
                    </div>
                    <div className="why-renewable-img-2">
                      <p>Renewable Resource</p>
                      <figure className="image-anime reveal">
                        <img src={w2} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="why-renewable-box">
                    <div
                      className="why-renewable-item wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <span className="stepno">1.</span>
                      <h3>Environmentally Friendly</h3>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                    </div>
                    <div
                      className="why-renewable-item wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <span className="stepno">2.</span>
                      <h3>Reserve Energy</h3>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                    </div>
                    <div
                      className="why-renewable-item wow fadeInUp"
                      data-wow-delay="0.8s"
                    >
                      <span className="stepno">3.</span>
                      <h3>Save The Earth</h3>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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



          <div className="testimonial-layout3">
            <div className="container">
              <div className="row align-items-center section-title-row">
                <div className="col-lg-6">
                  <div className="section-title">
                    <h3 className="wow fadeInUp">Our Testimonials</h3>
                    <h2 className="text-anime" style={{ fontSize: '55px !important' }}>
                      See What People Say's  About Us
                    </h2>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="section-description wow fadeInUp" data-wow-delay="0.2s">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="testimonial-layout3-slider">
                    <Swiper
                      spaceBetween={30}
                      pagination={{ clickable: true }}
                      breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div className="testimonial-slide3">
                          <div className="testimonial-content">
                            <div className="rating-image">
                              <img src={star} alt="" />
                            </div>
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.
                            </p>
                          </div>
                          <div className="testimonial-footer">
                            <div className="author-image">
                              <img src={auther2} alt="" />
                            </div>
                            <div className="author-info">
                              <h3>John Doe</h3>
                              <p>Head of Officer</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="testimonial-slide3">
                          <div className="testimonial-content">
                            <div className="rating-image">
                              <img src={star} alt="" />
                            </div>
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.
                            </p>
                          </div>
                          <div className="testimonial-footer">
                            <div className="author-image">
                              <img src={auther3} alt="" />
                            </div>
                            <div className="author-info">
                              <h3>John Doe</h3>
                              <p>Head of Officer</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="testimonial-slide3">
                          <div className="testimonial-content">
                            <div className="rating-image">
                              <img src={star} alt="" />
                            </div>
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.
                            </p>
                          </div>
                          <div className="testimonial-footer">
                            <div className="author-image">
                              <img src={auther1} alt="" />
                            </div>
                            <div className="author-info">
                              <h3>John Doe</h3>
                              <p>Head of Officer</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="testimonial-slide3">
                          <div className="testimonial-content">
                            <div className="rating-image">
                              <img src={star} alt="" />
                            </div>
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.
                            </p>
                          </div>
                          <div className="testimonial-footer">
                            <div className="author-image">
                              <img src={auther1} alt="" />
                            </div>
                            <div className="author-info">
                              <h3>John Doe</h3>
                              <p>Head of Officer</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="testimonial-slide3">
                          <div className="testimonial-content">
                            <div className="rating-image">
                              <img src={star} alt="" />
                            </div>
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.
                            </p>
                          </div>
                          <div className="testimonial-footer">
                            <div className="author-image">
                              <img src={auther1} alt="" />
                            </div>
                            <div className="author-info">
                              <h3>John Doe</h3>
                              <p>Head of Officer</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="testimonial-slide3">
                          <div className="testimonial-content">
                            <div className="rating-image">
                              <img src={star} alt="" />
                            </div>
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.
                            </p>
                          </div>
                          <div className="testimonial-footer">
                            <div className="author-image">
                              <img src={auther1} alt="" />
                            </div>
                            <div className="author-info">
                              <h3>John Doe</h3>
                              <p>Head of Officer</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                    </Swiper>
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

export default About