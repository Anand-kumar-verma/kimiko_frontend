import React from 'react'
import Header from '../../Kimassets/component/Header'
import Footer from '../../Kimassets/component/Footer'
import projectFeatureImage from '../../Kimassets/images/project-single.jpg';
import post1 from '../../Kimassets/images/post-1.jpg';
import post2 from '../../Kimassets/images/post-2.jpg';
import post3 from '../../Kimassets/images/post-3.jpg';
import post4 from '../../Kimassets/images/post-4.jpg';
import iconDate from '../../Kimassets/images/icon-date.svg';
import iconEnergy from '../../Kimassets/images/icon-energy.svg';
import iconCategory from '../../Kimassets/images/icon-category.svg';
import iconClient from '../../Kimassets/images/icon-client.svg';
import iconLocation from '../../Kimassets/images/icon-location.svg';
import step1 from '../../Kimassets/images/icon-step-1.svg';
import step2 from '../../Kimassets/images/icon-step-2.svg';
import step3 from '../../Kimassets/images/icon-step-3.svg';
import cta from '../../Kimassets/images/cta-image.jpg';
import iconcta from '../../Kimassets/images/icon-cta-phone.svg';
import useDynamicStyleSheetboostrap from '../../Kimassets/useDynamicStyleSheetboostrap';
import { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';

function Project() {
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
                      Our Project
                    </h1>
                    <nav className="wow fadeInUp" style={{ animationDelay: '0.25s', animationName: 'fadeInUp' }}>
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">Home /  </a>
                        </li>
                        <p style={{ color: '#89EA5F' }}> {" "} Our Project</p>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="page-project-single">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="project-sidebar">
                    <div className="about-project-box wow fadeInUp">
                      <h2>About the project</h2>

                      <div className="project-info-box">
                        <div className="project-icon">
                          <img src={iconDate} alt="Date Icon" />
                        </div>
                        <h3>Project Date:</h3>
                        <p>09 January, 2024</p>
                      </div>

                      <div className="project-info-box">
                        <div className="project-icon">
                          <img src={iconEnergy} alt="Energy Icon" />
                        </div>
                        <h3>Energy Generation:</h3>
                        <p>80,000 kWh / Year</p>
                      </div>

                      <div className="project-info-box">
                        <div className="project-icon">
                          <img src={iconCategory} alt="Category Icon" />
                        </div>
                        <h3>Category:</h3>
                        <p>Solar Energy</p>
                      </div>

                      <div className="project-info-box">
                        <div className="project-icon">
                          <img src={iconClient} alt="Client Icon" />
                        </div>
                        <h3>Client / Company:</h3>
                        <p>SolarSphere Solutions</p>
                      </div>

                      <div className="project-info-box">
                        <div className="project-icon">
                          <img src={iconLocation} alt="Location Icon" />
                        </div>
                        <h3>Project Location:</h3>
                        <p>123 Main Street, Anytown</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="project-content">
                    <div className="project-feature-image wow fadeInUp" data-wow-delay="0.25s">
                      <figure className="image-anime">
                        <img src={projectFeatureImage} alt="Project Feature" />
                      </figure>
                    </div>

                    <div className="project-entry">
                      <h2>Project Information</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                      <p>Our inboxes are overloaded with promotional emails and newsletters, and we simply don't have enough time to read them all anymore. Personalized messaging on your website will engage and provoke users to converse with you, answer questions and build trust. Follow up those conversations with personalized emails that automatically keep your brand on top of your prospects mind and accelerate your sales process.</p>

                      <h2>Scope of Project</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      <ul>
                        <li>It has survived not only five centuries, but also the leap into electronic.</li>
                        <li>Our inboxes are overloaded with promotional emails and newsletters.</li>
                        <li>Prospects are more likely to buy if you're ready to sell Web Contact forms.</li>
                      </ul>
                    </div>

                    <div className="project-gallery">
                      <div className="project-gallery-title">
                        <h2>Project Gallery</h2>
                      </div>

                      <div className="project-gallery-items">
                        <div className="project-gallery-item">
                          <a href={post1}>
                            <figure className="image-anime">
                              <img src={post1} alt="Gallery Item 1" />
                            </figure>
                          </a>
                        </div>
                        <div className="project-gallery-item">
                          <a href={post2}>
                            <figure className="image-anime">
                              <img src={post2} alt="Gallery Item 2" />
                            </figure>
                          </a>
                        </div>
                        <div className="project-gallery-item">
                          <a href={post3}>
                            <figure className="image-anime">
                              <img src={post3} alt="Gallery Item 3" />
                            </figure>
                          </a>
                        </div>
                        <div className="project-gallery-item">
                          <a href={post4}>
                            <figure className="image-anime">
                              <img src={post4} alt="Gallery Item 4" />
                            </figure>
                          </a>
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
                        <figure class='.figure'>
                          <img src={step1} alt="" style={{ width: '50px' }} />
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
                        <figure>
                          <img src={step2} alt="" style={{ width: '50px' }} />
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
                        <figure>
                          <img src={step3} alt="" style={{ width: '50px' }} />
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
          <div class="infobar">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="cta-box">
                    <div class="row align-items-center">
                      <div class="col-lg-4">
                        <div class="cta-image">
                          <figure class="image-anime">
                            <img src={cta} alt="" style={{ width: '50px !important' }} />
                          </figure>
                        </div>
                      </div>
                      <div class="col-lg-8">
                        <div class="cta-content">
                          {/* <div class="phone-icon">
                            <figure>
                              <img src={iconcta} alt="" style={{ width: '50px !important' }} />
                            </figure>
                          </div> */}
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

export default Project