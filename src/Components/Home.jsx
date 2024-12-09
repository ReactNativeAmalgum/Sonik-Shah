import React from "react";
import DoctorIntro from "../Pages/DoctorIntro";
import SwiperPatients from "../Pages/SwiperPatients";
import VideoPlayer from "../Pages/VideoPlayer";
import HomeServices from "../Pages/HomeServices";
import call from "../Asserts/Call.png";
import videoCall from "../Asserts/Video-call.png";
import reactIcon from "../Asserts/react.png";
import review from "../Asserts/Review.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import Fade from 'react-reveal/Fade';
import roboticKnee from "../Asserts/robotic-knee-replacement.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Testimonials from "./Testimonials";
import { MetaTags } from "react-meta-tags";
import bgImage from '../Asserts/banner_img_bg.webp'
import galleryData from "../Asserts/galleryData";

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
          <img src={galleryData.banner} />
        </div>
      </div>
      <div className='head-cont'>
        <h1 className='special-h1'>Orthopedic Doctor in Kandivali</h1>
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
                <a href="doctor.html" className="common_btn">
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
                      src="https://images.squarespace-cdn.com/content/v1/5abdee1596d455819877579b/c869715e-2496-41e5-991b-ad3c83131d76/orthopaedic-transformed.png?format=2500w"
                      alt="about img"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="about_img_2">
                    <img
                      src="https://media.istockphoto.com/id/1133629763/photo/therapist-showing-knee-joint-model.jpg?s=2048x2048&w=is&k=20&c=rZlbQpN7fifIlHJ2ArD62u26-l4ZRRXOeP4jPEXq_mc="
                      alt="about img"
                      className="img-fluid w-100"
                    />
                    <a
                      className="play_btn venobox vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                      href="https://youtu.be/nqye02H_H6I"
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
                <a href="about.html" className="common_btn">
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
                      src="https://aroraclinic.com/wp-content/uploads/2020/11/goldent-knee.png"
                      alt="about img"
                      className="img-fluid w-100"
                    />
                  </div>
                  {/* <div className="about_img_2">
                    <img
                    src="https://html.themefax.com/madifax/images/about_img2.jpg"
                    alt="about img"
                    className="img-fluid w-100"
                    />
                    <a
                    className="play_btn venobox vbox-item"
                    data-autoplay="true"
                    data-vbtype="video"
                    href="https://youtu.be/nqye02H_H6I"
                    >
                    <i className="fas fa-play" aria-hidden="true" />
                    </a>
                </div> */}
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
                <a href="about.html" className="common_btn">
                  Discover More
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* About End gold kneee replacement treatment */}
      {/* About start robomatic replacement treatment */}
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
                <a href="about.html" className="common_btn">
                  Discover More
                </a>
              </div>
            </Fade>
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
                      src={roboticKnee}
                      alt="about img"
                      className="img-fluid w-100"
                    />
                  </div>
                  {/* <div className="about_img_2">
                    <img
                    src="https://html.themefax.com/madifax/images/about_img2.jpg"
                    alt="about img"
                    className="img-fluid w-100"
                    />
                    <a
                    className="play_btn venobox vbox-item"
                    data-autoplay="true"
                    data-vbtype="video"
                    href="https://youtu.be/nqye02H_H6I"
                    >
                    <i className="fas fa-play" aria-hidden="true" />
                    </a>
                </div> */}
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      {/* About End robomatic replacement treatment */}

      <HomeServices />

      <DoctorIntro />
      {/* doctor intro end */}

      <section className="about pt_100 xs_pt_70 pb_100 xs_pb_70 py-5">
        <div className="container">
          <div className="common_heading">
            <h5>Video</h5>
            <h2>Video Testimonials Of Patients.</h2>
          </div>
          <div className="row">

            <div
              className="col-xl-6 col-sm-12 col-lg-6  wow fadeInRight"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInRight",
              }}
            >
              <Fade left>
                <iframe
                  // className="elementor-video"
                  frameBorder={0}
                  allowFullScreen=""
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  title="MINIMALLY INVASIVE HIP REPLACEMENT SURGERY | DR BAKUL ARORA | HIP REPLACEMENT SURGEON IN THANE"
                  width={640}
                  height={360}
                  src="https://www.youtube.com/embed/FvcfThzQnk8?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fdrbakularora.com&widgetid=17"
                  id="widget18"
                  data-gtm-yt-inspected-5="true"
                />
              </Fade>
              {/* <VideoPlayer /> */}
            </div>
            <div
              className="col-xl-6 col-sm-12 col-lg-6  wow fadeInRight"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInRight",
              }}
            >
              <Fade left>
                <iframe width="560" height="315"
                  src="https://www.youtube.com/embed/NWUBpVoUbSk?si=yaHbkvzowzZP_X-R&amp;start=3"
                  allowFullScreen=""
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  title="ROBOTIC KNEE REPLACEMENT SURGERY | DR BAKUL ARORA | ROBOTIC KNEE REPLACEMENT SURGERY IN THANE"
                  width={640}
                  height={360}
                  id="widget18"
                  data-gtm-yt-inspected-5="true"

                />
              </Fade>
              {/* <VideoPlayer /> */}
            </div>
            <div
              className="col-xl-6 col-sm-12 col-lg-6  wow fadeInRight"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInRight",
              }}
            >
              <Fade left>
                <iframe
                  width={640}
                  height={360}
                  src="https://www.youtube.com/embed/CxZreWHb3LQ?si=w6jXp5lnCO-pYl8s&amp;start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </Fade>
              {/* <VideoPlayer /> */}
            </div>
            <div
              className="col-xl-6 col-sm-12 col-lg-6  wow fadeInRight"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInRight",
              }}
            >
              <Fade left>
                <iframe width={640}
                  height={360} src="https://www.youtube.com/embed/dYNfPlQxq_U?si=Ka1axxXTZYeXopQ0&amp;start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </Fade>
              {/* <VideoPlayer /> */}
            </div>
            {/* <Fade right>
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
                  <VideoPlayer />
                </div>
              </div>
            </div>
            </Fade> */}
          </div>
        </div>
      </section>
      {/* Patient end video  */}
      {/* services start */}

      {/* services end */}
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
                    slidesPerView: 3,
                    spaceBetween: 40,
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
                        {/* <div className="service_img">
      <span className="tf_service_icon">
        <i className="fas fa-eye" aria-hidden="true" />
      </span>
      <img
        src="https://www.drsachintapasvi.com/img/QR/Bund-garden-road.jpg"
        alt="service img"
        className="img-fluid w-100"
      />
    </div>
     <p className="text-center text-muted scanner-text">Scan QR Code for directions</p> */}
                        <div className="service_text">
                          <a href="service_details.html" className="service_heading mb-1" tabIndex={-1}>
                            <i style={{ color: "var(--colorPrimary)" }}> <FaLocationDot /> </i> City Hospital
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
                          {/* <p>
        Lorem ipsum dolor sit amet consectetur ipsam adipisicing elit. Rem quia
        officia quaerat ipsam hic sunt quaerat!
      </p> */}
                          {/* <a href="service_details.html" className="service_link" tabIndex={-1}>
        read more <i className="far fa-long-arrow-right" aria-hidden="true" />
      </a> */}
                          <a href="https://maps.app.goo.gl/ZQYsdsXqCzPNHpqv9" target="_blank" className="common_btns">
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
                        {/* <div className="service_img">
      <span className="tf_service_icon">
        <i className="fas fa-eye" aria-hidden="true" />
      </span>
      <img
        src="https://www.drsachintapasvi.com/img/QR/Bund-garden-road.jpg"
        alt="service img"
        className="img-fluid w-100"
      />
    </div>
     <p className="text-center text-muted scanner-text">Scan QR Code for directions</p> */}
                        <div className="service_text">
                          <a href="service_details.html" className="service_heading mb-1" tabIndex={-1}>
                            <i style={{ color: "var(--colorPrimary)" }}> <FaLocationDot /> </i> City Hospital
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
                          {/* <p>
        Lorem ipsum dolor sit amet consectetur ipsam adipisicing elit. Rem quia
        officia quaerat ipsam hic sunt quaerat!
      </p> */}
                          {/* <a href="service_details.html" className="service_link" tabIndex={-1}>
        read more <i className="far fa-long-arrow-right" aria-hidden="true" />
      </a> */}
                        </div>
                        <a href="https://maps.app.goo.gl/ZQYsdsXqCzPNHpqv9" target="_blank" className="common_btns">
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
                        {/* <div className="service_img">
      <span className="tf_service_icon">
        <i className="fas fa-eye" aria-hidden="true" />
      </span>
      <img
        src="https://www.drsachintapasvi.com/img/QR/Bund-garden-road.jpg"
        alt="service img"
        className="img-fluid w-100"
      />
    </div>
     <p className="text-center text-muted scanner-text">Scan QR Code for directions</p> */}
                        <div className="service_text">
                          <a href="service_details.html" className="service_heading mb-1" tabIndex={-1}>
                            <i style={{ color: "var(--colorPrimary)" }}> <FaLocationDot /> </i> City Hospital
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
                          {/* <p>
        Lorem ipsum dolor sit amet consectetur ipsam adipisicing elit. Rem quia
        officia quaerat ipsam hic sunt quaerat!
      </p> */}
                          {/* <a href="service_details.html" className="service_link" tabIndex={-1}>
        read more <i className="far fa-long-arrow-right" aria-hidden="true" />
      </a> */}
                        </div>
                        <a href="https://maps.app.goo.gl/ZQYsdsXqCzPNHpqv9" className="common_btn">
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
                        {/* <div className="service_img">
      <span className="tf_service_icon">
        <i className="fas fa-eye" aria-hidden="true" />
      </span>
      <img
        src="https://www.drsachintapasvi.com/img/QR/Bund-garden-road.jpg"
        alt="service img"
        className="img-fluid w-100"
      />
    </div>
     <p className="text-center text-muted scanner-text">Scan QR Code for directions</p> */}
                        <div className="service_text">
                          <a href="service_details.html" className="service_heading mb-1" tabIndex={-1}>
                            <i style={{ color: "var(--colorPrimary)" }}> <FaLocationDot /> </i> City Hospital
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
                          {/* <p>
        Lorem ipsum dolor sit amet consectetur ipsam adipisicing elit. Rem quia
        officia quaerat ipsam hic sunt quaerat!
      </p> */}
                          {/* <a href="service_details.html" className="service_link" tabIndex={-1}>
        read more <i className="far fa-long-arrow-right" aria-hidden="true" />
      </a> */}
                        </div>
                        <a href="https://maps.app.goo.gl/ZQYsdsXqCzPNHpqv9" target="_blank" className="common_btns">
                          get  Location
                        </a>

                      </div>
                    </div>
                  </Fade>
                </SwiperSlide>
                {/* <SwiperSlide>Slide 4</SwiperSlide> */}
              </Swiper>


              {/* <ul className="slick-dots" style={{}} role="tablist">
          <li className="slick-active" role="presentation">
            <button
              type="button"
              role="tab"
              id="slick-slide-control00"
              aria-controls="slick-slide00"
              aria-label="1 of 2"
              tabIndex={0}
              aria-selected="true"
            >
              1
            </button>
          </li>
          <li role="presentation" className="">
            <button
              type="button"
              role="tab"
              id="slick-slide-control01"
              aria-controls="slick-slide01"
              aria-label="2 of 2"
              tabIndex={-1}
            >
              2
            </button>
          </li>
          <li role="presentation" className="">
            <button
              type="button"
              role="tab"
              id="slick-slide-control02"
              aria-controls="slick-slide02"
              aria-label="3 of 2"
              tabIndex={-1}
            >
              3
            </button>
          </li>
          <li role="presentation" className="">
            <button
              type="button"
              role="tab"
              id="slick-slide-control03"
              aria-controls="slick-slide03"
              aria-label="4 of 2"
              tabIndex={-1}
            >
              4
            </button>
          </li>
        </ul> */}
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
};

export default Home;
