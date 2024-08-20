

import { Box, CircularProgress } from '@mui/material';
import Footer from '../../Kimassets/component/Footer';
import Header from '../../Kimassets/component/Header';
import about1 from '../../Kimassets/images/about-1.jpg';
import about2 from '../../Kimassets/images/about-2.jpg';
import cta from '../../Kimassets/images/cta-image.jpg';
import iconaward from '../../Kimassets/images/icon-award.svg';
import iconcta from '../../Kimassets/images/icon-cta-phone.svg';
import happyclint from '../../Kimassets/images/icon-happy-clients.svg';
import iconproject from '../../Kimassets/images/icon-project.svg';
import iconrating from '../../Kimassets/images/icon-ratting.svg';
import iconservice1 from '../../Kimassets/images/icon-service-1.svg';
import iconservice2 from '../../Kimassets/images/icon-service-2.svg';
import iconservice3 from '../../Kimassets/images/icon-service-3.svg';
import step1 from '../../Kimassets/images/icon-step-1.svg';
import step2 from '../../Kimassets/images/icon-step-2.svg';
import step3 from '../../Kimassets/images/icon-step-3.svg';
import whyusi1 from '../../Kimassets/images/icon-whyus-1.svg';
import whyusi2 from '../../Kimassets/images/icon-whyus-2.svg';
import whyusi3 from '../../Kimassets/images/icon-whyus-3.svg';
import whyusi4 from '../../Kimassets/images/icon-whyus-4.svg';
import post1 from '../../Kimassets/images/post-1.jpg';
import post2 from '../../Kimassets/images/post-2.jpg';
import post3 from '../../Kimassets/images/post-3.jpg';
import service1 from '../../Kimassets/images/service-1.jpg';
import service2 from '../../Kimassets/images/service-2.jpg';
import service3 from '../../Kimassets/images/service-3.jpg';
import whyus from '../../Kimassets/images/whyus-1.jpg';
import whyus2 from '../../Kimassets/images/whyus-2.jpg';
import whyus3 from '../../Kimassets/images/whyus-3.jpg';
import whyus4 from '../../Kimassets/images/whyus-4.jpg';
import useDynamicStyleSheetboostrap from '../../Kimassets/useDynamicStyleSheetboostrap';
import { useState, useEffect } from 'react';


function Home() {

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
          <div class="hero parallaxie" style={{ marginTop: '80px !important' }}>
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-7">
                  <div class="hero-content">
                    <div class="section-title">
                      <h3 class="wow fadeInUp">Welcome to Kimiko</h3>
                      <h1 class="text-anime">Powering the Future With <span>Renewable.</span></h1>
                    </div>
                    <div class="hero-content-body wow fadeInUp" data-wow-delay="0.5s">
                      <p>
                        Welcome to Kimiko Energy! Invest in the future of solar energy with
                        our
                        innovative plans tailored to your financial goals. Enjoy significant
                        returns
                        while supporting renewable energy. Whether you're new or
                        experienced,
                        our options ensure profits and sustainability. Join us to power a
                        brighter,
                        greener future!
                      </p>
                    </div>
                    <div class="hero-content-footer wow fadeInUp" data-wow-delay="0.75s">
                      <a href="#" class="btn-default">Our Services</a>
                      <a href="#" class="btn-default btn-border">Contact Now</a>
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
          <div class="our-services">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="section-title">
                    <h3 class="wow fadeInUp">Our Services</h3>
                    <h2 class="text-anime">Best Offer For Renewable Energy</h2>
                  </div>
                </div>
              </div>
              <div class="latest-news">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="service-item">
                        <div class="service-image">
                          <figure>
                            <img src={service3} alt="" />
                          </figure>
                          <div class="service-icon">
                            <img src={iconservice3} alt="" />
                          </div>
                        </div>
                        <div class="service-content">
                          <h3>Solar Solutions</h3>
                          <p>
                            Larger-scale systems for businesses, often integrated with battery
                            storage to manage energy use.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="service-item">
                        <div class="service-image">
                          <figure>
                            <img src={service2} alt="" />
                          </figure>
                          <div class="service-icon">
                            <img src={iconservice2} alt="" />
                          </div>
                        </div>
                        <div class="service-content">
                          <h3>Energy Saving Devices</h3>
                          <p>
                            Store excess solar energy for use during the night or cloudy days,
                            reducing the need for grid electricity.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="service-item">
                        <div class="service-image">
                          <figure>
                            <img src={service1} alt="" />
                          </figure>
                          <div class="service-icon">
                            <img src={iconservice1} alt="" />
                          </div>
                        </div>
                        <div class="service-content">
                          <h3>Solar Maintenance</h3>
                          <p>
                            Use the monitoring system provided with your solar setup to track
                            performance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="our-process">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="section-title">
                    <h3 class="wow fadeInUp">Our Latest Process</h3>
                    <h2 class="text-anime">Our Work Process</h2>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="step-item step-1 wow fadeInUp" data-wow-delay="0.25s">
                    <div class="step-header">
                      <div class="step-icon">
                        <figure style={{ padding: '15px !important' }}>
                          <img src={step1} alt="" />
                        </figure>
                        <span class="step-no">01</span>
                      </div>
                    </div>

                    <div class="step-content">
                      <h3>Project Planing</h3>
                      <p>
                        Identify the team members and their roles. Determine the skillsets required for each task.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="step-item step-2 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="step-header">
                      <div class="step-icon">
                        <figure style={{ padding: '15px !important' }}>
                          <img src={step2} alt="" />
                        </figure>
                        <span class="step-no">02</span>
                      </div>
                    </div>
                    <div class="step-content">
                      <h3>Research & Analysis</h3>
                      <p>
                        Allocate sufficient time, budget, and human resources to carry out the research effectively.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="step-item wow fadeInUp" data-wow-delay="0.75s">
                    <div class="step-header">
                      <div class="step-icon">
                        <figure style={{ padding: '15px !important' }}>
                          <img src={step3} alt="" />
                        </figure>
                        <span class="step-no">03</span>
                      </div>
                    </div>
                    <div class="step-content">
                      <h3>Solar Installation</h3>
                      <p>
                        If connecting to the local power grid, get approval from the utility company and understand the interconnection process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="our-skills">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <div class="section-title">
                    <h3 class="wow fadeInUp">Energy Progress</h3>
                    <h2 class="text-anime">Best Solution For Your Solar Energy</h2>
                    <p class="wow fadeInUp" data-wow-delay="0.25s">Understanding Dynamics and Opportunities in the Solar Energy Industry</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="skills-box">
                    <div class="skillbar" data-percent="95%">
                      <div class="skill-data">
                        <div class="title">Solar Panels</div>
                        <div class="count" >95%</div>
                      </div>
                      <div class="skill-progress">
                        <div class="count-bar" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    <div class="skillbar" data-percent="80%">
                      <div class="skill-data">
                        <div class="title">Hybrid Energy</div>
                        <div class="count" >80%</div>
                      </div>
                      <div class="skill-progress">
                        <div class="count-bar" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div class="skillbar" data-percent="70%">
                      <div class="skill-data">
                        <div class="title">Marketing</div>
                        <div class="count">70%</div>
                      </div>
                      <div class="skill-progress">
                        <div class="count-bar" style={{ width: '70%' }}></div>
                      </div>
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
          <div class="why-choose-us">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="section-title">
                    <h3 class="wow fadeInUp">Why Choose Us</h3>
                    <h2 class="text-anime">Providing Solar Energy Solutions</h2>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <div class="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
                    <div class="why-choose-image">
                      <img src={whyus} alt="" />
                    </div>
                    <div class="why-choose-content">
                      <div class="why-choose-icon">
                        <img src={whyusi1} alt="" />
                      </div>
                      <h3>Efficiency & Power</h3>
                      <p>
                        Solar panel efficiency refers to the ratio of the electrical output of a solar panel
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="why-choose-item wow fadeInUp" data-wow-delay="0.5s">
                    <div class="why-choose-image">
                      <img src={whyus2} alt="" />
                    </div>
                    <div class="why-choose-content">
                      <div class="why-choose-icon">
                        <img src={whyusi2} alt="" />
                      </div>
                      <h3>Trust & Warranty</h3>
                      <p>
                        The trustworthiness of a solar provider is often gauged by their reputation in the market.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="why-choose-item wow fadeInUp" data-wow-delay="0.75s">
                    <div class="why-choose-image">
                      <img src={whyus3} alt="" />
                    </div>
                    <div class="why-choose-content">
                      <div class="why-choose-icon">
                        <img src={whyusi3} alt="" />
                      </div>
                      <h3>High Quality Work</h3>
                      <p>
                        High-quality work begins with a thorough assessment of the site’s solar potential.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="why-choose-item wow fadeInUp" data-wow-delay="1.0s">
                    <div class="why-choose-image">
                      <img src={whyus4} alt="" />
                    </div>
                    <div class="why-choose-content">
                      <div class="why-choose-icon">
                        <img src={whyusi4} alt="" />
                      </div>

                      <h3>24*7 Support</h3>
                      <p>
                        Regular inspections and maintenance are often included in 24/7 support plans.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="stat-counter">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <div class="counter-item">
                    <div class="counter-icon">
                      <img src={iconproject} alt="" />
                    </div>
                    <div class="counter-content">
                      <h3><span class="counter">1000</span>+</h3>
                      <p>Project Done</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="counter-item">
                    <div class="counter-icon">
                      <img src={happyclint} alt="" />
                    </div>
                    <div class="counter-content">
                      <h3><span class="counter">1200</span>+</h3>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="counter-item">
                    <div class="counter-icon">
                      <img src={iconaward} alt="" />
                    </div>
                    <div class="counter-content">
                      <h3><span class="counter">850</span>+</h3>
                      <p>Award Winning</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="counter-item">
                    <div class="counter-icon">
                      <img src={iconrating} alt="" />
                    </div>
                    <div class="counter-content">
                      <h3><span class="counter">1100</span>+</h3>
                      <p>Rating Customer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="solar-calculator">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="calculator-box wow fadeInUp">
                    <div class="row">
                      <div class="col-lg-5">
                        <div class="section-title">
                          <h3>Solar Calculator</h3>
                          <h2>Your Solar Savings Calculator</h2>
                        </div>
                      </div>
                      <div class="col-lg-7">
                        <div class="solar-form">
                          <form id="solarForm" action="#" method="POST" data-toggle="validator">
                            <div class="row">
                              <div class="form-group col-md-6 mb-3">
                                <select name="category" class="form-control" id="category" required >
                                  <option value="">Category</option>
                                  <option>Residential</option>
                                  <option>Commercial</option>
                                </select>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="form-group col-md-6 mb-3">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Full Name" required />
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="form-group col-md-6 mb-3">
                                <input type="email" name="email" class="form-control" id="email" placeholder="Email" required />
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="form-group col-md-6 mb-3">
                                <input type="text" name="phone" class="form-control" id="phone" placeholder="Phone" required />
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="form-group col-md-6 mb-3">
                                <input type="text" name="bill" class="form-control" id="bill" placeholder="our Average Monthly Bill?" required />
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="form-group col-md-6 mb-3">
                                <input type="text" name="capacity" class="form-control" id="capacity" placeholder="Required Solar Plant Capacity (in kW)" required />
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="col-md-12">
                                <button type="submit" class="btn-default">Calculate</button>
                                <div id="msgSubmit" class="h3 text-left hidden"></div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div >
          </div >
          <div class="latest-news">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="section-title">
                    <h3 class="wow fadeInUp">Recent Articles</h3>
                    <h2 class="text-anime">Our Latest News</h2>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <div class="blog-item wow fadeInUp" data-wow-delay="0.25s">
                    <div class="post-featured-image">
                      <figure class="image-anime">
                        <img src={post1} alt="" />
                      </figure>
                    </div>
                    <div class="post-item-body">
                      <h2><a href="#">Exploring the Latest Innovations in Solar Technology</a></h2>
                      <div class="post-meta">
                        <ul>
                          <li><a href="#"><i class="fa-regular fa-calendar-days"></i> 09 Feb 2024</a></li>
                          <li><a href="#"><i class="fa-solid fa-tag"></i> Solar Panel</a></li>
                        </ul>
                      </div>
                      <div class="btn-readmore">
                        <a href="#" class="btn-default">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="blog-item wow fadeInUp" data-wow-delay="0.5s">
                    <div class="post-featured-image">
                      <figure class="image-anime">
                        <img src={post2} alt="" />
                      </figure>
                    </div>
                    <div class="post-item-body">
                      <h2><a href="#">Solar Solutions for a Sustainable Tomorrow</a></h2>
                      <div class="post-meta">
                        <ul>
                          <li><a href="#"><i class="fa-regular fa-calendar-days"></i> 09 Feb 2024</a></li>
                          <li><a href="#"><i class="fa-solid fa-tag"></i> Solar Panel</a></li>
                        </ul>
                      </div>
                      <div class="btn-readmore">
                        <a href="#" class="btn-default">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="blog-item wow fadeInUp" data-wow-delay="0.75s">
                    <div class="post-featured-image">
                      <figure class="image-anime">
                        <img src={post3} alt="" />
                      </figure>
                    </div>
                    <div class="post-item-body">
                      <h2><a href="#">Advancements and Breakthroughs in Renewable Power</a></h2>
                      <div class="post-meta">
                        <ul>
                          <li><a href="#"><i class="fa-regular fa-calendar-days"></i> 09 Feb 2024</a></li>
                          <li><a href="#"><i class="fa-solid fa-tag"></i> Solar Panel</a></li>
                        </ul>
                      </div>
                      <div class="btn-readmore">
                        <a href="#" class="btn-default">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-ticker">
            <div class="scrolling-ticker">
              <div class="scrolling-ticker-box">
                <div class="scrolling-content">
                  <span>Generate Your Own Power</span>
                  <span>Reap the Returns</span>
                  <span>Heal the World</span>
                  <span>Efficiency & Power</span>
                  <span>24*7 Support</span>
                </div>
                <div class="scrolling-content">
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
      )
      }

    </>
  )
}

export default Home