import React from "react";

import HomeServices from "../Pages/HomeServices";

import { Swiper, SwiperSlide } from 'swiper/react';
import { FaLocationDot } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import Fade from 'react-reveal/Fade';
import roboticKnee from "../Asserts/robotic-knee-replacement.png";
import HomeAboutDr from "../Pages/HomeAboutDr";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Testimonials from "./Testimonials";
import { MetaTags } from "react-meta-tags";
import bgImage from '../Asserts/banner_img_bg.webp'
import galleryData from "../Asserts/galleryData";
import { Slide } from "react-reveal";
import { Image } from "antd";

const Home = () => {
  return (
    <>

      <MetaTags>
        <title>Best Orthopedic Surgeon in Kandivali | Sonik Shah</title>
        <meta title="Best Orthopedic Surgeon in Kandivali | Sonik Shah" />
        <meta name="description" content="Best Orthopedic Surgeon in Kandivali, Orthopedic Doctor in Kandivali, Golden Knee Replacement in Kandivali, Best Trauma Surgeons in Kandivali, Best Orthopedic in Kandivali, Knee Surgeon in kandivali,best shoulder specialist in Kandivali,Hip Surgeon in Kandivali, Partial Knee Replacement in Kandivali, Robotic Knee Replacement Surgeon in Kandivali, Best Arthroscopy Doctors in Kandivali, Ortho Specialist in Kandivali, Orthopedic Care near Kandivali" />
        <link rel="canonical" href="https://drsonikshah.com/" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta property="og:title" content="Best Orthopedic Surgeon in Kandivali | Sonik Shah" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drsonikshah.com/" />
        <meta property="og:description" content="Discover unparalleled orthopedic care with the Best Orthopedic Surgeon in Kandivali. Expertise, compassion & cutting-edge treatments tailored to your needs.." />
        <meta property="og:image" content="https://kinararesort.in/static/media/logo.146c55d2a549f20e2963.png" />
      </MetaTags>
      <div
        className="col-xxl-6 col-lg-6 col-xl-6 wow fadeInRight home-banner"
        data-wow-duration="1s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationName: "fadeInRight",
        }}
      >
        <div className="banner_img">
          <img src={galleryData.banner} alt="Best Orthopedic Surgeon in Kandivali" />
        </div>
      </div>
      <div className='head-cont'>
        <Slide left sm>
          <h1 className='special-h1'>Orthopedic Doctor in Kandivali</h1>
        </Slide>
      </div>
      <section
        className="banner"
        style={{
          backgroundImage: bgImage,
        }}
      >

        <div className="container">

          <div className="row justify-content-between">
            <div
              className="col-xxl-5 col-md-9 col-xl-6 col-lg-6 wow fadeInLeft"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInLeft",
              }}
            >
              <div className="banner_text">
                <h5>Welcome to The best Health center</h5>
                <h2 style={{ fontWeight: 200 }}>We Are Committed To Your Health</h2>
                <p>
                  At our core, we are dedicated to providing exceptional care and support to ensure your health and well-being are always our top priority.
                </p>
                <a href="/orthopedic-doctor-kandivali" className="common_btn">
                  meet a doctor
                </a>
                <ul className="banner_counter d-flex ">
                  <li>
                    <h3>
                      <span className="counter">355</span>k+{" "}
                    </h3>
                    <p>Recovered Patients</p>
                  </li>
                  <li>
                    <h3>
                      <span className="counter">98</span>%
                    </h3>
                    <p>Good Review</p>
                  </li>
                  <li>
                    <h3>
                      <span className="counter">120</span>+
                    </h3>
                    <p>Popular Doctors</p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* Banner End */}

      {/* About start painless treatment */}
      <section className="about pt_100 xs_pt_70 pb_100 xs_pb_70 section-custom-padding ">
        <div className="container">
          <div className="row">
            <Fade left>
              <div
                className="col-xl-6 col-sm-9  col-lg-5 col-md-7 wow fadeInLeft"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInLeft",
                }}
              >
                <div className="about_img">
                  <div className="about_img_1">
                    <img
                      src={galleryData.knee}
                      alt="Best Orthopedic Surgeon in Kandivali"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="about_img_2">
                    <img
                      src={galleryData.knee1}
                      alt="Best Orthopedic Surgeon in Kandivali"
                      className="img-fluid w-100"
                    />
                    <a
                      className="play_btn venobox vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                      href="https://www.youtube.com/watch?v=AY54XFuNYBY"
                    >
                      <i className="fas fa-play" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div
                className="col-xl-6 col-sm-12 col-lg-7  wow fadeInRight"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInRight",
                }}
              >
                <div className="common_heading">
                  <h5>about us</h5>
                  <h2>The Great Place of Painless treatment.</h2>
                  <p>
                    Looking for the best orthopedic surgeon in Kandivali? Discover The Great Place of Painless Treatment, where top-notch care and advanced techniques ensure swift recovery and lasting relief from orthopaedic issues.
                  </p>
                </div>
                <ul className="about_iteam d-flex flex-wrap">
                  <li>Ambulance Services</li>
                  <li>Oxizen on Wheel</li>
                  <li>Pharmacy on Clinic</li>
                  <li>On duty Doctors</li>
                  <li>24/7 Medical Emergency</li>
                </ul>
                <a href="/orthopedic-doctor-kandivali" className="common_btn">
                  Discover More
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      {/* About End painless treatment */}
      {/* About start gold kneee replacement treatment */}
      <section className="about pt_100 xs_pt_70 pb_100 xs_pb_70 section-custom-padding custom-bg-color-secondary">
        <div className="container">
          <div className="row">
            <Fade right>
              <div
                className="col-xl-6 col-sm-9  col-lg-5 col-md-7 wow fadeInLeft"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInLeft",
                }}
              >
                <div className="about_img">
                  <div className="">
                    <img
                      src={galleryData.goldknee}
                      alt="Best Orthopedic Surgeon in Kandivali"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div
                className="col-xl-6 col-sm-12 col-lg-7  wow fadeInRight"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInRight",
                }}
              >
                <div className="common_heading">
                  <h5>about us</h5>
                  <h2>The optimal destination for a gold knee replacement.</h2>
                  <p>
                    For the optimal destination for a gold knee replacement, consider consulting the best orthopedic surgeon in Kandivali. Known for their expertise and advanced surgical techniques, the best orthopedic surgeons in Kandivali ensure exceptional care and recovery. Choosing the best orthopedic surgeon in Kandivali guarantees a high standard of medical service and successful outcomes for knee replacement procedures.
                  </p>
                </div>
                <ul className="about_iteam d-flex flex-wrap">
                  <li>Ambulance Services</li>
                  <li>Oxizen on Wheel</li>
                  <li>Pharmacy on Clinic</li>
                  <li>On duty Doctors</li>
                  <li>24/7 Medical Emergency</li>
                </ul>
                <a href="/golden-knee-replacement" className="common_btn">
                  Discover More
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="about pt_100 xs_pt_70 pb_100 xs_pb_70 section-custom-padding custom-bg-color">
        <div className="container">
          <div className="row">
            <Fade left>
              <div
                className="col-xl-6 col-sm-12 col-lg-7  wow fadeInRight"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInRight",
                }}
              >
                <div className="common_heading">
                  <h5>about us</h5>
                  <h2>The Excellent Location for Robotic Knee Replacement.</h2>
                  <p>
                    For those seeking the best orthopedic surgeon in Kandivali, the area's advanced medical facilities make it an excellent location for robotic knee replacement surgeries. Patients benefit from cutting-edge technology and expert care, ensuring precise and effective treatment. The best orthopedic surgeon in Kandivali leverages these resources to provide top-tier surgical outcomes and quicker recovery times.

                  </p>
                </div>
                <ul className="about_iteam d-flex flex-wrap">
                  <li>Ambulance Services</li>
                  <li>Oxizen on Wheel</li>
                  <li>Pharmacy on Clinic</li>
                  <li>On duty Doctors</li>
                  <li>24/7 Medical Emergency</li>
                </ul>
                <a href="/robotic-knee-replacement-surgery" className="common_btn">
                  Discover More
                </a>
              </div>
            </Fade>
            <Fade right>
              <div
                className="col-xl-6 col-sm-9  col-lg-5 col-md-7 mt-sm-5 wow fadeInLeft"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInLeft",
                }}
              >
                <div className="about_img">
                  <div className="">
                    <img
                      src={roboticKnee}
                      alt="Best Orthopedic Surgeon in Kandivali"
                      className="img-fluid w-100"
                    />
                  </div>

                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      {/* About End robomatic replacement treatment */}

      <HomeServices />

      <section className="about pt_100 xs_pt_70 pb_100 xs_pb_70 py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h5>Gallery</h5>
            <h2>Photo Gallery</h2>
          </div>
          <div className="row g-3">
            <div
              className="col-xl-6 col-md-6 col-sm-12 wow fadeInRight"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInRight",
                height: 300, // Defining the height of the image container
              }}
            >
              <Fade left>
                <Image
                  width="100%"  // Ensures the image takes the full width of the container
                  height={300}  // Defining a fixed height for the image
                  style={{
                    objectFit: "cover", // Ensures the image fits within the container without distortion
                  }}
                  src={galleryData.gal1} // Replace with your image URL
                  alt="MINIMALLY INVASIVE HIP REPLACEMENT SURGERY"
                />
              </Fade>
            </div>
            <div
              className="col-xl-6 col-md-6 col-sm-12 wow fadeInRight"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInRight",
                height: 300, // Defining the height of the image container
              }}
            >
              <Fade left>
                <Image
                  width="100%"
                  height={300} // Defining a fixed height for the image
                  style={{
                    objectFit: "cover",
                  }}
                  src={galleryData.gal2}
                  alt="ROBOTIC KNEE REPLACEMENT SURGERY"
                />
              </Fade>
            </div>
            <div
              className="col-xl-6 col-md-6 col-sm-12 wow fadeInRight"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInRight",
                height: 300, // Defining the height of the image container
              }}
            >
              <Fade left>
                <Image
                  width="100%"
                  height={300} // Defining a fixed height for the image
                  style={{
                    objectFit: "cover",
                  }}
                  src={galleryData.gal3}
                  alt="YouTube video 1"
                />
              </Fade>
            </div>
            <div
              className="col-xl-6 col-md-6 col-sm-12 wow fadeInRight"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInRight",
                height: 300, // Defining the height of the image container
              }}
            >
              <Fade left>
                <Image
                  width="100%"
                  height={300} // Defining a fixed height for the image
                  style={{
                    objectFit: "cover",
                  }}
                  src={galleryData.arth1}
                  alt="YouTube video 2"
                />
              </Fade>
            </div>
          </div>
        </div>
      </section>



      <section
        className="service"
        style={{ background: "url(https://html.themefax.com/madifax/images/service_bg.jpg)" }}
      >
        <div className="service_overlay py-5 pt_100 xs_pt_70 pb_100 xs_pb_70">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="common_heading center_heading mb_15">
                  <h5>our Branch</h5>
                  <h2>Location</h2>
                </div>
              </div>
            </div>
            <div className="row service_slider slick-initialized slick-slider slick-dotted">

              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Fade up>
                    <div
                      className=" wow fadeInUp"
                      data-wow-duration="1s"
                      style={{
                        width: "100%",
                        display: "inline-block",
                        visibility: "visible",
                        animationDuration: "1s",
                        animationName: "fadeInUp"
                      }}
                    >
                      <div className="single_service">

                        <div className="service_text">
                          <a href="https://www.google.com/maps/dir/19.1388495,72.8426742/City+Hospital+S+V+Road,Behram+baug+signal,+Jogeshwari+West./@19.1407141,72.8408212,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be7b765ffed44bf:0xc187170b650ca234!2m2!1d72.8431936!2d19.1431765?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D" className="service_heading mb-1" tabIndex={-1}>
                            <i style={{ color: "var(--colorPrimary)" }}> <FaLocationDot /> </i> City Hospital
                          </a>
                          <a href="#">
                            <i className="fas fa-" aria-hidden="true" ><IoMdCall /></i>
                            &nbsp; &nbsp; <label className="text-black"> +91 9892302803</label>
                          </a>
                          <p className="d-flex">
                            <div>  <i className="-alt" style={{ fontSize: "20px" }} aria-hidden="true" > <FaBuilding /></i></div>
                            <div className="location-address">
                              <span className="">
                                best arthroscopic shoulder surgeon in mumbai
                                City Hospital
                                S V Road,Behram baug signal, Jogeshwari West.                                Timmings:- Mon. to sat (5.00 p.m. to 6.30 p.m.)
                              </span>
                            </div>
                          </p>

                          <a href="https://www.google.com/maps/dir/19.1388495,72.8426742/City+Hospital+S+V+Road,Behram+baug+signal,+Jogeshwari+West./@19.1407141,72.8408212,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be7b765ffed44bf:0xc187170b650ca234!2m2!1d72.8431936!2d19.1431765?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="common_btns">
                            get  Location
                          </a>

                        </div>
                      </div>
                    </div>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide>
                  <Fade up>
                    <div
                      className=" wow fadeInUp"
                      data-wow-duration="1s"
                      style={{
                        width: "100%",
                        display: "inline-block",
                        visibility: "visible",
                        animationDuration: "1s",
                        animationName: "fadeInUp"
                      }}
                    >
                      <div className="single_service">

                        <div className="service_text">
                          <a href="https://www.google.com/maps?sca_esv=711f59ee6954731e&sxsrf=ADLYWIIOLRZGU1Fwkx1XAtWue4QB9FozYw:1733744142361&gs_lp=Egxnd3Mtd2l6LXNlcnAiB2thcGFkaWEqAggAMhAQLhiABBhDGMcBGIoFGK8BMgsQLhiABBjHARivATIFEC4YgAQyEBAuGIAEGEMYxwEYigUYrwEyExAuGIAEGEMYxwEYigUYjgUYrwEyDhAuGIAEGMcBGI4FGK8BMgUQABiABDIFEAAYgAQyCxAuGIAEGMcBGK8BMgUQABiABDIfEC4YgAQYQxjHARiKBRivARiXBRjcBBjeBBjgBNgBAUjcIlAAWMwMcAF4AJABAJgBsgKgAYwMqgEHMC40LjIuMbgBA8gBAPgBAZgCCaAC3hioAhPCAgcQIxgnGOoCwgIQEAAYAxi0AhjqAhiPAdgBAcICIBAuGIAEGJECGLQCGMcBGMgDGIoFGOoCGI4FGK8B2AEBwgIdEC4YgAQYkQIYtAIYxwEYyAMYigUY6gIYrwHYAQHCAhQQLhiABBiRAhjHARiKBRiOBRivAcICCxAAGIAEGLEDGIMBwgIREC4YgAQYsQMY0QMYgwEYxwHCAg4QLhiABBixAxiDARiKBcICIxAuGIAEGJECGMcBGIoFGI4FGK8BGJcFGNwEGN4EGOAE2AEBwgIKEC4YgAQYQxiKBcICCxAAGIAEGJECGIoFwgIKEAAYgAQYQxiKBcICIhAuGIAEGEMYigUYlwUY3AQY3gQY4AQY9AMY8QMY9QPYAQHCAggQLhiABBixA8ICCxAuGIAEGLEDGNQCwgIIEAAYgAQYsQPCAg4QLhiABBixAxjRAxjHAZgDCvEFnbcUMNXNSYq6BgYIARABGAqSBwsxLjMuMi4yLjctMaAH7LEB&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KWUBosVRtuc7MVGrckvjJGL_&daddr=Mahatma+Gandhi+Rd,+Shri+Nagar,+Goregaon+West,+Mumbai,+Maharashtra+400062" className="service_heading mb-1" tabIndex={-1}>
                            <i style={{ color: "var(--colorPrimary)" }}> <FaLocationDot /> </i> Kapadia Hospital
                          </a>
                          <a href="#">
                            <i className="fas fa-" aria-hidden="true" ><IoMdCall /></i>
                            &nbsp; &nbsp; <label className="text-black"> +91 77770 45206</label>
                          </a>
                          <p className="d-flex">
                            <div>  <i className="-alt" style={{ fontSize: "20px" }} aria-hidden="true" > <FaBuilding /></i></div>
                            <div className="location-address">
                              <span className="">

                                Kapadia Hospital
                                1st floor ,Asmi Dreams,opp. Ratna hotel,S.V. Road ,Goregaon (West)
                                Timmings:- Mon. to sat (5.00 p.m. to 6.30 p.m.)
                              </span>
                            </div>
                          </p>

                        </div>
                        <a href="https://www.google.com/maps?sca_esv=711f59ee6954731e&sxsrf=ADLYWIIOLRZGU1Fwkx1XAtWue4QB9FozYw:1733744142361&gs_lp=Egxnd3Mtd2l6LXNlcnAiB2thcGFkaWEqAggAMhAQLhiABBhDGMcBGIoFGK8BMgsQLhiABBjHARivATIFEC4YgAQyEBAuGIAEGEMYxwEYigUYrwEyExAuGIAEGEMYxwEYigUYjgUYrwEyDhAuGIAEGMcBGI4FGK8BMgUQABiABDIFEAAYgAQyCxAuGIAEGMcBGK8BMgUQABiABDIfEC4YgAQYQxjHARiKBRivARiXBRjcBBjeBBjgBNgBAUjcIlAAWMwMcAF4AJABAJgBsgKgAYwMqgEHMC40LjIuMbgBA8gBAPgBAZgCCaAC3hioAhPCAgcQIxgnGOoCwgIQEAAYAxi0AhjqAhiPAdgBAcICIBAuGIAEGJECGLQCGMcBGMgDGIoFGOoCGI4FGK8B2AEBwgIdEC4YgAQYkQIYtAIYxwEYyAMYigUY6gIYrwHYAQHCAhQQLhiABBiRAhjHARiKBRiOBRivAcICCxAAGIAEGLEDGIMBwgIREC4YgAQYsQMY0QMYgwEYxwHCAg4QLhiABBixAxiDARiKBcICIxAuGIAEGJECGMcBGIoFGI4FGK8BGJcFGNwEGN4EGOAE2AEBwgIKEC4YgAQYQxiKBcICCxAAGIAEGJECGIoFwgIKEAAYgAQYQxiKBcICIhAuGIAEGEMYigUYlwUY3AQY3gQY4AQY9AMY8QMY9QPYAQHCAggQLhiABBixA8ICCxAuGIAEGLEDGNQCwgIIEAAYgAQYsQPCAg4QLhiABBixAxjRAxjHAZgDCvEFnbcUMNXNSYq6BgYIARABGAqSBwsxLjMuMi4yLjctMaAH7LEB&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KWUBosVRtuc7MVGrckvjJGL_&daddr=Mahatma+Gandhi+Rd,+Shri+Nagar,+Goregaon+West,+Mumbai,+Maharashtra+400062" target="_blank" className="common_btns">
                          get  Location
                        </a>

                      </div>
                    </div>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide>
                  <Fade up>
                    <div
                      className=" wow fadeInUp"
                      data-wow-duration="1s"
                      style={{
                        width: "100%",
                        display: "inline-block",
                        visibility: "visible",
                        animationDuration: "1s",
                        animationName: "fadeInUp"
                      }}
                    >
                      <div className="single_service">

                        <div className="service_text">
                          <a href="https://www.google.com/maps/dir/19.1389388,72.8397314/,lancelot+bldg,opp.+kalyan+jewellers,S.v.+road+,+borivali(w)/@19.1796927,72.810385,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be7b72aa202a415:0x81e5ec20e9ef9bf9!2m2!1d72.8518503!2d19.2191268?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D" className="service_heading mb-1" tabIndex={-1}>
                            <i style={{ color: "var(--colorPrimary)" }}> <FaLocationDot /> </i> Bala Hanuman Hospital
                          </a>
                          <a href="#">
                            <i className="fas fa-" aria-hidden="true" ><IoMdCall /></i>
                            &nbsp; &nbsp; <label className="text-black"> +919892302803</label>
                          </a>
                          <p className="d-flex">
                            <div>  <i className="-alt" style={{ fontSize: "20px" }} aria-hidden="true" > <FaBuilding /></i></div>
                            <div className="location-address">
                              <span className="">
                                S V Road,Behram baug signal, Jogeshwari West.
                                Timmings:- Mon. to sat (5.00 p.m. to 6.30 p.m.)
                              </span>
                            </div>
                          </p>

                        </div>
                        <a href="v" className="common_btn">
                          get  Location
                        </a>

                      </div>
                    </div>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide>
                  <Fade up>
                    <div
                      className=" wow fadeInUp"
                      data-wow-duration="1s"
                      style={{
                        width: "100%",
                        display: "inline-block",
                        visibility: "visible",
                        animationDuration: "1s",
                        animationName: "fadeInUp"
                      }}
                    >
                      <div className="single_service">

                        <div className="service_text">
                          <a href="https://maps.app.goo.gl/ZQYsdsXqCzPNHpqv9" className="service_heading mb-1" tabIndex={-1}>
                            <i style={{ color: "var(--colorPrimary)" }}> <FaLocationDot /> </i> Namaha Hospital
                          </a>
                          <a href="#">
                            <i className="fas fa-" aria-hidden="true" ><IoMdCall /></i>
                            &nbsp; &nbsp; <label className="text-black"> +919892302803</label>
                          </a>
                          <p className="d-flex">
                            <div>  <i className="-alt" style={{ fontSize: "20px" }} aria-hidden="true" > <FaBuilding /></i></div>
                            <div className="location-address">
                              <span className="">
                                Namaha Healthcare,S.V Road, opp. Rajyaguru Flyover, Kandivali, Bhadran Nagar, Kandivali West, Mumbai, Maharashtra 400067
                              </span>
                            </div>
                          </p>

                        </div>
                        <a href="https://maps.app.goo.gl/ZQYsdsXqCzPNHpqv9" target="_blank" className="common_btns">
                          get  Location
                        </a>

                      </div>
                    </div>
                  </Fade>
                </SwiperSlide>
              </Swiper>

            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <HomeAboutDr />
    </>
  );
};

export default Home;
