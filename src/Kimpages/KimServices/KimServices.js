import React from 'react'
import Header from '../../Kimassets/component/Header'
import Footer from '../../Kimassets/component/Footer'
import why1 from '../../Kimassets/images/icon-why3-1.svg';
import why2 from '../../Kimassets/images/icon-why3-2.svg';
import why3 from '../../Kimassets/images/icon-why3-3.svg';
import why4 from '../../Kimassets/images/icon-why3-4.svg';
import w1 from '../../Kimassets/images/why-renewable-1.jpg';
import w2 from '../../Kimassets/images/why-renewable-2.jpg';
import cta from '../../Kimassets/images/cta-image.jpg';
import iconcta from '../../Kimassets/images/icon-cta-phone.svg';
import useDynamicStyleSheetboostrap from '../../Kimassets/useDynamicStyleSheetboostrap';
import { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';

function Services() {
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
                      Services
                    </h1>
                    <nav className="wow fadeInUp" style={{ animationDelay: '0.25s', animationName: 'fadeInUp' }}>
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">Home /</a>
                        </li>
                        <p style={{ color: '#89EA5F' }}> {" "} Services</p>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="why-choose-us-layout3">
            <div className="container">
              <div className="row align-items-center section-title-row">
                <div className="col-lg-6">
                  {/* Section Title Start */}
                  <div className="section-title">
                    <h3
                      className="wow fadeInUp"
                      style={{ visibility: 'visible', animationName: 'fadeInUp' }}
                    >
                      Why Choose Us
                    </h3>
                    <h2 className="text-anime">
                      Produce Your Own Clean Save
                      our the Environment
                    </h2>
                  </div>
                  {/* Section Title End */}
                </div>

                <div className="col-lg-6">
                  {/* Section Description Start */}
                  <div
                    className="section-description wow fadeInUp"
                    data-wow-delay="0.2s"
                    style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}
                  >
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.
                    </p>
                  </div>
                  {/* Section Description End */}
                </div>
              </div>

              <div className="row">
                <div className="col-lg-3 col-md-6">
                  {/* Why Choose Item Start */}
                  <div
                    className="why-choose-item3 wow fadeInUp"
                    data-wow-delay="0.4s"
                    style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}
                  >
                    <div className="icon-box">
                      <img src={why1} alt="" />
                    </div>
                    <h3>Peak Shaving</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                  </div>
                  {/* Why Choose Item End */}
                </div>

                <div className="col-lg-3 col-md-6">
                  {/* Why Choose Item Start */}
                  <div
                    className="why-choose-item3 wow fadeInUp"
                    data-wow-delay="0.6s"
                    style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}
                  >
                    <div className="icon-box">
                      <img src={why2} alt="" />
                    </div>
                    <h3>Demand Response</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                  </div>
                  {/* Why Choose Item End */}
                </div>

                <div className="col-lg-3 col-md-6">
                  {/* Why Choose Item Start */}
                  <div
                    className="why-choose-item3 wow fadeInUp"
                    data-wow-delay="0.8s"
                    style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInUp' }}
                  >
                    <div className="icon-box">
                      <img src={why3} alt="" />
                    </div>
                    <h3>Load Shifting</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                  </div>
                  {/* Why Choose Item End */}
                </div>

                <div className="col-lg-3 col-md-6">
                  {/* Why Choose Item Start */}
                  <div
                    className="why-choose-item3 wow fadeInUp"
                    data-wow-delay="1s"
                    style={{ visibility: 'visible', animationDelay: '1s', animationName: 'fadeInUp' }}
                  >
                    <div className="icon-box">
                      <img src={why4} alt="" />
                    </div>
                    <h3>Renewable</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                  </div>
                  {/* Why Choose Item End */}
                </div>
              </div>
            </div>
          </div>
          <div className="our-pricing-layout3">
            <div className="container">
              <div className="row align-items-center section-title-row">
                <div className="col-lg-6">
                  {/* Section Title Start */}
                  <div className="section-title">
                    <h3 className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                      Our Pricing
                    </h3>
                    <h2 className="text-anime">
                      Choose Your Best Offer
                    </h2>
                  </div>
                  {/* Section Title End */}
                </div>

                <div className="col-lg-6">
                  {/* Section Description Start */}
                  <div className="section-description wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                  {/* Section Description End */}
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4">
                  {/* Pricing Item Start */}
                  <div className="pricing-item-layout3 wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                    <div className="pricing-header">
                      <div className="package-name">
                        <h3>Basic</h3>
                      </div>
                      <div className="package-price">
                        <p>$29.99/ <span>1kw</span></p>
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul>
                        <li>Fusce nec lectus a arcu blandit maximus.</li>
                        <li>Nam ac nisl sed nisi congue pellentesque.</li>
                        <li>Donec fringilla ex non nisi commodo.</li>
                        <li>Morbi eu enim at sapien elementum.</li>
                        <li>Aenean et nibh vel diam pellentesque.</li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a href="#" className="btn-default">Contact Now</a>
                    </div>
                  </div>
                  {/* Pricing Item End */}
                </div>

                <div className="col-lg-4">
                  {/* Pricing Item Start */}
                  <div className="pricing-item-layout3 wow fadeInUp" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}>
                    <div className="pricing-header">
                      <div className="package-name">
                        <h3>Standard</h3>
                      </div>
                      <div className="package-price">
                        <p>$39.99/ <span>1kw</span></p>
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul>
                        <li>Fusce nec lectus a arcu blandit maximus.</li>
                        <li>Nam ac nisl sed nisi congue pellentesque.</li>
                        <li>Donec fringilla ex non nisi commodo.</li>
                        <li>Morbi eu enim at sapien elementum.</li>
                        <li>Aenean et nibh vel diam pellentesque.</li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a href="#" className="btn-default">Contact Now</a>
                    </div>
                  </div>
                  {/* Pricing Item End */}
                </div>

                <div className="col-lg-4">
                  {/* Pricing Item Start */}
                  <div className="pricing-item-layout3 wow fadeInUp" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInUp' }}>
                    <div className="pricing-header">
                      <div className="package-name">
                        <h3>Premium</h3>
                      </div>
                      <div className="package-price">
                        <p>$59.99/ <span>1kw</span></p>
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul>
                        <li>Fusce nec lectus a arcu blandit maximus.</li>
                        <li>Nam ac nisl sed nisi congue pellentesque.</li>
                        <li>Donec fringilla ex non nisi commodo.</li>
                        <li>Morbi eu enim at sapien elementum.</li>
                        <li>Aenean et nibh vel diam pellentesque.</li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a href="#" className="btn-default">Contact Now</a>
                    </div>
                  </div>
                  {/* Pricing Item End */}
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
                    <h2 className="text-anime">
                      <div className="line" style={{ display: 'block', textAlign: 'left', width: '100%' }}>
                        <div className="word" style={{ display: 'inline-block' }}>
                          <div className="char" style={{ display: 'inline-block' }}>W</div>
                          <div className="char" style={{ display: 'inline-block' }}>h</div>
                          <div className="char" style={{ display: 'inline-block' }}>y</div>
                        </div>{' '}
                        <div className="word" style={{ display: 'inline-block' }}>
                          <div className="char" style={{ display: 'inline-block' }}>d</div>
                          <div className="char" style={{ display: 'inline-block' }}>o</div>
                        </div>{' '}
                        <div className="word" style={{ display: 'inline-block' }}>
                          <div className="char" style={{ display: 'inline-block' }}>y</div>
                          <div className="char" style={{ display: 'inline-block' }}>o</div>
                          <div className="char" style={{ display: 'inline-block' }}>u</div>
                        </div>{' '}
                        <div className="word" style={{ display: 'inline-block' }}>
                          <div className="char" style={{ display: 'inline-block' }}>h</div>
                          <div className="char" style={{ display: 'inline-block' }}>a</div>
                          <div className="char" style={{ display: 'inline-block' }}>v</div>
                          <div className="char" style={{ display: 'inline-block' }}>e</div>
                        </div>{' '}
                        <div className="word" style={{ display: 'inline-block' }}>
                          <div className="char" style={{ display: 'inline-block' }}>t</div>
                          <div className="char" style={{ display: 'inline-block' }}>o</div>
                        </div>{' '}
                        <div className="word" style={{ display: 'inline-block' }}>
                          <div className="char" style={{ display: 'inline-block' }}>u</div>
                          <div className="char" style={{ display: 'inline-block' }}>s</div>
                          <div className="char" style={{ display: 'inline-block' }}>e</div>
                        </div>{' '}
                        <div className="word" style={{ display: 'inline-block' }}>
                          <div className="char" style={{ display: 'inline-block' }}>S</div>
                          <div className="char" style={{ display: 'inline-block' }}>o</div>
                          <div className="char" style={{ display: 'inline-block' }}>l</div>
                          <div className="char" style={{ display: 'inline-block' }}>a</div>
                          <div className="char" style={{ display: 'inline-block' }}>r</div>
                        </div>
                      </div>
                      <div className="line" style={{ display: 'block', textAlign: 'left', width: '100%' }}>
                        <div className="word" style={{ display: 'inline-block' }}>
                          <div className="char" style={{ display: 'inline-block' }}>P</div>
                          <div className="char" style={{ display: 'inline-block' }}>a</div>
                          <div className="char" style={{ display: 'inline-block' }}>n</div>
                          <div className="char" style={{ display: 'inline-block' }}>e</div>
                          <div className="char" style={{ display: 'inline-block' }}>l</div>
                          <div className="char" style={{ display: 'inline-block' }}>s</div>
                          <div className="char" style={{ display: 'inline-block' }}>?</div>
                        </div>
                      </div>
                    </h2>
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

export default Services